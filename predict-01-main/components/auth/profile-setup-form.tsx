'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LightbulbIcon, Camera } from 'lucide-react';
import Image from 'next/image';

export function ProfileSetupForm() {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate profile setup
    console.log('Setting up profile:', { name, imageUrl });
    router.push('/feed');
  };

  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-card rounded-lg shadow-sm">
      <div className="flex justify-center mb-6">
       <Image src="/Group.png" alt="Alien" width={40} height={40} />
      </div>
      <h1 className="text-2xl font-bold text-center mb-2">Let&apos;s set up your profile</h1>
      <p className="text-center text-muted-foreground text-sm mb-6">
        Add your name and photo (optional). You can always change these later.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <Avatar className="h-24 w-24 border-2 border-primary/20">
              <AvatarImage src={imageUrl} alt={name} />
              <AvatarFallback className="text-lg">{getInitials(name)}</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-1.5 shadow-md">
              <Camera className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={!name.trim()}>
          Continue
        </Button>
      </form>
    </div>
  );
}