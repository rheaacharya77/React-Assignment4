import React from 'react';
import './Addtodo.css';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {addTodo} from '../redux/action';


class Addtodo extends React.Component{

    
        constructor(props) {
            super(props);  
          
           
            };
            
             handleInput = (e) => {
                 todos: {
                 text: e.target.value,
                        } 
                 }

             addTodo = {e} => {
                 e.preventDefault();
        
                 this.addTodo(this.state.text)
                //  this.addTodo(text)
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
                 updatelist: {todos} => dispatch(addTodo(todos))
            }
        }
         
        const Addtodo = connect(null, mapDispatchToProps)(Addtodo);

