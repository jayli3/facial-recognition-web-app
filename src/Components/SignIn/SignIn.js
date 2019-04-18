import React from 'react';

class SignIn extends React.Component {
	constructor(props){
		super();
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onSubmitSignIn = (SERVER_URL) => {
		if(this.state.signInEmail.length <= 0 || this.state.signInPassword <= 0){
			return
		}
		fetch(SERVER_URL + '/signin', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(resp => resp.json())
		.then(user => {
			if (user.id){
				this.props.loadUser(user);
			}
		}).catch(err => console.log('error'))
	}

	onSkipThis = () => {
		const user = {
			email: "guess@email.com",
			faces: 0,
			id: -1,
			joined: new Date(),
			name: "Guest"
		}
		this.props.loadUser(user);
	}

	render(){
		const {onRouteChange} = this.props;
		return(
			<article className="signIn br3 ba shadow-5 dark-gray b--black-10 bg-white o-80 w-auto mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0" style={{'whiteSpace': 'nowrap'}}>Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
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
				      <input className="b ph3 br2 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In"
				      			onClick={() => {this.onSubmitSignIn(this.props.SERVER_URL)}}/>
				    </div>
				    <div className="lh-copy mt3">
				      <p className="f6 dim black db b pointer underline" onClick={() => onRouteChange('register')}>Register</p>
				    </div>
				    <div className="lh-copy mt3">
				      <p className="f6 dim dark-gray bg-near-white br1 db b pointer" onClick={this.onSkipThis}>...Skip This...</p>
				    </div>
				  </div>
				</main>
			</article>
		)
	}
}

export default SignIn;