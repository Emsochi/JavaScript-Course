

let myPromise = new Promise((accept, reject) => {

if(false) {
    accept("Wszystko jest okej");
}
else {
    reject("Nie wyszło nam")
}

});

myPromise.then(
    (value) => {
        console.log(value)
    },
    (error) => {
        console.log(error);
    }
)


let nextPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {resolve("Heeyyyyy")}, 3000)
})

setTimeout(function() {console.log("Broken promises, my heart bleeds")}, 3000)
console.log("No promise.")

nextPromise.then(function(value) {
    console.log(value);
    console.log("Executed properly");
})