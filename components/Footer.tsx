import { FileScan, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

function Footer() {
  return (
    <footer className="border-t p-4 text-center space-y-2">
      <div className="flex items-center justify-center gap-2">
        <Button variant={'link'}>
          <Link
            href="https://github.com/nayrgst"
            target="_blank"
            className={`flex items-center p-5 rounded-md`}
          >
            <Github className="size-5 mr-2" />
            <span>Github</span>
          </Link>
        </Button>

        <Button variant={'link'}>
          <Link
            href="https://www.credential.net/profile/pedroryansilveiraaraujo285379/wallet"
            className={`flex items-center p-5 rounded-md`}
            target="_blank"
          >
            <FileScan className="size-5 mr-2" />
            <span>Certificados</span>
          </Link>
        </Button>

        <Button variant={'link'}>
          <Link
            href="https://www.linkedin.com/in/nayrgst/"
            className={`flex items-center p-5 rounded-md`}
            target="_blank"
          >
            <Linkedin className="size-5 mr-2" />
            <span>Linkedin</span>
          </Link>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Todos os direitos reservados
      </p>
    </footer>
  );
}
export default Footer;
