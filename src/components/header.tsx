import Link from 'next/link';
import { ProfileDropdown } from './profile-dropdown';
import { Target } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2 mr-auto">
            <Target className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Habitual</h1>
        </Link>
        <ProfileDropdown />
      </div>
    </header>
  );
}