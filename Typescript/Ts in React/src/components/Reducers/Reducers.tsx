import React from 'react'

function Reducers() {

    type CounterState = {
        count:number
    }


    type CounterAction = 
        {type:"increase"} |
        {type:"decrease"} | 
        {type:"reset"}
    


        const ReducerFunction = (state:CounterState,action:CounterAction):CounterState =>{

            switch(action.type){
                case 'increase':
                return {count:state.count + 1};
                case 'decrease':
                return {count:state.count - 1};
                case 'reset':
                return {count:state.count =0}
                default :
                return {count : 0}
            }
        }


  return (
    <div>Reducers</div>
  )
}

export default Reducers