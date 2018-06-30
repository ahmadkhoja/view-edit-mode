import React from 'react'


const InputControl = ({label,id,type,required,choices,onChoiceChange,title,firstName,onfirstNameChange,lastName,onlastNameChange,length,min,max,defaultValue,age,onAgeChange,viewMode}) => {
    
    // View Mode
    if(viewMode === 'readonly'){
        if(type === 'MultiChoice'){
            return(
                <label> {label}
                    <select value={title} name={id} required={required} onChange={onChoiceChange} disabled>
                        {choices.map( (choice,index) => <option value={choice.value} key={index}>{choice.text}</option>)}
                    </select>
                    <br/>
                </label>
            ) 
        }else if(type === 'Text' && id === "firstName" && length){
            return(
            <label> {label}
                <input id={id} name={id} type={type.toLowerCase()} required={required} value={firstName}  onChange={onfirstNameChange} maxLength={length}  disabled/>
                <br/>
            </label>
            )
        }else if(type === 'Text' && id === "lastName"){
            return(
            <label> {label}
                <input id={id} maxLength={length} name={id} type={type.toLowerCase()} required={required} value={lastName}  onChange={onlastNameChange} disabled />
                <br/>
            </label>
            )
        }else if(type === 'integer'){
            return(
                <label> {label}
                    <input name={id} type="number" required={required} min={min} max={max} value={age} onChange={onAgeChange}disabled />
                    <br/>
                </label>
                )
        }

    // Edit Mode 
    }else{
        if(type === 'MultiChoice'){
            return(
                <label> {label}
                    <select value={title} name={id} required={required} onChange={onChoiceChange} >
                        {choices.map( (choice,index) => <option value={choice.value} key={index}>{choice.text}</option>)}
                    </select>
                    <br/>
                </label>
            ) 
        }else if(type === 'Text' && id === "firstName" && length){
            return(
            <label> {label}
                <input id={id} name={id} type={type.toLowerCase()} required={required} value={firstName}  onChange={onfirstNameChange} maxLength={length} />
                <br/>
            </label>
            )
        }else if(type === 'Text' && id === "lastName"){
            return(
            <label> {label}
                <input id={id} maxLength={length} name={id} type={type.toLowerCase()} required={required} value={lastName}  onChange={onlastNameChange} />
                <br/>
            </label>
            )
        }else if(type === 'integer'){
            return(
                <label> {label}
                    <input name={id} type="number" required={required} min={min} max={max} value={age} onChange={onAgeChange} />
                    <br/>
                </label>
                )
        }
    }
}

class FormGenerator extends React.Component  {

onFormSubmit = (e) => {
    e.preventDefault()
}

render(){
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
               
            { this.props.properties.map((component,index) => 
                <InputControl
                    key={index} 
                    label={this.props.properties[index].label} 
                    id={this.props.properties[index].id} 
                    type={this.props.properties[index].type} 
                    required={this.props.properties[index].required} 
                    choices={this.props.properties[index].choices} 
                    length={this.props.properties[index].length}
                    min={this.props.properties[index].minValue}
                    max={this.props.properties[index].maxValue}
                    viewMode={this.props.properties[index].viewMode}
                    title = {this.props.title}
                    firstName = {this.props.firstName}
                    lastName = {this.props.lastName}
                    age = {this.props.age}
                    onChoiceChange={this.props.onChoiceChange} 
                    onfirstNameChange={this.props.onfirstNameChange} 
                    onlastNameChange={this.props.onlastNameChange}
                    onAgeChange={this.props.onAgeChange}
                />)
            }
            
            { this.props.editMode ?
                <div>  
                    <input type="submit" value={this.props.actions[0].label} onClick={this.props.save}/>
                    <input type="submit" value={this.props.actions[1].label} onClick={this.props.cancel} />
                </div>
               : null
            }
            </form>
            <br/>
            
        </div>
    )
  }   
}

export default FormGenerator;