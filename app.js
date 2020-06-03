"use strict";

const phrases = [
  "Очень опасно этого не понимать.",
  "Только очень осторожно.",
  "Взрослые мужчины - наша аудитория.",
  "Наша аудитория - всё, что движется.",
  "Они из лесу даже не вышли.",
  "Мне не нравится. Только не спрашивайте, почему.",
  "Мы с вами понимаем, что это неправильно.",
  "Потеряем взрослых теток.",
  "Три калеки!",
  "Я когда-то это придумала.",
  "Из интернета ничего не уберешь.",
  "Вы знаете, чем отличается профессионал от непрофессионала?",
  "Бедушка...",
  "А вы специально это сделали?",
  "*топот ног*",
  "Не вкусно...",
  "Две девочки - один мальчик.",
  "Я против них ничего не имею.",
  "Должно быть офинтупипельно!",
];

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * phrases.length);
  const comment = document.querySelector(".comment");
  comment.classList.toggle("element-animation");
  setTimeout(() => {
    comment.classList.remove("element-animation");
  }, 400);

  if (phrases[random] === "*топот ног*") {
    comment.innerHTML = `${phrases[random]}`;
  } else {
    comment.innerHTML = `«${phrases[random]}»`;
  }
});
