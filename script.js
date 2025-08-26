// --- VOCABULARY LIST ---
const vocab = [
    { chinese: "万", pinyin: "wàn", english: ["ten thousands"], vietnamese: ["mười nghìn", "vạn"] },
    { chinese: "万万", pinyin: "wàn wàn", english: ["absolutely"], vietnamese: ["nhất định", "tuyệt đối"] },
    { chinese: "万一", pinyin: "wàn yī", english: ["just in case"], vietnamese: ["phòng khi/lỡ như", "phòng khi", "lỡ như", "vạn nhất"] },
    { chinese: "万分", pinyin: "wàn fēn", english: ["absolutely", "extremely"], vietnamese: ["vô cùng/cực kỳ", "vô cùng", "cực kỳ", "vạn phần"] },
    { chinese: "历", pinyin: "lì", english: ["experience"], vietnamese: ["lịch"] },
    { chinese: "学历", pinyin: "xué lì", english: ["educational background"], vietnamese: ["trình độ học vấn", "học vấn"] },
    { chinese: "来历", pinyin: "lái lì", english: ["background"], vietnamese: ["lai lịch"] },
    { chinese: "日历", pinyin: "rì lì", english: ["calendar"], vietnamese: ["lịch", "cuốn lịch"] },
    { chinese: "大方", pinyin: "dà fang", english: ["generous"], vietnamese: ["hào phóng", "rộng rãi"] },
    { chinese: "千", pinyin: "qiān", english: ["a thousand"], vietnamese: ["nghìn", "ngàn", "thiên"] },
    { chinese: "千万", pinyin: "qiān wàn", english: ["absolutely"], vietnamese: ["nhất định", "tuyệt đối"] },
    { chinese: "之", pinyin: "zhī", english: ["of"], vietnamese: ["của"] },
    { chinese: "之前", pinyin: "zhī qián", english: ["before"], vietnamese: ["trước đây", "trước khi", "trước"] },
    { chinese: "之后", pinyin: "zhī hòu", english: ["after"], vietnamese: ["sau đó", "sau khi", "sau"] },
    { chinese: "记得", pinyin: "jì de", english: ["remember"], vietnamese: ["nhớ lại"] },
    { chinese: "记住", pinyin: "jì zhù", english: ["remember"], vietnamese: ["ghi nhớ"] },
    { chinese: "于", pinyin: "yú", english: ["about", "therefore"], vietnamese: ["do đó", "vu"] },
    { chinese: "于是", pinyin: "yú shì", english: ["therefore"], vietnamese: ["thế là", "vì vậy", "cho nên", "do đó"] },
    { chinese: "关于", pinyin: "guān yú", english: ["about"], vietnamese: ["đối với", "liên quan đến", "về"] },
    { chinese: "对于", pinyin: "duì yú", english: ["about"], vietnamese: ["đối với", "liên quan đến", "về"] },
    { chinese: "等于", pinyin: "děng yú", english: ["equals"], vietnamese: ["bằng"] },
    { chinese: "乎", pinyin: "hū", english: ["almost"], vietnamese: ["gần như", "hồ"] },
    { chinese: "几乎", pinyin: "jī hū", english: ["almost"], vietnamese: ["hầu như", "gần như"] },
    { chinese: "在乎", pinyin: "zài hu", english: ["care about"], vietnamese: ["quan tâm", "để tâm", "để ý"] },
    { chinese: "卡", pinyin: "kǎ / qiā", english: ["card", "get stuck"], vietnamese: ["thẻ", "kẹt", "mắc kẹt"] },
    { chinese: "卡车", pinyin: "kǎ chē", english: ["truck"], vietnamese: ["xe tải"] },
    { chinese: "片", pinyin: "piàn", english: ["slice", "sheet"], vietnamese: ["miếng/lát/tấm", "phiến"] },
    { chinese: "卡片", pinyin: "kǎ piàn", english: ["card"], vietnamese: ["tấm thẻ", "thiệp", "thẻ"] },
    { chinese: "名片", pinyin: "míng piàn", english: ["business card"], vietnamese: ["danh thiếp"] },
    { chinese: "止", pinyin: "zhǐ", english: ["stop", "end"], vietnamese: ["dừng lại", "kết thúc", "chỉ"] },
    { chinese: "不止", pinyin: "bù zhǐ", english: ["not only", "more than"], vietnamese: ["không chỉ", "hơn"] },
    { chinese: "到...为止", pinyin: "dào... wéi zhǐ", english: ["until"], vietnamese: ["cho đến khi", "cho đến"] },
    { chinese: "无", pinyin: "wú", english: ["nothing", "none"], vietnamese: ["không", "vô"] },
    { chinese: "无能为力", pinyin: "wú néng wéi lì", english: ["powerless"], vietnamese: ["bất lực", "không có năng lực"] },
    { chinese: "无话可说", pinyin: "wú huà kě shuō", english: ["have nothing to say"], vietnamese: ["không có gì để nói"] },
    { chinese: "无法无天", pinyin: "wú fǎ wú tiān", english: ["lawless"], vietnamese: ["vô pháp vô thiên"] },
    { chinese: "未", pinyin: "wèi", english: ["have not", "not yet"], vietnamese: ["chưa", "vị"] },
    { chinese: "未来", pinyin: "wèi lái", english: ["the future"], vietnamese: ["tương lai"] },
    { chinese: "从未", pinyin: "cóng wèi", english: ["have never"], vietnamese: ["chưa bao giờ"] },
    { chinese: "支", pinyin: "zhī", english: ["to pay"], vietnamese: ["chi trả", "trả", "chi"] },
    { chinese: "支票", pinyin: "zhī piào", english: ["cheque"], vietnamese: ["séc", "chi phiếu"] },
    { chinese: "开支", pinyin: "kāi zhī", english: ["expenditures"], vietnamese: ["chi phí", "khoản chi"] },
    { chinese: "支出", pinyin: "zhī chū", english: ["to pay", "expenditures"], vietnamese: ["chi ra", "chi tiêu"] },
    { chinese: "父", pinyin: "fù", english: ["father"], vietnamese: ["cha", "bố", "phụ"] },
    { chinese: "父亲", pinyin: "fù qīn", english: ["father"], vietnamese: ["cha", "bố", "phụ thân"] },
    { chinese: "交", pinyin: "jiāo", english: ["to interact", "to submit", "to exchange"], vietnamese: ["giao"] },
    { chinese: "外交", pinyin: "wài jiāo", english: ["foreign affairs"], vietnamese: ["ngoại giao"] },
    { chinese: "交给", pinyin: "jiāo gěi", english: ["give to", "submit to"], vietnamese: ["giao cho", "giao gửi"] },
    { chinese: "上交", pinyin: "shàng jiāo", english: ["to submit"], vietnamese: ["nộp lên", "giao nộp", "nộp"] },
    { chinese: "摸", pinyin: "mō", english: ["to touch"], vietnamese: ["sờ", "chạm", "xoa", "mạc"] },
    { chinese: "闻", pinyin: "wén", english: ["to smell"], vietnamese: ["ngửi"] },
    { chinese: "卖", pinyin: "mài", english: ["to sell"], vietnamese: ["mua", "mại"] },
    { chinese: "爷", pinyin: "yé", english: ["old man", "grandfather"], vietnamese: ["ông", "gia"] },
    { chinese: "爷爷", pinyin: "yé ye", english: ["grandfather"], vietnamese: ["ông nội", "gia gia"] },
    { chinese: "大爷", pinyin: "dà ye", english: ["uncle"], vietnamese: ["bác"] },
    { chinese: "共", pinyin: "gòng", english: ["public", "together"], vietnamese: ["cùng/chung", "cộng"] },
    { chinese: "共同", pinyin: "gòng tóng", english: ["together"], vietnamese: ["cùng nhau", "chung", "cộng đồng"] },
    { chinese: "一共", pinyin: "yī gòng", english: ["all together", "in total"], vietnamese: ["tổng cộng"] },
    { chinese: "山", pinyin: "shān", english: ["mountain"], vietnamese: ["núi", "sơn"] },
    { chinese: "火山", pinyin: "huǒ shān", english: ["volcano"], vietnamese: ["núi lửa"] },
    { chinese: "山地", pinyin: "shān dì", english: ["mountain terrain"], vietnamese: ["vùng núi", "miền núi", "sơn địa"] },
    { chinese: "山水", pinyin: "shān shuǐ", english: ["landscape"], vietnamese: ["phong cảnh", "sơn thủy"] },
    { chinese: "世", pinyin: "shì", english: ["the world"], vietnamese: ["đời", "thế"] },
    { chinese: "去世", pinyin: "qù shì", english: ["to pass away"], vietnamese: ["qua đời", "tạ thế"] },
    { chinese: "问世", pinyin: "wèn shì", english: ["to come out", "to debut"], vietnamese: ["ra mắt", "ra đời"] },
    { chinese: "世界", pinyin: "shì jiè", english: ["the world"], vietnamese: ["thế giới"] },
    { chinese: "修", pinyin: "xiū", english: ["to fix", "to repair"], vietnamese: ["sửa", "sửa chữa", "tu"] },
    { chinese: "准备", pinyin: "zhǔn bèi", english: ["to prepare"], vietnamese: ["chuẩn bị"] },

]

