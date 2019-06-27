import React from 'react';
import './App.css';
import Confetti from 'react-confetti';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Button } from 'reactstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";

const styles = {
  bounce: {
    animation: 'x 1s infinite',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

function App() {
geta();
function geta(){
  postData('https://demo3091893.mockable.io/jidesh25', {})
  .then(data => { 
    var txt=JSON.stringify(data);
    console.log(txt);
    var obj = JSON.parse(txt);
    console.log(obj);
    if(obj.gender === 'male' )
    {
      document.getElementById('m').src="data:image/jpeg;base64,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";
    }
    else{
      document.getElementById('m').src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ac3449d-a6ae-4a4e-8355-ffddb833c77c/dbnzhza-99e8c36f-7534-4e5d-97a6-af9b28e089ef.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhYzM0NDlkLWE2YWUtNGE0ZS04MzU1LWZmZGRiODMzYzc3Y1wvZGJuemh6YS05OWU4YzM2Zi03NTM0LTRlNWQtOTdhNi1hZjliMjhlMDg5ZWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XmQj3ByejODp-RnH8vD6vi2kpvj_mAfce1TrqjwFS8U";
    }
    document.getElementById('name').innerHTML=obj.name;
    document.getElementById('msg').innerHTML=obj.msg;
    document.getElementById('gender').innerHTML=obj.gender;
  
  }) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = '', data = {}) {
  // Default options are marked with *
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
    .then(response => response.json()); // parses JSON response into native Javascript objects 
  }

}


  return (

    <div className="App">
    <Confetti
  />    

<StyleRoot>

    <h1 style={styles.bounce}>Basic Information using post method of mockable.io api</h1>
</StyleRoot>    
    <a href="https://facebook.com"><img id="m" src="" alt="hah" /></a>

    <br /> 

    <br />
    <div className="b">
    <Route path='/faq' component={() => window.location = 'https://www.mockable.io/a/#/space/demo3091893/rest/QH3b8MAAA'}/>
    </div>
    <button ></button>
    <a href="https://www.mockable.io/a/#/space/demo3091893/rest/QH3b8MAAA">Edit</a>
    <p>Name:<span id="name" ></span>  </p>
    <p>Message:<span id="msg"></span>  </p>
    <p>Gender:<span id ="gender"> </span></p>

    </div>
  );
}

export default App;
