function fetchData() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("Fetched Successfully");
      }, 1000);
    });
  }
  
  function ProcessData() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("Data Processed!");
      }, 3000);
    });
  }
  
  // Code will wait here until both promises resolved
  async function parallelTasks() {
    const [res1, res2] = await Promise.all([fetchData(), ProcessData()]);
  
    console.log(res1);
    console.log(res2);
  }
  
  parallelTasks();