import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import List from './List'
import ToDo from './ToDo';
import Greet from './Greet';
import Employee from './Employee';
import CreateEmployee from './CreateEmployee';
import CounterClass from "./components/CounterClass"
import CounterFunction from './components/CounterFunction';
import Person from './components/Person';
import PersonFunction from "./components/PersonFunction";
import FormByFunction from "./components/FormByFunction";
import Header from './components/header';
import Parent from './components/Parent';
import Company from './components/company/Company';
import StateHook from './components/hooks/StateHook';
import EffectHook from './components/hooks/EffectHook';
import ReducerHook from './components/hooks/ReducerHook';
import ContextHook from './components/hooks/ContextHook';
import MemoHooks from './components/hooks/MemoHooks';
import ReducerHookWithOnchange from './components/hooks/ReducerHookWithOnChnage';
import RefHooks from './components/hooks/RefHook';
import DemoUseEffect from './components/hooks/DemoUseEffect'
import { Provider } from 'react-redux';
import {createStore} from"redux";
import rootReducer from './reducers/rootReducer';
var cname=null;
const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <Greet/>
    // <Employee/>
    // <CreateEmployee componenetName="Employee123"/>

    // <div>
    //   <h1>-----------Class Based Component</h1>
    //    <CounterClass/>

    //     <h1>-----Functional Componenet------</h1>
    //     <CounterFunction/>
    // </div>
    <div>
      {/* <Person/> */}
    {/* <PersonFunction/> */}
    {/* <FormByFunction/> */}
    {/* <Header/> */}
    {/* <Parent/> */}
    {/* <Company/> */}

   {/* /* REACT hooks */ }
{/* <StateHook/>
<EffectHook/>
<ReducerHook/>
<ReducerHookWithOnchange/>

<ContextHook/> */}

{/* <MemoHooks/> */}
{/* <RefHooks/> */}
{/* <EffectHook/>
 <DemoUseEffect/> */}

 <Provider store={store}>
  <App/>
 </Provider>
    
    </div>
    
   
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
