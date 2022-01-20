const { createStore } = require('redux')

const initState = {
    counter: 0
}

const actions = {
    REDUCE: {
        type: 'REDUCE',
        info: 'Will reduce the counter'
    },
    INCREASE: {
        type: 'INCREASE',
        info: 'Will reduce the counter'
    }
}

const callAction = ( action ) => actions[ action ]

const reducer = ( state = initState, action ) => {
    switch( action.type ){
        case 'REDUCE':return {
            ...state, counter: state.counter - 1
        }
        case 'INCREASE':return {
            ...state, counter: state.counter + 1
        }
        default:
            return state
    }
}

//create a store which will hold a reducer
const store = createStore( reducer )

//subcscribe to the store and return unsubscribe
 const unsubscribe = store.subscribe( () => { console.log( store.getState() ) } )
 store.dispatch( callAction( 'REDUCE' ) )
 store.dispatch( callAction( 'INCREASE' ) )
 store.dispatch( callAction( 'REDUCE' ) )
 store.dispatch( callAction( 'INCREASE' ) )
 unsubscribe()

