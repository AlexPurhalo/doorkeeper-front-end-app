// Node modules import
import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router';

export default class Callback extends Component {
	componentWillMount() {
		const client_id = 'e2794241b12373dc854602f3e90dbd5963dc2e0c9902751b10d6777d5046f95d',
			oauth_secret = '37f0d07f9253595e3723f15101ebe15f5fea0cdecd7c1657557e8ec68746f632',
			code = this.props.location.query.code,
			redirect_uri = 'http%3A%2F%2Flocalhost%3A8080%2Foauth%2Fcallback';

		const req_params = `client_id=${client_id}&client_secret=${oauth_secret}&code=${code}&access_type=offline&grant_type=authorization_code&redirect_uri=${redirect_uri}`;
		// const req_params = `client_id=e2794241b12373dc854602f3e90dbd5963dc2e0c9902751b10d6777d5046f95d&client_secret=37f0d07f9253595e3723f15101ebe15f5fea0cdecd7c1657557e8ec68746f632&code=${this.props.location.query.code}&grant_type=authorization_code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Foauth%2Fcallback`
		const server_base_url = 'http://localhost:3000';
		axios.post(`${server_base_url}/oauth/token`, req_params)
			.then(function (response) {
				console.log(response.data.access_token);
				localStorage.setItem('token', response.data.access_token);
			});
		axios.post(`${server_base_url}/oauth/token`, req_params).then(console.log());
	}

	render() {
		return (
			<div>
				<Link to="/">Start work with App!</Link>
			</div>
		);
	}
}
