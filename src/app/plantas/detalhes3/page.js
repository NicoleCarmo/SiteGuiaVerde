import Image from "next/image";

export default function detalhes() {
  return (
    <div className="relative flex min-h-screen">
      <div className="flex w-2/12 items-center justify-center"></div>

      <div className="rounded-l-[44px] grid gap-6 bg-gverdao w-11/12 shadow-md mt-[40px] md:gap-3">
        {/* Cabeçalho com título e descrição */}
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-3">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gbege1 px-8 py-5 md:text-xl">Jiboia</h1>
            <h2 className="text-xl italic font-semibold text-gbege1 px-8 md:text-base">Epipremnum aureum</h2>
            <h3 className="text-lg font-bold text-gbege1 mt-4 px-8 md:text-sm">Descrição</h3>
            <p className="text-base text-gbege1 mt-2 text-justify leading-relaxed px-8 md:text-xs md:mt-1 md:px-5 md:ml-4">
            A jiboia, também conhecida como pothos, é uma das plantas de interior mais fáceis de cuidar e mais cultivadas em todo o mundo. Originária das Ilhas Solomon, ela é famosa por suas folhas em formato de coração e suas cores vibrantes, que variam do verde claro ao amarelo e até mesmo ao branco, dependendo da variedade. A jiboia é uma planta de crescimento rápido e pode ser cultivada em vasos suspensos ou como planta rasteira, criando um visual pendente e fluido. Ela é excelente para ambientes internos, pois se adapta bem a diferentes níveis de luz e requer pouco cuidado.</p>
          </div>

          {/* Imagem */}
          <div className="relative flex-shrink-0 w-full md:w-64 h-64 -translate-y-[40px] -translate-x-[-5px] md:w-[130px] md:h-[130px]">
          <Image
              src="/ImgGeral/Jiboiaindex.png" 
              alt="Cacto-de-mesa"
              width={700}
              height={700}
          />
          </div>
        </div>

        {/* Curiosidade */}
        <div className="text-gbege1 px-8">
          <p className="text-base text-justify leading-relaxed md:text-xs">
          Outra curiosidade é que ela é considerada uma das melhores plantas para purificar o ar.
          </p>
        </div>

        {/* Seção de Cuidados */}
        <hr style={{ border: "none", borderTop: "2px solid #CBC4A0", width: "100%" }} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 md:grid-cols-2 md:grid-rows-2">
          <div className="flex flex-col items-center text-center p-1 px-4 md:order-1">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Rega</h4>
            <p className="text-sm text-gbege1 md:text-xs md:whitespace-normal w-full md:block">
            Regue a jiboia quando o solo estiver seco ao toque. Evite encharcar o solo, pois isso pode causar apodrecimento das raízes.</p>
          </div>
          <div className="flex flex-col items-center text-center p-1 md:order-2">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Luz</h4>
            <p className="text-sm text-gbege1 mt-2 md:text-xs md:whitespace-normal w-full md:block">
            Prefere luz indireta, mas pode se adaptar a ambientes com pouca luz, embora seu crescimento seja mais lento em condições de sombra.</p>
          </div>
          <div className="flex flex-col items-center text-center p-1 md:order-3">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Temperatura</h4>
            <p className="text-sm text-gbege1 mt-2 md:text-xs md:whitespace-normal w-full md:block">
            A temperatura ideal para a jiboia varia entre 18°C e 24°C. Evite correntes de ar frio e temperaturas abaixo de 10°C.</p>
          </div>
          <div className="flex flex-col items-center text-center p-1 md:order-4">
            <h4 className="font-bold text-lg text-gbege1 md:text-sm">Adubação</h4>
            <p className="text-sm text-gbege1 mt-2 md:text-xs md:whitespace-normal w-full md:block">
            Fertilize a cada 2 meses durante a primavera e o verão, utilizando um fertilizante balanceado para promover o crescimento das folhas.</p>
          </div>
        </div>

       {/* Seção de Benefícios com Fundo Bege */}
<div className="relative bg-gbege1 rounded-bl-[44px] p-11 mt-6">
  <div className="flex justify-around text-gverdao gap-8">
    {/* Ícone 1 */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/ImgGeral/vetor-cultivo.svg" // Caminho da imagem
        alt="Baixa Manutenção"
        width={40} // Ajustado o tamanho do ícone
        height={40}
        className="w-10 h-10 mb-2 md:w-6 md:h-6" // Tamanho e espaçamento
      />
      <p className="text-sm font-bold md:text-xs">Facilidade de Cultivo</p>
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
      <p className="text-sm font-bold md:text-xs">Purificação do Ar</p>
    </div>
    </div>
  </div>
</div>
</div>
  );
}
