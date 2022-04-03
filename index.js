// built and burned 1x 4/1

 let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name) {
    cats.push(name); 
    return cats;
}
//  ^was confused because it doesn't take an array as an argument
// ^uses "cats" array 

function destructivelyPrependCat (name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats; 
}

function destructivelyRemoveFirstCat() {
    cats.shift(); 
    return cats;
}

function appendCat(name) {
 let newArray= [...cats];
 newArray.push(name);
 return newArray;
}

// THIS MORE COMPACT FUNCTION DOESN'T WORK
// function appendCat(name) {
//     let newArray= [...cats].push(name);
//     return newArray;
//    }

function prependCat(name) {
    let newArray= [...cats];
    newArray.unshift(name);
    return newArray;
}

function removeLastCat() {
    let newArray= [... cats];
    newArray.pop();
    return newArray;
}

function removeFirstCat() {
    let newArray= [... cats];
    newArray.shift();
    return newArray;
}