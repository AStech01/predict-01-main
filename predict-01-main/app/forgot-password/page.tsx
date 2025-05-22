import { ForgotPasswordForm } from '@/components/auth/forgot-password-form';

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background p-4">
      <div className="w-full max-w-md">
        <ForgotPasswordForm />
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>Bolt rights reserved</p>
          <p className="mt-1">
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}