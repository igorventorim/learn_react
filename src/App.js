import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'

class App extends Component {

	state = {
		characters : [
			// {
   //              'name': 'Charlie',
   //              'job': 'Janitor'
   //          },
   //          {
   //              'name': 'Mac',
   //              'job': 'Bouncer'
   //          },
   //          {
   //              'name': 'Dee',
   //              'job': 'Aspring actress'
   //          },
   //          {
   //              'name': 'Dennis',
   //              'job': 'Bartender'
   //          }
		]
	};

	removeCharacter = index => {
	    const { characters } = this.state;

	    this.setState({
	        characters: characters.filter((character, i) => { 
	            return i !== index;
	        })
	    });
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

            	<Form />
            </div>
		);
	}
}

export default App;