//Модуль, который отвечает за отрисовку миниатюр
import {getPhotoData} from './data.js';

const otherUsersPhotos = document.querySelector('.pictures');
const otherUserPhotoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const usersPhotos = getPhotoData();
const usersPhotosFragment = document.createDocumentFragment();

usersPhotos.forEach((photo) => {
  const otherUserPhoto = otherUserPhotoTemplate.cloneNode(true);
  otherUserPhoto.querySelector('.picture__img').setAttribute('src', photo.url);
  otherUserPhoto.querySelector('.picture__likes').textContent = photo.likes;
  otherUserPhoto.querySelector('.picture__comments').textContent = photo.comments.length;
  usersPhotosFragment.appendChild(otherUserPhoto);
});

otherUsersPhotos.appendChild(usersPhotosFragment);
