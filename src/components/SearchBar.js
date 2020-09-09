import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
    state = {
        searchTerm : ""
    }
    
    handleChange= (e) => {
        this.setState( { searchTerm: e.target.value })
    }
    handleSubmit= (e) => {
        e.preventDefault()
        const { searchTerm } = this.state;
        const { onFormSubmit } =  this.props; 

        onFormSubmit( searchTerm );
    }

    render() {
        return (
            <div className="search-bar-wrapper"> 
                <form onSubmit={this.handleSubmit} >
                    <input type="text" label="Search..." onChange={this.handleChange} className="search-bar"/>
                    <span className="search-icon">
                        <i className="fas fa-search"></i>
                    </span>
                </form>
            </div>
            
        )
    }
}

export default SearchBar