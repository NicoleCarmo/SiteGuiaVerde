import Image from "next/image";

export default function detalhes() {
  return (
    <div className="relative flex min-h-screen">
      <div className="flex w-2/12 items-center justify-center"></div>

      <div className="rounded-l-[44px] grid gap-6 bg-gverdao w-11/12 shadow-md mt-[40px] md:gap-3">
        {/* Cabeçalho com título e descrição */}
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-3">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gbege1 px-8 py-5 md:text-xl">Suculentas</h1>
            <h2 className="text-xl italic font-semibold text-gbege1 px-8 md:text-base">Echeveria, Aloe Vera (entre outras espécies)</h2>
            <h3 className="text-lg font-bold text-gbege1 mt-4 px-8 md:text-sm">Descrição</h3>
            <p className="text-base text-gbege1 mt-2 text-justify leading-relaxed px-8 md:text-xs md:mt-1 md:px-5 md:ml-4">
            As suculentas são plantas que armazenam água em seus tecidos, tornando-as ideais para pessoas que têm pouco tempo para cuidar delas. Espécies como Echeveria e Aloe Vera são as mais populares para cultivo doméstico. As suculentas têm uma grande variedade de formas e cores, com folhas carnudas e, muitas vezes, com uma superfície cerosa que as ajuda a reter água. Elas são originárias de regiões áridas, como o deserto, e podem prosperar em ambientes internos com muita luz. Além disso, algumas suculentas, como a Aloe Vera, têm propriedades medicinais, sendo usadas para tratamentos de pele.
            </p>
          </div>
          </div>

      
        {/* Seção de Cuidados */}
        <hr style={{ border: "none", borderTop: "2px solid #CBC4A0", width: "100%" }} />
        <div className="grid grid-cols-4 md:grid-cols-2 gap-6 mt-6 md:grid-rows-2">
          <div className="flex flex-col items-center text-center p-1 px-4 md:order-1">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Rega</h4>
            <p className="text-sm text-gbege1 md:text-xs md:whitespace-normal w-full md:block">
            Regue com moderação, permitindo que o solo seque completamente entre as regas. Não exagere na água para evitar o apodrecimento das raízes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-1 md:order-2">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Luz</h4>
            <p className="text-sm text-gbege1 mt-2 md:text-xs md:whitespace-normal w-full md:block">
            Precisam de luz indireta intensa ou até mesmo de luz solar direta, sendo ótimas para peitoris de janelas ensolaradas.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-1 md:order-3">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Temperatura</h4>
            <p className="text-sm text-gbege1 mt-2 md:text-xs md:whitespace-normal w-full md:block">
            Gosta de temperaturas entre 20°C e 25°C. Não tolera temperaturas muito baixas, abaixo de 10°C.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-1 md:order-4">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Adubação</h4>
            <p className="text-sm text-gbege1 mt-2 md:text-xs md:whitespace-normal w-full md:block">
            Alimente a cada 6-8 semanas com um fertilizante para cactos e suculentas durante a estação de crescimento.
            </p>
          </div>
        </div>

       {/* Seção de Benefícios com Fundo Bege */}
<div className="relative bg-gbege1 rounded-bl-[44px] p-11 mt-6">
  <div className="flex justify-around text-gverdao gap-8">
    {/* Ícone 1 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/ImgGeral/vetor-cuidado.svg" // Caminho da imagem
        alt="Facilidade de Cuidados"
        width={40} // Ajustado o tamanho do ícone
        height={40}
        className="w-10 h-10 mb-2 md:w-6 md:h-6" // Tamanho e espaçamento
      />
      <p className="text-sm font-bold md:text-xs">Facilidade de Cuidados</p>
    </div>

    {/* Ícone 2 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/ImgGeral/vetor-medicinal.svg"
        alt="Estética"
        width={40}
        height={40}
        className="w-10 h-10 mb-2 md:w-6 md:h-6"
      />
      <p className="text-sm font-bold md:text-xs">Propriedades Medicinais</p>
    </div>

    {/* Ícone 3 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/ImgGeral/vetor-estetica.svg"
        alt="Estética"
        width={40}
        height={40}
        className="w-10 h-10 mb-2 md:w-6 md:h-6"
      />
      <p className="text-sm font-bold md:text-xs">Estética</p>
    </div>
    </div>
  </div>
</div>
</div>
  );
}
