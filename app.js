const data = window.STUDY_DATA;
const units = data.units;
const questions = data.questions;

const unitSelect = document.getElementById("unitSelect");
const modeAllButton = document.getElementById("modeAll");
const modeWrongButton = document.getElementById("modeWrong");
const resetProgressButton = document.getElementById("resetProgress");

const statsElement = document.getElementById("stats");
const metaElement = document.getElementById("meta");
const promptElement = document.getElementById("prompt");
const choicesElement = document.getElementById("choices");
const answerInput = document.getElementById("answerInput");
const checkAnswerButton = document.getElementById("checkAnswer");
const resultElement = document.getElementById("result");
const nextQuestionButton = document.getElementById("nextQuestion");

let currentUnitId = units[0].id;
let currentIndex = 0;
let mode = "all";
let currentQuestionList = [];

let progress = loadProgress();

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem("br-portuguese-progress") || "{}");
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem("br-portuguese-progress", JSON.stringify(progress));
}

function normalizeText(text) {
  return String(text)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[。．.!！?？]/g, "")
    .replace(/\s+/g, " ");
}

function createUnitOptions() {
  unitSelect.innerHTML = "";

  units.forEach((unit) => {
    const option = document.createElement("option");
    option.value = unit.id;
    option.textContent = unit.title;
    unitSelect.appendChild(option);
  });

  unitSelect.value = currentUnitId;
}

function getQuestionList() {
  let list = questions.filter((question) => question.unitId === currentUnitId);

  if (mode === "wrong") {
    list = list.filter((question) => {
      const record = progress[question.id];
      return record && record.lastCorrect === false;
    });
  }

  return list;
}

function updateStats() {
  const records = Object.values(progress);
  const answered = records.length;
  const correct = records.filter((record) => record.lastCorrect).length;
  const rate = answered === 0 ? 0 : Math.round((correct / answered) * 100);

  const unit = units.find((item) => item.id === currentUnitId);

  statsElement.innerHTML = `
    <strong>現在の項目:</strong> ${unit.title}<br>
    <strong>回答済み:</strong> ${answered}問　
    <strong>直近正解:</strong> ${correct}問　
    <strong>正解率:</strong> ${rate}%
  `;
}

function renderQuestion() {
  currentQuestionList = getQuestionList();

  if (currentIndex >= currentQuestionList.length) {
    currentIndex = 0;
  }

  updateStats();
  resultElement.textContent = "";
  resultElement.className = "result";
  choicesElement.innerHTML = "";
  answerInput.value = "";
  answerInput.classList.add("hidden");
  checkAnswerButton.classList.add("hidden");
  nextQuestionButton.classList.add("hidden");

  if (currentQuestionList.length === 0) {
    metaElement.textContent = "";
    promptElement.textContent =
      mode === "wrong"
        ? "この項目に間違い復習の問題はありません。"
        : "この項目にはまだ問題がありません。";
    return;
  }

  const question = currentQuestionList[currentIndex];

  metaElement.textContent = `第 ${currentIndex + 1} 問 / ${currentQuestionList.length} 問　${question.tags.join("・")}`;
  promptElement.textContent = question.prompt;

  if (question.type === "choice") {
    question.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => checkAnswer(choice));
      choicesElement.appendChild(button);
    });
  }

  if (question.type === "input") {
    answerInput.classList.remove("hidden");
    checkAnswerButton.classList.remove("hidden");
    answerInput.focus();
  }
}

function isCorrectAnswer(question, userAnswer) {
  const normalizedUserAnswer = normalizeText(userAnswer);
  const answers = [question.answer, ...(question.alt || [])];

  return answers.some((answer) => normalizeText(answer) === normalizedUserAnswer);
}

function checkAnswer(userAnswer) {
  const question = currentQuestionList[currentIndex];
  const correct = isCorrectAnswer(question, userAnswer);

  const oldRecord = progress[question.id] || {
    attempts: 0,
    correctCount: 0,
    wrongCount: 0
  };

  progress[question.id] = {
    attempts: oldRecord.attempts + 1,
    correctCount: oldRecord.correctCount + (correct ? 1 : 0),
    wrongCount: oldRecord.wrongCount + (correct ? 0 : 1),
    lastCorrect: correct,
    lastAnswer: userAnswer,
    updatedAt: new Date().toISOString()
  };

  saveProgress();
  updateStats();

  const correctText = question.answer;

  resultElement.className = correct ? "result correct" : "result wrong";
  resultElement.innerHTML = `
    <strong>${correct ? "正解です。" : "不正解です。"}</strong><br>
    正解: ${correctText}<br>
    解説: ${question.explanation}
  `;

  const choiceButtons = choicesElement.querySelectorAll("button");
  choiceButtons.forEach((button) => {
    button.disabled = true;
  });

  checkAnswerButton.classList.add("hidden");
  nextQuestionButton.classList.remove("hidden");
}

function goNextQuestion() {
  currentIndex += 1;
  renderQuestion();
}

unitSelect.addEventListener("change", () => {
  currentUnitId = unitSelect.value;
  currentIndex = 0;
  renderQuestion();
});

modeAllButton.addEventListener("click", () => {
  mode = "all";
  currentIndex = 0;
  renderQuestion();
});

modeWrongButton.addEventListener("click", () => {
  mode = "wrong";
  currentIndex = 0;
  renderQuestion();
});

resetProgressButton.addEventListener("click", () => {
  const ok = confirm("学習記録をすべて削除しますか？");
  if (!ok) return;

  progress = {};
  saveProgress();
  currentIndex = 0;
  renderQuestion();
});

checkAnswerButton.addEventListener("click", () => {
  checkAnswer(answerInput.value);
});

answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkAnswer(answerInput.value);
  }
});

nextQuestionButton.addEventListener("click", goNextQuestion);

createUnitOptions();
renderQuestion();
