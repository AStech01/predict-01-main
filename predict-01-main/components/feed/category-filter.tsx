'use client';

import { useState } from 'react';
import { categories } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

export function CategoryFilter({ onSelectCategory, selectedCategory }: CategoryFilterProps) {
  const allCategories = ['All', ...categories];

  const getBadgeColor = (category: string, isSelected: boolean) => {
    if (!isSelected) return '';

    switch (category) {
      case 'Sports':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100/80 dark:bg-blue-900/20 dark:text-blue-300';
      case 'Healthcare':
        return 'bg-green-100 text-green-800 hover:bg-green-100/80 dark:bg-green-900/20 dark:text-green-300';
      case 'Crypto':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-100/80 dark:bg-orange-900/20 dark:text-orange-300';
      case 'Trends':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-100/80 dark:bg-purple-900/20 dark:text-purple-300';
      case 'Other':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-300';
      case 'All':
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
      default:
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
    }
  };

  return (
    <div className="flex  gap-2 p-2 overflow-x-auto sm:overflow-visible">
      {allCategories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          className={cn(
            'cursor-pointer transition-all px-3 py-1 bg-[#e8e8e8] rounded-lg border-none ',
            getBadgeColor(category, selectedCategory === category)
          )}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
}