import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  // render() {
  //   return (
  //     <Html>
  //       <Head>
  //         <base href="./" />
  //         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  //         <meta
  //           name="description"
  //           content="CoreUI - Open Source Bootstrap Admin Template"
  //         />
  //         <meta name="author" content="Łukasz Holeczek" />
  //         <meta
  //           name="keyword"
  //           content="Bootstrap,Admin,Template,Open,Source,jQuery,CSS,HTML,RWD,Dashboard"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="57x57"
  //           href="assets/favicon/apple-icon-57x57.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="60x60"
  //           href="assets/favicon/apple-icon-60x60.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="72x72"
  //           href="assets/favicon/apple-icon-72x72.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="76x76"
  //           href="assets/favicon/apple-icon-76x76.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="114x114"
  //           href="assets/favicon/apple-icon-114x114.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="120x120"
  //           href="assets/favicon/apple-icon-120x120.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="144x144"
  //           href="assets/favicon/apple-icon-144x144.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="152x152"
  //           href="assets/favicon/apple-icon-152x152.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="180x180"
  //           href="assets/favicon/apple-icon-180x180.png"
  //         />
  //         <link
  //           rel="icon"
  //           type="image/png"
  //           sizes="192x192"
  //           href="assets/favicon/android-icon-192x192.png"
  //         />
  //         <link
  //           rel="icon"
  //           type="image/png"
  //           sizes="32x32"
  //           href="assets/favicon/favicon-32x32.png"
  //         />
  //         <link
  //           rel="icon"
  //           type="image/png"
  //           sizes="96x96"
  //           href="assets/favicon/favicon-96x96.png"
  //         />
  //         <link
  //           rel="icon"
  //           type="image/png"
  //           sizes="16x16"
  //           href="assets/favicon/favicon-16x16.png"
  //         />
  //         <link rel="manifest" href="assets/favicon/manifest.json" />
  //         <meta name="msapplication-TileColor" content="#ffffff" />
  //         <meta
  //           name="msapplication-TileImage"
  //           content="assets/favicon/ms-icon-144x144.png"
  //         />
  //         <meta name="theme-color" content="#ffffff" />
  //         <link href="css/style.css" rel="stylesheet" />
  //         <link
  //           href="vendors/@coreui/chartjs/css/coreui-chartjs.css"
  //           rel="stylesheet"
  //         />
  //       </Head>
  //       <body className="c-app">
  //         <Main />
  //         <NextScript />
  //         <script src="vendors/@coreui/coreui/js/coreui.bundle.min.js" />
  //         <script src="vendors/@coreui/icons/js/svgxuse.min.js" />
  //         <script src="vendors/@coreui/chartjs/js/coreui-chartjs.bundle.js" />
  //         <script src="vendors/@coreui/utils/js/coreui-utils.js" />
  //         <script src="js/main.js" />
  //       </body>
  //     </Html>
  //   );
  // }
}

export default MyDocument;
