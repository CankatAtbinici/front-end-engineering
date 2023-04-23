import React from 'react';
import { Helmet } from 'react-helmet';

function Head(props) {
    return (
        <Helmet>
            <title>Front End - Home</title>
            <meta name="description" content="Front end developer page" />
            <meta name="keywords" content="Front-End, Developer, Cankat" />
        </Helmet>
    );
}

export default Head;