const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};


const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const valueEl = document.querySelector("#value");

decr.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
})

incr.addEventListener('click', function () {
    counterValue.increment();
        valueEl.textContent = counterValue.value;

})