import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative flex text-center ">

        <div className="mt-12 md:mt-[-60px] px-16 pt-24">
          <a className="text-gbege1 text-1xl font-weight:600">
            A vida floresce em cada folha.
          </a> <br></br>
          <a className="text-gbege1 text-4xl font-bold md:text-3xl md:max-w-[100px]">
            Descubra o poder transformador das plantas!
          </a>
          <div className="relative flex pt-40 text-gbege1">
            <Image src="/ImgGeral/Seta.png"
              alt="Seta"
              width={20}
              height={20}
              className="md:w-3 md:h-4 md:mt-[-120px] md:ml-[-50px]" />
            <a className=" pl-2 text-xl md:text-sm md:mt-[-120px]">Para iluminar seu verão</a>
          </div>
        </div>
        <div className="relative flex w-2/3 rounded-tl-[64px] bg-gverdao top-[73px] md:hidden">
          <Image src="/ImgGeral/Filodendroindex.png"
            alt="Filodendro"
            width={700}
            height={700}
            className="absolute flex top-4 right-11 md:hidden" />
        </div>


      </div>

{/* Responsividade -bloco central */}

<article className="hidden md:flex w-full rounded-lg shadow transition hover:shadow-lg bg-gbege1 mt-[-100px]">
  {/* Imagem à esquerda */}
  <img
    alt="Girassol"
    src="/ImgGeral/Girassolindex.png"
    className="rounded-xl object-cover object-center w-1/3 h-auto mt-[-50px] ml-4 sm:w-[150px] sm:h-[150px] sm:mt-0"
  />

  {/* Texto à direita */}
  <div className="p-4 sm:p-6 flex-1">
    <a href="#">
      <h3 className="text-gmarrom text-lg font-bold pt-1 px-1">Girassol</h3>
    </a>

    <p className="text-gmarrom text-sm p-1">
      Com suas pétalas vibrantes em tons de amarelo e dourado, o girassol é um símbolo universal de alegria, energia e positividade. Sua característica única de seguir o movimento do sol inspira vitalidade e renova o ambiente com luz e calor.
    </p>
  </div>
</article> <br></br>


<article className="hidden md:flex w-full rounded-lg shadow transition hover:shadow-lg bg-gbege1">
  {/* Imagem à direita */}
  <div className="p-4 sm:p-6 flex-1">
    <a href="#">
      <h3 className="text-gmarrom text-lg font-bold pt-1 px-1">Onze-horas</h3>
    </a>

    <p className="text-gmarrom text-sm p-1">
    A planta Onze-horas encanta com sua simplicidade e beleza. Suas flores vibrantes e delicadas desabrocham sob o sol, criando um espetáculo visual nos jardins e vasos. Ela é conhecida por sua resistência e facilidade de cultivo, tornando-se ideal para iniciantes na jardinagem.
    </p>
  </div>

  {/* Texto à esquerda */}
  <img
    alt="Onze-horas"
    src="/ImgGeral/Onzehorasindex.png"
    className="rounded-xl object-cover object-center w-1/3 h-auto mt-[-50px] ml-4 sm:w-[150px] sm:h-[150px] sm:mt-0"
  />
</article> <br></br>

<article className="hidden md:flex w-full rounded-lg shadow transition hover:shadow-lg bg-gbege1">
  {/* Imagem à esquerda */}
  <img
    alt="Girassol"
    src="/ImgGeral/Hibiscoindex.png"
    className=" object-cover object-center w-1/3 h-auto mt-[-50px] ml-4 sm:w-[150px] sm:h-[150px] sm:mt-5"
  />

  {/* Texto à direita */}
  <div className="p-4 sm:p-6 flex-1">
    <a href="#">
      <h3 className="text-gmarrom text-lg font-bold pt-1 px-1">Hibisco</h3>
    </a>

    <p className="text-gmarrom text-sm p-1">
    O hibisco é a escolha ideal para um verão vibrante, com suas flores grandes e coloridas em tons de vermelho, rosa e laranja. Perfeito para jardins e varandas, ele traz um toque tropical e cheio de vida.
    </p>
  </div>
