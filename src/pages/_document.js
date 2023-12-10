import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html lang="ru">
            <Head>
                <title>Название сервиса</title>
                <meta
                    name="description"
                    content="content"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}

export default Document
