import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Texto principal */}
      <div className="relative z-10 px-10 md:px-10 md:mt-[-90px] flex flex-col justify-center h-full">
        <h1 className="text-3xl md:text-5xl font-bold text-gmarrom">
          Estamos cuidando das nossas plantas!
        </h1>
        <p className="text-base md:text-lg text-gbege1 mt-4 max-w-md">
          No momento, nosso site está passando por algumas melhorias. As plantas
          estão sendo regadas e o conteúdo está em crescimento.
        </p>
        <p className="text-lg md:text-xl font-medium text-gbege1 mt-10">
          Agradecemos pela paciência e pelo amor às plantas!
        </p>
      </div>

      {/* Imagem da árvore */}
      <div className="absolute bottom-0 right-[-300px] w-[1000px] h-[1000px] md:hidden">
        <Image
          src="/ImgGeral/ilustracao.png" // Substitua pelo caminho correto da imagem
          alt="Árvore de fundo"
          layout="fill"
          objectFit="contain" // Mantém a proporção da imagem
        />
      </div>
    </div>
  );
}
