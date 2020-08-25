import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const childNames = ['Karim','Rahim','Abit','Sulaiman']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustator', price:'$90.99'},
    {name:'Dreamewaver', price:'$90.99'},
    {name:'Premier pro', price:'$90.99'}
    
  ]
  return (
    <div className="App">
      <header className="App-header">
    
      {
        products.map(product => <li>{product.name}</li>)
      }

      {
        childNames.map(child => child )
      }

      <Counter></Counter>



      <Users></Users>





        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Product name={products[0].name}></Product>
        <Person name={childNames[0]} position="myself"></Person>
        <Person name="Shurovi Akther Jaahan" position="mother"></Person>
        <Person name="Abdul Khaleque" position="father"></Person>
      </header>
    </div>
  );

    function Product(props){
      const productStyle={
        border:'1px solid gray',
        borderRadius:'5px',
        backgroundColor: 'lightgray',
        height:'200px',
        float:'left'
      }
      return (
        <div style={productStyle}>
           <h2>Name:{props.name}</h2>
           
           <button>Buy Now</button>
        </div>
      )
    }

  function Person(props){
    const personStyle = {
      border:'2px solid red',
      margin:'10px'
    }
    console.log(props)
    return (
      <div style={personStyle}>
      <h1>Name: {props.name}</h1>
    <p>position:{props.position}</p>
      
      </div>
      )
    
  }

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () =>  setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onclick={() => setCount(count-1)}>Decrease</button>
      <button onMouseMove={() => setCount(count+1)}>Increase</button>
    </div>
  )
}





function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
      {
       users.map(user => <li>{user.phone}</li>)
      }
      </ul>
     
      
    </div>  
  )
}


}

export default App;
