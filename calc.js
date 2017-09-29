var box = document.getElementById('box');
var equal = document.getElementById('equal');

function addtoscreen(x) {
    box.value += x;
    if(x === 'C'){
        box.value = ' ';
    }
}

function answer(i) {
    box.value = i;
    if(i === '=') {
    eval(i);
    
    }
    
    // // i = equal.value;
    // // i = eval();
    // box.value.eval() = i;
    // if(i === '=') {
    //     equal.value = i;
    // }
// }

// function answer() {
//     // box.value = i;
//     i = eval();
//     if(i === '=') {
//         box.value = i;
//     }
//     // x = box.value
//     // x = eval(x);
//     // box.value = x;
// }

// var buttons = document.querySelectorAll('.button');
// var intOps = ' ';

// for(var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         if(buttons[i].value === '=') {
//             box.innerhtml = eval(intOps);
//         }
//         else if(buttons[i].value === 'c') {
//             intOps = ' '; box.innerhtml = intOps;
//         }
//         else{
//             intOps += buttons[i].value;
//             box.innerhtml = intOps;
//         }
//     });
// };

