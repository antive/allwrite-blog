import { GET_POSTS } from "../actionTypes"

export default function(state = {}, action) {
	switch (action.type) {
		case GET_POSTS:
			return action.payload
		default:
			return state
	}
}
