const bg = document.querySelector(".bg");
const colors = [
  "linear-gradient(to right, #211219, #2F1D42)",
  "linear-gradient(to right, #1E393E, #191527)",
  "linear-gradient(to right, #9E593f, #2F1D42)",
];

const gen = iterateArray(colors);

setInterval(() => {
  bg.style.backgroundImage = gen.next().value;
}, 2000);

function* iterateArray(arr) {
  let i = 0;
  while (true) {
    yield arr[i % arr.length];
    i++;
  }
}

const arr = [1, 2, 3, 4];
