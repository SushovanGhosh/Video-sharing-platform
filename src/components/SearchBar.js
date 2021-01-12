import React from 'react'


class SearchBar extends React.Component{

    state = {term: ''}

    onFormSubmit= e => {
        e.preventDefault()
        this.props.onTermSubmit(this.state.term)
    }



    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Search Videos</label>
                    <input className="field" value={this.state.term} onChange={event => this.setState({term: event.target.value})}/>
                </form>
            </div>
        )
    }
}

export default SearchBar
