'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Header from '@/components/Header';
import { FolderCode, Info, MailOpen } from 'lucide-react';

interface TechProps {
  name: string;
  icon: string;
}

export default function Home() {
  const [techs, setTechs] = useState<TechProps[]>([]);

  const navItems = [
    {
      label: 'Sobre',
      href: '/about',
      icon: <Info className="size-5 mr-2" />,
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

  useEffect(() => {
    fetch('/api/techs')
      .then((res) => res.json())
      .then((data) => setTechs(data))
      .catch((erro) => console.error('Erro ao carregar as techs', erro));
  }, []);

  return (
    <>
      <Header navItems={navItems} />

      <main>
        <div className="w-full h-screen">
          <section className="text-center space-y-2 my-20">
            <h1 className="text-6xl uppercase text-primary">Pedro Ryan</h1>
            <h2 className="text-xl text-muted-foreground font-light">
              Desenvolvedor Web Full-Stack
            </h2>
          </section>

          <section className="w-full flex flex-col items-center justify-center gap-8">
            <h2 className="text-3xl md:text-5xl font-bold">Tecnologias</h2>

            <Carousel
              opts={{
                align: 'center',
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full max-w-[90%] md:max-w-[60%] border-2 rounded-xl py-25"
            >
              <CarouselContent>
                {techs.map((tech, index) => (
                  <CarouselItem key={index} className="basis-[70%] md:basis-[30%] shrink-0">
                    <div className="group dark:bg-neutral-300  dark:text-black relative w-full h-40 rounded-xl border p-4 flex flex-col items-center justify-center overflow-hidden hover:shadow-lg transition dark:hover:text-white hover:text-white">
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10 rounded-xl" />

                      <div className="rounded-lg p-4 z-20">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={70}
                          height={70}
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="mt-2 text-center text-sm md:text-base z-20">{tech.name}</div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        </div>
      </main>
    </>
  );
}
