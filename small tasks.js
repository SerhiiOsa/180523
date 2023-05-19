//prinr elements of array using setTimeout()

var periodicIterator = function (array, time) {
    let printAfter = null;
    array.forEach((element, index) => {
        printAfter = setTimeout(() => console.log(element), time + (time * index));
        if(index >= array.length) {
            clearTimeout(printAfter);
            printAfter = null;
        }
    }); 
}

periodicIterator([1, 5, 9, 12, 17], 1000);


//************************************************

//checking if object is empty

function isObjectEmpty(obj) {
    return !!(Object.getOwnPropertyNames(obj).length);
}

console.log(isObjectEmpty({name: '2'}));


//*************************************************

//function that return correct typeof for evey type

function myTypeOf(variable) {

    if (typeof variable !== "object") return typeof variable;

    if(typeof variable === 'function') return 'function';

    if(! variable) return 'null';

    if(Array.isArray(variable)) return 'array';

    return 'object';

};

console.log(myTypeOf([]));


//**************************************************

//Delete properties from object

function deletePropertiesOfObject(obj, ...rest) {
    for(let property in obj) {
        if(rest.includes(property)) delete obj[property];
    }
    return obj;
}

let objMy = {
    name: 'nvebu',
    surname: 'eivin',
    age: 28
};

console.log(deletePropertiesOfObject(objMy, 'name', 'surname'));


//***************************************************
