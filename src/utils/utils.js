export function shuffle(arr) {
  let array = arr;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const base64 = {
	encode: (plainText) => Buffer.from(plainText, 'utf8').toString('base64'),
	decode: (base64Text) => Buffer.from(base64Text, 'base64').toString('utf8'),
};

export const decodeToken = (token) => {
  const data = token.split('.')[1];
  return JSON.parse(base64.decode(data));
}
