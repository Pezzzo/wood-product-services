import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="ru">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="Description" content="test" />
        <meta name="Keywords" content="test" />
        <meta name="Copyright" content="Sirius Future" />
        <meta name="Robots" content="All" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};

export default Document;