// --- DOM ELEMENTS ---
const questionDisplay = document.getElementById('question-display');
const pinyinDisplay = document.getElementById('pinyin-display');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedbackMessage = document.getElementById('feedback-message');
const scoreDisplay = document.getElementById('score-display');
const switchModeBtn = document.getElementById('switch-mode-btn');

// --- QUIZ STATE ---
let currentWordIndex = 0;
let wrongAttempts = 0;
let score = 0;
let currentMode = 'char_to_meaning';

// --- FUNCTIONS ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadNextWord() {
    if (currentWordIndex >= vocab.length) {
        questionDisplay.textContent = 'Quiz Complete!';
        pinyinDisplay.textContent = `Final Score: ${score} / ${vocab.length}`;
        answerInput.style.display = 'none';
        submitBtn.style.display = 'none';
        return;
    }

    wrongAttempts = 0;
    answerInput.value = '';
    feedbackMessage.textContent = '\u00A0';
    feedbackMessage.className = '';
    pinyinDisplay.textContent = '\u00A0'; // CHANGED: Clear pinyin on new word
    answerInput.focus();

    const currentWord = vocab[currentWordIndex];

    if (currentMode === 'char_to_meaning') {
        questionDisplay.textContent = currentWord.chinese;
        // Pinyin is now hidden on load
        questionDisplay.classList.add('character');
        questionDisplay.classList.remove('meaning');
        answerInput.placeholder = "Type meaning (EN or VI)...";
    } else { // 'meaning_to_char'
        // OLD
        // const isEnglish = Math.random() > 0.5;
        // const meaning = isEnglish ? currentWord.english[0] : currentWord.vietnamese[0];
        
        //NEW
        const meaning = currentWord.vietnamese[0];
        questionDisplay.textContent = meaning;
        // pinyinDisplay is already cleared above, so nothing shows here
        questionDisplay.classList.add('meaning');
        questionDisplay.classList.remove('character');
        answerInput.placeholder = "Type the Chinese characters...";
    }
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (!userAnswer) return;

    const currentWord = vocab[currentWordIndex];
    let isCorrect = false;

    if (currentMode === 'char_to_meaning') {
        const correctAnswers = [...currentWord.english, ...currentWord.vietnamese].map(ans => ans.toLowerCase());
        isCorrect = correctAnswers.includes(userAnswer);
    } else { // 'meaning_to_char'
        isCorrect = (userAnswer === currentWord.chinese);
    }

    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }
}

