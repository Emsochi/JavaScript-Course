function AddNumbers(x,y, functionToCall) {

    console.log(`Added Numbers: ${x+y}`)
    functionToCall();
}



AddNumbers(1, 2, () => {
    console.log("Hello!");
});