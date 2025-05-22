export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  createdAt: Date;
}

export interface Prediction {
  id: string;
  title: string;
  description: string;
  category: Category;
  deadline: Date;
  createdAt: Date;
  authorId: string;
  author: User;
  likes: number;
  comments: number;
  resolved?: boolean;
  outcome?: string;
}

export type Category = 'Sports' | 'Healthcare' | 'Crypto' | 'Trends' | 'Other';

export interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  authorId: string;
  author: User;
  predictionId: string;
}