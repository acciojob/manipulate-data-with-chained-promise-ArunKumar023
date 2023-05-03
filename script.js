function manipulateArray(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
  .then(arr => {
    return arr.filter(num => num % 2 === 0);
  })
  .then(evenArr => {
    return evenArr.map(num => num * 2);
  });  
}

const input = [1, 2, 3, 4];

manipulateArray(input)
  .then(result => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = result.join(", ");
  });
