import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const ArticleList = ({ article }) => {
    return (
        <React.Fragment>
            <Paper elevation={6}>
                <Typography variant="h2">{article} - {article}</Typography>
                <Typography variant="h3">Source: {article}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default ArticleList;