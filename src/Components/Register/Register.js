import React from 'react';

class Register extends React.Component {
	constructor(props){
		super();
		this.state = {
			registerName: '',
			registerEmail: '',
			registerPassword: ''
		}
	}

	onNameChange = (event) => {
		this.setState({registerName: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({registerEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({registerPassword: event.target.value});
	}

	onSubmissionRegister = () => {
		fetch('http://localhost:3001/register', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.registerName,
				email: this.state.registerEmail,
				password: this.state.registerPassword
			})
		})
			.then(resp => resp.json())
			.then(user => {
				if(user){
					this.props.loadUser(user);
					this.props.onRouteChange('home')
				}
			})
	}

	render(){
		return(
			<article className="signIn br3 ba shadow-5 dark-gray b--black-10 bg-white o-80 w-auto mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0" style={{'whiteSpace': 'nowrap'}}>Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				        	className="pa2 br2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
				        	type="text" 
				        	name="name"  
				        	id="name"
				        	onChange={this.onNameChange}/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="pa2 br2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address"
				        	onChange={this.onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="b br2 pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password"
				        	onChange={this.onPasswordChange}/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input className="b ph3 br2 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"
				      			onClick={this.onSubmissionRegister}/>
				    </div>
				  </div>
				</main>
			</article>
		)
	}
}

export default Register;
