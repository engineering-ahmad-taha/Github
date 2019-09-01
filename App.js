import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//https://api.github.com/users/john

import UserForm from './components/UserForm';



class App extends Component {

  state = {
    repos:null,
    avatarUrl:'https://via.placeholder.com/150',
    thecompany:""
      }




  getUser = (e) => {
    e.preventDefault();

    const user = e.target.elements.username.value;


if(user){

  axios.get(`https://api.github.com/users/${user}`).then((res) => {

    const repos = res.data.public_repos;
    this.setState({ avatarUrl:res.data.avatar_url })
    // this.setState({repos:repos})
    this.setState({repos})
    this.setState({thecompany:res.data.company})
    console.log(res);

  })

} else return;

}

  render() { 
    return ( 
      <div className="App">
      <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
      </header>

      <UserForm getUser={this.getUser} />


      <img src={this.state.avatarUrl} width="150" alt="git hub user img "/>

      {this.state.repos ? <p>Number  of repose: {this.state.repos}</p> : <p>Please enter a username.</p> }

      {this.state.thecompany}
    </div>
     );
  }
}
 
export default App;







































// <p>Please enter a username.</p> }
// {this.state.repos ? <p>Number  of repose: {this.state.repos}</p> :





// {/* if(this.state.repos){
//   <p>Number  of repose: {this.state.repos}</p> 
// }else{
//   <p>Please enter a username.</p> 
// } */}
