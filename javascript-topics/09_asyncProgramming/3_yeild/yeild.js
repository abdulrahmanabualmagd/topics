function fetchData(i) {
  return new Promise(resolve => {
    setTimeout(() => resolve(i), 700);
  });
}

async function* getData() {
  let index = 0;
  while (index < 3) {
    yield await fetchData(index);
    index++;
  }
}

(async () => {
  for await (const result of getData()) {
    console.log(result);
  }
})();
