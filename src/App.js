// import logo from './logo.svg';


import {BrowserRouter} from 'react-router-dom'

import Setup from './Tasty-Kitechn/setup';

function App() {
  return (
    <div >
   
      <BrowserRouter>
       
      <Setup/>
      {/* <Switch>
       <Route exact path="/login" component={LoginForm}/>
         {/* <Header/> */}
       {/* <Route exact path="/" component={Home}/>
       <Route exact path ="/cart" component={Cart}/>
       <Route exact path="*" component={NotFound}/>
       </Switch> */} 
      </BrowserRouter>
     
      {/* <Applies/> */}
      {/* <h1>swathikondreddy</h1> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
