    // This is my first JavaScript code
    console.log('Hello World');

    let name = 'Sam';
    console.log(name);

    const interestRate = 0.3;
    console.log(interestRate);

    let age = 22;
    let isApproved = false;
    let firstName = undefined;
    let selectedColor = null;


    // Objects:
    let person = {
        name: 'Sam',
        age: 22
    };
    // Don't need previous variables from earlier

    person.name = 'John';
    // Use this primarily but bracket notation has it's uses

    let selection = 'name';
    person[selection] = 'Mary';

    console.log(person.name);

    //Arrays:
    let selectedColors = ['red', 'blue'];
    selectedColors[2] = 1;
    console.log(selectedColors.length);

    // An array is a data structure that is used to represent a list of items


    // A function is a set of statements that performs a task or calculates a value

    function greet(name, lastName) {
        console.log('Hello ' + name + ' ' + lastName);
    }

    greet('John', 'Smith');


    function square(number) {
        return number * number;
    }

    console.log(square(2));