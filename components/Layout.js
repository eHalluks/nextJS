import Head from "next/head";
import styles from '../styles/Layout.module.css'
import Header from './Header';
import Footer from "./Footer";


export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Head>
            <Header/>
            <div className={styles.container}>
            {children}
            </div>
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'FIZJOSAP | Track your money',
    description: 'Track your costs and payments from the customer',
    keywords: 'SAP, tracking, money, company, knowledge'
}
