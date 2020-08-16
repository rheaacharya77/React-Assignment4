import React from 'react';
import './Addtodo.css';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { addtodo } from '../../redux/action';



class Addtodo extends React.Component{

    
        constructor(props) {
            super(props);  
            this.state = {
                text: " "
            }
            
           
            };

            addTodo = (e) => {
                e.preventDefault();
                this.props.updatelist(this.state.text);
                this.setState({
                    text:""
                })
                              }
            
             handleInput = (e) => {
                   this.setState({
                       text: e.target.value
                   })
                 }

            
           render() {
            
               return(
            <div>
                <form className ="todo-form">
                    <input type="text" placeholder="Enter Tasks" 
                    value={this.state.text} 
                    onChange={this.handleInput}/>
                   <button type="submit" onClick={this.addTodo}>Add</button>
               </form>
               <Link to="/listtodo"><h1>View List</h1></Link>
            </div>
               );
           }
        }


        const mapDispatchToProps = dispatch => {
            return {
                 updatelist: (todos)=> dispatch(addtodo(todos))
            }
        }

        const reduxtodo = connect(null, mapDispatchToProps)(Addtodo); 
        export default reduxtodo;  

