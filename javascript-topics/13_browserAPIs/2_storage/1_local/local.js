/*
 * Security Considerations:
 * Local storage is subject to the same-origin policy,
 * which means that scripts running from one domain
 * cannot access data stored by another domain.
 * This helps protect user data from being accessed
 * by malicious scripts.
 
 * Usage:
 * Local storage is commonly used for storing user preferences,
 * session tokens, authentication tokens, cached data,
 * or any other data that needs to persist across sessions.
 */

// Storing data
localStorage.setItem("username", "john_doe");

// Retrieving data
const username = localStorage.getItem("username");
console.log(username); // Output: john_doe

// Removing data
localStorage.removeItem("username");

// Clearing all data
localStorage.clear();