function handleCorrectAnswer() {
    score++;
    scoreDisplay.textContent = score;
    feedbackMessage.textContent = 'Correct!';
    feedbackMessage.className = 'feedback-correct';

    const currentWord = vocab[currentWordIndex];
    // ADDED: Show pinyin on correct answer, but only in the right mode
    if (currentMode === 'char_to_meaning') {
        pinyinDisplay.textContent = currentWord.pinyin;
    }
    
    setTimeout(() => {
        currentWordIndex++;
        loadNextWord();
    }, 1800); // Increased delay slightly to allow time to see pinyin
}

function handleWrongAnswer() {
    wrongAttempts++;
    feedbackMessage.className = 'feedback-wrong';
    answerInput.value = '';

    if (wrongAttempts >= 3) {
        const currentWord = vocab[currentWordIndex];
        let correctAnswerText;

        if (currentMode === 'char_to_meaning') {
            // ADDED: Show pinyin after 3 wrong attempts
            pinyinDisplay.textContent = currentWord.pinyin;
            // OLD
            // correctAnswerText = `${currentWord.english[0]} / ${currentWord.vietnamese[0]}`;

            // NEW
            correctAnswerText = currentWord.vietnamese[0];
        } else {
            correctAnswerText = currentWord.chinese;
        }

        feedbackMessage.innerHTML = `The correct answer is: <br><strong>${correctAnswerText}</strong>`;
        
        setTimeout(() => {
            currentWordIndex++;
            loadNextWord();
        }, 6000);

    } else {
        feedbackMessage.textContent = `Incorrect. Try again. (${wrongAttempts}/3)`;
    }
}

function switchMode() {
    if (currentMode === 'char_to_meaning') {
        currentMode = 'meaning_to_char';
        switchModeBtn.textContent = 'Switch to: Character ➔ Meaning';
    } else {
        currentMode = 'char_to_meaning';
        switchModeBtn.textContent = 'Switch to: Meaning ➔ Character';
    }
    startQuiz();
}

function startQuiz() {
    currentWordIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    answerInput.style.display = 'block';
    submitBtn.style.display = 'block';
    shuffleArray(vocab);
    loadNextWord();
}

// --- EVENT LISTENERS ---
submitBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});
switchModeBtn.addEventListener('click', switchMode);

// --- INITIALIZE ---
startQuiz();
