// use rafce create functional component
import React from 'react';
import './article.css';

/* รับ props เข้ามากแล้ว destructruing เลยเพื่อจะเอาไปใช้ด้านล่าง 
  { imgUrl: imgUrl, date: data, title: title }
*/
const Article = ({ imgUrl, date, title }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;