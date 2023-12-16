//если в js сложить две строки то они склеются: "wewf"+"fsdf" «конкатенацией» - сложение строк
 //let объявление переменной phrases, а в переменной, указан массив 
 let phrases = [
    { text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' } , { text: 'посмотреть скидки на авиабилеты', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
{ text: 'разобраться, о чём поют рэперы', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
{ text: 'Юрий Дудь', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
{ text: 'расставить книги на полке по цвету', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
{ text: 'читать про зарплаты в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
{ text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
{ text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
{ text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
{ text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length); //math.floor округялет значения
    return arr[randIndex]; //ramdom возращает результат функции 
  }
  getRandomElement (phrases) //чтобы вызвать функция нужно написать его имя с пустыми круглыми скобками
  let randomElement = getRandomElement(phrases);
  console.log(randomElement);
  let button = document.querySelector('.button');
  let advice = document.querySelector('.advice');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.image');
phrase.textContent = randomElement.text,getRandomElement(phrases); //Используйте инструмент textContent и замените текст элемента .phrase на случайный элемент массива phrases.Напоминаем: чтобы получить случайную строку из массива, нужно вызвать функцию getRandomElement и передать ей массив phrases.
button.addEventListener('click', function(){
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text), randomElement;
    smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
for (let i = 0; i <= 2; i = i + 1) {
    smoothly(phrase,'textContent',phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
  }
