'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';

interface TechProps {
  name: string;
  icon: string;
}

type PropType = {
  options?: EmblaOptionsType;
};

export default function Techs({ options }: PropType) {
  const [emblaRef] = useEmblaCarousel(
    {
      ...options,
      align: 'center',
      containScroll: false,
      loop: true,
    },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  const [techs, setTechs] = useState<TechProps[]>([]);

  useEffect(() => {
    fetch('/api/techs')
      .then((res) => res.json())
      .then((data) => setTechs(data))
      .catch((erro) => console.error('Erro ao carregar as techs', erro));
  }, []);

  return (
    <main className="font-[sora]">
      <div className="w-full h-screen">
        <section className="text-center space-y-2 my-20">
          <h1 className="text-6xl uppercase text-primary">Pedro Ryan</h1>
          <h2 className="text-xl text-muted-foreground font-light">Desevolvedor Web Full-Stack</h2>
        </section>

        <section className="w-full flex flex-col items-center justify-center gap-8">
          <h2 className="text-3xl md:text-5xl font-bold">Tecnologias</h2>

          <div ref={emblaRef} className="overflow-hidden w-1/3 px-4 border p-30 rounded-4xl">
            <div className="flex">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-3xl border-2 p-4 flex items-center justify-center relative overflow-hidden hover:shadow-lg transition mx-3" // Adicionado mx-3 em vez de gap
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={100}
                    height={100}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 text-center text-sm md:text-base">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
