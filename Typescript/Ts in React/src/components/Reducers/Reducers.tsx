// import React, { useReducer } from 'react'

// function Reducers() {

//     type CounterState = {
//         count:number
//     }


//     type CounterAction = 
//         {type:"increase"} |
//         {type:"decrease"} | 
//         {type:"reset"}
    


//         const ReducerFunction = (state:CounterState,action:CounterAction):CounterState =>{

//             switch(action.type){
//                 case 'increase':
//                 return {count:state.count + 1};
//                 case 'decrease':
//                 return {count:state.count - 1};
//                 case 'reset':
//                 return {count:state.count =0}
//                 default :
//                 return {count : 0}
//             }
//         }


//         const [state, dispatch] = useReducer(ReducerFunction,{count:0})

//   return (
//     <div>
//         {
//         state.count
//         }
//     <button onClick={()=>dispatch({type:'increase'})}>+ increase </button>
//     <button onClick={()=>dispatch({type:'decrease'})}>- decrease </button>
//     <button onClick={()=>dispatch({type:'reset'})}>reset</button>
   
//     </div>
//   )
// }

// export default Reducers





    type themeState ={
        theme:"light"|"dark"
    }

    type themeAction ={
        type:"toggleAction"
    }

    export const ReducerThemeFunc = (state:themeState,action:themeAction):themeState =>{

        switch(action.type ){
            case 'toggleAction':
                return {theme:state.theme === "light" ? "dark" : "light"}
        }
    }
  
