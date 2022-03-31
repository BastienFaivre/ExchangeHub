const model = {
	profile: {
		courses: [
			{
				id: 123, // ID of course on kth courses api
				title: "Web dev",
				description: "course about web dev",
				url: "https://kth.se/webdevcourse",
				equivalentEPFL: "func prog",
				stars: 3.5,
				receivedGrade: "A",
				review: "it was good",
			},
		],
		tips: [
			{
				type:
					"housing" ||
					"grocery shopping" ||
					"nightlife" ||
					"travelling" ||
					"visa",
				title: "How I got housing",
				description: "It was difficult",
			},
		],
		info: {
			nationality: "CH",
			section: "Computer Science" || "Biology",
			year: 2021,
		},
		form: {
			courses: {
				id: 123, // ID of course on kth courses api
				title: "Web dev",
				description: "course about web dev",
				equivalentEPFL: "func prog",
				review: "still busy doing it",
			},
			tips: {
				type: "housing",
				title: "How I got housing",
				description: "Still thinking what to write...",
			},
			info: {
				nationality: "NL",
			},
		},
	},
}
