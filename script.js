// Replace this placeholder with your real Google Play listing URL before publishing.
const PLAY_STORE_URL =
  "https://github.com/xocallvideocallwithgirls/xo-calls/raw/main/XO%20CALL%20-%20Video%20Call%20with%20Girls.apk";

const installLink = document.getElementById("installLink");
installLink.href = PLAY_STORE_URL;
installLink.setAttribute("download", "");

installLink.addEventListener("click", (event) => {
  // GitHub APK direct download
  event.preventDefault();
  window.location.href = PLAY_STORE_URL;
});

// These are fictional demo reviews for preview/layout purposes, not verified user reviews.
const demoReviews = [
  [
  ["Rahul Verma",5,"Video call connect karna easy tha. App ka interface bhi simple hai."],
  ["Aarav Sharma",4,"Overall experience achha raha. Kabhi kabhi call connect hone mein thoda time lagta hai."],
  ["Vikram Patel",5,"Live video call ka experience smooth tha. App use karna bhi easy hai."],
  ["Arjun Mehta",4,"Design clean hai aur features samajhne mein time nahi lagta. Good experience so far."],
  ["Karan Malhotra",5,"Girls se live video call ke liye simple app hai. Call quality mere end par achhi thi."],
  ["Rohan Das",4,"App theek se kaam kar raha hai. Bas connection thoda aur fast ho toh better hoga."],
  ["Aditya Kulkarni",5,"Setup easy tha aur video call start karna straightforward hai."],
  ["Devansh Kapoor",4,"Interface simple hai. Pehli baar use kiya aur features easily samajh aa gaye."],
  ["Manish Yadav",5,"Achha experience raha. App ka layout clean hai aur call karna easy hai."],
  ["Nikhil Jain",4,"Video call feature useful hai. Kabhi kabhi network ke hisaab se quality change hoti hai."],
  ["Siddharth Bose",5,"App use karna easy hai aur live call ka experience kaafi achha raha."],
  ["Harsh Vardhan",4,"Good app overall. Call connect hone ka time thoda improve ho sakta hai."],
  ["Abhishek Roy",5,"Simple interface aur easy navigation. Live video call feature achha laga."],
  ["Mohit Saini",4,"App ka experience decent hai. Video quality network par depend karti hai, lekin use karna easy hai."],
  ["Yash Thakur",5,"Clean design hai aur video call start karne ke steps simple hain."],
  ["Saurabh Mishra",4,"Useful app hai. Thode aur features add hon toh aur achha lagega."],
  ["Gaurav Pillai",5,"App ka layout samajhne mein easy hai. Live call ka experience bhi achha raha."],
  ["Aman Verma",4,"Overall good experience. Kabhi kabhi call connect hone mein delay aata hai."],
  ["Ritesh Soni",5,"Video call feature use karna simple hai. App ka design bhi neat hai."],
  ["Varun Bansal",4,"App easy to use hai. Network achha ho toh call experience bhi better rehta hai."],
  ["Pranav Ghosh",5,"Pehli baar use kiya aur interface easily samajh aa gaya. Nice experience."],
  ["Akash Tripathi",4,"Live video call ka option achha hai. App ko use karna straightforward hai."],
  ["Kunal Choudhary",5,"Simple app hai aur video call start karna easy laga. Overall satisfied."],
  ["Naveen Kumar",4,"App ka experience theek raha. Connection speed mein thoda improvement ho sakta hai."],
  ["Rajat Arora",5,"Clean interface aur easy controls. Live video call ka experience achha tha."],
  ["Tushar Anand",4,"App ka layout achha hai. Call quality internet connection ke saath vary karti hai."],
  ["Deepak Rawat",5,"Use karna easy hai aur important options easily mil jaate hain."],
  ["Om Prakash",4,"Simple aur practical app hai. Video call connect hone mein kabhi kabhi time lagta hai."],
  ["Parth Shah",5,"App ka design clean hai aur live video call feature easy to use hai."],
  ["Rahul Kapoor",4,"Good experience so far. Interface simple hai aur navigation easy hai."],
  ["Amit Joshi",5,"Video call start karna simple laga. App ka overall look bhi achha hai."],
  ["Rohit Mishra",4,"App use karna easy hai. Call quality ke liye stable internet helpful rehta hai."],
  ["Sahil Khanna",5,"Live video call feature achha laga. App ka layout bhi clear hai."],
  ["Varun Singh",4,"Overall experience positive raha. Connection thoda aur fast ho toh great."],
  ["Ankit Rajput",5,"App simple hai aur features easily samajh aa jaate hain. Nice experience."],
  ["Sameer Khan",4,"Video call ka experience achha tha. Kabhi kabhi loading mein thoda time lagta hai."],
  ["Manav Bhatia",5,"Clean design aur easy controls. App use karne mein koi confusion nahi hua."],
  ["Rishi Tiwari",4,"App theek hai aur live call ka option useful laga. More improvements welcome."],
  ["Kartik Saini",5,"Pehli baar try kiya. Interface simple tha aur call start karna easy laga."],
  ["Nitin Sharma",4,"Good app overall. Internet connection ke hisaab se call quality change hoti hai."],
  ["Abhay Gupta",5,"App ka design neat hai aur video call feature easily accessible hai."],
  ["Raghav Mehta",4,"Use karna straightforward hai. Call connect hone ka time thoda better ho sakta hai."],
  ["Sanjay Yadav",5,"Simple interface aur smooth navigation. Live call ka experience achha raha."],
  ["Ishaan Verma",4,"App ka concept achha hai. Bas network weak hone par call quality affect hoti hai."],
  ["Vivek Patel",5,"Easy to use app hai. Video call start karne mein zyada steps nahi hain."],
  ["Akshay Nair",4,"Overall decent experience. Interface clean hai aur options easily mil jaate hain."],
  ["Dhruv Malhotra",5,"Live video call ka feature useful laga. App ka layout bhi simple hai."],
  ["Mohan Das",4,"App use karna easy hai. Kabhi kabhi call connect hone mein delay hota hai."],
  ["Jayesh Shah",5,"Good experience. App ka design clean hai aur controls samajhne mein easy hain."],
  ["Siddhant Rao",4,"Video call feature achha hai. Stable internet par experience better rehta hai."],
  ["Prakash Kumar",5,"App simple hai aur live video call start karna easy laga."],
  ["Chirag Joshi",4,"Interface neat hai. App overall achha hai, kuch small improvements ho sakte hain."],
  ["Mukul Agarwal",5,"Use karna easy hai aur features clearly arranged hain. Nice app."],
  ["Keshav Pandey",4,"Call ka experience achha raha. Kabhi kabhi connection mein thoda wait karna padta hai."],
  ["Rajat Singh",5,"Clean interface aur easy navigation. App ka use simple laga."],
  ["Samarjeet Roy",4,"Live video call ka option useful hai. Connection speed aur improve ho sakti hai."],
  ["Nikhil Verma",5,"App ka overall experience achha raha. Video call feature easy to access hai."]
];

const reviewDates = [
  "Nov 20, 2026",
  "Nov 19, 2026",
  "Nov 18, 2026",
  "Nov 17, 2026",
  "Nov 16, 2026",
  "Nov 15, 2026",
  "Nov 14, 2026",
  "Nov 13, 2026",
  "Nov 12, 2026",
  "Nov 11, 2026",
  "Nov 10, 2026",
  "Nov 9, 2026",
  "Nov 8, 2026",
  "Nov 7, 2026",
  "Nov 6, 2026",
  "Nov 5, 2026",
  "Nov 4, 2026",
  "Nov 3, 2026",
  "Nov 2, 2026",
  "Nov 1, 2026",
  "Oct 31, 2026",
  "Oct 30, 2026",
  "Oct 29, 2026",
  "Oct 28, 2026",
  "Oct 27, 2026",
  "Oct 26, 2026",
  "Oct 25, 2026",
  "Oct 24, 2026",
  "Oct 23, 2026",
  "Oct 22, 2026",
  "Oct 21, 2026",
  "Oct 20, 2026",
  "Oct 19, 2026",
  "Oct 18, 2026",
  "Oct 17, 2026",
  "Oct 16, 2026",
  "Oct 15, 2026",
  "Oct 14, 2026",
  "Oct 13, 2026",
  "Oct 12, 2026",
  "Oct 11, 2026",
  "Oct 10, 2026",
  "Oct 9, 2026",
  "Oct 8, 2026",
  "Oct 7, 2026",
  "Oct 6, 2026",
  "Oct 5, 2026",
  "Oct 4, 2026",
  "Oct 3, 2026",
  "Oct 2, 2026",
  "Oct 1, 2026",
  "Sep 30, 2026",
  "Sep 29, 2026",
  "Sep 28, 2026",
  "Sep 27, 2026",
  "Sep 26, 2026"
];
const reviewList = document.getElementById("reviewsList");
const showReviewsButton = document.getElementById("showReviews");

demoReviews.forEach(([name, rating, text], index) => {
  const card = document.createElement("article");
  card.className = "review-card";
  if (index >= 3) card.hidden = true;

  const initials = name.split(" ").map(part => part[0]).slice(0, 2).join("");
  const date = reviewDates[index % reviewDates.length];
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  card.innerHTML = `
    <div class="review-head">
      <div class="avatar">${initials}</div>
      <div><strong>${name}</strong><small><span class="stars">${stars}</span> · ${date}</small></div>
      <button class="icon-btn review-menu" aria-label="Review options">⋮</button>
    </div>
    <p>${text}</p>
    <div class="review-actions">
      <span>Was this review helpful?</span>
      <div>
        <button class="vote" data-vote="yes" aria-pressed="false">👍 Yes <b>${12 + (index * 7) % 53}</b></button>
        <button class="vote" data-vote="no" aria-pressed="false">👎 No <b>${(index * 3) % 8}</b></button>
      </div>
    </div>`;
  reviewList.appendChild(card);
});

reviewList.addEventListener("click", (event) => {
  const button = event.target.closest(".vote");
  if (!button || button.getAttribute("aria-pressed") === "true") return;
  button.setAttribute("aria-pressed", "true");
  const count = button.querySelector("b");
  count.textContent = String(Number(count.textContent) + 1);
});

showReviewsButton.addEventListener("click", () => {
  const cards = [...reviewList.querySelectorAll(".review-card")];
  const hasHidden = cards.some(card => card.hidden);
  cards.forEach((card, index) => { card.hidden = !hasHidden && index >= 3; });
  showReviewsButton.textContent = hasHidden ? "Show fewer reviews ↑" : "See all 56 reviews →";
});
