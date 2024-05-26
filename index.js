let myNum = prompt("Please choose a number between 5 and 20.");
let count = 1;
let subjectArr = ["Accounting", "Alegbra", "Programming", "Art", "Data Analytics"]

for (let num = 0; num <= 10; num++) {
    if (num % 2 === 0) {
        document.write(`The number ${num} is even.`);
    } else {
        document.write(`The number ${num} is odd.`);
    };
    document.write("<br/>");
};

do {
    document.write(`Count is ${count}.`),
    count += 1,
    document.write("<br>");
} while (count < myNum);

subjectArr.forEach((element) => document.write(element + "<br>"));   

document.write(subjectArr.join())