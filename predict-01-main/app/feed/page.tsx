'use client';

import { useState } from 'react';
import { FeedHeader } from '@/components/feed/feed-header';
import { PredictionCard } from '@/components/feed/prediction-card';
import { CategoryFilter } from '@/components/feed/category-filter';
import { getPredictionsByCategory } from '@/lib/data';
import TopBanner from '@/components/feed/TopBanner';
import Navigation from '@/components/feed/navigation';

export default function FeedPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const predictions = getPredictionsByCategory(selectedCategory as any);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <FeedHeader />
      
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <div className='mb-10'>
   <TopBanner/>
          </div>
        <Navigation/>
         
          
          <div className="mb-4">
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
            />
          </div>
          
          <div className="gap-3  grid sm:grid-cols-2 grid-cols-1">
            {predictions.map((prediction) => (
              <PredictionCard key={prediction.id} prediction={prediction} />
            ))}
            
            {predictions.length === 0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No predictions found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}