</article> <br></br>


      {/* Bloco central - visível em computador */}

      <div className="relative flex">
        <div className="flex w-1/12 items-center justify-center">
          <Image src="/ImgGeral/Bolinhas1.png"
            alt="Seta"
            width={20}
            height={20}
            className="md:hidden" />
        </div>
        <div className="rounded-l-[44px] grid grid-cols-8 gap-1.5 bg-gbege2 w-11/12 md:hidden">
          <div className="relative flex justify-center items-center h-52 col-start-1 col-span-2">
            <Image src="/ImgGeral/Girassolindex.png"
              alt="Girassol"
              width={270}
              height={270}
              className="relative flex pb-6" />
          </div>

          <div className="relative flex rounded-none h-56 md:h-[400px] col-start-3 col-span-6 bg-gbege1">
  <div className="grid grid-cols-2 gap-12 py-6 px-12">
    <div className="relative">
      <h1 className="text-2xl font-bold md:text-xl">Girassol</h1>
      <p className="text-base text-justify pt-3 md:text-xs md:p-1 md:max-w-[200px]">
        Com suas pétalas vibrantes em tons de amarelo e dourado, o girassol é um símbolo universal de alegria, energia e positividade. Sua característica única de seguir o movimento do sol inspira vitalidade e renova o ambiente com luz e calor.
      </p>
    </div>
    <div className="relative flex w-full bg-bege1 p-4 md:p-1">
      <p className="text-base text-justify w-full py-7 md:text-xs md:p-1 md:max-w-[200px]">
        Muito além de sua beleza, o girassol carrega significados profundos, como lealdade, esperança e felicidade. Cultivá-lo em casa ou no jardim é uma forma de atrair boas vibrações, celebrar a vida e conectar-se com a natureza de maneira especial.
      </p>
    </div>
  </div>
</div>


          <div className="h-60 col-start-1 col-span-6 bg-gbege1 md:h-[450px]">
          <div className="grid grid-cols-2 gap-12 py-6 px-12">
          <div className="relative">
      
      <h1 className="text-2xl font-bold md:text-xl md:whitespace-nowrap">Onze-horas</h1>
      <p className="text-base text-justify pt-3 md:text-xs md:p-1 md:max-w-[200px]">
        A planta Onze-horas encanta com sua simplicidade e beleza. Suas flores vibrantes e delicadas desabrocham sob o sol, criando um espetáculo visual nos jardins e vasos. Ela é conhecida por sua resistência e facilidade de cultivo, tornando-se ideal para iniciantes na jardinagem.
      </p>
    </div>
    <div className="relative flex w-full bg-bege1 p-4 md:p-1">
   
      <p className="text-base text-justify w-full py-7 md:text-xs md:p-1 md:max-w-[200px]">
        Suas flores não apenas embelezam o ambiente, mas também promovem uma sensação de tranquilidade e bem-estar. Ao cultivá-la, é possível criar um espaço harmonioso que atrai polinizadores como abelhas e borboletas, contribuindo para um ecossistema mais equilibrado.
      </p>
    </div>
  </div>
