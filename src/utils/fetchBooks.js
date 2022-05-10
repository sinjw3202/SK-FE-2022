// src/api/books.json 모듈을 불러와 booksApi 이름으로 사용합니다.
import booksApi from '../api/books.json';

export const fetchBooks = (timeout = 1000, shouldReject = false) => {
  // Promise 객체를 반환합니다.
  // timeout 초가 흐른 뒤, 타이머가 작동하도록 설정합니다.
  // shouldReject 값에 따라 오류 객체를 전송하거나,
  // booksApi.books 값을 전송합니다.

  return new Promise((resolve, reject) => {
    if (shouldReject) {
      reject({ message: '데이터 통신을 거절 당했습니다.' });
    } else {
      setTimeout(() => resolve(booksApi.books), timeout);
    }
  });
};
