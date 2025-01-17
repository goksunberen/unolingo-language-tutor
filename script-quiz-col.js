const questions = [
    {
        question: "What is the Turkish word for 'red'?",
        options: ["Mavi", "Kırmızı", "Yeşil", "Sarı"],
        correct: 1,
        hint: "Ends with ı"
    },
    {
        question: "How do you say 'blue' in Turkish?",
        options: ["Mavi", "Sarı", "Beyaz", "Mor"],
        correct: 0,
        hint: "Starts with M"
    },
    {
        question: "What is the Turkish word for 'green'?",
        options: ["Gri", "Bordo", "Turuncu", "Yeşil"],
        correct: 3,
        hint: "It has 5 letters"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const taskArea = document.getElementById("task-area");
    const questionData = questions[currentQuestionIndex];

    taskArea.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options
            .map((option, index) => `<button onclick="checkAnswer(${index})">${option}</button>`)
            .join("")}
            <button class="hint" onclick="showHint()">Hint</button>
        <p id="hint" style="display:none;color:blue;">${questionData.hint}</p>
    `;
    document.getElementById("question-number").innerText = currentQuestionIndex + 1;
}

function showHint() {
    document.getElementById("hint").style.display = "block";
}

function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const feedbackArea = document.getElementById("feedback-area");
    const feedback = document.getElementById("feedback");

    answer = questionData.options[questionData.correct];
    if (selectedIndex === questionData.correct) {
        score++;
        feedback.innerText = "Correct!";
    } else {
        feedback.innerText = `Everybody makes mistakes... The correct answer is "${answer}".`;
    }

    document.getElementById("score").innerText = score;
    feedbackArea.style.display = "block";
    document.getElementById("task-area").style.display = "none";

    // Update progress bar
    const progress = document.getElementById("progress");
    progress.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
}

function nextTask() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        document.getElementById("feedback-area").style.display = "none";
        document.getElementById("task-area").style.display = "block";
        loadQuestion();
    } else {
        if(score>=2){
            window.location.href = "animals.html";
        }
        else{
            window.location.href = "colours.html";
        }
    }
}

// Initialize the quiz
loadQuestion();
