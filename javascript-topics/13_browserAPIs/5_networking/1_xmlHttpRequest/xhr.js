/*
------------------------------ [XMLHttpRequest] ------------------------------    
is a JavaScript object that provides an easy way to retrieve data from a URL without having
to do a full page refresh. It is the cornerstone of AJAX (Asynchronous JavaScript and XML),
allowing you to make HTTP requests from the browser to the server asynchronously.
-----------------------------------------------------------------------------


------------------------------ [ Properties ] ------------------------------
- [readyState]      Indicates the state of the request (0:UNSENT, 1:OPENED, 2:HEADERS_RECEIVED, 3:LOADING, 4:DONE)
- [status]          Contains the HTTP status code of the response (200, 300, 400, 500) 
- [responseType]    Specifies the type of the response expected from the server (text, json, blob, document, arraybuffer)
- [resopnse]        Contains the response data returned by the server
- [resopnseText]    Contains the response data as a string (available only if resopnseType is 'text' )
- [responseXML]     Contains the response data as an XML document object (available only if responseType is 'document')
- [upload]          Represents the upload process of the request 
-----------------------------------------------------------------------------


-------------------------------- [ Methods ] --------------------------------
- [open(method, url[, async[, username[, password]]])] Initializes a request
- [setRequestHeader(header, value)] Sets a single request header value
- [send] Sends the request to the server
- [abort] Cancels the current request
- [getResponseHeader] Returns the value of a specified response header
- [getAllResponseHeaders] Returns all the response headers as a string
- [overrideMimeType] Overrides the MIME type returned by the server
- [addEventListener] Adds an event listener for the specified event type
-----------------------------------------------------------------------------


------------------------------ [ Events ] ------------------------------
- [readystatechange] Fired whenever the readyState Property of the request changes
- [load] Fired when the request has successfully compoleted
- [error] Fired when the request encounters an error
- [timeout] Fired when the request times out
-----------------------------------------------------------------------------
*/

async function makeHttpRequest(method, url, data = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE) {
        if (this.status == 200) {
          resolve(xhr.responseText ? JSON.parse(xhr.responseText) : null);
        } else {
          reject(xhr.statusText);
        }
      }
    };

    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data ? JSON.stringify(data) : null);
  });
}

export async function createData(url, data) {
  return makeHttpRequest("POST", url, data);
}
export async function getData(url) {
  return makeHttpRequest("GET", url, null);
}
export async function updateData(url, data) {
  return makeHttpRequest("PUT", url, data);
}
export async function deleteData(url, data) {
  return makeHttpRequest("DELETE", url, data);
}
