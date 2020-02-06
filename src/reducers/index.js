import { combineReducers } from "redux"
import postReducer from "./postReducer"
import userReducer from "./userReducer"
import loadingReducer from "../reducers/loadingReducer"

const rootReducer = combineReducers({
	post: postReducer,
	user: userReducer,
	loading: loadingReducer
})

export default rootReducer
