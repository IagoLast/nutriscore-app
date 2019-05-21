import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this._computeNutriScore.bind(this)} className="Nutriscore">
          <fieldset>
            <legend> Nutritional Values</legend>
            <label htmlFor="energy">Energy (in kJ)</label>
            <input type="text" id="energy" step="0.0001" onChange={event => this.setState({ energy: event.target.value })} />

            <label htmlFor="totalFat">Total fats (in g)</label>
            <input type="text" id="totalFat" step="0.0001" onChange={event => this.setState({ totalFat: event.target.value })} />


            <label htmlFor="saturatedFat">Saturated fats (in g)</label>
            <input type="text" id="saturatedFat" step="0.0001" onChange={event => this.setState({ saturatedFat: event.target.value })} />


            <label htmlFor="sugar">Sugars (in g)</label>
            <input type="text" id="sugar" step="0.0001" onChange={event => this.setState({ sugar: event.target.value })} />


            <label htmlFor="protein">Protein (in g)</label>
            <input type="text" id="protein" step="0.0001" onChange={event => this.setState({ protein: event.target.value })} />


            <label htmlFor="fibre">Fibre (in g)</label>
            <input type="text" id="fibre" step="0.0001" onChange={event => this.setState({ fibre: event.target.value })} />


            <label htmlFor="salt">Salt (in g)</label>
            <input type="text" id="salt" step="0.0001" onChange={event => this.setState({ salt: event.target.value })} />

            <label htmlFor="vegetableFruitNuts">Ratio of fruit, vegetables and nuts (in %)</label>
            <input type="text" id="vegetableFruitNuts" step="0.0001" onChange={event => this.setState({ vegetableFruitNuts: event.target.value })} />

            <input type="submit" value="Calculate the Nutri-Score" />
          </fieldset>

        </form >
        <h1>
          {this.state.nutriScore}
        </h1>
      </React.Fragment>
    );
  }

  _computeNutriScore(event) {
    event.preventDefault();
    this.setState({ nutriScore: '?' });
  }
}
