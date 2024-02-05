// when we have more states to manage so ,in that case we use UseReducer instead of useState

// const initialState = 0; 

const [state, dispatch] = useReducer(reducer , initialState);
// const [state, dispatch] = useReducer(reducer , 0);

/*

reducer accepts a state and an action
we can define reducer function within component , outside component or we can also define it in another file 
 
state is like initial state 
it needs to return something 

dispatch - to trigger the action method
and we pass some value with (type) attribute and accordingly with the help of type , 
we can perform action which we want
*/


import React , {useReducer} from 'React';

const initialState = 0;

const reducer = (state , action) =>{
    console.log(state , action);

    if(action.type === "INCREMENT"){
        return state + 1;
    }

    if(action.type === "DECREMENT"){
        return state - 1;
    }
    
    return state;
}



const UseReducer = ()=>{

    const [state , dispatch] = useReducer(reducer , initialState);
    const [value , setValue] = useState(0);

    return(
        <>
           <div>
              <p> value </p>
               <div className='btnStylePosition'>
                    <button onClick={()=> dispatch({type: "INCREMENT"})}> Inc </button>
                    <button onClick={()=> dispatch({type: "DECREMENT"})}> Dec </button>
               </div>
           </div>
        </>
    )
}






