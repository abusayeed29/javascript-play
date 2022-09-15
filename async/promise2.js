//const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 1 Resolved`);
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 Resolved`);
  }, 2000);
});

// result in differnet time
// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

// result all in same time
// Promise.all([ promise1, promise2]).then((res)=>{
//   console.log(res);
// })

// je age resolve home sheita print hobe
Promise.race([ promise1, promise2]).then((res)=>{
  console.log(res);
})