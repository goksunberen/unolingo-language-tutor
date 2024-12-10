let currentLevel = 1;
let currentQuestion = 0;
let score = 0;

const levels = {
    1: [
        { question: "Merhaba", answer: "Hello", options: ["Hello", "Goodbye", "Thanks", "Goodnight"], hint: "A common greeting." },
        { question: "Teşekkür ederim", answer: "Thank you", options: ["Hello", "Thank you", "Goodbye", "Goodnight"], hint: "Used to express gratitude." },
        { question: "Evet", answer: "Yes", options: ["No", "Maybe","Yes",  "Goodbye"], hint: "A positive response." },
        { question: "Hayır", answer: "No", options: ["Yes", "Maybe", "Hello","No"], hint: "A negative response." },
        { question: "Güle güle", answer: "Goodbye", options: ["Goodbye", "Hello", "Goodnight", "Thanks"], hint: "Said when someone leaves." },
        { question: "Nasılsın?",    answer: "How are you?", options: ["How are you?", "What's your name?", "Where are you?", "Goodbye"], hint: "A polite way to ask about someone's well-being." },
        { question: "Günaydın", answer: "Good morning", options: ["Excuse me", "Good morning", "Good afternoon", "Take care"], hint: "Used when the sun is up" },
        { question: "Rica ederim", answer: "You are welcome", options: ["You are welcome", "Thanks", "Excuse me", "Hello"], hint: "A polite response to gratitude." },
        { question: "İyi geceler", answer: "Goodnight", options: ["Good morning", "See you later", "Goodnight", "Thank you"], hint: "Used when the moon is up" },
        { question: "Benim adım...", answer: "My name is...", options: ["My name is...", "I am...", "Where are you from?", "Goodbye"], hint: "A way to introduce yourself." },
    ],
    2: [
        { question: "Kırmızı", answer: "Red", options: ["Red", "Blue", "Green", "Yellow"], hint: "The color of an apple." },
        { question: "Yeşil", answer: "Green", options: ["Red", "Blue", "Green", "Black"], hint: "The color of grass." },
        { question: "Mavi", answer: "Blue", options: ["Yellow", "Blue", "White", "Black"], hint: "The color of the sky." },
        { question: "Sarı", answer: "Yellow", options: ["Yellow", "Red", "Green", "Blue"], hint: "The color of the sun." },
        { question: "Beyaz", answer: "White", options: ["Black", "Yellow", "Blue","White"], hint: "The color of snow." },
        { question: "Siyah", answer: "Black", options: ["Black", "White", "Green", "Blue"], hint: "The color of the night sky." },
        { question: "Turuncu", answer: "Orange", options: ["Orange", "Red", "Yellow", "Green"], hint: "The color of a carrot." },
        { question: "Pembe", answer: "Pink", options: ["Purple","Pink", "Red", "White"], hint: "The color often associated with flowers." },
        { question: "Mor", answer: "Purple", options: ["Purple", "Blue", "Pink", "Black"], hint: "The color of a plum." },
        { question: "Gri", answer: "Gray", options: ["Black", "White", "Green", "Gray"], hint: "The color between black and white." },
    ],
    3: [
        { question: "Kedi", answer: "Cat", options: ["Cat", "Dog", "Rabbit", "Horse"], hint: "A common household pet that purrs." },
        { question: "Köpek", answer: "Dog", options: ["Cat", "Rabbit", "Bird","Dog"], hint: "Man's best friend." },
        { question: "Balık", answer: "Fish", options: ["Bird","Fish", "Rabbit", "Horse"], hint: "An animal that lives in water." },
        { question: "At", answer: "Horse", options: ["Dog", "Cow", "Sheep","Horse"], hint: "A large animal often used for riding." },
        { question: "Kuş", answer: "Bird", options: ["Bird", "Fish", "Dog", "Cat"], hint: "An animal that flies." },
        { question: "Tavşan", answer: "Rabbit", options: ["Dog","Rabbit", "Cat", "Fish"], hint: "An animal known for its long ears." },
        { question: "Fare", answer: "Mouse", options: ["Mouse", "Rabbit", "Cat", "Dog"], hint: "A small rodent often found in houses." },
        { question: "Yılan", answer: "Snake", options: ["Lizard", "Frog", "Snake", "Bird"], hint: "A reptile without legs." },
        { question: "Koyun", answer: "Sheep", options: ["Sheep", "Cow", "Goat", "Horse"], hint: "An animal raised for wool." },
        { question: "Eşek", answer: "Donkey", options: ["Horse", "Cow", "Donkey", "Sheep"], hint: "A work animal smaller than a horse." },
    ],
    4: [
        { question: "Resim yapmak", answer: "Painting", options: ["Painting", "Singing", "Dancing", "Running"], hint: "An activity done with brushes and colors." },
        { question: "Şarkı söylemek", answer: "Singing", options: ["Reading","Singing",  "Writing", "Dancing"], hint: "An activity where you use your voice to make music." },
        { question: "Yüzmek", answer: "Swimming", options: ["Running", "Climbing", "Cycling","Swimming"], hint: "An activity you do in water." },
        { question: "Koşmak", answer: "Running", options: ["Jumping", "Walking","Running", "Cycling"], hint: "An activity where you move fast on your feet." },
        { question: "Bisiklet sürmek", answer: "Riding a bike", options: [ "Driving", "Flying", "Swimming", "Riding a bike"], hint: "An activity done on two wheels." },
        { question: "Dans etmek", answer: "Dancing", options: ["Dancing", "Singing", "Reading", "Swimming"], hint: "An activity involving rhythmic body movements to music." },
        { question: "Satranç oynamak", answer: "Playing chess", options: ["Playing cards", "Playing chess", "Painting", "Reading"], hint: "A board game of strategy." },
        { question: "Kitap okumak", answer: "Reading a book", options: ["Reading a book", "Writing a story", "Painting", "Singing"], hint: "A hobby involving words and imagination." },
        { question: "Gitar çalmak", answer: "Playing the guitar", options: ["Playing the guitar", "Playing the guitar", "Dancing", "Singing"], hint: "Pleasant to ears" },
        { question: "Yemek yapmak", answer: "Cooking", options: ["Cooking", "Gardening", "Painting", "Swimming"], hint: "A delicious one!" },
    ],
    5: [
        { question: "Mart", answer: "March", options: ["February", "May","March", "October"], hint: "The month that can't decide if it's winter or spring, so it tries to be both."},
        { question: "Haziran", answer: "June", options: ["April", "September", "July", "June",], hint: "The month where summer begins." },
        { question: "Nisan", answer: "April", options: ["January", "April", "November", "December"], hint: "Jokes are in the air..." },
        { question: "Eylül", answer: "September", options: ["September", "October", "November", "December"], hint: "Here comes autumn!" },
        { question: "Ocak", answer: "January", options: ["February", "March", "January", "April"], hint: "The first month of the year." },
        { question: "Mayıs", answer: "May", options: ["June", "April", "May", "July"], hint: "The fifth month of the year." },
        { question: "Temmuz", answer: "July", options: ["July", "June", "August", "September"], hint: "A summer month in the Northern Hemisphere." },
        { question: "Ekim", answer: "October", options: ["September", "November", "December","October"], hint: "The month of Halloween." },
        { question: "Aralık", answer: "December", options: ["December", "January", "November", "February"], hint: "The last month of the year." },
        { question: "Şubat", answer: "February", options: ["January", "February", "March", "April"], hint: "The shortest month of the year." },
    ],
};

