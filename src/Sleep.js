class Sleep { // instance for the user's sleep each day
  // constructor(data, userRepository) {
  //   this.userId = data.userID;
  //   this.date = data.date;
  //   this.hoursSlept = data.hoursSlept;
  //   this.sleepQuality = data.sleepQuality;
  //   this.sleep(userRepository);
  // }

    constructor(sleepData) {
      this.sleepData = sleepData
    }
// what is this method trying to do? 
// 
  sleep(userRepo) {
    var sleep = this;
    userRepo.users.find(function(user) {
      return user.id === sleep.userId;
      // updateSleep() method should be part of the scripts.js file since it's manipulating the DOM
    }).updateSleep(this.date, this.hoursSlept, this.sleepQuality);
  }

  //update sleep does not have a corresponding test
// updateSleep(date, hours, quality) {
//   this.sleepHoursRecord.unshift({
//     'date': date,
//     'hours': hours
//   });
//   this.sleepQualityRecord.unshift({
//     'date': date,
//     'quality': quality
//   });
//   if(this.sleepHoursRecord.length) {
//     this.hoursSleptAverage = ((hours + (this.hoursSleptAverage * (this.sleepHoursRecord.length - 1))) / this.sleepHoursRecord.length).toFixed(1);
//   } else {
//     this.hoursSleptAverage = hours;
//   }
//   if (this.sleepQualityRecord.length) {
//     this.sleepQualityAverage = ((quality + (this.sleepQualityAverage * (this.sleepQualityRecord.length - 1))) / this.sleepQualityRecord.length).toFixed(1);
//   } else {
//     this.sleepQualityAverage = quality;
//   }
// }
}

export default Sleep;



// this.hoursSleptAverage = 0;
// this.sleepQualityAverage = 0;
// this.sleepHoursRecord = [];
// this.sleepQualityRecord = [];
// ------- methods from the user class -------- 
// calculateAverageHoursThisWeek(todayDate) {
//   return (this.sleepHoursRecord.reduce((sum, sleepAct) => {
//     let index = this.sleepHoursRecord.indexOf(this.sleepHoursRecord.find(sleep => sleep.date === todayDate));
//     if (index <= this.sleepHoursRecord.indexOf(sleepAct) && this.sleepHoursRecord.indexOf(sleepAct) <= (index + 6)) {
//       sum += sleepAct.hours;
//     }
//     return sum;
//   }, 0) / 7).toFixed(1);
// }
// calculateAverageQualityThisWeek(todayDate) {
//   return (this.sleepQualityRecord.reduce((sum, sleepAct) => {
//     let index = this.sleepQualityRecord.indexOf(this.sleepQualityRecord.find(sleep => sleep.date === todayDate));
//     if (index <= this.sleepQualityRecord.indexOf(sleepAct) && this.sleepQualityRecord.indexOf(sleepAct) <= (index + 6)) {
//       sum += sleepAct.quality;
//     }
//     return sum;
//   }, 0) / 7).toFixed(1);
// }



// // methods from user repo class
// calculateAverageSleepQuality() {
//   let totalSleepQuality = this.users.reduce((sum, user) => {
//     sum += user.sleepQualityAverage;
//     return sum;
//   }, 0);
//   return totalSleepQuality / this.users.length;
// }

// findBestSleepers(date) {
//   return this.users.filter(user => {
//     return user.calculateAverageQualityThisWeek(date) > 3;
//   })
// }
// getLongestSleepers(date) {
//   return sleepData.filter(sleep => {
//     return sleep.date === date;
//   }).sort((a, b) => {
//     return b.hoursSlept - a.hoursSlept;
//   })[0].userID;
// }
// getWorstSleepers(date) {
//   return sleepData.filter(sleep => {
//     return sleep.date === date;
//   }).sort((a, b) => {
//     return a.hoursSlept - b.hoursSlept;
//   })[0].userID;
// }
