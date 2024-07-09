function getData() {
  const flag = true;

  return new Promise((res, rej) => {
    if (true) 
      res("Resolved");
    else 
      rej("Rejected");
  });
}

// in case resolved => executed in the .then()
// in case rejected => executed in the .catch()
getData()
  .then((inCaseResolve) => {
    console.log(inCaseResolve);
    return new Promise((res) => res("from resolved"));
  })
  .then((data) => {
    console.log(data);
  })
  
  .catch((inCaseReject) => {
    console.log(inCaseReject);
    return new Promise(res=> res('from rejected'))
  }).then(res=> console.log('print any way but only have value if rejected',res));
