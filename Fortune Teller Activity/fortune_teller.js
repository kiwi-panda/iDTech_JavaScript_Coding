var fortune = 8;
console.log(`Fortune Selected: ${fortune}`);

if (fortune >= 0 && fortune <= 3) {
    console.log("Oh no! You selected a low fortune!");
} else if (fortune > 3 && fortune <= 7) {
    console.log("You selected an average fortune.");
} else if (fortune > 7 && fortune <= 10) {
    console.log("Congratulations! You selected great fortune.");
} else {
    console.log("It was hard to determine your fortune, try again!");
}