
export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Character {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
