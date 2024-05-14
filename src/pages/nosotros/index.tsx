import About from '../../components/About';
import Header from '../../components/Header';

const Nosotros = () => {
  return (
    <>
      <Header />
      <main className="flex flex-wrap max-w-7xl p-64 mx-auto min-h-64 text-gray-500 font-semibold">
        <h1 className="tracking-wide uppercase">Política de privacidad</h1>
      </main>
      <About />
    </>
  );
};

export default Nosotros;
