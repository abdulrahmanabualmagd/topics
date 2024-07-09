import { setCookie, getCookie, deleteCookie } from "./cookies.js"


setCookie('username', 'john_doe', 7);       // Set a cookie named 'username' with value 'john_doe' that expires in 7 days

var username = getCookie('username');       // Retrieve the value of the 'username' cookie

console.log(username); // Output: "john_doe"

deleteCookie('username'); // Delete the 'username' cookie
