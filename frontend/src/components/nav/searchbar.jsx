import React, { Component } from 'react'

export default class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let filter = {
            ingredients: [],
            number: 20
        }
        const ingredientsArray = this.state.search.split(",")
        ingredientsArray.forEach(ingredient => filter.ingredients.push(ingredient))
        this.props.fetchRecipes(filter);
        this.setState({search: ''});
        this.props.history.push(`/searchresults`);
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit} className="search-bar-form">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by Ingredients"
              value={this.state.search}
              onChange={this.update("search")}
            />
            <div className="search-submit-container">
              <input type="submit" className="search-bar-submit" value=""/>
              <i className="fas fa-search search-icon"></i>
            </div>
          </form>
        );
    }
}
