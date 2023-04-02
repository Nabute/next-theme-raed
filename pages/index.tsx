import Head from 'next/head'
import {Inter} from 'next/font/google'
import LatestProducts from "../components/home/LatestProducts";

const inter = Inter({subsets: ['latin']})

function sayHello() {
    alert('Hello!');
}

export default function Home() {

    return (
        <>
            <Head>
                <title>Salla Theme Raed</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <p>Lorem Ipsum</p>
                <salla-button onClick={sayHello}>Open Product Size Guide</salla-button>
                <LatestProducts></LatestProducts>
            </div>
        </>
    )
}
