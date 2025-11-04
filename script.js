// Correct answers
const answers = {
    anniversary: '2024-11-18',
    herBirthday: '2005-11-03',
    myBirthday: '2001-08-07'
};

// Quiz state
let currentQuestion = 1;
let attempts = {
    1: 0,
    2: 0,
    3: 0
};

// Love messages
const loveMessages = [
    "I still remember the first time I saw you in Braamfontein. My heart skipped a beat, and I couldn't even look you in the eyes because you were so beautiful. That moment changed my life forever. 💕",
    
    "The first night we spent together was magical. I felt so safe and complete with you by my side. I knew then that I never wanted to spend another night without you. 🌙",
    
    "I love how we share the same taste in food. Every meal with you is an adventure, and even the simplest dishes taste better when we're together. 🍕",
    
    "Our music taste is so similar, and I love jamming out with you. Every song we share becomes part of our story. 🎵",
    
    "The first time you cooked for me, I fell even more in love. It wasn't just about the food - it was about the love and care you put into it. You made it so special. 🍳❤️",
    
    "I love your laugh. It's the most beautiful sound in the world, and I would do anything just to hear it every single day. 😊",
    
    "You make me want to be a better person. Your kindness, strength, and love inspire me to grow and improve every day. 🌱",
    
    "I love how comfortable we are with each other. We can be our true selves, no pretenses, just pure love and acceptance. 💯",
    
    "Every morning I wake up grateful that you're in my life. You're my first thought and my sweetest dream. ☀️",
    
    "I love how you support my dreams and ambitions. You believe in me even when I doubt myself. 🚀",
    
    "Your smile lights up my entire world. When you're happy, I'm happy. Your joy is my joy. ✨",
    
    "I love how we can talk for hours about anything and everything. Conversation with you never gets old. 💬",
    
    "You're my best friend, my partner, my everything. I can't imagine my life without you in it. 👫",
    
    "I love your strength and resilience. You face challenges with grace, and you inspire me to be stronger. 💪",
    
    "The way you care for others shows what a beautiful heart you have. Your compassion is one of the many things I adore about you. 💝",
    
    "I love making memories with you. Every moment we share becomes a treasure I hold close to my heart. 📸",
    
    "You understand me like no one else does. You see the real me and love me anyway. That means everything. 🫶",
    
    "I love how you make ordinary moments extraordinary. With you, even the simplest day becomes special. 🌟",
    
    "Your touch, your voice, your presence - everything about you brings me peace and happiness. 🕊️",
    
    "I love you more than words can express. You are my today and all of my tomorrows. Happy Birthday, my beautiful girl. Forever yours. 💖"
];

let displayedMessages = [];
let messageCount = 0;

// Quiz functions
function checkAnswer(questionNum) {
    let input, correct, hintElement;
    
    if (questionNum === 1) {
        input = document.getElementById('anniversary-input').value;
        correct = answers.anniversary;
        hintElement = document.getElementById('hint-1');
    } else if (questionNum === 2) {
        input = document.getElementById('birthday-input').value;
        correct = answers.herBirthday;
        hintElement = document.getElementById('hint-2');
    } else if (questionNum === 3) {
        input = document.getElementById('my-birthday-input').value;
        correct = answers.myBirthday;
        hintElement = document.getElementById('hint-3');
    }
    
    if (input === correct) {
        if (questionNum < 3) {
            // Move to next question
            document.getElementById(`question-${questionNum}`).classList.remove('active');
            document.getElementById(`question-${questionNum + 1}`).classList.add('active');
            currentQuestion++;
        } else {
            // Quiz completed, show main section
            document.getElementById('quiz-section').classList.remove('active');
            document.getElementById('main-section').classList.add('active');
            showNewMessage();
        }
    } else {
        attempts[questionNum]++;
        showHint(questionNum, hintElement);
    }
}

function showHint(questionNum, hintElement) {
    if (questionNum === 1) {
        if (attempts[1] === 1) {
            hintElement.textContent = "💭 Think about when we made it official... It was in November 2024";
        } else if (attempts[1] === 2) {
            hintElement.textContent = "💭 It was the 18th of November, 2024. Try again, my love!";
        } else {
            hintElement.textContent = "💭 The exact date is November 18, 2024 (2024-11-18)";
        }
    } else if (questionNum === 2) {
        if (attempts[2] === 1) {
            hintElement.textContent = "💭 It's in early November... The most special day of the year! 🎂";
        } else if (attempts[2] === 2) {
            hintElement.textContent = "💭 November 3rd! The day an angel was born in 2005 ✨";
        } else {
            hintElement.textContent = "💭 It's November 3, 2005 (2005-11-03)";
        }
    } else if (questionNum === 3) {
        if (attempts[3] === 1) {
            hintElement.textContent = "💭 It's in August... Think Winter! ☀️";
        } else if (attempts[3] === 2) {
            hintElement.textContent = "💭 August 7th, 2001! Almost there! 😊";
        } else {
            hintElement.textContent = "💭 It's August 7, 2001 (2001-08-07)";
        }
    }
}

// Message functions
function showNewMessage() {
    if (messageCount >= 20) {
        document.getElementById('message-text').innerHTML = 
            "You've read all 20 reasons! But honestly, I could give you 20 million more. I love you endlessly, Happy Birthday! 🎂💕🎉";
        return;
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * loveMessages.length);
    } while (displayedMessages.includes(randomIndex));
    
    displayedMessages.push(randomIndex);
    messageCount++;
    
    document.getElementById('message-text').textContent = loveMessages[randomIndex];
    document.getElementById('counter').textContent = messageCount;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set focus on first input
    document.getElementById('anniversary-input').focus();
});