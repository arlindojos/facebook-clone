import React from 'react';
import Layout from './Layout';

function App() {
  const user = 'j';
  if(!user){
    return (<h1>Login</h1>)
  } else {
    return (<Layout />)
  }
}

export default App;
