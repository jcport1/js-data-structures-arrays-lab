// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

//push is destructive *adds an element to end of arrray*

function destructivelyAppendDriver (name) { 
    drivers.push(name); 
}

//unshift is destructive *adds element to beginning of array*

function destructivelyPrependDriver (name) {
     drivers.unshift(name);
}

// pop destructively removes last element

function destructivelyRemoveLastDriver () {
    drivers.pop();
}

//shift destructively removes first element

function destructivelyRemoveFirstDriver () {
    drivers.shift();
}

//Non-destructive add & remove

//... adds nondestructively 

function appendDriver (name) {
    return [...drivers, name];
}

function prependDriver(name) {
    return [name, ...drivers];
}

//slice removes non-destructively 
function removeFirstDriver () {

    return drivers.slice(1);

}

function removeLastDriver () {
    
    return drivers.slice(0, drivers.length - 1);

}