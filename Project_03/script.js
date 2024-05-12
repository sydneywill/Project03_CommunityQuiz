const questions = [
    {
        question: "What challenges do you think students in underserved communities face in accessing music education?",
        answers: ["Lack of funding for music programs", "Limited access to musical instruments", "Fewer opportunities for music lessons", "All of the above"]
    },
    {
        question: "How do you think music education can benefit students in inner-city areas?",
        answers: ["Improved academic performance", "Enhanced creativity", "Building confidence", "All of the above"]
    },
    {
        question: "What role does music play in the cultural identity of communities?",
        answers: ["Preserving traditions", "Expressing emotions", "Bringing people together", "All of the above"]
    },
    {
        question: "How can we address the lack of diversity in music education programs?",
        answers: ["Offering scholarships", "Introducing diverse curricula", "Promoting inclusivity in music spaces", "All of the above"]
    },
    {
        question: "What resources are essential for establishing successful music programs in underserved areas?",
        answers: ["Qualified music instructors", "Access to instruments and equipment", "Community support", "All of the above"]
    },
    {
        question: "What barriers prevent students from pursuing music education as a career?",
        answers: ["Financial constraints", "Lack of mentorship opportunities", "Limited access to higher education", "All of the above"]
    },
    {
        question: "How can technology be used to enhance music education accessibility?",
        answers: ["Online learning platforms", "Digital music creation tools", "Virtual music lessons", "All of the above"]
    },
    {
        question: "What advocacy efforts are needed to ensure equitable access to music education for all students?",
        answers: ["Policy changes at the governmental level", "Community outreach and awareness campaigns", "Collaboration with music industry stakeholders", "All of the above"]
    }
];


let currentQuestionIndex = 0;
let userAnswers = [];

function startQuiz() {
    document.querySelector('.container').innerHTML = '';
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question-container');
    questionElement.innerHTML = `
        <div class="music-notes">${'♩'.repeat(currentQuestionIndex + 1)}</div>
        <div class="question">${currentQuestion.question}</div>
        <div class="answers">
            ${currentQuestion.answers.map(answer => `<button onclick="selectAnswer('${answer}')">${answer}</button>`).join('')}
        </div>
    `;
    document.body.appendChild(questionElement);
}

function selectAnswer(answer) {
    userAnswers.push(answer);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.body.innerHTML = '';
        showQuestion();
    } else {
        showReflectionPage();
    }
}

function showReflectionPage() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Thank you for completing the Urban Beats Quiz!</h1>
            <p>We appreciate your input.</p>
            <h2>More Resources:</h2>
            <ul>
                <li><a href="https://www.nammfoundation.org/articles/2018-05-10/top-10-reasons-children-should-learn-play-music">Top 10 Reasons Children Should Learn to Play Music</a></li>
                <li><a href="https://www.amparents.org/why-should-kids-study-music/">Why Should Kids Study Music?</a></li>
                <li><a href="https://www.menc.org/resources/view/benefits-of-music-education">Benefits of Music Education</a></li>
            </ul>
            <h2>Connect with Others:</h2>
            <input type="email" id="emailInput" placeholder="Enter your email">
            <textarea id="messageInput" placeholder="Leave a message"></textarea>
            <button onclick="saveContactInfo()">Submit</button>
        </div>
    `;
}

function saveContactInfo() {
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;
    // Here you can save the email and message using local storage or send it to a server
}

document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
