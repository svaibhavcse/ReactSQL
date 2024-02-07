 import "./App.css";
// import Welcome from "./components/Welcome";
// import { Class } from "./components/Class";
// import { Currency } from "./components/Currency";
// //import logo from './logo.svg';
// import Converter from "./components/converter";
// import Task from "./components/Task";
// import Calculator from "./components/Calculator";
// import AddList from "./components/AddList";
// import Crud from "./components/Crud";
// import Todo from "./components/Todo";
// import React, { useReducer, useState } from "react";
// import Task1 from "./components/Task1";
// import Task1a from "./components/Task1a";

// export const one=React.createContext()


// const init=0
// function App() {
// const [num, setNum] = useState(0);

//  const reduce=(state,action)=>{

//   switch(action.type){
//     case "inc":
//       return state+1
//     case "dec":
//       return   state - 1 
//     case "reset":
//       return 0
//     case "userinc":
//       return state+ parseInt(num)
//     default:
//       return state
//   }
//  }
// const [count, dispatch] = useReducer(reduce,init);



//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* class <img src={logo} className="App-logo" /> */}
//         {/* {/* <h1>Welcome ✌️</h1>
//         <Welcome value="properties" />
//         <Class value="class">
//           {" "}
//           <p>This is a children</p> <p>another children</p>{" "}
//         </Class>
//         <Currency />
//         <div style={{border:"2px solid white"}}>
//           <Converter />
           
//         </div> */}
//         {/* <Task />
        
//         <br />
//         <div style={{ border: "2px solid white" }}>
//           <Calculator /> 

//         </div> 
//         <br />
//         <AddList />
//         <br/>
//         <hr/> 
//         <Crud /> 
//       <Todo/> */}
//         VALUE : {count}
//         <one.Provider value={{val1:dispatch,val2:setNum}}>
          
//             <Task1 />
//             <Task1a/>
          
//         </one.Provider>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import My from './functionalcomponents/My'
import Users from './authentication/Users'
export default function App() {
  return (
    <div >
      {/* <My /> */}
      <Users/>
    </div>
  )
}

