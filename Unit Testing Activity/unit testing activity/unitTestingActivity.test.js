var utils = require('course-utilities');
var greet = utils.load('./unitTestingActivity.js', 'greet');

test('outputs the correct string', () => {
  expect(greet("David")).toBe("Hi! How are you, David?");
});

test('outputs the correct string', () => {
    expect(greet()).toBe("Hello there.");
  });

test('outputs the correct string', () => {
    expect(greet("ELEANOR")).toBe("HOWDY! BUT WHY ARE YOU SHOUTING ELEANOR?!");
  });

test('outputs the correct string', () => {
    expect(greet(["James", "Jessie"])).toBe("What's up James and Jessie!");
  });

test('outputs the correct string', () => {
    expect(greet(["Bob", "Stuart", "Kevin", "Otto"])).toBe("Hey, Bob, Stuart, Kevin, and Otto.");
  });