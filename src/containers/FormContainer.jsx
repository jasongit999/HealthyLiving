import React, {Component} from 'react';  

/* Import Components */
import CheckBox from '../components/CheckBox';  
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button';
import Autocomplete from '../components/Autocomplete';
require("../styles.css");

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        calories: '',
        localize: '',
        forMeal: [],
        ingredient: ''

      },

      cuisinePlaceOptions: ['Asian', 'Western', 'Others'],
      mealForOptions: ['Breakfast', 'Lunch', 'Dinner'],
      addedList:[]

    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
  
  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, name: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleAge(e) {
       let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, age: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }


  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, ingredient: value
      }
      }), ()=>console.log(this.state.newUser))
  }


  handleCheckBox(e) {

    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.newUser.forMeal.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.forMeal.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.forMeal, newSelection];
    }

      this.setState( prevState => ({ newUser:
        {...prevState.newUser, forMeal: newSelectionArray }
      })
      )
}



handleSelection(foodName) {

  //let value = e.target.value;
  //let name = e.target.name;
  let items = this.props.items;
  let foundItem = items.filter(x => { return x.name == foodName})
  this.setState( { newUser : foundItem.length > 0 ? foundItem[0] : null});
  // this.setState( prevState => ({ newUser : 
  //   {...prevState.newUser, [name]: value
  //   }
  // }), () => console.log(this.state.newUser))
}


  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    let userList = this.state.addedList;
    userList.push(userData);
    this.setState({addedList : userList});

    // fetch('http://example.com',{
    //     method: "POST",
    //     body: JSON.stringify(userData),
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //   }).then(response => {
    //     response.json().then(data =>{
    //       console.log("Successful" + data);
    //     })
    // })
  }   

  handleClearForm(e) {
  
      e.preventDefault();
      this.setState({ 
        newUser: {
          name: '',
          calories: '',
          localize: '',
          forMeal: [],
          ingredient: ''
        },
      })
  }

  render() {

    return (
    <div>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
            <i>**pls input food name(fried, fish, cake etc) and hit enter for info </i>
            <br></br>
            <br></br>
            <b>Find Food : </b>


            <Autocomplete
              suggestions={this.props.items.map(o => { return o.name})}
              handleSelection = {this.handleSelection}
            />
            <br></br>
            <br></br>
            <br></br>
            <Input inputType={'text'}
                   title= {'Food Name'} 
                   name= {'name'}
                   value={this.state.newUser.name} 
                   placeholder = {'Enter food name'}
                   handleChange = {this.handleInput}
                   
                   /> {/* Name of the user */}
        
          <Input inputType={'number'} 
                name={'calories'}
                 title= {'Calories'} 
                 value={this.state.newUser.calories} 
                placeholder = {'Enter food Calories'}
                 handleChange={this.handleAge} /> {/* Age */} 


          <Select title={'Cuisine Originating From'}
                  name={'localize'}
                  options = {this.state.cuisinePlaceOptions} 
                  value = {this.state.newUser.localize}
                  placeholder = {'Select food of originating'}
                  handleChange = {this.handleInput}
                  /> {/* Age Selection */}


          {/* <CheckBox  title={'For Breakfast / Lunch / Dinner'}
                  name={'forMeal'}
                  options={this.state.mealForOptions}
                  selectedOptions = { this.state.newUser.forMeal}
                  handleChange={this.handleCheckBox}
                   /> */}
                    {/* Skill */}


          <TextArea
            title={'Ingredients'}
            rows={10}
            value={this.state.newUser.ingredient}
            name={'ingredient'}
            handleChange={this.handleTextArea}
            placeholder={'Describe the ingredients'} />{/* About you */}

          {/* <Button 
              action = {this.handleFormSubmit}
              type = {'primary'} 
              title = {'Submit'} 
            style={buttonStyle}
          /> 
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> 
           */}
        </form>
  
        
      {/* <table border="1">
        <tbody>{data}</tbody>
      </table> */}

      </div>
    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;