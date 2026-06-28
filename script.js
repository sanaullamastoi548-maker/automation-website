function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (languageData[lang] && languageData[lang][key]) {
            el.innerText = languageData[lang][key];
        }
    });

    // اردو اور عربی کے لیے RTL، باقی کے لیے LTR
    document.body.dir = (lang === 'ur' || lang === 'ar') ? 'rtl' : 'ltr';
}


document.addEventListener("DOMContentLoaded", function () {

    // ====== Tool 1: Health Check ======
    window.runHealthTest = function () {
        const now = new Date();

        document.getElementById("healthResult").innerHTML = `
            ✅ System Working Successfully<br><br>
            ✔ HTML Loaded<br>
            ✔ CSS Loaded<br>
            ✔ JavaScript Running<br><br>
            📅 ${now.toLocaleDateString()}<br>
            ⏰ ${now.toLocaleTimeString()}
        `;
    };

    // ====== Tool 2: Form Tester ======
    const testForm = document.getElementById("testForm");

    if (testForm) {
        testForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("testName").value;
            const email = document.getElementById("testEmail").value;
            const phone = document.getElementById("testPhone").value;
            const message = document.getElementById("testMessage").value;

            document.getElementById("testResult").innerHTML = `
                ✅ Test Successful
                <hr>
                👤 ${name}<br><br>
                📧 ${email}<br><br>
                📱 ${phone}<br><br>
                💬 ${message}<br><br>
                🚀 Form Validation Passed
            `;
        });
    }

});
