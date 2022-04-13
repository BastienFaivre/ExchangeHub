const initialState = {
    courses: [],
    tips: [],
    info: {
        nationality: "",
        department: "",
        year: new Date().getFullYear,
    },
    form: {
        course: {
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
        case "PROFILE_RESET_FORM":
            return {
                ...state,
                form: {
                    course: {
                        courseCode: "",
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
        case "PROFILE_SUBMIT_FORM":
            return {
                courses: state.courses.push(state.form.course),
                tips: state.tips.push(state.form.tips),
                info: state.form.info,
                form: {
                    course: {
                        courseCode: "",
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
        default:
            return state
    }
}
