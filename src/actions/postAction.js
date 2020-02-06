import { GET_POSTS, POSTS_STATUS } from "../actionTypes"
import { database } from "../database/firebase"

export function getPosts() {
	return (dispatch) => {
		dispatch({
			type: POSTS_STATUS,
			payload: true
		})
		database.on(
			"value",
			(snapshot) => {
				dispatch({
					type: GET_POSTS,
					payload: snapshot.val()
				})
				dispatch({
					type: POSTS_STATUS,
					payload: false
				})
			},
			() => {
				dispatch({
					type: POSTS_STATUS,
					payload: -1
				})
			}
		)
	}
}

export function savePost(post) {
	return (dispatch) => database.push(post)
}

export function editPost(id, post) {
	return (dispatch) => database.child(id).update(post)
}

export function deletePost(id) {
	return (dispatch) => database.child(id).remove()
}

export function saveComment(postId, comment) {
	return (dispatch) => {
		database
			.child(postId)
			.child("comments")
			.push(comment)
	}
}
