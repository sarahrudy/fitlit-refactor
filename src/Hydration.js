class Hydration {
  constructor(data) {
//     this.userId = data.userID;
//     this.date = data.date;
//     this.ounces = data.numOunces;
//     this.drink(userRepository);
//   }
//   drink(userRepo) {
//     var hydrate = this;
//     userRepo.users.find(function(user) {
//       return user.id === hydrate.userId;
//     }).updateHydration(this.date, this.ounces);
//   }
// }

export default Hydration;


// methods from user class

  // this.ouncesAverage = 0;
  // this.ouncesRecord = [];
// updateHydration(date, amount) {
//   this.ouncesRecord.unshift({[date]: amount});
//   if (this.ouncesRecord.length) {
//     this.ouncesAverage = Math.round((amount + (this.ouncesAverage * (this.ouncesRecord.length - 1))) / this.ouncesRecord.length);
//   } else {
//     this.ouncesAverage = amount;
//   }
// }
// addDailyOunces(date) {
//   return this.ouncesRecord.reduce((sum, record) => {
//     let amount = record[date];
//     if (amount) {
//       sum += amount
//     }
//     return sum
//   }, 0)
// }

// methods from user repo class

// calculateAverageDailyWater(date) {
//   let todaysDrinkers = this.users.filter(user => {
//     return user.addDailyOunces(date) > 0;
//   });
//   let sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
//     return sum += drinker.addDailyOunces(date);
//   }, 0)
//   return Math.floor(sumDrankOnDate / todaysDrinkers.length);
// }
