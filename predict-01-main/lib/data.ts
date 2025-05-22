import { Category, Prediction, User } from './types';

// Mock users
export const users: User[] = [
  {
    id: '1',
    name: 'Nicole Po',
    email: 'nicole@example.com',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    createdAt: new Date('2023-01-15'),
  },
  {
    id: '2',
    name: 'James Lawson',
    email: 'james@example.com',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    createdAt: new Date('2023-02-20'),
  },
  {
    id: '3',
    name: 'Admin Secret',
    email: 'admin@example.com',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '4',
    name: 'Claire Francis',
    email: 'claire@example.com',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    createdAt: new Date('2023-03-10'),
  },
  {
    id: '5',
    name: 'Kristopher Hamilton',
    email: 'kris@example.com',
    image: 'https://randomuser.me/api/portraits/men/53.jpg',
    createdAt: new Date('2023-04-05'),
  },
  {
    id: '6',
    name: 'Georgia Hutchinson',
    email: 'georgia@example.com',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    createdAt: new Date('2023-05-12'),
  },
  {
    id: '7',
    name: 'George Washington',
    email: 'george@example.com',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    createdAt: new Date('2023-06-18'),
  },
];

// Mock predictions
export const predictions: Prediction[] = [
  {
    id: '1',
    title: 'Bitcoin Will Reach $100k By End Of Year',
    description: 'With The Current Surge And Momentum, The Price Of Bitcoin Will Reach $100k. This Bull Run Is Just Starting And More Institutional Investors Are Coming.',
    category: 'Crypto',
    deadline: new Date('2024-12-31'),
    createdAt: new Date('2024-01-15'),
    authorId: '1',
    author: users[0],
    likes: 24,
    comments: 8,
    resolved: false,
  },
  {
    id: '2',
    title: 'Tech Stocks Are Expected To Rally As Earnings Reports Come In Strong',
    description: 'Major Tech Companies Will Report Strong Earnings This Quarter, Especially With The Upcoming Tech Innovations.',
    category: 'Trends',
    deadline: new Date('2024-08-31'),
    createdAt: new Date('2024-01-20'),
    authorId: '2',
    author: users[1],
    likes: 36,
    comments: 5,
    resolved: false,
  },
  {
    id: '3',
    title: 'Housing Prices Are Likely To Stabilize After A Surge In 2023',
    description: 'After A Significant Rise, The Housing Market Will Stabilize Due To Rising Interest Rates And Economic Factors.',
    category: 'Trends',
    deadline: new Date('2024-09-30'),
    createdAt: new Date('2024-01-25'),
    authorId: '3',
    author: users[2],
    likes: 18,
    comments: 4,
    resolved: false,
  },
  {
    id: '4',
    title: 'New Healthcare Policies Could Reshape Patient Experience',
    description: 'Upcoming Healthcare Policy Changes Will Enhance The Patient Experience Across The United States Medical System.',
    category: 'Healthcare',
    deadline: new Date('2024-10-31'),
    createdAt: new Date('2024-01-28'),
    authorId: '4',
    author: users[3],
    likes: 29,
    comments: 6,
    resolved: false,
  },
];

export const categories: Category[] = ['Sports', 'Healthcare', 'Crypto', 'Trends', 'Other'];

// Function to get predictions filtered by category
export function getPredictionsByCategory(category: Category | 'All'): Prediction[] {
  if (category === 'All') {
    return predictions;
  }
  return predictions.filter(prediction => prediction.category === category);
}

// Function to get a prediction by ID
export function getPredictionById(id: string): Prediction | undefined {
  return predictions.find(prediction => prediction.id === id);
}

// Function to get a user by ID
export function getUserById(id: string): User | undefined {
  return users.find(user => user.id === id);
}

