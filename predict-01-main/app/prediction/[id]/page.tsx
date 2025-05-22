

import { useParams, useRouter } from 'next/navigation';
import { FeedHeader } from '@/components/feed/feed-header';
import { PredictionCard } from '@/components/feed/prediction-card';
import { CommentSection } from '@/components/feed/comment-section';
import { Button } from '@/components/ui/button';
import { getPredictionById, getUserById } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

export default function PredictionDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const prediction = getPredictionById(params.id);
  
  // Mock the current user for demo purposes
  const currentUser = getUserById('3') || {
    id: '3',
    name: 'Demo User',
    email: 'demo@example.com',
    createdAt: new Date(),
  };

  // Mock comments for demo purposes
  const comments = [
    {
      id: '1',
      content: 'I think you might be right. The current trends are pointing in this direction.',
      createdAt: new Date('2024-04-01'),
      author: getUserById('4')!,
    },
    {
      id: '2',
      content: 'This is a bold prediction. I respect it, but I disagree. Here\'s why...',
      createdAt: new Date('2024-04-02'),
      author: getUserById('5')!,
    },
  ];

  if (!prediction) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-background">
        <FeedHeader />
        <main className="container mx-auto px-4 py-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Prediction not found</h1>
            <Button onClick={() => router.push('/feed')}>Back to Feed</Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background ">
      <FeedHeader />
      
      <main className="container mx-auto px-4 py-6 ">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            className="mb-4 pl-0 flex items-center gap-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          
          <PredictionCard prediction={prediction} detailed />
          
          <div className="mt-8 bg-white dark:bg-card rounded-lg shadow-sm p-4">
            <CommentSection comments={comments} currentUser={currentUser} />
          </div>
        </div>
      </main>
    </div>
  );
}


