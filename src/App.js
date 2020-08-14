import React from "react";
import "./App.css";
import { BrowserRouter,Route, Switch} from "react-router-dom";
import Addtodo from './pages/Addtodo/Addtodo';
import Listtodo from './pages/Listtodo/Listtodo';
import Todos from './pages/Todos';
import {Provider} from 'react-redux';
import store from './redux/store';


class App extends React.Component {

   constructor(props) {
     super(props);
   };

   render() {
     return (
       <Provider store= {store}>
        <BrowserRouter>
         <div className="App">
         <Switch>
            <Route exact path="/addtolist" component={Addtodo} />
           <Route exact path="/listtodo" component={Listtodo} />  
        
         <Addtodo/>
         <Listtodo />
         </Switch>
         </div>
       </BrowserRouter>
       </Provider>
     );
   }
 }
 export default App;
