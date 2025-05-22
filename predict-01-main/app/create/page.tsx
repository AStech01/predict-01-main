'use client';

import { FeedHeader } from '@/components/feed/feed-header';
import { PredictionForm } from '@/components/create/prediction-form';

export default function CreatePredictionPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <FeedHeader />
      
      <main className="container mx-auto px-4 py-6">
        <PredictionForm />
      </main>
    </div>
  );
}