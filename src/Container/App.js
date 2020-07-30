import React, {Component} from 'react';
import "./App.css";
import SideBar from "../components/Sidebar";
import Main from "../components/Main";
import store from "../store";
import  _ from "lodash";

class App extends Component {
  render() {
    const {contact, user, activeUserId} = store.getState();
    
    return(
      <div className="App">
        <SideBar contacts = {_.values(contact.contacts)}/>
        <Main user = {user} activeUserId = {activeUserId}/>
      </div>
    );
  }
}

export default App;