import Image from "next/image";

export default function detalhes() {
  return (
    <div className="relative flex min-h-screen">
      <div className="flex w-2/12 items-center justify-center"></div>

      <div className="rounded-l-[44px] grid gap-6 bg-gverdao w-11/12 shadow-md mt-[40px] md:gap-3">
        {/* Cabeçalho com título e descrição */}
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-3">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gbege1 px-8 py-5 md:text-xl">Maranta leuconeura</h1>
            <h2 className="text-xl italic font-semibold text-gbege1 px-8 md:text-base">Maranta leuconeura</h2>
            <h3 className="text-lg font-bold text-gbege1 mt-4 px-8 md:text-sm">Descrição</h3>
            <p className="text-base text-gbege1 mt-2 text-justify leading-relaxed px-8 md:text-xs md:mt-1 md:px-5 md:ml-4">
            A Maranta-tricolor, também conhecida como Planta Rasteira de Reza, é famosa por suas folhas ornamentais que apresentam tons de verde, vermelho e branco. Durante a noite, suas folhas se erguem, como se estivessem rezando. Originária da América Central e do Sul, é uma planta que chama a atenção pela beleza e pela fácil manutenção. É ideal para quem busca um toque tropical no ambiente.
            </p>
          </div>
          </div>

        {/* Seção de Cuidados */}
        <hr style={{ border: "none", borderTop: "2px solid #CBC4A0", width: "100%" }} />
        <div className="grid grid-cols-4 md:grid-cols-2 gap-6 mt-6 md:grid-rows-2">
          <div className="flex flex-col items-center text-center p-1 px-4 md:order-1">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Rega</h4>
            <p className="text-sm text-gbege1 md:text-xs md:whitespace-normal w-full md:block">
            Mantenha o solo úmido, mas evite encharcar. Regue 1-2 vezes por semana.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-1 md:order-2">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Luz</h4>
            <p className="text-sm text-gbege1 mt-2 md:text-xs md:whitespace-normal w-full md:block">
            Luz indireta brilhante; evite sol direto.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-1 md:order-3">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Temperatura</h4>
            <p className="text-sm text-gbege1 mt-2 md:text-xs md:whitespace-normal w-full md:block">
            Entre 18°C e 27°C.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-1 md:order-4">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Adubação</h4>
            <p className="text-sm text-gbege1 mt-2 md:text-xs md:whitespace-normal w-full md:block">
            Adube a cada duas semanas na primavera e verão.
            </p>
          </div>
        </div>

       {/* Seção de Benefícios com Fundo Bege */}
<div className="relative bg-gbege1 rounded-bl-[44px] p-11 mt-6">
  <div className="flex justify-around text-gverdao gap-8">
    {/* Ícone 1 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/ImgGeral/vetor-umidificacao.svg" // Caminho da imagem
        alt="Facilidade de Cuidados"
        width={40} // Ajustado o tamanho do ícone
        height={40}
        className="w-10 h-10 mb-2 md:w-6 md:h-6" // Tamanho e espaçamento
      />
      <p className="text-sm font-bold md:text-xs">Mantém a umidade do ambiente</p>
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
