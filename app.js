"use strict";

const phrases = [
  "☠️ «Очень опасно этого не понимать.»",
  "🏥 «Только очень осторожно.»",
  "👴 «Взрослые мужчины - наша аудитория.»",
  "🐛 «Наша аудитория - всё, что движется.»",
  "🌳 «Они из лесу даже не вышли.»",
  "🙅‍♀️ «Мне не нравится. Только не спрашивайте, почему.»",
  "🖕 «Мы с вами понимаем, что это неправильно.»",
  "👵 «Потеряем взрослых теток.»",
  "🦽🦽🦽 «Три калеки!»",
  "🤥 «Я когда-то это придумала.»",
  "🔒 «Из интернета ничего не уберешь.»",
  "🤪 «Вы знаете, чем отличается профессионал от непрофессионала?»",
  "⚰️ «Бедушка...»",
  "🧐 «А вы специально это сделали?»",
  "🦶топот ног🦶",
  "🤮 «Не вкусно...»",
  "👨‍👧‍👧 «Две девочки - один мальчик.»",
  "🌚 «Я против них ничего не имею.»",
  "👻 «Должно быть офинтупипельно!»",
  "💅 «Делайте, как считаете нужным.»",
  "🍬 «Очень больше риски.»",
  "🎲 «Просто кручу кубик.»",
  "🐀 «Вы здесь царь и бог.»",
  "💉 «Лучше быть здоровым и богатым...»",
  "💦 «Воровать - так миллион, трахать - так королеву.»",
  "🕳️ «Нужно сделать вчера»",
  "🌌 «Только помним, что заработать нужно астрономию»",
  "🧪 «У нас нет контрольной группы»",
];

const button = document.querySelector("button");
let counter = [];
button.addEventListener("click", () => {
  let random = getRandom();
  const comment = document.querySelector(".comment");
  comment.classList.toggle("element-animation");
  setTimeout(() => {
    comment.classList.remove("element-animation");
  }, 400);

  while (counter.includes(random)) {
    random = getRandom();
  }

  counter.push(random);

  if (counter.length === phrases.length) {
    counter = [];
  }

  getComment(comment, random);
});

function getComment(container, num) {
  container.innerHTML = `${phrases[num]}`;
}

function getRandom() {
  return Math.floor(Math.random() * phrases.length);
}
