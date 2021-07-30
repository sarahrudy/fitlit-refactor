import { expect } from 'chai'
import Activity from '../src/Activity';
import { activityTestData } from '../src/data/activityTestData';
// import UserRepository from '../src/UserRepository';
// import User from '../src/User';

describe.only('Activity', () => {
  let activityData, activity;

  beforeEach(() => {
    activityData = activityTestData
    activity = new Activity(activityData);
    // user1 = new User({
    //   'id': 1,
    //   'name': 'Luisa Hane',
    //   'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
    //   'email': 'Diana.Hayes1@hotmail.com',
    //   'strideLength': 4.3,
    //   'dailyStepGoal': 10000,
    //   'friends': [
    //     16,
    //     4,
    //     8
    //   ]
    // });
    // user2 = new User({
    //   "id": 2,
    //   "name": "Jarvis Considine",
    //   "address": "30086 Kathryn Port, Ciceroland NE 07273",
    //   "email": "Dimitri.Bechtelar11@gmail.com",
    //   "strideLength": 4.5,
    //   "dailyStepGoal": 2000,
    //   "friends": [
    //     9,
    //     18,
    //     24,
    //     19
    //   ]
    // })
    // userRepository = new UserRepository();
    // userRepository.users.push(user1, user2);
    // activity1 = new Activity({
    //   "userID": 1,
    //   "date": "2019/06/15",
    //   "numSteps": 3684,
    //   "minutesActive": 140,
    //   "flightsOfStairs": 16
    // }, userRepository);
    // activity2 = new Activity({
    //   "userID": 2,
    //   "date": "2019/06/20",
    //   "numSteps": 2856,
    //   "minutesActive": 280,
    //   "flightsOfStairs": 22
    // }, userRepository);
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of activity', function() {
    expect(activity1).to.be.an.instanceof(Activity);
  });

  it('should hold a userID', function() {
    expect(activity2.userID).to.equal(2);
  });

  it('should hold a date', function() {
    expect(activity1.date).to.equal("2019/06/15");
  });

  it('should hold number of steps', function() {
    expect(activity1.steps).to.equal(3684);
  });

  it('should hold minutes active', function() {
    expect(activity2.minutesActive).to.equal(280);
  });

  it('should hold flights of stairs', function() {
    expect(activity2.flightsOfStairs).to.equal(22);
  });

  it('should have a default value of 0 for miles walked', function() {
    expect(activity2.milesWalked).to.equal(0);
  });

  it('should have a default value of null for reached step goal', function() {
    expect(activity2.reachedStepGoal).to.equal(null);
  });

  it('doActivity should add activities to user record', function() {
    expect(user1.activityRecord.length).to.equal(1);
  });

  it('should have a method that calculate miles walked', function() {
    expect(activity1.calculateMiles(userRepository)).to.equal('3.0');
  });

  describe('compareStepGoal', function() {
    it('should return false if goal isn\'t met', function() {
      activity1.compareStepGoal(userRepository);
      expect(activity1.reachedStepGoal).to.equal(false);
    });

    it('should return true if goal is met', function() {
      activity2.compareStepGoal(userRepository);
      expect(activity2.reachedStepGoal).to.equal(true);
    });
  });

});






//tests from user class
it('should have a method that return the highest climbing record', function() {
  user.activityRecord = [{flightsOfStairs: 10}, {flightsOfStairs: 15}, {flightsOfStairs: 17}]
  expect(user.findClimbingRecord()).to.equal(17)
});
it('should have a method that calculates daily calories burned', function() {
  user.activityRecord = [{date: "2019/09/16", activityRecord: 78}, {date: "2019/09/17", minutesActive: 100}, {date: "2019/09/17", minutesActive: 20}];
  expect(user.calculateDailyCalories("2019/09/17")).to.equal(912)
});
it('calculateAverageMinutesActiveThisWeek should calculate the average minutes active', function() {
  user.activityRecord = [{date: "2019/09/18", minutesActive: 78}, {date: "2019/09/17", minutesActive: 100}, {date: "2019/09/16", minutesActive: 20}, {date: "2019/09/15", minutesActive: 21}, {date: "2019/09/14", minutesActive: 35}, {date: "2019/09/13", minutesActive: 37}, {date: "2019/06/12", minutesActive: 42}, {date: "2019/09/11", minutesActive: 18}, {date: "2019/09/10", minutesActive: 16}, {date: "2019/09/09", minutesActive: 81}];
  expect(user.calculateAverageMinutesActiveThisWeek("2019/09/17")).to.equal('39')
});
it('calculateAverageStepsThisWeek should calculate the average steps taken in a given week', function() {
  user.activityRecord = [{date: "2019/09/18", steps: 1178}, {date: "2019/09/17", steps: 1080}, {date: "2019/09/16", steps: 120}, {date: "2019/09/15", steps: 891}, {date: "2019/09/14", steps: 380}, {date: "2019/09/13", steps: 3234}, {date: "2019/06/12", steps: 1111}, {date: "2019/09/11", steps: 18}, {date: "2019/09/10", steps: 345}, {date: "2019/09/09", steps: 81}];
  expect(user.calculateAverageStepsThisWeek("2019/09/17")).to.equal('976')
});
it('calculateAverageFlightsThisWeek should calculate the average flights of stairs taken in a given week', function() {
  user.activityRecord = [{date: "2019/09/18", flightsOfStairs: 4}, {date: "2019/09/17", flightsOfStairs: 6}, {date: "2019/09/16", flightsOfStairs: 1}, {date: "2019/09/15", flightsOfStairs: 2}, {date: "2019/09/14", flightsOfStairs: 12}, {date: "2019/09/13", flightsOfStairs: 21}, {date: "2019/06/12", flightsOfStairs: 3}, {date: "2019/09/11", flightsOfStairs: 14}, {date: "2019/09/10", flightsOfStairs: 2}, {date: "2019/09/09", flightsOfStairs: 8}];
  expect(user.calculateAverageFlightsThisWeek("2019/09/17")).to.equal('8.4')
});

