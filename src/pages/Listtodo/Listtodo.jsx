import React from 'react';
import './Listtodo.css';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";



class Listtodo extends React.Component{        
           render(){
               const todos = this.props.todos;
               return(
                <div>
                    <h2>Todos</h2>
                    <p>{todos.map(todo => <div>{todo}</div>)}
                    </p>
                    <Link to ='/addtolist'><h1>Return to Addlist</h1> </Link>
                </div>
                   )}    
       
        }


        const mapStatetoprops = state => {
            return {
                todos: state.todos
            }
        };

           const displaylist =  connect(mapStatetoprops)(Listtodo);

           export default displaylist;