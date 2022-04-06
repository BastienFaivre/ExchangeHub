const initialState = {
	courses: [],
	tips: [],
	info: {
		nationality: "",
		department: "",
		year: new Date().getFullYear,
	},
	form: {
		courses: {
			courseCode: "", // ID of course on kth courses api
			rating: 0,
			title: "",
			description: "",
			equivalentEPFL: "",
			review: "",
		},
		tips: {
			type: "",
			title: "",
			description: "",
		},
		info: {
			nationality: "",
			department: "",
			year: new Date().getFullYear,
		},
	},
}

export function profileReducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state
	}
}
