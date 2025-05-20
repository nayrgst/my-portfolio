import DarkMode from '@/components/DarkMode';
import { Button } from '@/components/ui/button';

import { FolderCode, Info, MailOpen, UserCircle } from 'lucide-react';
import Link from 'next/link';

function Header() {
  return (
    <header className="border-b p-5 flex flex-row shadow-md">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href={'/'} className="flex items-center mb-4 md:mb-0">
          <UserCircle className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Meu Portfólio</span>
        </Link>
        <Button variant={'outline'}>
          <Link href="/about" className={`flex items-center p-5 rounded-md`}>
            <Info className="size-5 mr-2" />
            <span>Sobre</span>
          </Link>
        </Button>
        <Button variant={'outline'}>
          <Link href="/projects" className={`flex items-center p-5 rounded-md`}>
            <FolderCode className="size-5 mr-2" />
            <span>Projetos</span>
          </Link>
        </Button>
        <Button variant={'outline'}>
          <Link href="/contact" className={`flex items-center p-5 rounded-md`}>
            <MailOpen className="size-5 mr-2" />
            <span>Contato</span>
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
          <DarkMode />
        </div>
      </nav>
    </header>
  );
}
export default Header;
