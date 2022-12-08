import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import Script from "next/script";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			const styleElement = [
				<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>,
			];
			return {
				...initialProps,
				styles: styleElement,
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<html lang="ko" />
				<Head>
				</Head>
				<body>
					<Main />
					<NextScript />
					<Script
						src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
						strategy="beforeInteractive"
					></Script>
					<Script
						src="http://code.jquery.com/jquery-1.11.3.min.js"
						strategy="beforeInteractive"
					></Script>
					<Script
						src="https://accounts.google.com/gsi/client" 
						async defer
					></Script>
					<Script src="https://apis.google.com/js/platform.js" async defer></Script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;