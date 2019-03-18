import React, { Component } from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';

class App extends Component {

  constructor() {
    super();

    this.state = 
    {
      foods : [{ name: 'Fried Rice',calories: 500,localize: 'Asian',forMeal: ['Breakfast','Lunch'],ingredient: 'Rice, minced Meat, Oil, Garlic'},
      { name: 'Fish and chips',calories: 350,localize: 'Western',forMeal: ['Lunch','Dinner'],ingredient: 'Fish, french fries, Oil'},
      { name: 'Cake',calories: 230,localize: 'Western',forMeal: ['Breakfast'],ingredient: 'flour, cream, sugar etc'}
    ]
    }
  }



  render() {
    return (
      <div className="col-md-6">
        <h3> Healthy Living, Healthy Eating </h3>
            <br></br>
            <br></br>
        <FormContainer items = {this.state.foods} />
      </div>
    );
  }
}

export default App;
