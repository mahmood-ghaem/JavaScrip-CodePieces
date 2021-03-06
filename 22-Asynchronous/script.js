// Asynchronous

fetch('https://jsonplaceholder.typicode.com/users')
  .then((resp) => resp.json())
  .then(console.log);

//--------------------------------------------------------------

// convert to async

async function fetchUserData() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log(data);
}
fetchUserData();

//=================================================================

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];
Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
  (array) => {
    console.log('users', array[0]);
    console.log('posts', array[1]);
    console.log('albums', array[2]);
  },
);

//--------------------------------------------------------------

// convert to async

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];
const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json())),
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (error) {
    console.log(error);
  }
};
getData();

//=================================================================

// Callback queue
setTimeout(() => {
  console.log('1', 'is the loneliest number');
}, 0);
setTimeout(() => {
  console.log('2', 'can be as bad as one');
}, 10);

// Job queue has more priority of Callback queue
Promise.resolve('hi').then((data) => console.log('3', data));

//
console.log('4', 'is a crowd');

// output:
// 4 is a crowd
// 3 hi
// 1 is the loneliest number
// 2 can be as bad as one

//=================================================================

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);
//race().then((data) => console.log(data)); same as top line
