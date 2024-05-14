import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { email } = config;
  const { title, subtitle, brevoUrl } = email;

  return (
    <section className={`bg-background py-8`} id="email">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {subtitle}
        </p>
        <div className="my-8">
          <iframe
            width="540"
            height="640"
            src={brevoUrl}
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '100%',
            }}
            // style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
