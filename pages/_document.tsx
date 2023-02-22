import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'
import type {DocumentProps} from 'next/document'
import i18nextConfig from '../next-i18next.config'

type Props = DocumentProps & {
    // add custom document props
}

class MyDocument extends Document<Props> {
    render() {
        const currentLocale =
            this.props.__NEXT_DATA__.locale ??
            i18nextConfig.i18n.defaultLocale
        return (
            <Html lang={currentLocale}>
                <Head>
                    <meta charSet="utf-8"/>
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600"
                        rel="stylesheet"
                    />

                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"use-credentials"}/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument