import { ProfileSetupForm } from '@/components/auth/profile-setup-form';

export default function ProfileSetupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background p-4">
      <div className="w-full max-w-md">
        <ProfileSetupForm />
      </div>
    </main>
  );
}