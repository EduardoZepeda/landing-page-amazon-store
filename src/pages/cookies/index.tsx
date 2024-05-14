import About from '../../components/About';
import Header from '../../components/Header';

const CookiePolicy = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 max-w-7xl p-64 mx-auto min-h-64 text-gray-500">
        <h1 className="tracking-wide uppercase">Política de cookies</h1>
        <p>Pol&iacute;tica de Cookies</p>

        <p>
          Una cookie es un peque&ntilde;o archivo que se almacena en su
          computadora o dispositivo m&oacute;vil cuando visita un sitio web. Las
          cookies permiten que el sitio web recuerde sus acciones y preferencias
          (como inicio de sesi&oacute;n, idioma, tama&ntilde;o de fuente y otras
          preferencias de visualizaci&oacute;n) durante un per&iacute;odo de
          tiempo, para que no tenga que volver a ingresarlas cada vez que
          regrese al sitio o navegue de una p&aacute;gina a otra.
        </p>

        <p>Cookies Utilizadas en Nuestro Sitio</p>

        <p>
          En nuestro Sitio utilizamos cookies de terceros para varios fines. Una
          de las herramientas de terceros que utilizamos es la plataforma de
          an&aacute;lisis Umami.is.
        </p>

        <p>Cookies de Umami.is</p>

        <p>
          Umami.is utiliza cookies para recopilar datos estad&iacute;sticos
          an&oacute;nimos sobre el uso del Sitio, como el n&uacute;mero de
          visitantes, las p&aacute;ginas m&aacute;s populares y las
          interacciones del usuario. Estos datos nos ayudan a mejorar la
          experiencia del usuario y a comprender mejor c&oacute;mo se utiliza
          nuestro Sitio.
        </p>

        <p>
          Al utilizar nuestro Sitio, usted acepta el uso de cookies de Umami.is
          para los fines descritos anteriormente.
        </p>
      </main>
      <About />
    </>
  );
};

export default CookiePolicy;
