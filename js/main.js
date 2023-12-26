/*
В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов. 
Каждый объект массива — описание фотографии, опубликованной пользователем.
*/


// Создать и заполнить массив с ID всех фотографий

const photoId = [];
function getPhotoId() {
  for (let i = 1; i <= 25; i++) {
    photoId.push(i);
  }
  return photoId;
}


const photoDescription = [
  'Отличный день',
  'Какое-то болото',
  'Красиво плывут',
];

const commentMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const commentNames = [
  'Иван',
  'Хуан Карлос',
  'Мария',
  'Егор',
  'Виктор',
  'Юлия',
  'Ленусик',
];

// Сгенерировать случайное число из диапазона

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Сгенерировать случайный ID комментария к фотографии

const getCommentId = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// Создать комментарий к фотографии

const getComments = () => {
  const commentId = getCommentId(1, 1000000000);
  const randomAvatar = getRandomInteger(1,6);
  const randomMessageIndex = getRandomInteger(0, commentMessage.length - 1);
  const randomNameIndex = getRandomInteger(0, commentNames.length - 1);

  return {
    id: commentId,
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: commentMessage[randomMessageIndex],
    name: commentNames[randomNameIndex],
  };
};

// Создать информацию о фотографии

const getPhotoInformation = (idx) => {
  const randomDescriptionIndex = getRandomInteger(0, photoDescription.length - 1);
  const randomQuantityLikes = getRandomInteger(15, 200);
  const comments = [];

  for(let i = 0; i < getRandomInteger(1, 5); i++) {
    comments.push(getComments(i));
  }

  return {
    id: photoId[idx],
    url: `photos/${photoId[idx]}.jpg`,
    description: photoDescription[randomDescriptionIndex],
    likes: randomQuantityLikes,
    comments: comments,
  };
};

// Создать массив из 25 объектов с информацией о фотографиях

const getPhotoData = () => {
  const PhotoData = [];
  getPhotoId();

  for (let i = 0; i < photoId.length; i++) {
    PhotoData.push(getPhotoInformation(i));
  }

  return PhotoData;

};
