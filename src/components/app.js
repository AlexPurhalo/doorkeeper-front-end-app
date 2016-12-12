// Node modules import
import React, { Component } from 'react'

// Layout component
export default class App extends Component {
	constructor(props) {
		super(props);
	}

	signInLink() {
		const auth_url = 'http://localhost:3000/oauth/authorize',
			access_id = 'e2794241b12373dc854602f3e90dbd5963dc2e0c9902751b10d6777d5046f95d',
			redirect_url = 'http%3A%2F%2Flocalhost%3A8080%2Foauth%2Fcallback',
			response_type = 'code';

		return (
			<div className="sign-in-section">
				<a
					className="btn btn-default"
					href={`${auth_url}?client_id=${access_id}&redirect_uri=${redirect_url}&response_type=${response_type}`}>
					Sign In with KottansWeather
					<img src="https://pbs.twimg.com/profile_images/447832292023480320/VKvHw9c-.png" alt="" width="50px" height="50px"/>
				</a>
				{this.props.children}
			</div>
		);
	}

	authenticatedUser() {
		return (
			<div>
				<h3>Hello and Welcome!</h3>
				<p>Your access token: <strong>{localStorage.getItem('token')}</strong></p>
			</div>
		)
	}

	render() {
		return (
			<div className="container">
				{localStorage.getItem('token') ? this.authenticatedUser() : this.signInLink()}
			</div>
		);
	}
}
