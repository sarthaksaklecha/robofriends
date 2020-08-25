import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary'



class App extends Component{
	constructor(){
		super();
		this.state = {
			robotsList:[],
			SearchTerm: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response)=>response.json())
		.then((users)=>this.setState({robotsList: users}))
	}


	OnSearch = (event) => {
		this.setState({ SearchTerm: event.target.value });
	}

	render(){
			const filteredRobots = this.state.robotsList.filter((robot)=>{
			return robot.name.toLowerCase().includes(this.state.SearchTerm.toLowerCase());
			})
	return(
		  <div className='tc'>	
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox OnSearch={this.OnSearch} />
			<Scroll>
				<ErrorBoundary>
	        		<CardList robots ={filteredRobots}/>
				</ErrorBoundary>			
			</Scroll>		  
		  </div>	
		);
    }
}

export  default App;