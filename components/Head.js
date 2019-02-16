import Head from "next/head";

const HeadTag = () => (
  <Head>
    <title>NextJS Boilerplate</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
      crossOrigin="anonymous"
    />
    <script src="https://unpkg.com/react/umd/react.production.js" crossOrigin />
    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.js"
      crossOrigin
    />
    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossOrigin
    />
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
  </Head>
);

export default HeadTag;
