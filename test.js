const question = document.getElementById("Qimg");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const sscore = document.getElementById("sc");
let currentQuestion = {};
let acceptingAwnsers = false;
let score = 0;
let questionCounter =0;
let availableQuestion = [];

let questions = [
    {
        question: "assets/Qimg1.jpeg",
        choice1: "المصدر غير موثوق",
        choice2: "المنصة المستخدمة غير مصرح بها",
        choice3: "الرابط غير صحيح",
        choice4: "الصورة صحيحة وليست احتيال",
        awnser:3
    },
    {
        question: "assets/Qimg2.jpeg",
        choice1: "وجود نطاق عنوان بريد غير مألوف",
        choice2: "احتواء الرسالة على موقع بنكي",
        choice3: "وجود تهجئة خاطئة",
        choice4: "توقيع الرسالة خاطئ",
        awnser:1
    },
    {
        question: "assets/Qimg3.jpeg",
        choice1: "وجود نطاق عنوان بريد غير مألوف",
        choice2: "طلب معلومات شخصية حساسة",
        choice3: "وجود تهجئة خاطئة",
        choice4: "التحية تبدأ باسم المستخدم بشكل صحيح",
        awnser:2
    },
    {
        question: "assets/Qimg4.jpeg",
        choice1: "وجود أخطاء إملائية في الرسالة",
        choice2: "استخدام عنوان البريد الإلكتروني الرسمي للشركة",
        choice3: "إرسال الرسالة في ساعات العمل الرسمية",
        choice4: "الطلب من المستخدم تغيير كلمة المرور",
        awnser:1
    },
    {
        question: "assets/Qimg5.jpeg",
        choice1: "وجود رقم الاتصال الخاص بالشركة في الرسالة",
        choice2: "الرسالة تحتوي على رقم الطلب الصحيح",
        choice3: "الرسالة تستخدم تحية شخصية",
        choice4: "الرسالة تطلب تحديث كلمة المرور عبر رابط مشبوه",
        awnser:4
    }
    
]

const CORRECT_BONUS =1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    availableQuestion = [...questions]
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestion.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        window.location.assign('end.html');
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.src = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
        
    availableQuestion.splice(questionIndex, 1);

    acceptingAwnsers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAwnsers) return;

        acceptingAwnsers = false;
        const selectedChoice = e.target;
        const selectAwnser = selectedChoice.dataset["number"];

    
        if(selectAwnser == currentQuestion.awnser){
            increamentScore(CORRECT_BONUS);
        }


        getNewQuestion();
    });
    
increamentScore = num => {
    score += num;

}


});
startGame();
