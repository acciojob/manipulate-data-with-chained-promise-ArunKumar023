//your JS code here. If required.
 function getData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([1, 2, 3, 4]);
          }, 3000);
        });
      }

      function filterOddNumbers(numbers) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const filteredNumbers = numbers.filter((n) => n % 2 === 0);
            resolve(filteredNumbers);
          }, 1000);
        });
      }

      function multiplyEvenNumbers(numbers) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const multipliedNumbers = numbers.map((n) => (n % 2 === 0 ? n * 2 : n));
            resolve(multipliedNumbers);
          }, 2000);
        });
      }

      const outputElement = document.getElementById("output");

      getData()
        .then(filterOddNumbers)
        .then(multiplyEvenNumbers)
        .then((result) => {
          outputElement.innerText = result.join(", ");
        });