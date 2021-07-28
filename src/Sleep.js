class Sleep { // instance for the user's sleep each day
  constructor(data, userRepository) {
    this.userId = data.userID;
    this.date = data.date;
    this.hoursSlept = data.hoursSlept;
    this.sleepQuality = data.sleepQuality;
    this.sleep(userRepository);
  }
  sleep(userRepo) {
    var sleep = this;
    userRepo.users.find(function(user) {
      return user.id === sleep.userId;
    }).updateSleep(this.date, this.hoursSlept, this.sleepQuality);
  }
}

export default Sleep;






// this.hoursSleptAverage = 0;
// this.sleepQualityAverage = 0;
// this.sleepHoursRecord = [];
// this.sleepQualityRecord = [];
//update sleep does not have a corresponding test
updateSleep(date, hours, quality) {
  this.sleepHoursRecord.unshift({
    'date': date,
    'hours': hours
  });
  this.sleepQualityRecord.unshift({
    'date': date,
    'quality': quality
  });
  if(this.sleepHoursRecord.length) {
    this.hoursSleptAverage = ((hours + (this.hoursSleptAverage * (this.sleepHoursRecord.length - 1))) / this.sleepHoursRecord.length).toFixed(1);
  } else {
    this.hoursSleptAverage = hours;
  }
  if (this.sleepQualityRecord.length) {
    this.sleepQualityAverage = ((quality + (this.sleepQualityAverage * (this.sleepQualityRecord.length - 1))) / this.sleepQualityRecord.length).toFixed(1);
  } else {
    this.sleepQualityAverage = quality;
  }
}
calculateAverageHoursThisWeek(todayDate) {
  return (this.sleepHoursRecord.reduce((sum, sleepAct) => {
    let index = this.sleepHoursRecord.indexOf(this.sleepHoursRecord.find(sleep => sleep.date === todayDate));
    if (index <= this.sleepHoursRecord.indexOf(sleepAct) && this.sleepHoursRecord.indexOf(sleepAct) <= (index + 6)) {
      sum += sleepAct.hours;
    }
    return sum;
  }, 0) / 7).toFixed(1);
}
calculateAverageQualityThisWeek(todayDate) {
  return (this.sleepQualityRecord.reduce((sum, sleepAct) => {
    let index = this.sleepQualityRecord.indexOf(this.sleepQualityRecord.find(sleep => sleep.date === todayDate));
    if (index <= this.sleepQualityRecord.indexOf(sleepAct) && this.sleepQualityRecord.indexOf(sleepAct) <= (index + 6)) {
      sum += sleepAct.quality;
    }
    return sum;
  }, 0) / 7).toFixed(1);
}










it('calculateAverageHoursThisWeek should calculate average sleep hours for week before given date', function() {
  user.sleepHoursRecord = [{date: "2019/09/22", hours: 9.6}, {date: "2019/09/21", hours: 8.2}, {date: "2019/09/20", hours: 9.9}, {date: "2019/09/19", hours: 4.2}, {date: "2019/09/18", hours: 9.5}, {date: "2019/09/17", hours: 7.8}, {date: "2019/09/16", hours: 10.2}, {date: "2019/09/15", hours: 5.7}, {date: "2019/09/14", hours: 8.8}, {date: "2019/09/13", hours: 4.6}, {date: "2019/09/12", hours: 5.3}];
  expect(user.calculateAverageHoursThisWeek('2019/09/21')).to.equal('7.9');
});
it('calculateAverageQualityThisWeek should calculate average quality of sleep for week before a given date', function() {
  user.sleepQualityRecord = [{date: "2019/09/22", quality: 9.6}, {date: "2019/09/21", quality: 8.2}, {date: "2019/09/20", quality: 9.9}, {date: "2019/09/19", quality: 4.2}, {date: "2019/09/18", quality: 9.5}, {date: "2019/09/17", quality: 7.8}, {date: "2019/09/16", quality: 10.2}, {date: "2019/09/15", quality: 5.7}, {date: "2019/09/14", quality: 8.8}, {date: "2019/09/13", quality: 4.6}, {date: "2019/09/12", quality: 5.3}];
  expect(user.calculateAverageQualityThisWeek('2019/09/22')).to.equal('8.5')
});
