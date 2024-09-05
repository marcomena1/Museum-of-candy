// let maximum = parseInt(prompt("enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("enter a falid number!"));
// }
// const targetnum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetnum);

// let guess = parseInt(prompt("enter your frist guess!"));

// while (guess !== targetnum) {
//     if (guess > targetnum) {
//         guess = parseInt(prompt("too high! enter a new guess:"));
//     } else {
//         guess = parseInt(prompt("too low! enter a new guess"));
//     }
// }
// console.log("you got it")
let input = prompt('what woild you like to do?')
const todos = ['collect chicken eggs', 'clean house'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`);
        }
        console.log('**************')
    } else if (input === 'new') {
        const newtodo = prompt('ok, what is the new todo?');
        todos.push(newtodo);
        console.log(`${newtodo} added to the list`);
    }

    input = prompt('what you would like to do?')
}
console.log("ok quit the app")