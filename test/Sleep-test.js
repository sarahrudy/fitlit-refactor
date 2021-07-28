import { expect } from 'chai';

import Sleep from '../src/Sleep';
import UserRepository from '../src/UserRepository';
import User from '../src/User';

describe('Sleep', function() {
  let sleep;
  let user1;
  let user2;
  let userRepository;
  beforeEach(() => {
    user1 = new User({
      'id': 1,
      'name': 'Luisa Hane',
      'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      'email': 'Diana.Hayes1@hotmail.com',
      'strideLength': 4.3,
      'dailyStepGoal': 10000,
      'friends': [
        16,
        4,
        8
      ]
    });
    user2 = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    })
    userRepository = new UserRepository();
    userRepository.users.push(user1, user2);
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    }, userRepository);
    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/25",
      "hoursSlept": 7.3,
      "sleepQuality": 3.2
    }, userRepository);
    sleep3 = new Sleep({
      "userID": 1,
      "date": "2019/07/17",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    }, userRepository);
  });
  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });
  it('should be an instance of activity', function() {
    expect(sleep1).to.be.an.instanceof(Sleep);
  });
  it('should hold a userId', function() {
    expect(sleep2.userId).to.equal(2);
  });
  it('should hold a date', function() {
    expect(sleep3.date).to.equal("2019/07/17");
  });
  it('should hold hours slept', function() {
    expect(sleep1.hoursSlept).to.equal(6.1);
  });
  it('should hold sleep quality', function() {
    expect(sleep3.sleepQuality).to.equal(1.4);
  });
  describe('sleep', function() {
    it('should update user\'s slept hours record', function() {
      expect(user1.sleepHoursRecord.length).to.equal(2);
    });
    it('should update user\'s slept hours record', function() {
      expect(user2.sleepQualityRecord.length).to.equal(1);
    });
    it('should update user\'s slept hours average', function() {
      expect(user1.hoursSleptAverage).to.equal('7.7');
    });
    it('should update user\'s sleep quality average', function() {
      expect(user1.sleepQualityAverage).to.equal('1.8');
    });
  })
});







//tests from user class tests
describe('updateSleep', function() {
  beforeEach(() => {
    user.updateSleep("2019/06/15", 7, 4.7);
    user.updateSleep("2019/07/14", 6, 4);
    user.updateSleep("2019/08/04", 8, 5.4);
  })
  it('should update user\'s quality of sleep record', function() {
    expect(user.sleepQualityRecord.length).to.equal(3);
  });
  it('should update user\'s average hours of sleep', function() {
    expect(user.hoursSleptAverage).to.equal('7.0');
  });
  it('should update user\'s average quality of sleep', function() {
    expect(user.sleepQualityAverage).to.equal('4.7');
  });
})

// tests from user repo class
it('calculateAverageSleepQuality should return average sleep quality for all users', function() {
  user1.sleepQualityAverage = 3.3;
  user2.sleepQualityAverage = 5;
  user3.sleepQualityAverage = 1;
  expect(userRepository.calculateAverageSleepQuality()).to.equal(3.1);
});

it('should have a method that finds the best sleepers', function() {
  sleep1 = new Sleep({
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 6.1,
    "sleepQuality": 1000
  }, userRepository);
  sleep2 = new Sleep({
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7.3,
    "sleepQuality": 500
  }, userRepository);
  sleep3 = new Sleep({
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 9.3,
    "sleepQuality": 1.4
  }, userRepository);
  expect(userRepository.findBestSleepers("2019/06/16")).to.deep.equal([user1, user2]);
});
it('should have a method that finds the longest sleepers', function() {
  sleepData = [{
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 100
  }, {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7.3,
    "sleepQuality": 1500
  }, {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 9.3,
    "sleepQuality": 1.4
  }];
  expect(userRepository.getLongestSleepers("2019/06/15")).to.equal(3);
});
it('should have a method that finds the worst sleepers', function() {
  sleepData = [{
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 1000
  }, {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7.3,
    "sleepQuality": 500
  }, {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 9.3,
    "sleepQuality": 1.4
  }];
  expect(userRepository.getWorstSleepers("2019/06/15")).to.equal(1);
});
