"use strict";
// Top Level Component & the AuthorForm is the child component
// Since this is the top level component it is the best place to handle state

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({

    getInitialState: function() {
        return {
            author: {id: '', firstName: '', lastName: ''}
        };
    },

    setAuthorState: function(event) { {/*called for every single key press*/}
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    saveAuthor: function(event) {
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
    },

    render: function() {
        return (
            <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} />
        );
    }
});

module.exports = ManageAuthorPage;