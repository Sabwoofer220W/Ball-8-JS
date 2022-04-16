let move_ball = document.querySelector('.ball');
let otvet = document.querySelector('.otvet');
let text = document.querySelector('.text');
let randomtext = ["Бесспорно","Предрешено","Никаких сомнений","Бесспорно","Определённо да","Можешь быть уверен в этом",
"Мне кажется — «да»","Вероятнее всего","Хорошие перспективы","Знаки говорят — «да»","Да","Пока не ясно, попробуй снова","Спроси позже",
"Лучше не рассказывать","Сейчас нельзя предсказать","Сконцентрируйся и спроси опять",
"Даже не думай","Мой ответ — «нет»","По моим данным — «нет»","Перспективы не очень хорошие","Весьма сомнительно"];
let ask = document.querySelector('.ask');
let input = document.querySelector('.input');
let claer = document.querySelector('.claer');



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var start = randomtext[getRandomInt(randomtext.length)];

// otvet ===================================================================
otvet.addEventListener('click', function() {
  this.classList.add('animate');
  move_ball.classList.add('animate');
  otvet.style="display:none;"
    text.innerHTML = randomtext[getRandomInt(randomtext.length)];
});

otvet.addEventListener("animationend", AnimationHandler1, false);

function AnimationHandler1 () {
  // Удаляем класс с анимацией
  otvet.classList.remove('animate');
  move_ball.classList.remove('animate');

  }

// ball ===================================================================
move_ball.addEventListener('click', function() {
  this.classList.add('animate');
  text.innerHTML = start;
});

move_ball.addEventListener("animationend", AnimationHandler2, false);

function AnimationHandler2 () {
  // Удаляем класс с анимацией
  move_ball.classList.remove('animate');
  otvet.style="display:block;";

}
// ====================================================================


input.addEventListener('click', function() {
  input.style="border-color:black;"
});

ask.addEventListener('click', function() {
 if(input.value !== ''){
  move_ball.classList.add('animate');
  otvet.style="display:none;"
    text.innerHTML = randomtext[getRandomInt(randomtext.length)];
otvet.addEventListener("animationend", AnimationHandler1, false);
} else (
  input.style="border-color:red;"
)

});

claer.addEventListener('click', function() {
input.value='';
});
