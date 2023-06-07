const tasks = [
    'Create a function that takes two numbers as arguments and returns their sum.<br/>addition(-3, -6) ➞ -9<br/>addition(7, 3) ➞ 10',
    'Create a function which returns the number of true values there are in an array.<br/>countTrue([true, false, false, true, false]) ➞ 2<br/>countTrue([]) ➞ 0',
    'Write a function <b>redundant</b> that takes in a string <i>str</i> and returns a function that returns <i>str</i>.<br/>const f1 = redundant("apple")<br/>f1() ➞ "apple"',
    'Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.<br/>toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]<br/>toArray({}) ➞ []',
    'Create a function that will take a HEX number and returns the binary equivalent (as a string).<br/>toBinary(0xFF) ➞ "11111111"<br/>toBinary(0xFA) ➞ "11111010"',
    'Create a function that takes two dates and returns the number of days between the first and second date.<br/>getDays(new Date("June 14, 2019"), new Date("June 20, 2019"))<br/>// ➞ 6',
    'Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".<br/>sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"<br/>// 97 contains the number seven.',
];

export class TaskService {
    static getRandomTask() {
        return tasks[Math.floor(Math.random() * 7)];
    }
}