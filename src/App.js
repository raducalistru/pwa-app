import React, { useState } from 'react';

import { fetchNews } from './api/fetchNews';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchNews(query);

            setArticles(data);
            console.log(data);
            setQuery('');
        }
    }

    return(
        <div className="main-container">
            <input type="text" className="search" placeholder="Search ..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {articles.articles && (
                <div className="articles">
                    <h2 className="article-title">
                        <span>{articles.articles[0].title}</span>
                    </h2>
                </div>
            )}
        </div>
    );
}

export default App;