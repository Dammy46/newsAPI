import React from 'react';

const Article = ({title, img, description, author, date, url}) => {
  return (
    <div>
      <article className="pv4 bt bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3  mt0 lh-title hover-gray ">
              <a className="black no-underline" href={url}>
                {title}
              </a>
            </h1>
            <p className="f5 f4-l lh-copy ">{description}</p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns grow">
            <img src={img} className="db" alt="img" />
          </div>
        </div>
        <p className="f6 lh-copy gray mv0">
          By <span className="ttu">{author}</span>
        </p>
        <time className="f6 db gray">{date}</time>
      </article>
    </div>
  );
};

export default Article;


