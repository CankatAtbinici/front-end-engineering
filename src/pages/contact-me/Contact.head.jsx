import React from 'react';
import { Helmet } from 'react-helmet';

function Head(props) {
    return (
        <Helmet>
        <title>Front End - Contact</title>
        <meta name='description' content='contact me'/>
        <meta name='keywords' content='contact me , front end developer , web developer '/>
        </Helmet>
    );
}

export default Head;