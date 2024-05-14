import About from '../../components/About';
import Header from '../../components/Header';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 max-w-7xl p-64 mx-auto min-h-64 text-gray-500">
        <h1 className="font-bold tracking-wide uppercase">
          Política de privacidad
        </h1>
        <p>Última actualización: [Fecha de última actualización]</p>
        <p>
          {` Esta Política de Privacidad describe cómo [Nombre de la Página]
          ("nosotros", "nos", o "nuestro") recopila, utiliza y comparte tu
          información personal cuando visitas nuestra página web [Dirección de
          la Página] (la "Página").`}
        </p>
        <h2 className="font-bold tracking-wide uppercase">
          Información que recopilamos
        </h2>
        <p>
          En la Página, solo recopilamos tu dirección de correo electrónico. No
          recopilamos ningún otro tipo de información personal.
        </p>
        <h2 className="font-bold tracking-wide uppercase">
          Uso de la información
        </h2>
        <p>
          Utilizamos tu dirección de correo electrónico únicamente para fines de
          la lista de espera de nuestro sitio web. No compartimos esta
          información con terceros y la mantenemos segura utilizando medidas de
          seguridad adecuadas.
        </p>
        <h2 className="font-bold tracking-wide uppercase">
          Cookies y tecnologías similares
        </h2>
        <p>No utilizamos cookies ni tecnologías similares en nuestra Página.</p>
        <h2 className="font-bold tracking-wide uppercase">Consentimiento</h2>
        <p>
          Al proporcionarnos tu dirección de correo electrónico, estás dando tu
          consentimiento para que la utilicemos de acuerdo con esta Política de
          Privacidad.
        </p>
        <h2 className="font-bold tracking-wide uppercase">
          Actualización de la política de privacidad
        </h2>
        <p>
          Nos reservamos el derecho de actualizar nuestra Política de Privacidad
          en cualquier momento. Te recomendamos que revises periódicamente esta
          página para estar al tanto de cualquier cambio. Los cambios entrarán
          en vigencia inmediatamente después de su publicación en esta página.
        </p>
        <h2 className="font-bold tracking-wide uppercase">Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre esta Política de Privacidad,
          contáctanos a [Correo Electrónico de Contacto].
        </p>{' '}
      </main>
      <About />
    </>
  );
};

export default PrivacyPolicy;
