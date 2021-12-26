import React from "react";

export default class Search extends React.Component{
    constructor(props) {
        super(props);
        this.cb = props.cb;
    }

    state = {
        search: '',
        type: 'all'
    }
    
    handleKey(e) {
        if (e.key === 'Enter') {
            this.cb(this.state.search, this.state.type);
        }
    }

    handleFilter(e) {
        this.setState({type: e.target.dataset.type},
            () => this.cb(this.state.search, this.state.type));
    }

    render() {

        const {search, type} = this.state;

        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input 
                            placeholder="search"
                            type="search"
                            className="validate"
                            value={search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={(e) => this.handleKey(e)}/>
                        <button className="btn btn-search" onClick={() => this.cb(search, type)}>Search</button>
                        <div className="d-flex">
                            <label>
                                <input
                                    className="with-gap"
                                    name="type"
                                    type="radio"
                                    data-type="all" 
                                    onChange={(e) => this.handleFilter(e)}
                                    checked={type === "all"}/>
                                <span>All</span>
                            </label>
                
                            <label>
                                <input
                                    className="with-gap"
                                    name="type"
                                    type="radio"
                                    data-type="movie" 
                                    onChange={(e) => this.handleFilter(e)}
                                    checked={type === "movie"}/>
                                <span>Movie</span>
                            </label>
                        
                            <label>
                                <input
                                    className="with-gap"
                                    name="type"
                                    type="radio"
                                    data-type="series"  
                                    onChange={(e) => this.handleFilter(e)}
                                    checked={type === "series"}/>
                                <span>Series</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}