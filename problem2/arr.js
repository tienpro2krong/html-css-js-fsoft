const isNumeric = (num) =>
    (typeof num === "number" || (typeof num === "string" && num.trim() !== "")) &&
    !isNaN(num);
const generator_random = (num) => {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomNumber(1, num));
    }
    return arr;
};

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let button = document.querySelector("button");
button.addEventListener("click", function() {
    let input = document.querySelector("input").value;
    if (isNumeric(input)) {
        let result = generator_random(input);
        if (result) {
            let output = document.querySelector(".generator-result");
            output.innerHTML = `[${result}]`;
        }
    }
});