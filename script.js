const input = [1, 2, 3, 4];

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(input);
  }, 3000);
});

const filterPromise = promise.then((arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredArr = arr.filter((num) => num % 2 === 0);
      resolve(filteredArr);
    }, 1000);
  });
});

const mapPromise = filterPromise.then((arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mappedArr = arr.map((num) => num * 2);
      resolve(mappedArr);
    }, 2000);
  });
});

mapPromise.then((arr) => {
  const outputDiv = document.getElementById("output");
  outputDiv.innerText = arr.join(", ");
});
