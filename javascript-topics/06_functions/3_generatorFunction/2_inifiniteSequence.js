  // Define an infinite sequence generator
  function* infiniteSequence() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  
  // Use the infinite sequence generator
  const infiniteIterator = infiniteSequence();
  
  console.log(infiniteIterator.next()); // { value: 0, done: false }
  console.log(infiniteIterator.next()); // { value: 1, done: false }
  console.log(infiniteIterator.next()); // { value: 2, done: false }
  // This could go on indefinitely...