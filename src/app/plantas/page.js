import Image from "next/image";


export default function Plantas() {

  const Itens = [
    {
      name: 'Cacto-de-mesa',
      subName: 'Os cactos são plantas suculentas que pertencem à família Cactaceae, originários das regiões áridas da América.',
      href: '/Plantas/CatalogoCactodemesa.jpg',
      bloco: 'Plantas para Iniciantes',
      link: '/plantas/detalhes',
    },
    {
      name: 'Suculentas',
      subName: 'As suculentas são plantas que armazenam água em seus tecidos, tornando-as ideais para pessoas que têm pouco tempo para cuidar delas.',
      href: '/Plantas/CatalogoSuculenta.jpg',
      bloco: 'Plantas para Iniciantes',
      link: '/plantas/detalhes1',
    },
    {
      name: 'Espada-de-São-Jorge',
      subName: 'A Espada-de-São-Jorge, também conhecida como Sansevieria, é uma planta extremamente resistente, capaz de prosperar em condições adversas.',
      href: '/Plantas/CatalogoEspadadesaojorge.jpg',
      bloco: 'Plantas para Iniciantes',
      link: '/plantas/detalhes2',
    },
    {
      name: 'Jiboia',
      subName: 'A jiboia, também conhecida como pothos, é uma das plantas de interior mais fáceis de cuidar e mais cultivadas em todo o mundo.',
      href: '/Plantas/CatalogoJiboia.jpg',
      bloco: 'Plantas para Iniciantes',
      link: '/plantas/detalhes3',
    },
    {
      name: 'Hera-Inglesa',
      subName: 'A Hera-inglesa é uma planta clássica e versátil, amplamente utilizada para cobrir muros ou em vasos pendentes.',
      href: '/Plantas/CatalogoHerainglesa.jpg',
      bloco: 'Plantas para Iniciantes',
      link: '/plantas/detalhes4',
    },
    {
      name: 'Maranta-Leuconeura',
      subName: 'A Maranta-tricolor, também conhecida como Planta Rasteira de Reza, é famosa por suas folhas ornamentais que apresentam tons de verde, vermelho e branco.',
      href: '/Plantas/CatalogoMarantaleuconeura.jpg',
      bloco: 'Plantas para Iniciantes',
      link: '/plantas/detalhes5',
    },
    {
      name: 'Filodendro',
      subName: 'O filodendro é uma planta tropical popular por sua facilidade de cuidado e folhas exuberantes, que podem ser alongadas, em formato de coração ou profundamente recortadas, dependendo da espécie.',
      href: '/Plantas/CatalogoFilodendro.jpeg',
      bloco: 'Plantas para Ambientes Sombreados',
      link: '/erro',
    },
    {
      name: 'Begônia',
      subName: 'As begônias são conhecidas por suas folhas texturizadas e flores vibrantes que aparecem em várias cores, como rosa, vermelho, laranja e branco.',
      href: '/Plantas/CatalogoBegonia.jpg',
      bloco: 'Plantas para Ambientes Sombreados',
      link: '/erro',
    },
    {
      name: 'Aglaonema-vermelho',
      subName: 'A Aglaonema-vermelho é uma das variedades mais impressionantes de sua espécie, destacando-se pelas folhas brilhantes que combinam tons de verde e vermelho.',
      href: '/Plantas/CatalogoaAglaonemavermelho.jpg',
      bloco: 'Plantas para Ambientes Sombreados',
      link: '/erro',
    },
    {
      name: 'Lírio-da-paz',
      subName: 'O lírio-da-paz é uma das plantas de interior mais populares, devido à sua beleza elegante e à facilidade de cultivo.',
      href: '/Plantas/CatalogoLiriodapaz.jpg',
      bloco: 'Plantas para Ambientes Sombreados',
      link: '/erro',
    },
    {
      name: 'Peperomia-melancia',
      subName: 'A Peperomia-melancia é uma planta charmosa, com folhas que lembram o padrão de uma melancia, devido às listras prateadas e verde-escuro.',
      href: '/Plantas/CatalogoPeperomiamelancia.jpg',
      bloco: 'Plantas para Ambientes Sombreados',
      link: '/erro',
    },
    {
      name: 'Arecas (Palmeira-Bambu)',
      subName: 'As arecas, também conhecidas como palmeiras-bambu, são plantas ornamentais de crescimento vertical com folhas longas e arqueadas que criam um visual tropical.',
      href: '/Plantas/CatalogoArecas.jpg',
      bloco: 'Plantas para Ambientes Sombreados',
      link: '/erro',
    },
    {
      name: 'Girassol',
      subName: 'O girassol é uma planta vibrante e simbólica, conhecida por suas grandes flores amarelas que seguem a trajetória do sol durante o dia.',
      href: '/Plantas/CatalogoGirassol.jpg',
      bloco: 'Plantas para Luz Solar Direta',
      link: '/erro',
    },
    {
      name: 'Lavanda',
      subName: 'A lavanda é uma planta herbácea e aromática, famosa por suas flores roxas e pelo seu cheiro calmante.',
      href: '/Plantas/CatalogoLavanda.jpg',
      bloco: 'Plantas para Luz Solar Direta',
      link: '/erro',
    },
    {
      name: 'Tomilho',
      subName: 'O tomilho é uma planta herbácea aromática, amplamente utilizada na culinária, especialmente em pratos mediterrâneos.',
      href: '/Plantas/CatalogoTomilho.jpg',
      bloco: 'Plantas para Luz Solar Direta',
      link: '/erro',
    },
    {
      name: 'Margarida',
      subName: 'A margarida é uma planta herbácea amplamente reconhecida por suas flores delicadas, compostas por pétalas brancas e um centro amarelo brilhante.',
      href: '/Plantas/CatalogoMargarida.png',
      bloco: 'Plantas para Luz Solar Direta',
      link: '/erro',
    },
    {
      name: 'Alecrim',
      subName: 'O alecrim é uma planta aromática e perene, originária da região do Mediterrâneo, conhecida por suas folhas estreitas e pinadas, que liberam um aroma refrescante quando esmagadas.',
      href: '/Plantas/CatalogoAlecrim.jpg',
      bloco: 'Plantas para Luz Solar Direta',
      link: '/erro',
    },
    {
      name: 'Cacto Mexicano',
      subName: 'Os cactos são plantas adaptadas para ambientes áridos e ensolarados, com uma incrível capacidade de armazenar água em seus tecidos.',
      href: '/Plantas/CatalogoCactomexicano.jpg',
      bloco: 'Plantas para Luz Solar Direta',
      link: '/erro',
    },
    {
      name: 'Orquídea',
      subName: 'As orquídeas são uma das maiores famílias de plantas, com milhares de espécies conhecidas por suas flores exóticas e delicadas. ',
      href: '/Plantas/CatalogoOrquidea.png',
      bloco: 'Plantas para Paisagismo e Decoração',
      link: '/erro',
    },
    {
      name: 'Ave-do-paraíso',
      subName: 'A Ave-do-paraíso é uma planta icônica, conhecida por suas flores exóticas que lembram o formato de uma ave tropical em voo.',
      href: '/Plantas/CatalogoAvedoparaiso.jpg',
      bloco: 'Plantas para Paisagismo e Decoração',
      link: '/erro',
    },
    {
      name: 'Bromélia',
      subName: 'As bromélias são plantas tropicais fascinantes, conhecidas por suas folhas coloridas e a capacidade de armazenar água em suas rosetas centrais.',
      href: '/Plantas/CatalogoBromelia.jpg',
      bloco: 'Plantas para Paisagismo e Decoração',
      link: '/erro',
    },
    {
      name: 'Petúnia',
      subName: 'A petúnia é uma planta de floração abundante, muito utilizada em jardins e vasos pendentes devido à sua capacidade de formar cascatas de flores.',
      href: '/Plantas/CatalogoPetunia.jpg',
      bloco: 'Plantas para Paisagismo e Decoração',
      link: '/erro',
    },
    {
      name: 'Palmeira-de-leque',
      subName: 'A palmeira-de-leque é uma planta tropical com folhas largas e em formato de leque, que conferem um visual exótico e sofisticado.',
      href: '/Plantas/CatalogoPalmeiradeleque.jpg',
      bloco: 'Plantas para Paisagismo e Decoração',
      link: '/erro',
    },
    {
      name: 'Hibisco',
      subName: 'O hibisco é uma planta tropical que se destaca por suas flores grandes e vibrantes, que podem ser vermelhas, amarelas, laranjas ou rosa.',
      href: '/Plantas/CatalogoHibisco.jpg',
      bloco: 'Plantas para Paisagismo e Decoração',
      link: '/erro',
    },
    {
      name: 'Capim-limão',
      subName: 'O Capim-limão, também conhecido como capim-santo, é uma planta de aroma cítrico marcante, utilizada para fins medicinais e na preparação de chás relaxantes.',
      href: '/Plantas/CatalogoCapimlimao.png',
      bloco: 'Plantas para Medicinais e Aromáticas',
      link: '/erro',
    },
    {
      name: 'Manjericão',
      subName: 'O Manjericão é uma erva aromática muito utilizada na culinária, especialmente em pratos italianos e mediterrâneos.',
      href: '/Plantas/CatalogoManjericao.jpg',
      bloco: 'Plantas para Medicinais e Aromáticas',
      link: '/erro',
    },
    {
      name: 'Hortelã',
      subName: 'A Hortelã é uma planta de folhas verdes vibrantes com aroma refrescante, amplamente utilizada em bebidas, sobremesas e medicamentos naturais.',
      href: '/Plantas/CatalogoHortela.jpg',
      bloco: 'Plantas para Medicinais e Aromáticas',
      link: '/erro',
    },
    {
      name: 'Erva-cidreira',
      subName: 'A Erva-cidreira é uma erva perene conhecida por seu aroma suave de limão e suas propriedades calmantes.',
      href: '/Plantas/CatalogoErvacidreira.jpeg',
      bloco: 'Plantas para Medicinais e Aromáticas',
      link: '/erro',
    },
    {
      name: 'Salvia',
      subName: 'A Sálvia é uma erva aromática com folhas aveludadas e um aroma único, amplamente utilizada na culinária e na medicina tradicional.',
      href: '/Plantas/CatalogoSalvia.jpg',
      bloco: 'Plantas para Medicinais e Aromáticas',
      link: '/erro',
    },
    {
      name: 'Alecrim',
      subName: 'O alecrim é uma planta aromática e perene, originária da região do Mediterrâneo, conhecida por suas folhas estreitas e pinadas, que liberam um aroma refrescante quando esmagadas.',
      href: '/Plantas/CatalogoAlecrim.jpg',
      bloco: 'Plantas para Medicinais e Aromáticas',
      link: '/erro',
    },
  ];


  const Blocos = [
    {
      nameBloco: 'Plantas para Iniciantes',
      link: '/erro',
    },
    {
      nameBloco: 'Plantas para Ambientes Sombreados',
      link: '/erro',
    },
    {
      nameBloco: 'Plantas para Luz Solar Direta',
      link: '/erro',
    },
    {
      nameBloco: 'Plantas para Paisagismo e Decoração',
      link: '/erro',
    },
    {
      nameBloco: 'Plantas para Medicinais e Aromáticas',
      link: '/erro',
    },

  ];


  return (
    <>
      <div className="relative flex text-center ">

        <div className="relative flex w-2/3 ">
          <Image src="/ImgGeral/PlantasImagem.png"
            alt="Planta"
            width={580}
            height={580}
            className="absolute flex -left-24 top-20 md:hidden" />
        </div>

        <div className="mt-12 md:mt-[-30px] px-12 py-24 md:py-11 md:mr-[70px]">
          <a className="text-gbege1 text-xl font-light leading-tight md:text-sm sm:text-xs">
          Descubra espécies incríveis, aprenda cuidados práticos e crie ambientes cheios de vida
          </a> <br></br>
          <a className="text-gbege1 text-5xl font-bold md:text-xl sm:text-xl">
          Conecte-se com o verde e transforme o seu espaço!
          </a>
        </div>
      </div>
      <div className="relative flex justify-center h-14 mx-6 mb-4 md:mr-[35px]">
        <div className="absolute flex right-12 w-72 bg-gbege1 rounded-lg ">
          <div className="w-full">
            <input type="search" className="w-full px-4 pt-3 bg-gbege1 text-gray-800 rounded-full focus:outline-none" placeholder="Pesquise aqui" />
          </div>
          <div>
            <button type="submit" className="flex items-center justify-center w-12 h-12 text-gbege2 rounded-r-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>
      <div className="relative px-24 md:px-9 py-24 md:py-1 h-full rounded-tr-[44px] bg-gverdao md:top-[130px]">

        {Blocos.map(({ nameBloco }, blocoIndex) => (
          <div key={blocoIndex}>
            <h1 className="text-gbege1 text-3xl font-bold pb-6 pt-16 md:text-xl sm:text-base">{nameBloco}</h1>
            <div className="grid grid-cols-3 gap-4 gap-x-28 md:gap-1 md:gap-x-11">
              {Itens.filter(item => item.bloco === nameBloco).map(({ name, href, subName, link }, itemIndex) => (
                <div key={itemIndex} className="relative p-2"> 
                <div className="relative flex bg-slate-50 rounded-xl w-full h-64 md:w-[100px] md:h-[100px] shadow-md border overflow-hidden md:overflow-hidden items-center justify-center">
                  <a href={link} className="rounded-xl shadow-inner object-cover object-center w-full h-full aspect-square">
                  <Image src={href} alt={name} width={500} height={500} className="rounded-xl shadow-inner object-cover object-center w-full h-full aspect-square"/>
                  </a>
                </div>
                 {/* Título com largura limitada e alinhamento correto para telas médias ou maiores */}
          <h1 className="text-gbege1 text-lg font-bold pt-1 px-1 md:whitespace-normal md:text-base w-full md:text-center">{name}</h1>
          
          {/* Subtítulo com largura limitada e alinhamento correto para telas médias ou maiores */}
          <h2 className="text-gbege1 text-sm p-1 md:hidden w-full md:text-center">{subName}</h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </>
  );
}
