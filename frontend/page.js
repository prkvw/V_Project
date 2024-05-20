const QUESTIONS_URL = "https://www.questions.endpoint.com/";
const SUBMISSIONS_URL = "https://www.submissions.endpoint.com";
async function fetchAndAppendQuestions () {
    const questions = await fetchQuestionsAndSubmissions();
    const questionsByCategory = await getQuestionsByCategory(questions);
    const submissionsById = getSubmissionsById(submissions);
const wrapper = document.getElementById('wrapper');
    for (const [category, questions] of Object.entries(questionsByCategory)) {
        const categoryDiv = createCategory(category, questions, submissionsById);
        wrapper.append(categoryDiv);

    }    
 };
async function fetchQuestionsAndSubmissions () {
    //const response = await fetch(QUESTIONS_API_BASE_URL);
    //const submissionsResponse = await fetch(SUBMISSIONS_API_BASE_URL)
    //const questions = await response.json();
    //return questions;
    const [questionRes, submissionsRes ] = await Promise.all ([
        fetch(QUESTIONS ),
        fetch(SUBMISSIONS_API_BASE_URL)
    ]);
    return await Promise.all([ 
        questionRes.json (),
        submissionRes.json (),
    ]);
}

function getQuestionsByCategory[questions] {
    const questionsByCategory = {};
    questions.forEach(question =>{
        if (questionByCategory.hasOwnProperty(question.category)) {
            questionsByCategory[question.category].push(question);
        }else { questionsByCategory[question.category]= [question];}
    });
    return QuestionsByCategory
}


function createCategory(createCategory, questions, submissionsById ) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add('category');
   let correctCount = 0;
   // h2.textContent = category;
    
    questions.forEach(question => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add('question');
        const status = document.createElement('div');
        status.classList.add('status');
        const statusClass = submissionsById[question.id]?.toLowerCase()?.replace('_', '-');
        status.classList.add(statusClass?? 'unattempted');
        questionDiv.append(status);

if (submissionsById[question.id] == 'CORRECT') {
    correctCount++;
}

        const h3 = document.createElement("h3");
        h3.textContent = question.name
        questionDiv.append(h3);
        categoryDiv.append(questionDiv);

});

const h2 = document.createElement("h2");
h2.textContent = `${category} - ${correctCount} / ${questions.length}`
categoryDiv.append(h2);
return categoryDiv };

function getSubmissionsById (submissions) {
    const submissionsById = {};
    submissions.forEach(submission => {
        submissionsById[submission.questionId] = submission.status;
    });

}


<div class="category">
<h2>HTML</h2>
<div class="question">
    <div class="status partially-correct"></div>
    <h3>Stopwatch</h3>
</div>
<div class="question">
<div class="status correct"></div>
    <h3>Tic Tac Toe</h3></div>
</div>
</div>