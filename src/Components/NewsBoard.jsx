import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=867cfa1e3fdc4c7fa4138e2e8fdd78a9`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.articles) {
                setArticles(data.articles);
            }
        })
        .catch(error => console.error("Error fetching news:", error));
    },[category])
    return (
        <div className="container">
            <h2 className="text-center my-3">Latest <span className="badge bg-danger">News</span></h2>
            <div className="row">
                {articles.map((news, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <NewsItem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                    </div>
                ))}
            </div>
        </div>
    );


};


export default NewsBoard;