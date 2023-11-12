const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', fnSz);

function fnSz(event) {
    text.style.fontSize = `${event.target.value}px`
}