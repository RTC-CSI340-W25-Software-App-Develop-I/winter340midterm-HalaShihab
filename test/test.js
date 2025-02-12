import { assert } from "chai";

import { calculateStarAverage } from "../src/logic.js";

const mockReviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avitar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

//3. Create a test for this function.
// Write the test in the test/test.js file
// Given an array of reviews it should return the average of that array.

describe("calculateStarAverage",()=>{
  const mockReviews =[
    {
      username: "Rose",
      image: "./images/rose.png",
      star: 5,
      review: "Great coffee and ambiance",
    },
    {
      username: "butterfly2222",
      image: "./images/avatar2.png",
      star: 3,
      review: "Coffee was okay, took way to long to make.",
    },
    {
      username: "Sandy Tuna",
      image: "./images/avitar1.png",
      star: 1,
      review:
        "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
    },

  ];
  it("should return the average of the array",()=>{
    const result = calculateStarAverage(mockReviews);
    assert.equal(result,3);
  });

  it("should return the average of the array",()=>{
    const result = calculateStarAverage(mockReviews);
    assert.equal(result,3);
  });

});