import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'

class App extends Component {

	state = {
		characters : []
	};

	removeCharacter = index => {
	    const { characters } = this.state;

	    this.setState({
	        characters: characters.filter((character, i) => { 
	            return i !== index;
	        })
	    });
	}

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

	render() {
		// const name = 'Igor Ventorim';
		// const meeting = <h1>Hello, {name} !!!</h1>;
		// const characters = [
		// 	{
  //               'name': 'Charlie',
  //               'job': 'Janitor'
  //           },
  //           {
  //               'name': 'Mac',
  //               'job': 'Bouncer'
  //           },
  //           {
  //               'name': 'Dee',
  //               'job': 'Aspring actress'
  //           },
  //           {
  //               'name': 'Dennis',
  //               'job': 'Bartender'
  //           }
		// ];

		return (
			      <div className="container">
                <Table 
                	characterData={this.state.characters}
                	removeCharacter={this.removeCharacter}
            	/>
              <br/><br/>
            	<Form handleSubmit={this.handleSubmit}/>
              <br/><br/>
            </div>


		);
	}
}

export default App;