import React from 'react';
import { Helmet } from 'react-helmet';

function Head(props) {
    return (
        <Helmet>
            <title>Front End - Articles</title>
            <meta name="decription" content='articles about web development' />
            <meta name='keywords' content='web development , front end developer , front end articles, web development articles'/>
        </Helmet>
    );
}

export default Head;