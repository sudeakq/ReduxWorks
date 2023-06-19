import {combineReducers} from "redux"
import {composeWithDevTools} from "react-devtools-extensions"
import changeReducer from "./actions/reducers/changeReducer"


const initialState={

}
const reducers = combineReducers({
change: changeReducer
})
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))
export default store;