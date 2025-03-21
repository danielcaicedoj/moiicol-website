// src/components/Contact.jsx
import React from 'react';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import { news } from "../data/news";

const Home = () => {

    return (
        <div className="container mx-auto my-8 px-4">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {news && news.length > 0 ? (
                    news.map(news => 
                        <NewsCard 
                        key={news.id}
                        id = {news.id} 
                        title={news.title}
                        content={news.content.substring(0,250)} />)
                    ) : (
                    <p>No hay blogs disponibles.</p>
                )}
      </div>
        </div>
    );
};

export default Home;
