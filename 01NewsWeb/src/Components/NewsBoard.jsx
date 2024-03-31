import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category, searchQuery, selectedCountry }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = '';
        if (searchQuery) {
          const apiKey = '810e92029bdf44cca8f4a58e4f5b6b4c';
          url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`;
        } else {
          const apiKey = import.meta.env.VITE_API_KEY;
          url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${category}&apiKey=${apiKey}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []); // Ensure data.articles is initialized or use an empty array
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNews();
  }, [category, searchQuery, selectedCountry]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
}

export default NewsBoard;
