import CourseView from "./courseView";

export default function CoursesPresenter() {

	const courseData = {
		"code": "DH2642",
		"title": {
		  "sv": "Interaktionsprogrammering och dynamiska webben",
		  "en": "Interaction Programming and the Dynamic Web"
		},
		"credits": 7.5,
		"creditUnitLabel": "Högskolepoäng",
		"creditUnitAbbr": "hp",
		"href": {
		  "sv": "https://www.kth.se/student/kurser/kurs/DH2642",
		  "en": "https://www.kth.se/student/kurser/kurs/DH2642?l=en"
		},
		"courseWebUrl": {
		  "sv": "https://www.kth.se/social/course/DH2642/",
		  "en": "https://www.kth.se/social/course/DH2642/"
		},
		"info": {
		  "sv": "<p>Interaktionsprogrammering handlar om tekniker och verktyg f&#246;r att skapa interaktion med varierande ramverk, p&#229; olika tekniska plattformar. Du l&#228;r dig att programmera grafiska anv&#228;ndargr&#228;nssnitt, interaktionsintensiva webbtill&#228;mpningar (klient och server sida) och till&#228;mpningar med mobil interaktion. Kursen bygger p&#229; DH2641.</p>",
		  "en": "<p>Interaction programming and dynamic web introduce technologies and tools to support user interaction with various frameworks, on different computing platform. You will learn how to program graphical user interfaces, interaction intensive web applications (client and server side) and mobile interaction. The course is an add-on to DH2641.</p>"
		},
		"state": "ESTABLISHED",
		"courseDeposition": {
		  "sv": "",
		  "en": ""
		},
		"possibilityToCompletion": {
		  "sv": "",
		  "en": ""
		},
		"possibilityToAddition": {
		  "sv": "",
		  "en": ""
		},
		"courseLiterature": {
		  "sv": "",
		  "en": ""
		},
		"requiredEquipment": {
		  "sv": "",
		  "en": ""
		},
		"level": {
		  "sv": "Avancerad nivå",
		  "en": "Second cycle",
		  "level": "2",
		  "emil": "avancerad"
		},
		"school": {
		  "code": "EECS",
		  "org_unit": "J",
		  "name": {
			"sv": "Elektroteknik och datavetenskap",
			"en": "Electrical Engineering and Computer Science"
		  }
		},
		"department": {
		  "code": "JM",
		  "name": {
			"sv": "EECS/Människocentrerad teknologi",
			"en": "EECS/Human Centered Technology"
		  }
		},
		"scbSubject": {
		  "subjectCode": "DT1",
		  "name": {
			"sv": "Datateknik",
			"en": "Computer Technology"
		  }
		},
		"emilSubjects": [
		  {
			"emilID": "757",
			"name": {
			  "sv": "Datateknik (Data)",
			  "en": "Datateknik (Data)"
			}
		  }
		],
		"mainSubjects": [
		  {
			"subjectCode": "DATDD",
			"name": {
			  "sv": "Datalogi och datateknik",
			  "en": "Computer Science and Engineering"
			},
			"specializationCode": "AXX",
			"specializationName": {
			  "sv": "Avancerad nivå",
			  "en": " "
			}
		  }
		],
		"rounds": [
		  {
			"startTerm": "20231",
			"n": "1",
			"endTerm": "20231",
			"state": "APPROVED"
		  },
		  {
			"startTerm": "20222",
			"n": "1",
			"endTerm": "20222",
			"state": "APPROVED"
		  },
		  {
			"startTerm": "20221",
			"n": "1",
			"endTerm": "20221",
			"state": "APPROVED"
		  },
		  {
			"startTerm": "20212",
			"n": "1",
			"endTerm": "20212",
			"state": "APPROVED"
		  }
		]
	  };

	  const comments = [{
		  title: "Very good course!",
		  rating: 4.5,
		  difficulty: "Intermediate",
		  equivalence: "Programmation web",
		  description: "This course is awesome, I learnt so much! I really recommend it.",
		  forname: "Bastien",
		  lastname: "Faivre",
		  contact: "bastien.faivre@epfl.ch",
		  uuid: 1
	  },{
		title: "Horrible!",
		rating: 1,
		difficulty: "Advanced",
		equivalence: "Programmation web",
		description: "This was the most difficult I had during my exchange, I spent so much time on all the assignments. I really do not recommend this course.",
		forname: "Philip",
		lastname: "Hamelink",
		contact: "philip.hamelink@epfl.ch",
		uuid: 2
	}]

	return (
		<CourseView courseData={courseData} comments={comments} />
	);
}
