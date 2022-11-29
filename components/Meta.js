import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>  
            <title>{title}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/logo.png' />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Michael Huang',
    keywords: 'Michael Huang, Phillips Academy, Computer Science, Machine Learning, Parallel Computing, Physics, Philosophy',
    description: 'Michael Huang\'s personal website',
}

export default Meta