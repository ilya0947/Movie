import Header from "./layout/header";
import Footer from "./layout/footer";
import Main from "./layout/main";
import React from "react";


const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends React.Component {
	state = {
		mov: [],
		loading: true
	};

	componentDidMount() {
		this.requestMovies();
	}

	requestMovies(req, type = 'all') {
		if (!req) req = 'all';
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${req}${type !== 'all' ? `&type=${type}` : ''}`)
			.then(res => res.json())
			.then(data => this.setState({mov: data.Search, loading: false}))
			.catch(err => alert(err));
	}

	search=(str, type)=> {
		this.setState({loading: true});
		this.requestMovies(str, type);
	}


	
	render() {
		
		const {mov, loading} = this.state;
		
		return (
			<>
				<Header/>
				<Main loading={loading} movies={mov} cb={this.search}/>
				<Footer/>
			</>
		);
	}
}

