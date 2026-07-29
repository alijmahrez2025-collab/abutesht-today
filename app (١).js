import { db } from "./firebase.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const newsGrid = document.getElementById("newsGrid");

const heroTitle = document.querySelector(".hero-news h2");
const heroText = document.querySelector(".hero-news p");
const heroImage = document.querySelector(".hero-news img");

const newsRef = ref(db, "news");

onValue(newsRef, (snapshot) => {

    const data = snapshot.val();

    newsGrid.innerHTML = "";

    if (!data) {
        newsGrid.innerHTML = "<p>لا توجد أخبار</p>";
        return;
    }

    const newsArray = Object.values(data);

    // أول خبر رئيسي
    heroTitle.textContent = newsArray[0].title;
    heroText.textContent = newsArray[0].details;
    heroImage.src = newsArray[0].image;

    // باقي الأخبار
    newsArray.forEach((news) => {

        newsGrid.innerHTML += `
            <div class="news-card">
                <img src="${news.image}">
                <h3>${news.title}</h3>
                <p>${news.details}</p>
            </div>
        `;

    });

});