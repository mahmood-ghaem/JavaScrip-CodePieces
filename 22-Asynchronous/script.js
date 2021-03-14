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
