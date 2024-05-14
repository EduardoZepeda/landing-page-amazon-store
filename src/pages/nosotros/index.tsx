import About from '../../components/About';
import Header from '../../components/Header';

const Nosotros = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 max-w-7xl p-64 mx-auto min-h-64 text-gray-500">
        <h1 className="tracking-wide uppercase">Sobre nosotros</h1>
        <p>
          Somos unos apasionados del E-commerce con experiencia en todo lo rodea
          el mundo de los negocios por internet, desde SEO, desarrollo web,
          marketing digital, etc. Así como todo lo que esto representa. Creemos
          que el E-commerce tiene el potencial de darle más libertad al ser
          humano, dándole mayor libertad sobre donde trabajar y también dándole
          la oportunidad a cualquier persona de emprender, incluso con poco
          capital. Por esto estamos aquí y por
        </p>
      </main>
      <About />
    </>
  );
};

export default Nosotros;
