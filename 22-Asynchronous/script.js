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