</div>
          <div className="relative flex justify-center items-center h-52 col-start-7 col-span-2">
            <Image src="/ImgGeral/Onzehorasindex.png"
              alt="Onzehoras"
              width={300}
              height={300}
              className="relative flex pb-6" />
          </div>
          <div className="h-52 col-start-1 col-span-2">
            <Image src="/ImgGeral/Hibiscoindex.png"
              alt="Hibisco"
              width={350}
              height={350}
              className="relative flex" />
          </div>

          <div className="relative flex rounded-none h-56 col-start-3 col-span-6 bg-gbege1">
            <div className="grid grid-cols-2 gap-12 py-6 px-12">
              <div className="relative">
                <h1 className="text-2xl font-bold">Hibisco</h1>
                <p className="text-base text-justify pt-3">
                O hibisco é a escolha ideal para um verão vibrante, com suas flores grandes e coloridas em tons de vermelho, rosa e laranja. Perfeito para jardins e varandas, ele traz um toque tropical e cheio de vida.
                </p>
              </div>
              <div className="relative flex w-full bg-bege1 p-4">
                <p className="text-base text-justify w-full py-7">
                Fácil de cultivar, o hibisco adora sol e floresce nos dias mais quentes. Seja em vasos ou no solo, ele transforma qualquer espaço em um ambiente alegre e encantador.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>


      <div className="relative flex pl-20 pt-40 pb-5 text-gbege1 ">
        <Image src="/ImgGeral/Seta.png"
          alt="Seta"
          width={20}
          height={20}
          className="md:w-3 md:h-4 md:mt-[-150px] md:ml-[-50px]" />
        <a className=" pl-2 text-xl md:text-sm md:mt-[-150px]">Fáceis de cuidar</a>
      </div>

      
{/* Responsividade - bloco central 2*/}

<article className="hidden md:flex w-full rounded-lg shadow transition hover:shadow-lg bg-gbege1 mt-[-100px]">

  {/* Texto à direita */}
  <div className="p-4 sm:p-6 flex-1">
    <a href="#">
      <h3 className="text-gmarrom text-lg font-bold pt-1 px-1">Espada-de-São-Jorge</h3>
    </a>

    <p className="text-gmarrom text-sm p-1">
    Planta extremamente resistente, tolera baixa luz e pouca água, sendo ideal para quem quer praticidade. Ela também purifica o ar, ajudando a manter o ambiente saudável.
    </p>
  </div>
    {/* Imagem à esquerda */}
    <img
    alt="Girassol"
    src="/ImgGeral/Espadadesaojorgeindex.png"
    className="rounded-xl object-cover object-center w-1/3 h-auto mt-[-50px] ml-4 sm:w-[150px] sm:h-[150px] sm:mt-0"
  />
</article> <br></br>


<article className="hidden md:flex w-full rounded-lg shadow transition hover:shadow-lg bg-gbege1">
  
  {/* Texto à esquerda */}
  <img
    alt="Onze-horas"
    src="/ImgGeral/Zamioculcaindex.png"
    className="rounded-xl object-cover object-center w-1/3 h-auto mt-[-50px] ml-4 sm:w-[150px] sm:h-[150px] sm:mt-4"
  />
{/* Imagem à direita */}
  <div className="p-4 sm:p-6 flex-1">
    <a href="#">
      <h3 className="text-gmarrom text-lg font-bold pt-1 px-1">Zamioculca</h3>
    </a>

    <p className="text-gmarrom text-sm p-1">
    A zamioculca é uma planta resistente e de fácil manutenção, perfeita para quem busca praticidade. Com folhas verdes e brilhantes, ela se adapta bem a ambientes internos e precisa de pouca luz e água.
    </p>
  </div>

</article> <br></br>

<article className="hidden md:flex w-full rounded-lg shadow transition hover:shadow-lg bg-gbege1">
  
  {/* Texto à direita */}
  <div className="p-4 sm:p-6 flex-1">
    <a href="#">
      <h3 className="text-gmarrom text-lg font-bold pt-1 px-1">Cacto Macarrão</h3>
    </a>

    <p className="text-gmarrom text-sm p-1">
    Com seu visual único e exótico, o Cacto Macarrão é perfeito para quem busca uma planta diferenciada e fácil de cuidar. Ele se adapta bem a ambientes internos e externos, trazendo um toque moderno e despojado ao espaço.
    </p>
  </div>

  {/* Imagem à esquerda */}
  <img
    alt="Girassol"
    src="/ImgGeral/Cactomacarraoindex.png"
    className=" object-cover object-center w-1/3 h-auto mt-[-50px] ml-4 sm:w-[150px] sm:h-[150px] sm:mt-1"
  />

