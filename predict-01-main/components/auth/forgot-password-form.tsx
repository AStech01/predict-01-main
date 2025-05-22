'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LightbulbIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate password reset email
    console.log('Reset password for:', email);
    setIsSubmitted(true);
    
    // In a real app, you would send a password reset email
    // For demo purposes, redirect to login after 3 seconds
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-card rounded-lg shadow-sm">
      <div className="flex justify-center mb-6">
      <Image src="/Group.png" alt="Alien" width={40} height={40} />
      </div>
      <h1 className="text-2xl font-bold text-center mb-2">Recover your password</h1>
      <p className="text-center text-muted-foreground text-sm mb-6">
        Enter your email and we&apos;ll send you a link to reset your password so you can log in with a new one
      </p>

      {isSubmitted ? (
        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p className="text-green-600 dark:text-green-400">
            Reset link sent! Please check your email and follow the instructions.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Redirecting you to the login page...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      )}
    </div>
  );
}