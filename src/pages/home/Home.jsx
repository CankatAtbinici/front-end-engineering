import React from 'react';
import AppBanner from '../../components/project-components/banner/Index';
import "./home.css";
import Head from './Home.head';

function Home(props) {
    return (
        <section>
            <Head/>
            <AppBanner/>
        </section>
    );
}

export default Home;