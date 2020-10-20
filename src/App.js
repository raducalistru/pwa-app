import React from 'react';

import { Grid } from '@material-ui/core';
import { SearchBar, Article, ArticleList } from './components';

import fetchNews from './api/fetchNews';
import './App.css';

class App extends React.Component {
    
    state = {
        articles: [],
        selectedArticle: null,
    }

    handleSubmit = async (SearchTearm) => {
        const response = await fetchNews.get('everything', {
            params: {
                q: SearchTearm,
                apiKey: 'e7204eacae514c33a4061be5b0dab50a',
            }
        });

        console.log(response.data);

        this.setState({ articles: response.data.articles, selectedArticle: response.data.articles[0] });
    }

    render () {   
        const { selectedArticle, articles } = this.state; 
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <Article article={selectedArticle}/>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;