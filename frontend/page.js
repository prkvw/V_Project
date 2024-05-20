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