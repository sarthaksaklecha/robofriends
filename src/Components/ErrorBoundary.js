import React,{ Component } from 'react'

class ErrorBoundary extends Component{
	constructor(){
		super();
		this.state = {
			isError: false
		}
	}
	componentDidCatch(error,errorinfo){
		this.setState({isError: true});
		console.log(error);

	}
	render(){
			if(this.state.isError){
				return <h1>Ooops..you caught us napping</h1>
			}
			else{
				return this.props.children
			}
		
	}

}
export default ErrorBoundary