const levelPages = {
    1: 'index.html',
    2: 'colours.html',
    3: 'animals.html',
    4: 'hobbies.html',
    5: 'months.html'
};


function loadTask() {
    if (currentQuestion < 10) {
        const task = levels[currentLevel][currentQuestion];
        const taskArea = document.getElementById("task-area");

        taskArea.innerHTML = `
            <div class="task">
                <p><strong>${task.question}</strong></p>
                ${task.options
                    .map(
                        (option) =>
                            `<button onclick="checkAnswer('${option}')">${option}</button>`
                    )
                    .join("")}
                <br>
                <button class="hint" onclick="showHint()">Hint</button>
                <p id="hint" style="display:none; color:blue;">${task.hint}</p>
            </div>`;
    } else {
        endLevel();
    }
}

function showHint() {
    document.getElementById("hint").style.display = "block";
}

function checkAnswer(answer) {
    const task = levels[currentLevel][currentQuestion];
    const feedbackArea = document.getElementById("feedback-area");

    if (answer === task.answer) {
        score++;
        document.getElementById("feedback").innerText = "Correct! 🎉";
    } else {
        document.getElementById("feedback").innerText = `Incorrect. The correct answer is "${task.answer}".`;
    }
    currentQuestion++;
    document.getElementById("task-area").style.display = "none";
    feedbackArea.style.display = "block";
    updateProgress();
}

function nextTask() {
    const questionNumber = document.getElementById("question-number");
    if(currentQuestion<10){
        questionNumber.innerText = currentQuestion + 1;
    }
    document.getElementById("feedback-area").style.display = "none";
    document.getElementById("task-area").style.display = "block";
    loadTask();
}

function updateProgress() {
    const progress = document.getElementById("progress");
    const levelIndicator = document.getElementById("level");
    const scoreIndicator = document.getElementById("score");
    progress.style.width = `${(currentQuestion / 10) * 100}%`;
    levelIndicator.innerText = currentLevel;
    scoreIndicator.innerText = score;
}

function endLevel() {
    const taskArea = document.getElementById("task-area");

    if (score <= 5) {
        const relatedPage = levelPages[currentLevel];

        taskArea.innerHTML = `
            <h2>Level ${currentLevel} Complete!</h2>
            <p>Your Score: ${score}/10</p>
            <p>It seems that this level wasn't the easiest for you but Uno believes you can do better! </br> Please revisit <a href="${relatedPage}">this page</a> and try again.</p>
        `;
    } else {
        taskArea.innerHTML = `
            <h2>Level ${currentLevel} Complete!</h2>
            <p>Your Score: ${score}/10</p>
            ${
                currentLevel < 5
                    ? '<button onclick="nextLevel()">Next Level</button>'
                    : '<h2>Congratulations! You finished all levels!</h2>'
            }
        `;
    }
}

function nextLevel() {
    const questionNumber = document.getElementById("question-number");
    currentLevel++;
    currentQuestion = 0;
    questionNumber.innerText = currentQuestion + 1;
    score = 0;
    updateProgress();
    loadTask();
}

document.addEventListener("DOMContentLoaded", loadTask);
