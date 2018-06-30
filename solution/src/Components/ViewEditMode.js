import React from 'react'
import FormGenerator from './FormGenerator'


export default class ViewEditMode extends React.Component{
    
    view = () => {
        this.props.viewModeFun()
    }
    edit = () => {
        this.props.editModeFun()
    }
    
    render(){
        return(
            <div>
                <FormGenerator 
                properties={this.props.properties} 
                actions={this.props.actions} 
                save={this.props.save} 
                cancel={this.props.cancel} 
                editMode={this.props.editMode}
                title = {this.props.title}
                firstName = {this.props.firstName}
                lastName = {this.props.lastName}
                age = {this.props.age}
                onChoiceChange={this.props.onChoiceChange} 
                onfirstNameChange={this.props.onfirstNameChange} 
                onlastNameChange={this.props.onlastNameChange}
                onAgeChange={this.props.onAgeChange}
                />
                <button onClick={this.view}>view</button>
                <button onClick={this.edit}>Edit</button>
            </div>
        )
    }
}