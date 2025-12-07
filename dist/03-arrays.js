"use strict";
let reviews = [5, 5, 4.5, 1, 3];
let total = 0;
for (let review of reviews) {
    total += review;
}
let average = total / reviews.length;
console.log("Review average = " + average);
