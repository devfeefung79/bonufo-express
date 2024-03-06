# English Writing Response Platform APIs

## Introduction

This is a backend project providing APIs to support a English writiing response platform (see the frontend project details at https://github.com/devfeefung79/bonufo-react) with Express, JavaScript and MongoDB.

## Installation

Clone the repository:
```
git clone [repository_url]
```

Install dependencies
```
npm install
```

## Usage

To start the server, run the following command:
```
npm start
```

The API will be accessible at `http://localhost:3001` by default. You can change the port in `index.js` file.

### Swagger UI

This project integrates with Swagger and Open API Specification 3.0, you can access `http://localhost:3001/api-docs` for exploring available APIs.

## API Endpoints

### User

1. Register Account
   - Method: POST
   - Endpoint: `/user/signup`
   - Description: Register a new user account
   - Request Body:
     ```json
     {
		"username": "feena1882024",
		"email": "feena1882024@gmail.com",
		"password": "12345678",
		"role": "Learner"
     }
     ```

1. Login Account
   - Method: POST
   - Endpoint: `/user/login`
   - Description: Authenticate a user and return a token
   - Request Body:
     ```json
	 {
		"username": "feenafung7295",
		"password": "12345678"
	 }
     ```
   - Response:
     ```json
     {
		"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk1OWI4N2Y3NzgxZDViYjBhYmRjOWYiLCJ1c2VybmFtZSI6ImZlZW5hZnVuZzcyOTUiLCJlbWFpbCI6ImZlZW5hZnVuZzcyOTVAZ21haWwuY29tIiwicm9sZSI6IlR1dG9yIiwiaWF0IjoxNzA5NjYzNTAzLCJleHAiOjE3MDk2NjUzMDN9.7cXbTXHlkF3e5x_zUU5lpVXO2JaTuVw5d3PjkaKtbAc"
     }
     ```

1. Refresh Token
   - Method: Get
   - Endpoint: `/user/refresh`
   - Description: Get access token

1. Logout User
   - Method: Get 
   - Endpoint: `/user/logout`
   - Description: Clear user token

1. Get User by Id
   - Method: Get
   - Endpoint: `/user/{id}`
   - Description: Retrieve a user by id
   - Response:
     ```json
     {
		"_id": "62732d9a1403354a60762ebd",
		"username": "feena1882",
		"email": "feenafung1882@gmail.com",
		"password": "$2b$10$nZrKYNEkWBw0dIffz4NhTedP77/.c1KW6POLWn49K.x78CsfEfbh.",
		"role": "Tutor",
		"__v": 0
	 }
     ```

### Question

1. Get All Topics
   - Method: Get
   - Endpoint: `/question/topics`
   - Description: Retrieve all question topics
   - Response:
     ```json
     [
		{
			"_id": "62704465284c257466f0f8d9",
			"label": "Travel"
		},
		{
			"_id": "62704465284c257466f0f8d6",
			"label": "Social Media"
		},
		{
			"_id": "62704465284c257466f0f8dd",
			"label": "Language"
		},
		{
			"_id": "62704465284c257466f0f8d7",
			"label": "Education"
		},
		{
			"_id": "62704465284c257466f0f8e4",
			"label": "Communication"
		},
		{
			"_id": "62704465284c257466f0f8e2",
			"label": "Globalisation"
		},
		{
			"_id": "62704465284c257466f0f8e7",
			"label": "Sport"
		},
		{
			"_id": "62704465284c257466f0f8e3",
			"label": "Economics"
		},
		{
			"_id": "62704465284c257466f0f8e6",
			"label": "Transport"
		},
		{
			"_id": "62704465284c257466f0f8e8",
			"label": "Art"
		},
		{
			"_id": "62704465284c257466f0f8db",
			"label": "Public Transport"
		},
		{
			"_id": "62704465284c257466f0f8dc",
			"label": "Justice/Crime"
		},
		{
			"_id": "62704465284c257466f0f8de",
			"label": "Environment"
		},
		{
			"_id": "62704465284c257466f0f8d8",
			"label": "Employment"
		},
		{
			"_id": "62704465284c257466f0f8da",
			"label": "Government"
		},
		{
			"_id": "62704465284c257466f0f8df",
			"label": "Technology"
		},
		{
			"_id": "62704465284c257466f0f8e0",
			"label": "Health"
		},
		{
			"_id": "62704465284c257466f0f8e1",
			"label": "Society"
		},
		{
			"_id": "62704465284c257466f0f8e5",
			"label": "Family and Children"
		}
	 ]
     ```
  
1. Get All Question Types
   - Method: Get
   - Endpoint: `/question/question-types`
   - Description: Retrieve all question types
   - Response:
     ```json
     [
		{
			"_id": "6270445b284c257466f0f8ce",
			"label": "Preference"
		},
		{
			"_id": "6270445b284c257466f0f8cd",
			"label": "Agree or Disagree"
		},
		{
			"_id": "6270445b284c257466f0f8cf",
			"label": "Description / Explanation"
		},
		{
			"_id": "6270445b284c257466f0f8d0",
			"label": "If / Imaginary"
		},
		{
			"_id": "6270445b284c257466f0f8d1",
			"label": "Compare & Contrast"
		}
	 ]
     ```
  
1. Get All Exams
   - Method: Get
   - Endpoint: `/question/exams`
   - Description: Retrieve all question related exams
   - Response:
     ```json
     [
		{
			"_id": "62704496284c257466f0f8fb",
			"label": "IELTS General Training"
		},
		{
			"_id": "62704496284c257466f0f8fc",
			"label": "IELTS Academic"
		},
		{
			"_id": "62704496284c257466f0f8fe",
			"label": "TOEFL PBT"
		},
		{
			"_id": "62704496284c257466f0f8fd",
			"label": "TOEFL iBT"
		},
		{
			"_id": "62899829fca14c127cc5e244",
			"label": "CELPIP"
		}
	 ]
     ```
  
1. Get All Questions
   - Method: Get
   - Endpoint: `/question/all`
   - Description: Retrieve all question records
   - Response:
     ```json
     [
	 	{
			"_id": "65ba7f65f07eafe67a8fc87c",
			"topic": [
				"Globalisation"
			],
			"questionType": [
				"Preference"
			],
			"relatedExam": [
				"CELPIP"
			],
			"question": "Explore the benefits and drawbacks of biofuel production."
		},
		{
			"_id": "65ba7f65f07eafe67a8fc87e",
			"topic": [
				"Social Media"
			],
			"questionType": [
				"Agree or Disagree"
			],
			"relatedExam": [
				"CELPIP"
			],
			"question": "Write about the importance of promoting eco-tourism for environmental conservation."
		},
		{
			"_id": "65ba7f65f07eafe67a8fc880",
			"topic": [
				"Health"
			],
			"questionType": [
				"Preference"
			],
			"relatedExam": [
				"IELTS General Training"
			],
			"question": "Explore the benefits and challenges of implementing artificial intelligence in education."
		}
	 ]
     ```

1. Get Question by Id
   - Method: Get
   - Endpoint: `/question/{id}`
   - Description: Retrieve a question with id
   - Request Body:
   - Response:
     ```json
     {
		"topic": [
			"Employment"
		],
		"questionType": [
			"Preference"
		],
		"relatedExam": [
			"CELPIP"
		],
		"_id": "628b07acfca14c127cc5e272",
		"question": "Read the following information\n\rVacation Time or Job Training\n\rYou work in a small office. The boss wants to reduce vacation time by two days but send everyone in the office to a nice beachside hotel for 4 days of job training. Some of the staff are very happy with this idea. Others are upset. The boss asked you to respond to an opinion survey.\n\rChoose the option that you prefer. Why do you prefer your choice? Write about 150-200 words.\n\rOption A: I think we should keep our vacation time instead of going to the training.\n\rOption B: I think we should do the training and cut back our vacation time."
	 }
     ```
  
1. Search Questions
   - Method: POST
   - Endpoint: `/question/search`
   - Description: Search questions with criteria
   - Request Body:
     ```json
	 {
	   "topic":["Education"],
	   "questionType":["Agree or Disagree"],
	   "relatedExam":["IELTS General Training"]
	 }
	 ```
   - Response:
     ```json
     [
		{
			"topic": [
				"Education"
			],
			"questionType": [
				"Agree or Disagree"
			],
			"relatedExam": [
				"IELTS General Training",
				"IELTS Academic"
			],
			"_id": "62704489284c257466f0f8f1",
			"question": "Write about the following topic: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words."
		},
		{
			"topic": [
				"Education"
			],
			"questionType": [
				"Agree or Disagree"
			],
			"relatedExam": [
				"TOEFL iBT"
			],
			"_id": "65ba7f65f07eafe67a8fc73f",
			"question": "Explore the concept of happiness and what it means to you."
		}
	 ]
     ```

1. Get Saved Questions by User Id
   - Method: Get
   - Endpoint: `/question/saved-questions/{userId}`
   - Description: Retrieve all saved questions with user id
   - Response:
     ```json
     [
		{
			"_id": "62a9f43ef8cab1000905c8ab",
			"userId": "6271ecc975b32c3874cdab89",
			"questionId": "62704489284c257466f0f8f0",
			"question": "Reducing global environmental damage should be handled by governments rather than individuals. Do you agree or disagree? Give reasons for your answer and provide relevant examples from your own experience.",
			"__v": 0
		},
		{
			"_id": "62a9f43daefe5d0009e15ba1",
			"userId": "6271ecc975b32c3874cdab89",
			"questionId": "62704489284c257466f0f8f0",
			"question": "Reducing global environmental damage should be handled by governments rather than individuals. Do you agree or disagree? Give reasons for your answer and provide relevant examples from your own experience.",
			"__v": 0
		},
		{
			"_id": "62a9f43eaefe5d0009e15ba2",
			"userId": "6271ecc975b32c3874cdab89",
			"questionId": "62704489284c257466f0f8f1",
			"question": "Write about the following topic: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
			"__v": 0
		},
		{
			"_id": "62e2b754b866bd0009c40134",
			"userId": "6271ecc975b32c3874cdab89",
			"questionId": "628b07acfca14c127cc5e273",
			"question": "Read the following information\n\rYou are an elementary school teacher. There is a famous writer who lives near your school.\n\rIn about 150-200 words, write to this writer and invite her to speak to the children in your class. Your message must include the following points.\n\rAn introduction to the school and your class.\n\rWhy the children like this writer’s books?\n\rAn invitation to visit the classroom.\n\rWhat the writer can do with the children.",
			"__v": 0
		}
	 ]
     ```

1. Save Question
   - Method: POST
   - Endpoint: `/question/save`
   - Description: Save a question for a specific user
   - Request Body:
	 ```json
	 {
		"userId": "62959b87f7781d5bb0abdc9f",
		"questionId": "62704489284c257466f0f8f1",
		"question": "Write about the following topic: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words."
	 }
	 ```
   - Response:
     ```json
     {
		"_id": "65e765bfe4ec294fa8220d72",
		"userId": "62959b87f7781d5bb0abdc9f",
		"questionId": "62704489284c257466f0f8f1",
		"question": "Write about the following topic: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
		"__v": 0
	 }
     ```

1. Unsave Question
   - Method: DELETE
   - Endpoint: `/question/unsave/{userId}/{questionId}`
   - Description: Delete a saved question for a specific user
   - Response:
     ```json
     {
		"_id": "65e22343c170c93bd4cd5af6",
		"userId": "62959b87f7781d5bb0abdc9f",
		"questionId": "62704489284c257466f0f8f1",
		"question": "Write about the following topic: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
		"__v": 0
	 }
     ```

### Essay

1. Add Essay
   - Method: POST
   - Endpoint: `/essay/add`
   - Description: Post a new essay
   - Request Body:
     ```json
	 {
		"questionId": "628b07acfca14c127cc5e272",
		"question": "Write about the following topic: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
		"submitterId": "62732d6d1403354a60762ebc",
		"submitterName": "feena912",
		"state": "submission",
		"markingSchemeId": "6289a2ecfca14c127cc5e250",
		"markingSchemeName": "IELTS Academic Task 2",
		"content": "This is a sample essay content",
		"wordCount": 300
	 }
	 ```
   - Response:
     ```json
     {
		"_id": "65e798079de368220c2c35d3",
		"questionId": "628b07acfca14c127cc5e272",
		"question": "Write about the following topic: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
		"submitterId": "62732d6d1403354a60762ebc",
		"submitterName": "feena912",
		"submittedDateTime": "2024-03-05T22:09:11.744Z",
		"state": "submission",
		"markingSchemeId": "6289a2ecfca14c127cc5e250",
		"markingSchemeName": "IELTS Academic Task 2",
		"content": "This is a sample essay content",
		"numberOfFeedbacks": 0,
		"wordCount": 300,
		"__v": 0
	 }
     ```
  
1. Get Essay by Id
   - Method: Get
   - Endpoint: `/essay/{id}`
   - Description: Retrieve an essay record by id
   - Response:
     ```json
     
     ```
  
1. Get Essay by User Id
   - Method: Get
   - Endpoint: `/essay/by-user/{id}`
   - Description: Retrieve a list of essay records with user id
   - Response:
     ```json
     {
		"_id": "628bf079242f7147acd2ebf4",
		"questionId": "628b07acfca14c127cc5e272",
		"question": "Read the following information\n\rVacation Time or Job Training\n\rYou work in a small office. The boss wants to reduce vacation time by two days but send everyone in the office to a nice beachside hotel for 4 days of job training. Some of the staff are very happy with this idea. Others are upset. The boss asked you to respond to an opinion survey.\n\rChoose the option that you prefer. Why do you prefer your choice? Write about 150-200 words.\n\rOption A: I think we should keep our vacation time instead of going to the training.\n\rOption B: I think we should do the training and cut back our vacation time.",
		"submitterId": "6271ecc975b32c3874cdab89",
		"submitterName": "feenafung72",
		"submittedDateTime": "2022-05-23T20:37:13.034Z",
		"state": "submission",
		"markingSchemeId": "6289a2ecfca14c127cc5e251",
		"markingSchemeName": "CELPIP",
		"content": "Vacation time is meant for relaxing. The last thing that I want to think about when I am on vacation is work stuffs or what I should do to improve myself in my job. It is true that it would be nice to stay at a beachside hotel for 4 days, but my concern is, how much of this hotel or time will we get to enjoy? The training could take us the entire day and by the time we get back to our hotel we will be too tired to do anything else to enjoy ourselves. This will mean that we basically won't be having any real \"Vacation Time\". I would trade this 4 days at the beachside hotel with my 2 days vacation time to fully enjoy and relax myself and also spend some quality time with my family and friends. I agree that job training is important, but not at the cost of my personal \"healing\" time. What I mean by that is, during my vacation time, I take some time off to do some meditation and relief myself of all the stress of work and life. I believe that this helps me to restore my physical and mental health.",
		"numberOfFeedbacks": 1,
		"wordCount": 203,
		"__v": 0,
		"averageScore": 5
	 }
     ```
  
1. Get Essay by Question Id
   - Method: Get
   - Endpoint: `/essay/by-question/{id}`
   - Description: Retrieve a list of essay records with question id
   - Response:
     ```json
     [
		{
			"_id": "643de8eea1200b0009527460",
			"questionId": "62704489284c257466f0f8f1",
			"question": "Write about the following topic: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
			"submitterId": "643de7bcb12b0500080652e8",
			"submitterName": "prueba1",
			"submittedDateTime": "2023-04-18T00:48:46.156Z",
			"state": "submission",
			"markingSchemeId": "6289a2ecfca14c127cc5e253",
			"markingSchemeName": "TOEFL Independent Writing Task",
			"content": "The idea that everyone should be allowed admission to university or college programs, regardless of their level of academic ability, is a controversial one. While some may argue that higher education should be accessible to all, irrespective of their academic abilities, others may have concerns about the potential consequences of such an approach. In my view, while inclusivity in education is important, there are valid reasons to consider academic ability as a factor in university or college admission decisions.\n\nFirstly, higher education institutions typically have limited resources, including faculty, infrastructure, and funding. Admitting students who are not academically prepared for the rigors of university or college programs could put a strain on these resources and may result in a compromised quality of education for all students. Universities and colleges often have specific admission criteria to ensure that students admitted are capable of successfully completing their chosen programs and contributing to the academic community.\n\nSecondly, academic ability is often a good indicator of a student's readiness for higher education. University or college programs are typically designed to be challenging and require a certain level of academic proficiency to succeed. Admitting students who are not academically prepared may result in these students struggling to keep up with the coursework, leading to higher dropout rates and potential waste of time and resources.\n\nMoreover, considering only academic ability in admission decisions may not be fair to those students who have put in the effort and excelled academically. It may diminish the value of hard work and dedication, and undermine the incentive for students to strive for excellence in their studies.\n\nHowever, it is important to acknowledge that there are diverse ways of evaluating a student's potential, beyond academic ability. Factors such as motivation, passion, and life experiences can also contribute to a student's ability to succeed in higher education. Universities and colleges can implement holistic admission processes that take into account a wider range of factors, including non-academic qualities, to assess a student's potential for success.\n\nIn conclusion, while inclusivity in higher education is crucial, considering only academic ability in university or college admission decisions may not be practical or fair to all stakeholders. Implementing holistic admission processes that consider a diverse range of factors may be a more balanced approach to ensure that students who are academically prepared and have the potential to succeed are admitted to higher education programs.",
			"numberOfFeedbacks": 3,
			"wordCount": 392,
			"__v": 0,
			"averageScore": 0
		},
		{
			"_id": "65ba814da22c7700082b407b",
			"questionId": "62704489284c257466f0f8f1",
			"question": "Write about the following topic: Everybody should be allowed admission to university or college programs regardless of their level of academic ability. To what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
			"submitterId": "6271ecc975b32c3874cdab89",
			"submitterName": "feenafung72",
			"submittedDateTime": "2024-01-31T17:20:13.429Z",
			"state": "submission",
			"markingSchemeId": "6289a2ecfca14c127cc5e251",
			"markingSchemeName": "CELPIP",
			"content": "wewewe",
			"numberOfFeedbacks": 0,
			"wordCount": 1,
			"__v": 0
		}
	 ]
     ```
  
1. Get All Marking Schemes
   - Method: Get
   - Endpoint: `/essay/marking-scheme/all`
   - Description: Retrieve all marking scheme records
   - Response:
     ```json
	 [
	 	{
			"_id": "6289a2ecfca14c127cc5e251",
			"name": "CELPIP",
			"minWords": 150,
			"maxWords": 200,
			"relatedExam": [
				{
					"_id": "62899829fca14c127cc5e244",
					"label": "CELPIP"
				}
			],
			"sections": [
				{
					"sequence": 1,
					"description": "Content and Coherence",
					"supplementaryText": "Number of ideas, Quality of ideas, Organization of ideas, Examples and supporting details",
					"weighting": 1,
					"fullScore": 12
				},
				{
					"sequence": 2,
					"description": "Vocabulary",
					"supplementaryText": "Word choice, Suitable use of words and phrases, Range of words and phrases, Precision and accuracy",
					"weighting": 1,
					"fullScore": 12
				},
				{
					"sequence": 3,
					"description": "Readability",
					"supplementaryText": "Format and paragraphing, Connectors and transitions, Grammar and sentence structure, Spelling and punctuation",
					"weighting": 1,
					"fullScore": 12
				},
				{
					"sequence": 4,
					"description": "Task Fulfillment",
					"supplementaryText": "Relevance, Completeness, Tone, Word count",
					"weighting": 1,
					"fullScore": 12
				}
			],
			"calculationMode": "Mean",
			"totalFullScore": 12
		},
		{
			"_id": "6289a2ecfca14c127cc5e253",
			"name": "TOEFL Independent Writing Task",
			"maxWords": 300,
			"relatedExam": [
				{
					"_id": "62704496284c257466f0f8fd",
					"label": "TOEFL iBT"
				},
				{
					"_id": "62704496284c257466f0f8fe",
					"label": "TOEFL PBT"
				}
			],
			"totalFullScore": 5
		}
	 ]
     ```
  
1. Get Marking Scheme by Id
   - Method: Get
   - Endpoint: `/essay/marking-scheme/{id}`
   - Description: Retrieve a marking scheme by id
   - Response:
     ```json
	 {
		"_id": "6289a2ecfca14c127cc5e24e",
		"name": "IELTS General Training Task 2",
		"minWords": 250,
		"relatedExam": [
			{
				"_id": "62704496284c257466f0f8fb",
				"label": "IELTS General Training"
			}
		],
		"sections": [
			{
				"sequence": 1,
				"description": "Task Response",
				"supplementaryText": "In both IELTS Academic and IELTS General Training versions, Task 2 requires test takers to formulate and develop a position in relation to a question or statement. Ideas should be supported by evidence, and examples may be drawn from the test takers’ own experience. Responses must be at least 250 words in length. Scripts under the required minimum word limit will be penalised.",
				"weighting": 1,
				"fullScore": 9
			},
			{
				"sequence": 2,
				"description": "Coherence and Cohesion",
				"supplementaryText": "This assesses the overall clarity and fluency of the message: how the response organises and links information, ideas and language. Coherence refers to the linking of ideas through logical sequencing. Cohesion refers to the varied and appropriate use of cohesive devices (for example, logical connectors, pronouns and conjunctions) to assist in making the conceptual and referential relationships between and within sentences clear.",
				"weighting": 1,
				"fullScore": 9
			},
			{
				"sequence": 3,
				"description": "Lexical Resource",
				"supplementaryText": "This refers to the range of vocabulary the test takers have used and the accuracy and appropriacy of use in terms of the specific task.",
				"weighting": 1,
				"fullScore": 9
			},
			{
				"sequence": 4,
				"description": "Grammatical Range and Accuracy",
				"supplementaryText": "This refers to the range and accurate use of grammar, as manifested in the test takers’ sentence writing.",
				"weighting": 1,
				"fullScore": 9
			}
		],
		"calculationMode": "Mean",
		"totalFullScore": 9
	 }
     ```
  
### Feedback

1. Add Feedback
   - Method: POST
   - Endpoint: `/feedback/add`
   - Description: Post a new feedback
   - Request Body:
     ```json
	 {
	  "essayId": "628bf0f8242f7147acd2ebf7",
	  "essay": "This is a sample essay",
	  "submitterId": "65e16c81b60bbe01e82bacdd",
	  "submitterName": "davidkong2",
	  "sections": [
		{
		  "sequence": 1,
		  "description": "Content and Coherence",
		  "supplementaryText": "Number of ideas, Quality of ideas, Organization of ideas, Examples and supporting details",
		  "weighting": 1,
		  "fullScore": 12,
		  "score": 10,
		  "comment": "Suit the topic"
		}
	  ],
	  "overallComment": "Good",
	  "totalScore": 9
	 }
	 ```
   - Response:
     ```json
     {
		"_id": "65e795955976cf782454a5fc",
		"essayId": "628bf0f8242f7147acd2ebf7",
		"essay": "This is a sample essay",
		"submitterId": "65e16c81b60bbe01e82bacdd",
		"submitterName": "davidkong2",
		"submittedDateTime": "2024-03-05T21:58:45.002Z",
		"sections": [
			{
				"_id": "65e795955976cf782454a5fd",
				"sequence": 1,
				"description": "Content and Coherence",
				"supplementaryText": "Number of ideas, Quality of ideas, Organization of ideas, Examples and supporting details",
				"weighting": 1,
				"fullScore": 12,
				"score": 10,
				"comment": "Suit the topic"
			}
		],
		"overallComment": "Good",
		"totalScore": 9,
		"__v": 0
	 }
     ```
  
1. Get Feedback by Id
   - Method: Get
   - Endpoint: `/feedback/{id}`
   - Description: Retrieve a feedback record by id
   - Response:
     ```json
     {
		"_id": "629686c30a1fdd375c370ebe",
		"essayId": "628bf0f8242f7147acd2ebf7",
		"essay": "Dear Mr. Smith,\nWhile I really appreciate your offer on the job training, I would like to keep the vacation policy for the following three reasons:\nFirstly, I believe this training will not only benefit me but also the company as I will be better equipped for my job. Thus it is an extension of work and should not be counted as a vacation, which is personal time.\nSecondly, as a senior employee with a family, the vacation time is when I spend the days building relationships with my wife and children. Converting them into training would be hard on my family as they will not like to see me less. \nAnd finally, while being at a beachside hotel is very inviting, I prefer learning in a more conducive environment, away from distractions like crowds and heat. I believe a training course at a local university will be a better fit for me.\nI have all the confidence that you will make the right decision. Please let me know if you need my help talking to the other employees about this issue.\nKind regards,\nLarry",
		"submitterId": "62959b87f7781d5bb0abdc9f",
		"submitterName": "feenafung7295",
		"submittedDateTime": "2022-05-31T21:21:07.210Z",
		"sections": [
			{
				"_id": "629686c30a1fdd375c370ebf",
				"sequence": 1,
				"description": "Content and Coherence",
				"supplementaryText": "Number of ideas, Quality of ideas, Organization of ideas, Examples and supporting details",
				"weighting": 1,
				"fullScore": 12,
				"comment": "Suit the topic",
				"score": 10
			},
			{
				"_id": "629686c30a1fdd375c370ec0",
				"sequence": 2,
				"description": "Vocabulary",
				"supplementaryText": "Word choice, Suitable use of words and phrases, Range of words and phrases, Precision and accuracy",
				"weighting": 1,
				"fullScore": 12,
				"comment": "The variety of vocabulary is limited",
				"score": 8
			},
			{
				"_id": "629686c30a1fdd375c370ec1",
				"sequence": 3,
				"description": "Readability",
				"supplementaryText": "Format and paragraphing, Connectors and transitions, Grammar and sentence structure, Spelling and punctuation",
				"weighting": 1,
				"fullScore": 12,
				"comment": "Need to improve the structure, split the content into several paragraph",
				"score": 7
			},
			{
				"_id": "629686c30a1fdd375c370ec2",
				"sequence": 4,
				"description": "Task Fulfillment",
				"supplementaryText": "Relevance, Completeness, Tone, Word count",
				"weighting": 1,
				"fullScore": 12,
				"comment": "Respond to the question, many points",
				"score": 9
			}
		],
		"overallComment": "It is good, but still need improvement, keep going.",
		"totalScore": 8.5,
		"__v": 0
	 }
     ```
	 
1. Get Feedback by User Id
   - Method: Get
   - Endpoint: `/feedback/by-user/{id}`
   - Description: Retrieve feedback records with user id
   - Response:
     ```json
     [
		{
			"_id": "643de964b518d200086dc051",
			"essayId": "643de8eea1200b0009527460",
			"essay": "The idea that everyone should be allowed admission to university or college programs, regardless of their level of academic ability, is a controversial one. While some may argue that higher education should be accessible to all, irrespective of their academic abilities, others may have concerns about the potential consequences of such an approach. In my view, while inclusivity in education is important, there are valid reasons to consider academic ability as a factor in university or college admission decisions.\n\nFirstly, higher education institutions typically have limited resources, including faculty, infrastructure, and funding. Admitting students who are not academically prepared for the rigors of university or college programs could put a strain on these resources and may result in a compromised quality of education for all students. Universities and colleges often have specific admission criteria to ensure that students admitted are capable of successfully completing their chosen programs and contributing to the academic community.\n\nSecondly, academic ability is often a good indicator of a student's readiness for higher education. University or college programs are typically designed to be challenging and require a certain level of academic proficiency to succeed. Admitting students who are not academically prepared may result in these students struggling to keep up with the coursework, leading to higher dropout rates and potential waste of time and resources.\n\nMoreover, considering only academic ability in admission decisions may not be fair to those students who have put in the effort and excelled academically. It may diminish the value of hard work and dedication, and undermine the incentive for students to strive for excellence in their studies.\n\nHowever, it is important to acknowledge that there are diverse ways of evaluating a student's potential, beyond academic ability. Factors such as motivation, passion, and life experiences can also contribute to a student's ability to succeed in higher education. Universities and colleges can implement holistic admission processes that take into account a wider range of factors, including non-academic qualities, to assess a student's potential for success.\n\nIn conclusion, while inclusivity in higher education is crucial, considering only academic ability in university or college admission decisions may not be practical or fair to all stakeholders. Implementing holistic admission processes that consider a diverse range of factors may be a more balanced approach to ensure that students who are academically prepared and have the potential to succeed are admitted to higher education programs.",
			"submitterId": "643de942a1200b0009527462",
			"submitterName": "prueba2",
			"submittedDateTime": "2023-04-18T00:50:44.152Z",
			"sections": [],
			"totalScore": 0,
			"__v": 0
		},
		{
			"_id": "643dea1f81d83e00087d4798",
			"essayId": "643de8eea1200b0009527460",
			"essay": "The idea that everyone should be allowed admission to university or college programs, regardless of their level of academic ability, is a controversial one. While some may argue that higher education should be accessible to all, irrespective of their academic abilities, others may have concerns about the potential consequences of such an approach. In my view, while inclusivity in education is important, there are valid reasons to consider academic ability as a factor in university or college admission decisions.\n\nFirstly, higher education institutions typically have limited resources, including faculty, infrastructure, and funding. Admitting students who are not academically prepared for the rigors of university or college programs could put a strain on these resources and may result in a compromised quality of education for all students. Universities and colleges often have specific admission criteria to ensure that students admitted are capable of successfully completing their chosen programs and contributing to the academic community.\n\nSecondly, academic ability is often a good indicator of a student's readiness for higher education. University or college programs are typically designed to be challenging and require a certain level of academic proficiency to succeed. Admitting students who are not academically prepared may result in these students struggling to keep up with the coursework, leading to higher dropout rates and potential waste of time and resources.\n\nMoreover, considering only academic ability in admission decisions may not be fair to those students who have put in the effort and excelled academically. It may diminish the value of hard work and dedication, and undermine the incentive for students to strive for excellence in their studies.\n\nHowever, it is important to acknowledge that there are diverse ways of evaluating a student's potential, beyond academic ability. Factors such as motivation, passion, and life experiences can also contribute to a student's ability to succeed in higher education. Universities and colleges can implement holistic admission processes that take into account a wider range of factors, including non-academic qualities, to assess a student's potential for success.\n\nIn conclusion, while inclusivity in higher education is crucial, considering only academic ability in university or college admission decisions may not be practical or fair to all stakeholders. Implementing holistic admission processes that consider a diverse range of factors may be a more balanced approach to ensure that students who are academically prepared and have the potential to succeed are admitted to higher education programs.",
			"submitterId": "643de942a1200b0009527462",
			"submitterName": "prueba2",
			"submittedDateTime": "2023-04-18T00:53:51.117Z",
			"sections": [],
			"overallComment": "Overall, your essay is well-written and presents a balanced perspective on the topic. You have effectively discussed the idea of admitting students to university or college programs regardless of their academic ability, providing relevant reasons to support your viewpoint. Your essay demonstrates a good use of vocabulary and grammar, with only a few minor errors. You have also incorporated examples and evidence to support your arguments, which enhances the credibility of your essay.\n\nHowever, there are a few areas where you can further improve:\n\n    Word count: Your essay is within the word count limit, but it is on the shorter side. Try to aim for the minimum word count of 250 words to ensure that your essay is adequately developed.\n\n    Organization: While your essay has a clear introduction, body, and conclusion, the organization of your ideas can be strengthened. Consider using more explicit topic sentences at the beginning of each paragraph to provide a clear roadmap of your arguments to the reader.\n\n    Development of ideas: While you have presented reasons to support your viewpoint, some of your arguments could benefit from further elaboration. Provide specific examples or evidence to further support your claims and make your arguments more compelling.\n\n    Language usage: Your language usage is generally accurate, but there are a few minor errors in grammar, word choice, and sentence structure. For example, in the sentence \"Universities and colleges often have specific admission criteria to ensure that students admitted are capable of successfully completing their chosen programs and contributing to the academic community,\" it would be clearer to say \"capable of successfully completing\" instead of \"capable of successfully complete.\" Review your essay carefully for such errors and make appropriate corrections.\n\n    Conclusion: Your conclusion provides a concise summary of your main points, but it could be strengthened by restating your thesis statement and offering a clear final thought on the topic.\n\nOverall, you have presented a thoughtful and well-organized essay with strong arguments and evidence. With some minor improvements in organization, development of ideas, and language usage, your essay would be even more effective. Good job!",
			"totalScore": 0,
			"__v": 0
		}
	 ]
     ```
  
1. Get Feedback by Essay Id
   - Method: Get
   - Endpoint: `/feedback/by-essay/{id}`
   - Description: Retrieve feedback records with essay id
   - Response:
     ```json
     [
		{
			"_id": "643de964b518d200086dc051",
			"essayId": "643de8eea1200b0009527460",
			"essay": "The idea that everyone should be allowed admission to university or college programs, regardless of their level of academic ability, is a controversial one. While some may argue that higher education should be accessible to all, irrespective of their academic abilities, others may have concerns about the potential consequences of such an approach. In my view, while inclusivity in education is important, there are valid reasons to consider academic ability as a factor in university or college admission decisions.\n\nFirstly, higher education institutions typically have limited resources, including faculty, infrastructure, and funding. Admitting students who are not academically prepared for the rigors of university or college programs could put a strain on these resources and may result in a compromised quality of education for all students. Universities and colleges often have specific admission criteria to ensure that students admitted are capable of successfully completing their chosen programs and contributing to the academic community.\n\nSecondly, academic ability is often a good indicator of a student's readiness for higher education. University or college programs are typically designed to be challenging and require a certain level of academic proficiency to succeed. Admitting students who are not academically prepared may result in these students struggling to keep up with the coursework, leading to higher dropout rates and potential waste of time and resources.\n\nMoreover, considering only academic ability in admission decisions may not be fair to those students who have put in the effort and excelled academically. It may diminish the value of hard work and dedication, and undermine the incentive for students to strive for excellence in their studies.\n\nHowever, it is important to acknowledge that there are diverse ways of evaluating a student's potential, beyond academic ability. Factors such as motivation, passion, and life experiences can also contribute to a student's ability to succeed in higher education. Universities and colleges can implement holistic admission processes that take into account a wider range of factors, including non-academic qualities, to assess a student's potential for success.\n\nIn conclusion, while inclusivity in higher education is crucial, considering only academic ability in university or college admission decisions may not be practical or fair to all stakeholders. Implementing holistic admission processes that consider a diverse range of factors may be a more balanced approach to ensure that students who are academically prepared and have the potential to succeed are admitted to higher education programs.",
			"submitterId": "643de942a1200b0009527462",
			"submitterName": "prueba2",
			"submittedDateTime": "2023-04-18T00:50:44.152Z",
			"sections": [],
			"totalScore": 0,
			"__v": 0
		}
	 ]
     ```
  
