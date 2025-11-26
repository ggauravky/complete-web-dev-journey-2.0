let score = 100; // number
let bonus = 50; // number
let totalScore = score + bonus; // addition operation
console.log("Total Score:", totalScore); // Output: Total Score: 150

let minusResult = score - bonus; // subtraction operation
console.log("Minus Result:", minusResult); // Output: Minus Result: 50

let product = score * 2; // multiplication operation
console.log("Product:", product); // Output: Product: 200

let division = score / 2; // division operation
console.log("Division:", division); // Output: Division: 50

let remainder = score % 30; // modulus operation
console.log("Remainder:", remainder); // Output: Remainder: 10

score += 20; // score = score + 20
console.log("Updated Score after += 20:", score); // Output: Updated Score after += 20: 120

score *= 2; // score = score * 2
console.log("Updated Score after *= 2:", score); // Output: Updated Score after *= 2: 240

score--; // decrement score by 1
console.log("Score after decrement:", score); // Output: Score after decrement: 239

let isPassed = score > 200; // comparison operation
console.log("Is Passed:", isPassed); // Output: Is Passed: true

let isPerfect = score === 300; // strict equality comparison
console.log("Is Perfect Score:", isPerfect); // Output: Is Perfect Score: false

let finalResult = isPassed && isPerfect; // logical AND operation
console.log("Final Result (isPassed && isPerfect):", finalResult); // Output: Final Result (isPassed && isPerfect): false

let alternativeResult = isPassed || isPerfect; // logical OR operation
console.log("Alternative Result (isPassed || isPerfect):", alternativeResult); // Output: Alternative Result (isPassed || isPerfect): true

let negation = !isPerfect; // logical NOT operation
console.log("Negation of isPerfect:", negation); // Output: Negation of isPerfect: true

let greeting = "Hello, " + "World!"; // string concatenation
console.log(greeting); // Output: Hello, World!

let fullName = `User: ${"John"} - Score: ${score}`; // template literal
console.log(fullName); // Output: User: John - Score: 239