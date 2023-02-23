function boilEggs() {
delay(1000).then(() => {
    console.log("Boiled Eggs")
});

}

function makeSandwich() {
    delay(2000).then(() => {
        console.log("Make Sandwich")
    });
    
}

function drinkMilk() {
    delay(3000).then(() => {
        console.log("Drink Milk")
    });
    
}

setTimeout(boilEggs);
setTimeout(makeSandwich);
setTimeout(drinkMilk);


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }