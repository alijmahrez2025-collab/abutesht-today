import { db } from "./firebase.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

window.addEventListener("DOMContentLoaded", () => {

    const newsGrid = document.getElementById("newsGrid");
    const heroTitle = document.querySelector(".hero-news h2");
    const heroText = document.querySelector(".hero-news p");
    const heroImage = document.querySelector(".hero-news img");

    if (!newsGrid) {
        console.log("newsGrid غير موجود");
        return;
    }

    const newsRef = ref(db, "news");

    onValue(newsRef, (snapshot) => {

        const data = snapshot.val();

        newsGrid.innerHTML = "";

        if (!data) {
            newsGrid.innerHTML = "<p>لا توجد أخبار حتى الآن</p>";
            return;
        }

        const newsArray = Object.values(data);

        if (newsArray.length > 0) {
            heroTitle.textContent = newsArray[0].title || "";
            heroText.textContent = newsArray[0].details || "";
            heroImage.src = newsArray[0].image || "icons/logo.png";
        }

        newsArray.forEach((news) => {

            newsGrid.innerHTML += `
            <div class="news-card">
                <img src="${news.image}" alt="">
                <h3>${news.title}</h3>
                <p>${news.details}</p>
            </div>
            `;

        });

    }, (error) => {
        alert("Firebase Error: " + error.message);
    });

});