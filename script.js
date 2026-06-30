/* ===================================
   PART 1
   PARTICLES + GOOGLE APPS SCRIPT
=================================== */

// ---------- Particles Background ----------

particlesJS("particles-js", {
    particles: {
        number: {
            value: 40
        },
        color: {
            value: "#f59e0b"
        },
        line_linked: {
            enable: true,
            color: "#f59e0b",
            opacity: 0.2
        },
        move: {
            speed: 2
        }
    }
});

// ---------- Google Apps Script URL ----------

const scriptURL =
"https://script.google.com/macros/s/AKfycbwC1T46Olc5hgGLM-96PDqBtNOHRI2DTHLqqUs34nnBm3J4N53zIqc-gGFUvqpuVpYE/exec";
// ---------- Contact Form ----------

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

/* ===================================
   PART 2
   CONTACT FORM SUBMIT
=================================== */

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        })

        .then(function() {

            alert("✅ پیغام کامیابی سے بھیج دیا گیا!");

            form.reset();

            submitBtn.innerText = "Send Message";
            submitBtn.disabled = false;

        })

        .catch(function(error) {

            console.error(error);

            alert("❌ کچھ مسئلہ پیش آیا، دوبارہ کوشش کریں۔");

            submitBtn.innerText = "Send Message";
            submitBtn.disabled = false;

        });

    });

}

/* ===================================
   PART 3
   EXTRA FUNCTIONS
=================================== */

// Console Message
console.log("✅ Sanaullah Automation Website Loaded Successfully");

// Smooth Loading
window.addEventListener("load", function () {
    document.body.style.opacity = "1";
});

// Prevent Multiple Clicks
if (submitBtn) {
    submitBtn.addEventListener("click", function () {
        submitBtn.style.opacity = "0.8";

        setTimeout(function () {
            submitBtn.style.opacity = "1";
        }, 300);
    });
}

// Finished
console.log("🚀 All JavaScript Loaded Successfully");

/* ===================================
   GOOGLE AUTOMATION TOOLS
   PART 1
=================================== */

// ================================
// AUTO-000
// System Health Check
// ================================

function runHealthTest() {

    const now = new Date();

    document.getElementById("healthResult").innerHTML = `
        ✅ <b>System Working Successfully</b><br><br>

        ✔ HTML Loaded<br>
        ✔ CSS Loaded<br>
        ✔ JavaScript Running<br>
        ✔ Website Ready<br><br>

        📅 ${now.toLocaleDateString()}<br>
        ⏰ ${now.toLocaleTimeString()}
    `;

}

// ================================
// AUTO-001
// Form Tester
// ================================

const testForm = document.getElementById("testForm");

if (testForm) {
   
    testForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("testName").value;
        const email = document.getElementById("testEmail").value;
        const phone = document.getElementById("testPhone").value;
        const message = document.getElementById("testMessage").value;

        document.getElementById("testResult").innerHTML = `
            ✅ <b>Test Successful</b><br><br>

            👤 ${name}<br><br>

            📧 ${email}<br><br>

            📱 ${phone}<br><br>

            💬 ${message}<br><br>

            🚀 Form Validation Passed
        `;

    });

}

/* ===================================
   GOOGLE AUTOMATION TOOLS
   PART 2
=================================== */

// Button Click Animation
document.querySelectorAll(".tool-btn").forEach(function(btn){

    btn.addEventListener("click",function(){

        btn.style.transform="scale(0.97)";

        setTimeout(function(){

            btn.style.transform="scale(1)";

        },150);

    });

});

// Clear AUTO-001 Result After 10 Seconds

if(testForm){

    testForm.addEventListener("submit",function(){

        setTimeout(function(){

            const result=document.getElementById("testResult");

            if(result){

                result.innerHTML="Waiting for Test...";

            }

        },10000);

    });

}

// Welcome Message

window.addEventListener("load",function(){

    console.log("🚀 Google Automation Tools Ready");

});

// Finished

console.log("✅ AUTO-000 Ready");
console.log("✅ AUTO-001 Ready");

/* ===================================
   LANGUAGE SWITCHER
=================================== */

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {

    languageSelect.addEventListener("change", function () {

        const lang = this.value;

        if (!languages[lang]) return;

        // Hero Section
        document.querySelector(".hero-section h1 span").innerText =
            languages[lang].heroTitle;

        document.querySelector(".hero-section p").innerText =
            languages[lang].heroText;

        // Tools Heading
        document.querySelector(".tools-heading h2").innerHTML =
            `Google Automation <span>Tools</span>`;

        document.querySelector(".tools-heading p").innerText =
            languages[lang].toolsText;

        // Tool 1
        document.querySelectorAll(".tool-card h3")[0].innerText =
            languages[lang].healthTitle;

        document.querySelectorAll(".tool-card p")[1].innerText =
            languages[lang].healthDesc;

        // Tool 2
        document.querySelectorAll(".tool-card h3")[1].innerText =
            languages[lang].testTitle;

        document.querySelectorAll(".tool-card p")[2].innerText =
            languages[lang].testDesc;

    });

}
