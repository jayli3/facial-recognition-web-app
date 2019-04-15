import React from 'react';

const SignIn = (props) => {
	const {} = props;
	return(
		<article className="signIn br3 ba shadow-5 dark-gray b--black-10 bg-white o-80 w-auto mw6 center">
			<main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0" style={{'whiteSpace': 'nowrap'}}>Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input className="pa2 br2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input className="b br2 pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 br2 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In"/>
			    </div>
			    <div className="lh-copy mt3">
			      <a href="#0" className="f6 dim black db b">Register</a>
			    </div>
			  </form>
			</main>
		</article>
	)
}

export default SignIn;