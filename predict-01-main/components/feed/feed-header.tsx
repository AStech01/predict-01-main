'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/theme-toggle';
import { LightbulbIcon, Search, PenLine, SquarePlus } from 'lucide-react';
import Image from 'next/image';

export function FeedHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b ">
      <div className=" flex items-center mx-auto justify-center h-16 px-4 lg:container ">
        <div className="flex items-center gap-8">
          <Link href="/feed" className="flex items-center gap-2">
            {/* <LightbulbIcon className="h-5 w-5 text-primary" /> */}
            <Image src="/Group.png" alt="Alien" width={20} height={20} />
            {/* <span className="font-bold text-lg hidden sm:inline-block">WISE</span> */}
          </Link>

          {/* <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/feed"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/challenges"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Challenges
            </Link>
          </nav> */}
        </div>

        <div className="flex items-center justify-between  lg:w-[52%] w-full    ">
          <div className='ml-2'>
  <form onSubmit={handleSearch} className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search predictions..."
              className="w-[100px] md:w-[200px] pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          </div>
        
       
        <div className='gap-2 flex'>
          <Button
            variant="default"
            size="sm"
            className="gap-3 bg-[#f5f5f5] hover:bg-white"
            onClick={() => router.push('/create')}
          >
            <SquarePlus className="h-4 w-4 text-black" />
            <span className=" text-black ">Post prediction</span>
          </Button>

          <Button
            variant="default"
            size="sm"
            className="gap-2 hidden sm:block"
            onClick={() => router.push('/login')}
          >
            
            <span className="hidden sm:inline-block">Login</span>
          </Button>


          <ModeToggle />
        </div>
        </div>

      
    </div>
    </header >
  );
}