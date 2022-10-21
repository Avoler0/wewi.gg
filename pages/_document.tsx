import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
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
				<Head></Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;