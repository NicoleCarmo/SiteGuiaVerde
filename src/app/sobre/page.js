import Image from "next/image";

export default function Sobre() {
  return (
    <div className="grid grid-cols-1 gap-12">
      <div className="relative flex w-full h-96 rounded-r-[48px] bg-gverdao text-center items-center md:h-[400px]">

        <div className="w-1/4 ml-16">
          <Image src="/ImgGeral/SobreCosteladeadao.png"
            alt="Costela-de-Adão"
            width={363}
            height={363}
            className="absolute flex left-0 top-0 md:w-[175px] md:h-[175px] md:top-[225px]" />
        </div>
        <div className="w-3/4 md:w-full">
          <a className=" block text-gbege1 text-4xl font-bold text-left md:text-xl md:-mt-[110px] md:ml-[-120px]">
            O que é o Guia Verde?
          </a> <br></br>
          <a className="block text-gbege1 text-1xl font-weight:300 pr-48 text-justify md:text-xs md:pr-24 md:mr-[-90px] md:ml-[-120px]">
          O Guia Verde nasceu para aproximar as pessoas da natureza, seja dentro de suas casas ou em seus jardins. Nossa plataforma oferece conteúdos que vão desde a escolha da planta ideal até técnicas de cuidados para que elas cresçam fortes e saudáveis. Além disso, acreditamos que cuidar das plantas é também cuidar de nós mesmos, pois traz benefícios que vão além da beleza: reduz o estresse, melhora a qualidade do ar e nos conecta ao meio ambiente. Seja você um iniciante ou um amante experiente de plantas, aqui você sempre encontrará algo novo para aprender e compartilhar.
          </a>
        </div>
      </div>
      <div className="relative flex flex-row-reverse w-full h-96 rounded-l-[64px] bg-gverdao text-center items-center md:h-[400px] ">

        <div className="w-1/4 ml-16">
          <Image src="/ImgGeral/SobreCacto.png"
            alt="Cacto"
            width={206}
            height={206}
            className="absolute flex right-0 -top-10 md:w-[175px] md:top-[40px]" />
        </div>
        <div className="w-3/4">
          <a className="block text-gbege1 text-4xl font-bold text-left ml-[190px] md:text-xl md:-mt-[20px] md:ml-[70px]">
            Nossa Missão
          </a> <br></br>
          <a className="block text-gbege1 text-1xl font-weight:300 text-justify pl-48 md:text-xs md:pr-24 md:mr-[-90px] md:ml-[-120px]">
          Nossa missão é inspirar e educar pessoas para viverem em harmonia com a natureza. Queremos mostrar que qualquer espaço, por menor que seja, pode se tornar um refúgio verde. Acreditamos que, ao compartilhar conhecimento sobre cuidados com plantas, contribuímos para um mundo mais sustentável e saudável. Nosso compromisso é oferecer conteúdos acessíveis e úteis para que cada vez mais pessoas se sintam confiantes em cultivar e cuidar do verde ao seu redor.
          </a>
        </div>
      </div>
      <div className="relative flex w-full h-96 rounded-r-[64px] bg-gverdao text-center items-center md:h-[400px]">

        <div className="w-1/4 ml-16">
          <Image src="/ImgGeral/SobreJiboia.png"
            alt="Jiboia"
            width={220}
            height={220}
            className="absolute flex left-0 top-0 z-10 md:text-xl md:-mt-[65px] md:ml-[5px] md:w-[180px]" />
        </div>
        <div className="w-3/4">
          <a className="block text-gbege1 text-4xl font-bold text-left md:text-xl md:-mt-[110px] md:ml-[20px]">
            Nossa Visão
          </a> <br></br>
          <a className="block text-gbege1 text-1xl font-weight:300 pr-48 text-justify md:text-xs md:pr-50 md:mr-[-150px] md:ml-5">
          Enxergamos um futuro onde o cuidado com a natureza seja parte essencial do cotidiano de cada pessoa. Queremos ser a principal referência para quem busca integrar a natureza em suas vidas, seja através do cultivo de plantas, da criação de espaços verdes ou do aprendizado contínuo sobre o meio ambiente. Trabalhamos para construir uma comunidade conectada pelo amor às plantas, onde todos possam compartilhar experiências, trocar ideias e crescer juntos.
          </a>
        </div>
      </div>

      <div className="relative flex flex-row-reverse w-full h-96 rounded-l-[64px] bg-gverdao text-center items-center md:h-[400px]">

        <div className="w-1/4 ml-16">
          <Image src="/ImgGeral/SobreBabosa.png"
            alt="Seta"
            width={460}
            height={460}
            className="absolute flex right-0 -top-5 md:w-[250px] md:h-[250px] md:top-[170px] md:-right-10" />
        </div>
        <div className="w-3/4">
          <a className="block text-gbege1 text-4xl font-bold text-left ml-[190px] md:text-xl md:-mt-[20px] md:ml-[70px]">
            Nossos Valores
          </a> <br></br>
          <a className="block text-gbege1 text-1xl font-weight:300 text-justify pl-48 md:text-xs md:pr-24 md:mr-[-90px] md:ml-[-120px]">
          Nossa missão é inspirar e educar pessoas para viverem em harmonia com a natureza. Queremos mostrar que qualquer espaço, por menor que seja, pode se tornar um refúgio verde. Acreditamos que, ao compartilhar conhecimento sobre cuidados com plantas, contribuímos para um mundo mais sustentável e saudável. Nosso compromisso é oferecer conteúdos acessíveis e úteis para que cada vez mais pessoas se sintam confiantes em cultivar e cuidar do verde ao seu redor.
          </a>
        </div>
      </div>

    </div>
  );
}
