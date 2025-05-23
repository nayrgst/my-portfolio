'use client';

import { Card, CardContent } from '@/components/ui/card';

function About() {
  return (
    <div className="h-screen">
      <section className="text-center space-y-2 my-20">
        <h1 className="text-6xl uppercase text-primary mb-5">Sobre mim</h1>

        <Card className="w-2/3 flex items-center justify-center mx-auto shadow-xl">
          <CardContent className="text-2xl font-thin leading-relaxed">
            <p>
              O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto
              também cresceu sem pai. Na verdade ele nunca conheceu nenhum de seus pais, e nunca
              teve nenhum amigo em nossa aldeia. Mesmo assim eu nunca vi ele chorar, ficar zangado
              ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado, é
              o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se
              cansou de chorar e decidiu fazer alguma coisa a respeito!
            </p>
            <p>
              Eu finjo que não percebo, mas está tudo sendo observado. O esperto se faz de burro
              para ver o quão inteligente o burro finge ser. Nesse jogo sutil, cada movimento é
              estratégico e cada palavra tem um significado oculto. por trás do meu sorriso sereno
              estou prestando atenção a cada detalhe, absorvendo informações e entendendo
              motivações. Aprendi que nem sempre é sábio revelar todas as cartas que tenho na manga,
              pois conhecimento é poder e paciência é uma virtude. Às vezes é mais sábio agir
              discretamente, permitindo que outros revelem suas intenções sem interferência. Afinal,
              a melhor defesa é a percepção aguçada, capaz de desvendar as tramas sutis que permeiam
              as interações humanas. enquanto alguns tentam me enganar com seus truques, observo com
              calma, ciente de que minha aparente ingenuidade é apenas uma estratégia para extrair
              informações e revelar as camadas ocultas da personalidade de outras pessoas. Não se
              trata de malícia.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default About;
