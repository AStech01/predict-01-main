'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Prediction } from '@/lib/types';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PredictionCardProps {
  prediction: Prediction;
  detailed?: boolean;
}

export function PredictionCard({ prediction, detailed = false }: PredictionCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(prediction.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getBadgeColor = (category: string) => {
    switch (category) {
      case 'Sports':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100/80 dark:bg-blue-900/20 dark:text-blue-300';
      case 'Healthcare':
        return 'bg-green-100 text-green-800 hover:bg-green-100/80 dark:bg-green-900/20 dark:text-green-300';
      case 'Crypto':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-100/80 dark:bg-orange-900/20 dark:text-orange-300';
      case 'Trends':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-100/80 dark:bg-purple-900/20 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const CardContent = (
    <>
      <div className="flex items-start gap-3">
        <Avatar>
          <AvatarImage src={prediction.author.image} alt={prediction.author.name} />
          <AvatarFallback>{getInitials(prediction.author.name)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm">{prediction.author.name}</p>
            <Badge variant="outline" className={cn('text-xs', getBadgeColor(prediction.category))}>
              {prediction.category}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(prediction.createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold ">{prediction.title}</h3>
        <p className="mt-1 text-muted-foreground text-sm">
          {detailed ? prediction.description : prediction.description.slice(0, 100) + '...'}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            onClick={handleLike}
          >
            <Heart
              className={cn('h-4 w-4', {
                'fill-red-500 text-red-500': liked,
              })}
            />
            <span className="text-xs">{likeCount}</span>
          </button>
          <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs">{prediction.comments}</span>
          </button>
        </div>
        <button className="text-muted-foreground hover:text-primary transition-colors">
          <Share2 className="h-4 w-4" />
        </button>
      </div>
    </>
  );

  if (detailed) {
    return <div className="p-4 bg-white dark:bg-card rounded-lg shadow-sm">{CardContent}</div>;
  }

  return (
    <Link href={`/prediction/${prediction.id}`} className="block">
      <div className="p-4 bg-white dark:bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
        {CardContent}
      </div>
    </Link>
  );
}