it('updateAccomplishedDays should create an array of good days', function() {
  user.updateActivities({
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 3684,
    "minutesActive": 140,
    "flightsOfStairs": 16
  });
  user.updateActivities({
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 14684,
    "minutesActive": 140,
    "flightsOfStairs": 16
  });
  expect(user.accomplishedDays.length).to.equal(1);
})
it('findTrendingStepDays should find 3+ days with positive trend', function() {
  user.activityRecord = [{
  "date": "2019/06/29", "steps": 2},
  {"date": "2019/06/28", "steps": 1},
  {"date": "2019/06/27", "steps": 4},
  {"date": "2019/06/26", "steps": 3},
  {"date": "2019/06/25", "steps": 1},
  {"date": "2019/06/24", "steps": 12},
  {"date": "2019/06/23", "steps": 11},
  {"date": "2019/06/22", "steps": 10},
  {"date": "2019/06/21", "steps": 9},
  {"date": "2019/06/20", "steps": 8},
  {"date": "2019/06/19", "steps": 11},
  {"date": "2019/06/18", "steps": 10}];
  user.findTrendingStepDays()
  expect(user.trendingStepDays).to.deep.equal(['Your most recent positive step streak was 2019/06/26 - 2019/06/29!', 'Your most recent positive step streak was 2019/06/21 - 2019/06/24!']);
});
it('findTrendingStairsDays should find 3+ days with positive trend', function() {
  user.activityRecord = [{
  "date": "2019/06/29", "flightsOfStairs": 4},
  {"date": "2019/06/28", "flightsOfStairs": 1},
  {"date": "2019/06/27", "flightsOfStairs": 16},
  {"date": "2019/06/26", "flightsOfStairs": 15},
  {"date": "2019/06/25", "flightsOfStairs": 1},
  {"date": "2019/06/24", "flightsOfStairs": 9},
  {"date": "2019/06/23", "flightsOfStairs": 3},
  {"date": "2019/06/22", "flightsOfStairs": 10},
  {"date": "2019/06/21", "flightsOfStairs": 4},
  {"date": "2019/06/20", "flightsOfStairs": 3},
  {"date": "2019/06/19", "flightsOfStairs": 2},
  {"date": "2019/06/18", "flightsOfStairs": 1}];
  user.findTrendingStairsDays()
  expect(user.trendingStairsDays).to.deep.equal(['Your most recent positive climbing streak was 2019/06/26 - 2019/06/29!', 'Your most recent positive climbing streak was 2019/06/19 - 2019/06/24!']);
});
it('findFriendsNames should find the first names of friends', function() {
  let user2 = new User({
    'id': 16,
    'name': 'Ben Nist',
  })
  let user3 = new User({
    'id': 4,
    'name': 'John Firth',
  })
  let user4 = new User({
    'id': 8,
    'name': 'Nick Adams',
  })
  let users = [user2, user3, user4];
  user.findFriendsNames(users);
  expect(user.friendsNames).to.deep.equal(['BEN', 'JOHN', 'NICK']);
});
it('calculateTotalStepsThisWeek should add users steps for week', function() {
  user.activityRecord = [{
  "date": "2019/06/29", "steps": 2},
  {"date": "2019/06/28", "steps": 1},
  {"date": "2019/06/27", "steps": 4},
  {"date": "2019/06/26", "steps": 3},
  {"date": "2019/06/25", "steps": 1},
  {"date": "2019/06/24", "steps": 12},
  {"date": "2019/06/23", "steps": 11},
  {"date": "2019/06/22", "steps": 10},
  {"date": "2019/06/21", "steps": 9},
  {"date": "2019/06/20", "steps": 8},
  {"date": "2019/06/19", "steps": 11},
  {"date": "2019/06/18", "steps": 10}];
  user.calculateTotalStepsThisWeek('2019/06/29');
  expect(user.totalStepsThisWeek).to.equal(34);
});
it('findFriendsTotalStepsForWeek should find friends\' total steps', function() {
  let user2 = new User({
    'id': 16,
    'name': 'Ben Nist',
  })
  let user3 = new User({
    'id': 4,
    'name': 'John Firth',
  })
  let user4 = new User({
    'id': 8,
    'name': 'Nick Adams',
  })
  user2.activityRecord = [{
  "date": "2019/06/29", "steps": 25},
  {"date": "2019/06/28", "steps": 1},
  {"date": "2019/06/27", "steps": 43},
  {"date": "2019/06/26", "steps": 35},
  {"date": "2019/06/25", "steps": 1},
  {"date": "2019/06/24", "steps": 132},
  {"date": "2019/06/23", "steps": 11},
  {"date": "2019/06/22", "steps": 1025},
  {"date": "2019/06/21", "steps": 9},
  {"date": "2019/06/20", "steps": 85},
  {"date": "2019/06/19", "steps": 11},
  {"date": "2019/06/18", "steps": 10}];
user3.activityRecord = [{
  "date": "2019/06/29", "steps": 2},
  {"date": "2019/06/28", "steps": 21},
  {"date": "2019/06/27", "steps": 24},
  {"date": "2019/06/26", "steps": 23},
  {"date": "2019/06/25", "steps": 31},
  {"date": "2019/06/24", "steps": 512},
  {"date": "2019/06/23", "steps": 121},
  {"date": "2019/06/22", "steps": 120},
  {"date": "2019/06/21", "steps": 92},
  {"date": "2019/06/20", "steps": 82},
  {"date": "2019/06/19", "steps": 141},
  {"date": "2019/06/18", "steps": 10}];
user4.activityRecord = [{
  "date": "2019/06/29", "steps": 2},
  {"date": "2019/06/28", "steps": 1},
  {"date": "2019/06/27", "steps": 4},
  {"date": "2019/06/26", "steps": 3},
  {"date": "2019/06/25", "steps": 1},
  {"date": "2019/06/24", "steps": 12},
  {"date": "2019/06/23", "steps": 11},
  {"date": "2019/06/22", "steps": 10},
  {"date": "2019/06/21", "steps": 9},
  {"date": "2019/06/20", "steps": 8},
  {"date": "2019/06/19", "steps": 11},
  {"date": "2019/06/18", "steps": 10}];
  let users = [user2, user3, user4];
  user.findFriendsTotalStepsForWeek(users, '2019/06/29');
  expect(user.friendsActivityRecords).to.deep.equal([{"id": 4, "totalWeeklySteps": 734}, {"id": 16, "totalWeeklySteps": 248}, {"id": 8, "totalWeeklySteps": 34}]);
});



