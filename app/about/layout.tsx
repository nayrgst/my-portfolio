import Header from '@/components/Header';
import { FolderCode, Home, MailOpen } from 'lucide-react';

interface AboutLayoutProps {
  children: React.ReactNode;
}

function LayoutAbout({ children }: AboutLayoutProps) {
  const navItems = [
    {
      label: 'Inicio',
      href: '/',
      icon: <Home className="size-5 mr-2" />,
    },
    {
      label: 'Projetos',
      href: '/projects',
      icon: <FolderCode className="size-5 mr-2" />,
    },
    {
      label: 'Contato',
      href: '/contact',
      icon: <MailOpen className="size-5 mr-2" />,
    },
  ];

  return (
    <div>
      <Header navItems={navItems} />
      {children}
    </div>
  );
}
export default LayoutAbout;
