import Image from "next/image";

export default function detalhes() {
  return (
    <div className="relative flex min-h-screen">
      <div className="flex w-2/12 items-center justify-center"></div>

      <div className="rounded-l-[44px] grid gap-6 bg-gverdao w-11/12 shadow-md mt-[40px] md:gap-3">
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-3">
            <h1 className="text-3xl font-bold text-gbege1 px-8 py-5 md:text-xl">Cacto-de-mesa</h1>
            <h2 className="text-xl italic font-semibold text-gbege1 px-8 md:text-base">Cactaceae</h2>
            <h3 className="text-lg font-bold text-gbege1 mt-4 px-8 md:text-sm">Descrição</h3>
            <p className="text-base text-gbege1 mt-2 text-justify leading-relaxed px-8 md:text-xs md:mt-1 md:px-5 md:ml-4">
              Os cactos são plantas suculentas que pertencem à família Cactaceae,
              originários das regiões áridas da América. O cacto-de-mesa, uma das
              espécies mais populares para cultivo interno, é uma planta de fácil
              cuidado, pois armazena água em seus tecidos, o que permite que resista
              por longos períodos sem necessidade de regas. Suas formas variam
              bastante, podendo ser cilíndricas, esféricas ou até mesmo com ramos
              segmentados. Além de serem resistentes e baixos em cuidados, os cactos
              possuem espinhos que protegem suas reservas de água.
            </p>
        </div>


        {/* Curiosidade */}
        <div className="text-gbege1 px-8">
          <p className="text-base text-justify leading-relaxed md:text-xs">
            Uma curiosidade interessante é que alguns cactos florescem
            belamente, embora, no cultivo interno, a floração não seja muito
            comum.
          </p>
        </div>

       {/* Seção de Cuidados */}
<hr style={{ border: "none", borderTop: "2px solid #CBC4A0", width: "100%" }} />
<div className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-2 md:grid-rows-2">
  <div className="flex flex-col items-center text-center p-1 md:order-1">
    <h4 className="font-bold text-lg text-gbege1 md:text-sm">Rega</h4>
    <p className="text-sm text-gbege1 md:text-xs md:whitespace-normal w-full md:block">
      Regue esporadicamente, permitindo que o solo seque completamente entre as regas.
    </p>
  </div>
  <div className="flex flex-col items-center text-center p-1 md:order-2">
    <h4 className="font-bold text-lg text-gbege1 md:text-sm">Luz</h4>
    <p className="text-sm text-gbege1 mt-2 md:whitespace-normal md:text-xs w-full md:block">
      Prefere luz indireta, mas pode tolerar algumas horas de sol direto.
    </p>
  </div>
  <div className="flex flex-col items-center text-center p-1 md:order-3">
    <h4 className="font-bold text-lg text-gbege1 md:text-sm">Temperatura</h4>
    <p className="text-sm text-gbege1 mt-2 md:whitespace-normal md:text-xs w-full md:block">
      Prefere temperaturas entre 16°C e 25°C. Evite abaixo de 10°C.
    </p>
  </div>
  <div className="flex flex-col items-center text-center p-1 md:order-4">
    <h4 className="font-bold text-lg text-gbege1 md:text-sm">Adubação</h4>
    <p className="text-sm text-gbege1 mt-2 md:whitespace-normal md:text-xs w-full md:block">
      Utilize fertilizantes líquidos diluídos a cada 2-4 semanas na primavera e verão.
    </p>
  </div>
</div>


       {/* Seção de Benefícios com Fundo Bege */}
<div className="relative bg-gbege1 rounded-bl-[44px] p-11 mt-6">
  <div className="flex justify-around text-gverdao gap-8">
    {/* Ícone 1 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/ImgGeral/vetor-estetica.svg" // Caminho da imagem
        alt="Baixa Manutenção"
        width={30} // Ajustado o tamanho do ícone
        height={30}
        className="w-10 h-10 mb-2 md:w-6 md:h-6" // Tamanho e espaçamento
      />
      <p className="text-sm font-bold md:text-xs">Baixa Manutenção</p>
    </div>

    {/* Ícone 2 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/ImgGeral/vetor-manutencao.svg"
        alt="Estética"
        width={40}
        height={40}
        className="w-10 h-10 mb-2 md:w-6 md:h-6"
      />
      <p className="text-sm font-bold md:text-xs">Estética</p>
    </div>

    {/* Ícone 3 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/ImgGeral/vetor-ar.svg"
        alt="Purificação do Ar"
        width={40}
        height={40}
        className="w-10 h-10 mb-2 md:w-6 md:h-6"
      />
      <p className="text-sm font-bold ">Purificação do Ar</p>
    </div>
    </div>
  </div>
</div>
</div>
  );
}
