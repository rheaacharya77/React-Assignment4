import React from 'react';
import './Listtodo.css';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Addtodo from './pages/Addtodo/Addtodo';

class Listtodo extends React.Component{        
           render(){
               const todos = this.props.todos;
               return(
                   <div>
                    <h2>Todos</h2>
                    <p>{todos.map(todo => <div></div>)}
                    </div>
                    </p>
                    
                    <Link to ='/addtodo'><h1>Return to Addlist</h1> </Link>
                  </div>
                   )}    
       
        }


        const mapStatetoprops = state => {
            return {
                todos: state.todos
            }
        }

           export default connect{mapStatetoprops}(Listtodo);