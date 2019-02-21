import React, {Component} from 'react'

class Api extends Component {
	state = {
		data: []
	};


	componentDidMount() {
		const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
		fetch(url)
			.then(res => res.json())
			.then(result => {
				this.setState({
					data : result
				});
			})
	}

	render() {
		console.log(this.state);
		const { data } = this.state;
		console.log(data);
		const result = data.map((entry, index) => {
			return <li key={index}>{entry}</li>;
		});

		return <ul>{result}</ul>;
	}
}

export default Api;