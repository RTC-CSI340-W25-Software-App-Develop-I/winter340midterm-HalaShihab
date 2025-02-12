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
  // اختيار قسم المراجعات
  const reviewsSection = document.querySelector('.reviews');
  // حفظ عنوان القسم
  const headerHTML = '<h3>Reviews</h3>';

  // التحقق من وجود عنصر container للمراجعات، وإنشاؤه إن لم يكن موجوداً
  let reviewsContainer = reviewsSection.querySelector('.reviews_container');
  if (!reviewsContainer) {
    reviewsSection.innerHTML = headerHTML;
    reviewsContainer = document.createElement('div');
    reviewsContainer.classList.add('reviews_container');
    reviewsSection.appendChild(reviewsContainer);
  } else {
    // delete
    reviewsContainer.innerHTML = '';
  }
  
  // تكرار عرض كل مراجعة
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

  // تحديث متوسط تقييم النجوم باستخدام الدالة المساعدة
  const avgRating = calculateStarAverage(reviews);
  const starRatingElement = document.querySelector('.starRating');
  starRatingElement.textContent = `Star Rating: ${avgRating.toFixed(1)}`;
};

// العرض الأول للمراجعات
renderReviewsContainer(reviews);

// التعامل مع إرسال النموذج
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // استخراج القيم من النموذج
  const username = document.querySelector('#username').value;
  const image = document.querySelector('#image').value;
  const star = document.querySelector('#star').value;
  const reviewText = document.querySelector('#review').value;

  // إنشاء كائن للمراجعة الجديدة
  const newReview = {
    username,
    image,
    star: parseInt(star), // تحويل قيمة النجوم إلى رقم
    review: reviewText,
  };

  // إضافة المراجعة الجديدة إلى مجموعة المراجعات
  reviews.push(newReview);
  // إعادة عرض المراجعات مع التحديث
  renderReviewsContainer(reviews);
  // إعادة تعيين النموذج
  form.reset();
});


