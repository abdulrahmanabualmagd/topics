/*
 * Takes an array and a function, applies the function to each element of the array,
 * and returns a new array containing the results.
 */
const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

// add string after each final participant
const announcements = finalParticipants.map((member) => {
  return member + " joined the contest.";
});

console.log(announcements);
