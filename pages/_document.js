import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://www.paypal.com/sdk/js?client-id=Ac1N1G72VYm_9nP3q3KFWX_RCfpUZkwLbRcUI8_NrerFWVSBDvDRXGYKoSNYLdKiYC_C7_gOT6R2Yy-Q&currency=USD"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
