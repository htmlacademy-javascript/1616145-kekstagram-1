// Функция для проверки, является ли строка палиндромом.

function checkString(str) {
  const string = str.toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Функция, которая принимает строку или число, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

function toNumber(value) {
  const text = value;
  const len = text.length;
  let str = '';

  if (typeof text === 'string') {
    for (let i = 0; i < len; i++) {
      const a = text[i];
      if (a === '0' || a === '1' || a === '2' || a === '3' || a === '4' || a === '5' || a === '6' || a === '7' || a === '8' || a === '9') {
        str = str + a;
      }
    }
    return parseInt(str, 10);
  } else {
    return toNumber(text.toString());
  }
}

/* Функция, которая принимает три параметра:
    исходную строку,
    минимальную длину и
    строку с добавочными символами —
   и возвращает исходную строку, дополненную указанными символами до заданной длины.
   Символы добавляются в начало строки.
   Если исходная строка превышает заданную длину, она не должна обрезаться.
   Если «добивка» слишком длинная, она обрезается с конца. */

function addSymbols (oldString, n, additionalString) {
  const oldText = oldString;
  const oldLen = oldText.length;
  const minLen = n;
  const additionalText = additionalString;

  if (oldLen >= minLen) {
    return oldText;
  } else {
    const additionalStringLen = minLen - oldLen;
    const newText = additionalText.slice(0, additionalStringLen) + oldText;

    if (newText.length === minLen){
      return newText;
    } else {
      const newTextWithSymbols = additionalText[0].repeat(minLen - newText.length) + newText;
      return newTextWithSymbols;
    }
  }
}

// Функция для проверки длины строки
const verifyStringLength = (string, value) => string.length <= value;
