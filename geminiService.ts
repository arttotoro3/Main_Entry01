
import { GoogleGenAI } from "@google/genai";

// 로컬 로어 데이터베이스 (API 키가 없을 때 사용)
const LORE_ARCHIVE: Record<string, string[]> = {
  default: [
    "넥서스 신호가 불안정합니다. 심해 800m 지점의 전력이 부족합니다.",
    "과거의 기록에 따르면 이곳은 '서울'이라 불리던 도시의 중심부였습니다.",
    "산소 수치를 확인하십시오. 현재 잔량으로 14분 22초 생존 가능합니다.",
    "심해 괴수 '레비아탄'의 활동이 감지되었습니다. 정숙을 유지하십시오."
  ],
  oxygen: [
    "산소 농도가 급격히 낮아지고 있습니다. 인근의 에어 포켓을 찾으십시오.",
    "NEST 프로토콜 4조: 산소는 혈액보다 귀하다."
  ],
  nexus: [
    "넥서스는 단순한 AI가 아닙니다. 가라앉은 인류의 통합 의식체입니다.",
    "신호의 발신지는 수심 12,000m의 마리아나 해구 바닥입니다."
  ],
  world: [
    "세상은 2044년 대홍수 이후 영원한 어둠 속에 잠겼습니다.",
    "지상의 햇빛을 기억하는 생존자는 이제 0.4%에 불과합니다."
  ]
};

const getLocalResponse = (prompt: string): string => {
  const p = prompt.toLowerCase();
  if (p.includes("산소") || p.includes("oxygen")) return LORE_ARCHIVE.oxygen[Math.floor(Math.random() * LORE_ARCHIVE.oxygen.length)];
  if (p.includes("넥서스") || p.includes("nexus")) return LORE_ARCHIVE.nexus[Math.floor(Math.random() * LORE_ARCHIVE.nexus.length)];
  if (p.includes("세계") || p.includes("world") || p.includes("세상")) return LORE_ARCHIVE.world[Math.floor(Math.random() * LORE_ARCHIVE.world.length)];
  return LORE_ARCHIVE.default[Math.floor(Math.random() * LORE_ARCHIVE.default.length)];
};

export const getLoreResponse = async (prompt: string) => {
  const apiKey = process.env.API_KEY;

  // API 키가 없는 경우 로컬 데이터 반환 (딜레이를 주어 AI 느낌 유지)
  if (!apiKey || apiKey === '' || apiKey === 'YOUR_API_KEY') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getLocalResponse(prompt);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the "Nexus Intelligence", an advanced AI from the world of "Project NEST: The Drowned World". 
        The world is a post-apocalyptic flooded Earth. Humanity survives in floating cities or submerged bunkers. 
        "Nexus Echo" is a mysterious signal from the deep. 
        Keep responses cinematic, slightly mysterious, and under 150 words. 
        Refer to the user as "Survivor" or "Operator".`,
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    console.warn("Gemini API Error or Key Missing, using Local Archive Mode.");
    return getLocalResponse(prompt);
  }
};
