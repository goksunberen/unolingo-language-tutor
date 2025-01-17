let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let scoreSum = 0;

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
        { question: "Balık", answer: "Fish", options: ["Bird","Fish", "Rabbit", "Horse"], hint: "Likes to swim" },
        { question: "At", answer: "Horse", options: ["Dog", "Cow", "Sheep","Horse"], hint: "Also the symbol of Ferrari" },
        { question: "Kuş", answer: "Bird", options: ["Bird", "Fish", "Dog", "Cat"], hint: "Has many different colours" },
        { question: "Tavşan", answer: "Rabbit", options: ["Dog","Rabbit", "Cat", "Fish"], hint: "An animal known for its long ears." },
        { question: "Fare", answer: "Mouse", options: ["Mouse", "Rabbit", "Cat", "Dog"], hint: "Likes to eat cheese" },
        { question: "Yılan", answer: "Snake", options: ["Lizard", "Frog", "Snake", "Bird"], hint: "A Slytherin would know" },
        { question: "Koyun", answer: "Sheep", options: ["Sheep", "Cow", "Goat", "Horse"], hint: "An animal raised for wool." },
        { question: "Eşek", answer: "Donkey", options: ["Horse", "Cow", "Donkey", "Sheep"], hint: "A work animal" 
        },
    ],
    4: [
        { question: "Balık kırmızıdır.", answer: "The fish is red.", options: ["The fish is blue.", "The bird is red.","The fish is red.", "The cat is green."], hint: "It describes a sea creature and a bold color." },
        { question: "Kedi siyahtır.", answer: "The cat is black.", options: ["The cat is white.", "The dog is black.", "The rabbit is gray.","The cat is black."], hint: "It describes a common pet and a dark color." },
        { question: "Kuş mavidir.", answer: "The bird is blue.", options: ["The bird is blue.", "The bird is yellow.", "The fish is blue.", "The horse is green."], hint: "It refers to a flying animal and a color of the sky." },
        { question: "Tavşan beyazdır.", answer: "The rabbit is white.", options: ["The rabbit is brown.", "The cat is white.","The rabbit is white.", "The dog is black."], hint: "It describes an animal with long ears and a light color." },
        { question: "Yılan yeşildir.", answer: "The snake is green.", options: ["The snake is green.", "The bird is green.", "The rabbit is red.","The snake is black."], hint: "Now we're going all Slytherin" },
        { question: "At sarıdır.", answer: "The horse is yellow.", options: ["The horse is brown.", "The dog is yellow.","The horse is yellow.", "The cat is gray."], hint: "It refers to a large animal and a bright color." },
        { question: "Eşek gridir.", answer: "The donkey is gray.", options: ["The donkey is brown.", "The cow is gray.", "The horse is white.","The donkey is gray."], hint: "It describes a work animal and a neutral color." },
        { question: "Koyun pembedir.", answer: "The sheep is pink.", options: ["The sheep is white.","The sheep is pink.", "The cat is pink.", "The rabbit is blue."], hint: "An unusual color for a wooly animal." },
        { question: "Köpek kahverengidir.", answer: "The dog is brown.", options: ["The dog is brown.", "The dog is black.", "The rabbit is brown.", "The horse is yellow."], hint: "It describes a loyal pet and an earthy color." },
        { question: "İnek mordur.", answer: "The cow is purple.", options: ["The cow is black.", "The dog is purple.", "The cow is purple.", "The bird is pink."], hint: "Reminds me of Milka" },
    ],
    5: [
        { question: "Resim yapmak", answer: "Painting", options: ["Painting", "Singing", "Dancing", "Running"], hint: "Van Gogh's free time activity" },
        { question: "Şarkı söylemek", answer: "Singing", options: ["Reading","Singing",  "Writing", "Dancing"], hint: "Best activity during shower" },
        { question: "Yüzmek", answer: "Swimming", options: ["Running", "Climbing", "Cycling","Swimming"], hint: "Better in summer" },
        { question: "Koşmak", answer: "Running", options: ["Jumping", "Walking","Running", "Cycling"], hint: "An activity where you move fast on your feet." },
        { question: "Bisiklet sürmek", answer: "Riding a bike", options: [ "Driving", "Flying", "Swimming", "Riding a bike"], hint: "You should wear a helmet!" },
        { question: "Dans etmek", answer: "Dancing", options: ["Dancing", "Singing", "Reading", "Swimming"], hint: "Very similar to the English word!" },
        { question: "Satranç oynamak", answer: "Playing chess", options: ["Playing cards", "Playing chess", "Painting", "Reading"], hint: "It's a game!" },
        { question: "Kitap okumak", answer: "Reading a book", options: ["Reading a book", "Writing a story", "Painting", "Singing"], hint: "A hobby involving words and imagination." },
        { question: "Gitar çalmak", answer: "Playing the guitar", options: ["Playing the guitar", "Playing the guitar", "Dancing", "Singing"], hint: "Pleasant to ears" },
        { question: "Yemek yapmak", answer: "Cooking", options: ["Cooking", "Gardening", "Painting", "Swimming"], hint: "A delicious one!" },
    ],
    6: [
        { question: "Kırmızı balık yüzer.", answer: "The red fish swims.", options: ["The red fish runs", "The green bird swims.", "The yellow fish rides a bike.","The red fish swims."], hint: "Nemo in his natural habitat" },
        { question: "Mavi kuş şarkı söyler.", answer: "The blue bird sings.", options: ["The blue bird sings.", "The blue bird dances.", "The red bird sings.", "The yellow bird runs."], hint: "It describes a flying animal engaged in a musical activity." },
        { question: "Siyah kedi resim yapar.", answer: "The black cat paints.", options: ["The black cat reads books.", "The white cat paints.", "The black cat paints.", "The gray dog sings."], hint: "They don't always bring bad luck"},
        { question: "Beyaz tavşan koşar.", answer: "The white rabbit runs.", options: ["The white rabbit runs.", "The white rabbit jumps.", "The gray rabbit runs.", "The black rabbit dances."], hint: "Something you can see in Alice in Wonderland" },
        { question: "Yeşil yılan dans eder.", answer: "The green snake dances.", options: ["The green snake swims.", "The black snake dances.","The green snake dances.", "The red bird sings."], hint: "It describes a rhythmic activity performed by an unusual animal." },
        { question: "Sarı at bisiklet sürer.", answer: "The yellow horse rides a bicycle.", options: ["The yellow horse runs.", "The black horse rides a bicycle.", "The brown donkey runs.", "The yellow horse rides a bicycle."], hint: "It involves a two-wheeled vehicle and an unexpected rider." },
        { question: "Gri eşek kitap okur.", answer: "The gray donkey reads books.", options: ["The gray donkey reads books.", "The gray donkey dances.", "The brown donkey reads books.", "The white donkey paints."], hint: "It describes a literary activity." },
        { question: "Kahverengi köpek gitar çalar.", answer: "The brown dog plays the guitar.", options: ["The black dog plays chess.","The brown dog plays the guitar.", "The white dog plays the guitar.", "The gray dog runs."], hint: "It involves a stringed instrument and a loyal pet." },
        { question: "Pembe koyun satranç oynar.", answer: "The pink sheep plays chess.", options: ["The pink sheep plays chess.", "The pink sheep dances.", "The gray sheep plays chess.", "The white sheep paints."], hint: "It describes a strategic board game." },
        { question: "Mor inek yemek yapar.", answer: "The purple cow cooks.", options: ["The purple cow sings.", "The black cow cooks.", "The red cow dances.", "The purple cow cooks."], hint: "It refers to preparing food in the kitchen." },

    ],
};

const levelPages = {
    1: 'index.html',
    2: 'colours.html',
    3: 'animals.html',
    4: 'colours.html',
    5: 'hobbies.html',
    6: 'hobbies.html'
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
        document.getElementById("feedback").innerText = "Correct! 🎉 You're doing great!";
    } else {
        document.getElementById("feedback").innerText = `Everybody makes mistakes... The correct answer is "${task.answer}".`;
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
            <p>Learning takes time and practice makes perfect! </br> Uno believes you can do better! </br> Please revisit <a href="${relatedPage}">this page</a> and try again.</p>
        `;
    } else {
        scoreSum += score;
        taskArea.innerHTML = `
            <h2>Level ${currentLevel} Complete!</h2>
            <h3>You're on fire!🔥</h3>
            <p>Your Score: ${score}/10</p>
            ${
                currentLevel < 6
                    ? '<button onclick="nextLevel()">Next Level</button>'
                    : '<h2>Congratulations! 🎉 You finished all levels!</h2>'
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
