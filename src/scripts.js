import './css/base.scss';
import './css/styles.scss';

import {fetchApiData} from './APIcalls.js';

import UserRepository from './UserRepository';
import User from './User';
import Activity from './Activity';
import Hydration from './Hydration';
import Sleep from './Sleep';
import updateDom from './updateDom.js';

// //GLOBAL VARIABLES
// let userRepository = new UserRepository();
// let user;
// let userData, sleepData, activityData, hydrationData;

// //API CALLS
// function fetchData() {
// //   return Promise.all([fetchApiData('users'), fetchApiData('sleep'), fetchApiData('activity'), fetchApiData('hydration')]);
// // }

// function assignData() {
//   fetchData()
//   .then((promises) => {
//     userData = promises[0].userData;
//     sleepData = promises[1].sleepData;
//     activityData = promises[2].activityData;
//     hydrationData = promises[3].hydrationData;
//     instantiateData(userData, sleepData, activityData, hydrationData)
//     updateUserInfo(user, userRepository)
//     updateDOM()
//   });
// };
//
// const instantiateData = (userData, sleepData, activityData, hydrationData) => {
//   const allUserData = userData.forEach(user => {
//       user = new User(user);
//       userRepository.users.push(user)
//       })
//   const allHydrationData = hydrationData.forEach(hydration => {
//       hydration = new Hydration(hydration, userRepository);
//       })
//   const allSleepData = sleepData.forEach(sleep => {
//       sleep = new Sleep(sleep, userRepository);
//       })
//   const allActivityData = activityData.forEach(activity => {
//       activity = new Activity(activity, userRepository);
//       })
//       user = userRepository.users[Math.floor(Math.random() * userRepository.users.length)];
// }
