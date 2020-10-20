import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTearm: '',
    }

    handleChange = (event) => { this.setState({ searchTearm: event.target.value}) }

    handleSubmit = (event) => {
        const { searchTearm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTearm);

        event.preventDefault();
    }

    render(){
        return(
            <Paper elevation={6} style={{ padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullwidth="true" label="Search for your news" onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;