let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;

for (let review of reviews) {
  total += review;
}

let average: number = total / reviews.length;
console.log("Review average = " + average);
