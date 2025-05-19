'use client';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <div className="">
      <h1 className="text-foreground">Hello</h1>
      <Button onClick={() => setTheme('dark')}>dark</Button>
      <Button onClick={() => setTheme('light')}>light</Button>
    </div>
  );
}
