import React from 'react';

import { Paper, Typography } from '@material-ui/core';

const Article = ({ article }) => {
    if(!article) return ("")

    return (
        <React.Fragment>
            <Paper elevation={6}>
                <Typography variant="h4">{article.title} - {article.author}</Typography>
                <Typography variant="h5">Source: {article.source.name}</Typography>
                <Typography variant="h5">Published: {article.publishedAt}</Typography>
                <Typography variant="h6">{article.content}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default Article;