</article> <br></br>




      {/* Bloco central 2 - visível em computador */}

      <div className="relative flex flex-row-reverse">
        <div className="flex w-1/12 items-center justify-center">
          <Image src="/ImgGeral/Bolinhas2.png"
            alt="Seta"
            width={20}
            height={20}
            className="md:hidden" />
        </div>
        <div className="rounded-r-[44px] grid grid-cols-8 gap-1.5 bg-gbege2 w-11/12 md:hidden">
          <div className="relative flex justify-center items-center h-52 col-start-1 col-span-2">
            <Image src="/ImgGeral/Espadadesaojorgeindex.png"
              alt="EspadadeSaoJorge"
              width={350}
              height={350}
              className="relative flex" />
          </div>
          <div className="relative flex rounded-tr-[44px] h-52 col-start-3 col-span-6 bg-gbege1">

            <div className="grid grid-cols-2 gap-12 py-6 px-12">
              <div className="relative">
                <h1 className="text-2xl font-bold">Espada-de-São-Jorge</h1>
                <p className="text-base text-justify pt-3">
                  Planta extremamente resistente, tolera baixa luz e pouca água, sendo ideal para quem quer praticidade. Ela também purifica o ar, ajudando a manter o ambiente saudável.
                </p>
              </div>
              <div className="relative flex w-full bg-bege1 p-4">
                <p className="text-base text-justify w-full py-7">
                  Além de sua beleza e resistência, a Espada de São Jorge é considerada uma planta de proteção espiritual. Dizem que ela afasta energias negativas e atrai boas vibrações, tornando-se um símbolo de força e equilíbrio para o lar.
                </p>
              </div>
            </div>

          </div>
          <div className="h-52 col-start-1 col-span-6 bg-gbege1">
          <div className="grid grid-cols-2 gap-12 py-6 px-12">
              <div className="relative">
                <h1 className="text-2xl font-bold">Zamioculca</h1>
                <p className="text-base text-justify pt-3">
                A zamioculca é uma planta resistente e de fácil manutenção, perfeita para quem busca praticidade. Com folhas verdes e brilhantes, ela se adapta bem a ambientes internos e precisa de pouca luz e água.</p>
              </div>
          <div className="relative flex w-full bg-bege1 p-4">
            <p className="text-base text-justify w-full py-7">
            Ideal para quem não tem muito tempo para cuidados, a zamioculca cresce de forma saudável com mínima atenção. Uma ótima opção para trazer verde para o seu espaço sem complicação.
            </p>
          </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center h-52 col-start-7 col-span-2">
            <Image src="/ImgGeral/Zamioculcaindex.png"
              alt="Zamioculca"
              width={250}
              height={250}
              className="relative flex bottom-4 pt-[-11] z-10" />
          </div>
          <div className="h-52 col-start-1 col-span-2">
            <Image src="/ImgGeral/Cactomacarraoindex.png"
              alt="Cacto"
              width={240}
              height={240}
              className="relative flex bottom-6" />
          </div>

          <div className="relative flex rounded-br-[44px] h-52 col-start-3 col-span-6 bg-gbege1">
            <div className="grid grid-cols-2 gap-12 py-6 px-12">
              <div className="relative">
                <h1 className="text-2xl font-bold">Cacto Macarrão</h1>
                <p className="text-base text-justify pt-3">
                Com seu visual único e exótico, o Cacto Macarrão é perfeito para quem busca uma planta diferenciada e fácil de cuidar. Ele se adapta bem a ambientes internos e externos, trazendo um toque moderno e despojado ao espaço.                </p>
              </div>
          <div className="relative flex w-full bg-bege1 p-4">
            <p className="text-base text-justify w-full py-7">
            Além disso, suas formas sinuosas remetem à fluidez e à flexibilidade, sendo considerado um símbolo de adaptação e harmonia com o ambiente.
            </p>
          </div>
            </div>
          </div>
          
        </div>

      </div>

    </>
  );
}

