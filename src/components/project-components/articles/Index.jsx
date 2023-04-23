import React from 'react';
import useGetMediumArticles from "../../../hooks/useGetLinkedlnArticles";
import SingleArticle from './SingleArticle';


function Index() {
    //twice get request because of strict mode is active. if clean it from index.js just one request will realized
    const [articles , fetchArticles] = useGetMediumArticles();

    return (
        <div>
            {
                articles.map((data , index) => {
                    const parser = new DOMParser();
                    const decodedTitle = parser.parseFromString(data.title , "text/html").body.textContent;
                    const decodedContent = parser.parseFromString(data.content , "text/html").body.textContent;
                    return (
                 <SingleArticle
                 key={index}
                 title={decodedTitle}
                 description={decodedContent.slice(0,300) + "..."}
                 address={data.link}
                 />
                    );
                })
            }
        </div>
    );
}

export default Index;