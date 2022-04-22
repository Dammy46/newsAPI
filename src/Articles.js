import React from 'react'
import Article from './Article'
const Articles = ({news, visible}) => {
  return (
     <div>
        {news.slice(0, visible).map((pst, i) => {
               return (
                <Article
                  key={i}
                  id={news[i].id}
                  title={news[i].title}
                   description={news[i].description}
                   url={news[i].url}
                  img={news[i].urlToImage}
                  author={news[i].author}
                  date={news[i].publishedAt}
                />
              );

           })
         
         } 
    </div>
  )
}

export default Articles
