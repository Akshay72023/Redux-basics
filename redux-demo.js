const redux= require('redux');

const counterReducer=(state={counter:0},action)=>{
        if (action.type === 'increment2') {
            return {
                counter: state.counter + 2
            };
        } else if (action.type === 'decrement2') {
            return {
                counter: state.counter - 2
            };
        
    };
};

const store= redux.createStore(counterReducer);
 
const counterSubscription=()=>{
    const latestState= store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscription);

store.dispatch({type:'increment2'});
store.dispatch({type:'increment2'});
store.dispatch({type:'decrement2'});
