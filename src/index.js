//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
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
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];


const renderReviewsContainer = (reviews) => {
  
  const reviewsSection = document.querySelector('.reviews');
  
  const headerHTML = '<h3>Reviews</h3>';

  let reviewsContainer = reviewsSection.querySelector('.reviews_container');
  if (!reviewsContainer) {
    reviewsSection.innerHTML = headerHTML;
    reviewsContainer = document.createElement('div');
    reviewsContainer.classList.add('reviews_container');
    reviewsSection.appendChild(reviewsContainer);
  } else {
    
    reviewsContainer.innerHTML = '';
  }
  
  reviews.forEach((review) => {
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review_container');
    reviewContainer.innerHTML = `
      <img src="${review.image}" alt="${review.username}'s profile image"/>
      <div>
        <p>${review.username}</p>
        <p>${review.star}</p>
        <p>${review.review}</p>
      </div>
    `;
    reviewsContainer.appendChild(reviewContainer);
  });

  const avgRating = calculateStarAverage(reviews);
  const starRatingElement = document.querySelector('.starRating');
  starRatingElement.textContent = `Star Rating: ${avgRating.toFixed(1)}`;
};


renderReviewsContainer(reviews);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  const username = document.querySelector('#username').value;
  const image = document.querySelector('#image').value;
  const star = document.querySelector('#star').value;
  const reviewText = document.querySelector('#review').value;

  
  const newReview = {
    username,
    image,
    star: parseInt(star), 
    review: reviewText,
  };

 
  reviews.push(newReview);
 
  renderReviewsContainer(reviews);
 
  form.reset();
});


