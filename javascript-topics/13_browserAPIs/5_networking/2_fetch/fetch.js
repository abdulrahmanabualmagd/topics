/*
----------------------------------------- [ Options Sample ]
let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer token123",
    },
    body: JSON.stringify(data),
    mode: "cors",
    credentials: "include",
    cache: "no-cache",
    redirect: "follow",
    timeout: 5000,
  };
-----------------------------------------
*/

async function fetchData(url, options = null) {
  return new Promise((res, rej) => {
    fetch(url, options)
      .then((response) => {
        res(response.json());
      })
      .catch((error) => {
        rej(error);
      });
  });
}

export async function createData(url, data) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetchData(url, options);
}

export async function getData(url) {
  return fetchData(url, null);
}

export async function updateData(url, data) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetchData(url, options);
}

export async function deleteData(url) {

  const options = {
    method: "DELETE",
  };

  return fetchData(url, options);
}
