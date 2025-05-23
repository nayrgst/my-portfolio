import { ReactNode } from 'react';
import Link from 'next/link';
import { UserCircle } from 'lucide-react';

import DarkMode from '@/components/DarkMode';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
  icon: ReactNode;
}

interface HeaderProps {
  navItems: NavItem[];
}

export default function Header({ navItems }: HeaderProps) {
  return (
    <header className="border-b p-5 flex flex-row shadow-md">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <UserCircle className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Meu Portfólio</span>
        </Link>

        {navItems.map((item) => (
          <Button variant={'outline'} key={item.href}>
            <Link href={item.href} className="flex items-center p-5 rounded-md">
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </Button>
        ))}

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
          <DarkMode />
        </div>
      </nav>
    </header>
  );
}
