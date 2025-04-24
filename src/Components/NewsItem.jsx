import React from 'react';

const NewsItem = ({title, description, src, url}) => {
    return (
        <div>
            <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
            <img src={src || "https://via.placeholder.com/345"} style={{height:"200px",width:"360px"}} className="card-img-top" alt="News"/>
            <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"This is a news event that happened but the description isn't currently avaliable."}</p>
    <a href={url}className="btn btn-primary">Read More</a>
  </div>
</div>
        </div>
    );
};

export default NewsItem;