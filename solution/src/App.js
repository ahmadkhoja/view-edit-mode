import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ViewEditMode from './Components/ViewEditMode'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      properties: [
        {
          id: "title",
          label: "Title",
          tooltip: "Title",
          type: "MultiChoice",
          viewMode: "readonly",
          required: true,
          choices: [
            {
              text: "Mr",
              value: "Mr"
            },
            {
              text: "Mrs",
              value: "Mrs"
            },
            {
              text: "Miss",
              value: "Miss"
            }
          ],
          value: "Mr"
        },
        {
          id: "firstName",
          label: "First Name",
          tooltip: "First Name",
          type: "Text",
          length: 128,
          required: true,
          viewMode: "readonly",
          value: "John"
        },
        {
          id: "lastName",
          label: "Last Name",
          tooltip: "Last Name",
          type: "Text",
          length: 128,
          required: true,
          viewMode: "readonly",
          value: "Smith"
        },
        {
          id: "age",
          label: "Age",
          tooltip: "Age",
          type: "integer",
          minValue: 18,
          maxValue: 150,
          viewMode: "readonly",
          required: false,
          value: 45
        }
      ],
      actions: [
        {
          id: "save",
          label: "Save"
        },
        {
          id: "cancel",
          label: "Cancel"
        }
      ],
      editMode:false
    }
  }
  save = () => {
    alert("Data has Saved successfuly")
}
cancel = () => {
    const copyState = Object.assign({},this.state)
    copyState.properties[0].value = "Mr"
    copyState.properties[1].value = "John"
    copyState.properties[2].value = "Smith"
    copyState.properties[3].value = 45
    this.setState({copyState})
    console.log(this.state.properties[0].value)
    console.log(this.state.properties[1].value)
    console.log(this.state.properties[2].value)
    console.log(this.state.properties[3].value)
    console.log("---------------------")
    alert("Data has been set to default")
}
editModeFun = () => {
  const copyState = Object.assign({},this.state)
  copyState.properties[0].viewMode = "edit"
  copyState.properties[1].viewMode = "edit"
  copyState.properties[2].viewMode = "edit"
  copyState.properties[3].viewMode = "edit"
  this.setState({editMode:true,copyState})
}
viewModeFun = () => {
  const copyState = Object.assign({},this.state)
  copyState.properties[0].viewMode = "readonly"
  copyState.properties[1].viewMode = "readonly"
  copyState.properties[2].viewMode = "readonly"
  copyState.properties[3].viewMode = "readonly"
  this.setState({editMode:false,copyState})
}
onChoiceChange = (e) => {
  const choice = e.target.value
  const copyState = Object.assign({},this.state)  
  copyState.properties[0].value = choice
  this.setState({copyState})
}
onfirstNameChange = (e) => {
  const userFirstName = e.target.value
  const copyState = Object.assign({},this.state)  
  copyState.properties[1].value = userFirstName
  this.setState({copyState})
}
onlastNameChange = (e) => {
  const userLastName = e.target.value
  const copyState = Object.assign({},this.state)  
  copyState.properties[2].value = userLastName
  this.setState({copyState})
}
onAgeChange = (e) => {
  const age = e.target.value
  const copyState = Object.assign({},this.state)  
  copyState.properties[3].value = age
  this.setState({copyState})
}
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' render= {
          (match)=>
            <ViewEditMode 
            history={match.history}
            properties={this.state.properties}
            actions={this.state.actions}
            save={this.save}
            cancel={this.cancel}
            editModeFun={this.editModeFun}
            editMode={this.state.editMode}
            viewModeFun={this.viewModeFun}
            title={this.state.properties[0].value}
            firstName={this.state.properties[1].value}
            lastName={this.state.properties[2].value}
            age={this.state.properties[3].value}
            onChoiceChange={this.onChoiceChange} 
            onfirstNameChange={this.onfirstNameChange} 
            onlastNameChange={this.onlastNameChange}
            onAgeChange={this.onAgeChange}
            />
          }/>
    </Switch>
      </div>
    );
  }
}

export default App;
