// const promiseOne: Promise<any> = new Promise((resolve: any, reject: any) => {
//   setTimeout(() => {
//     console.log('Promise 1 resolved');
//     resolve();
//   }, 1000);
// });

// promiseOne.then(() => {
//   console.log('Promise consumed');
// });

// new Promise((resolve: any, reject: any) => {
//   setTimeout(() => {
//     console.log('Promise 2 resolved');
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log('Promise consumed');
// });

// const promiseThree: Promise<any> = new Promise((resolve: any, reject: any) => {
//   setTimeout(() => {
//     console.log('Promise 3 resolved');
//     resolve({data: 'Promise 3 data'});
//   }, 1000);
// });

// promiseThree.then(data => {
//   console.log(`Promise consume`, data);
// });

// new Promise((resolve: any, reject: any) => {
//   setTimeout(() => {
//     let error: boolean = true;
//     if (error) {
//       console.log('Promise 4 rejected');
//       reject('Promise 4 rejected');
//     } else {
//       console.log('Promise 4 resolved');
//       resolve({data: 'Promise 4 data'});
//     }
//   }, 1000);
// })
//   .then(data => {
//     console.log(`Promise consume`, data);
//   })
//   .catch(error => {
//     console.log(`Promise consume`, error);
//   });

// new Promise((resolve: any, reject: any) => {
//   setTimeout(() => {
//     console.log('Promise 5 resolved');
//     resolve({username: 'John Doe', password: '123456'});
//   }, 1000);
// })
//   .then((data: any) => {
//     console.log(`Promise consume`, data);
//     return data.username;
//   })
//   .then((username: string) => {
//     console.log(`Promise consume`, username);
//   });

/**
 * @summary Handling Promise with async/await
 */
// const promiseFive = new Promise((resolve, reject) => {
//   let error: boolean = false;
//   setTimeout(() => {
//     if (!error) {
//       resolve({username: 'John Doe'});
//     } else {
//       reject('Promise 5 rejected');
//     }
//   }, 1000);
// });

// async function consumePromise() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise();

/**
 * @summary Getting data from an API using fetch with async/await
 */

// const consumeAPI = async () => {
//   try {
//     const response = await fetch('https://api.publicapis.org/entries');
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// consumeAPI();

/**
 * @summary Getting data from an API using fetch with Promise
 */
fetch('https://api.publicapis.org/entries')
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
