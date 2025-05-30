import { Component } from "react";

export class LoginForm extends Component{
    constructor(){
        super();
        this.state = {formData:{
            name:"",
            phone:""
        }}

         this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        
    }
    handleChange(event){
       this.setState({formData:
            {...this.state.formData,
                [event.target.name]:event.target.value}});
    }

    handleSubmit(){
        console.log(this.state.formData);
    }


    render(){
        return(
            <div>
                <input type="text" placeholder="enter name" name="name" onChange={this.handleChange}></input>
                 <input type="text" placeholder="enter phone" name="phone" onChange={this.handleChange}></input>
                <input type="button" value="get Name" onClick={this.handleSubmit}></input>
            </div>
        );
    }
}