//tests from user repo class
it('calculateAverageStepGoal should return average step goal for all users', function() {
  expect(userRepository.calculateAverageStepGoal()).to.equal(10000);
})
it('should have a method that calculates average number of steps for users', function() {
  user1.activityRecord = [{date: "2019/09/17", steps: 100}, {date: "2019/09/17", steps: 2000}];
  user2.activityRecord = [{date: "2019/09/16", steps: 9820}, {date: "2019/09/17", steps: 234}];
  expect(userRepository.calculateAverageSteps("2019/09/17")).to.equal(778);
})

it('should have a method that calculates average number of active minutes for users', function() {
  user1.activityRecord = [{date: "2019/09/17", minutesActive: 100}, {date: "2019/09/17", minutesActive: 20}];
  user2.activityRecord = [{date: "2019/09/16", minutesActive: 78}, {date: "2019/09/17", minutesActive: 12}];
  expect(userRepository.calculateAverageMinutesActive("2019/09/17")).to.equal(44);
})


it('should have a method that calculates average number of stairs for users', function() {
  user1.activityRecord = [{date: "2019/09/17", flightsOfStairs: 10}, {date: "2019/09/17", flightsOfStairs: 15}];
  user2.activityRecord = [{date: "2019/09/16", flightsOfStairs: 8}, {date: "2019/09/17", flightsOfStairs: 4}];
  expect(userRepository.calculateAverageStairs("2019/09/17")).to.equal(10);
})
