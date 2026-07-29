import { db } from "./firebase.js";
import {
  ref,
  push
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

window.addEventListener("DOMContentLoaded", () => {

    const title = document.getElementById("title");
    const details = document.getElementById("details");
    const image = document.getElementById("image");
    const publishBtn = document.getElementById("publishBtn");

    publishBtn.addEventListener("click", async () => {

        try {

            if (
                title.value.trim() === "" ||
                details.value.trim() === "" ||
                image.value.trim() === ""
            ) {
                alert("من فضلك املأ جميع البيانات");
                return;
            }

            await push(ref(db, "news"), {
                title: title.value,
                details: details.value,
                image: image.value,
                date: new Date().toLocaleString("ar-EG")
            });

            alert("تم نشر الخبر بنجاح ✅");

            title.value = "";
            details.value = "";
            image.value = "";

        } catch (e) {

            alert("خطأ:\n" + e.message);

        }

    });

});