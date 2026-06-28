// ====== Tool 1: Health Check ======
function runHealthTest() {
    const now = new Date();
    document.getElementById("healthResult").innerHTML = `
        ✅ System Working Successfully<br><br>
        ✔ HTML Loaded<br>
        ✔ CSS Loaded<br>
        ✔ JavaScript Running<br><br>
        📅 ${now.toLocaleDateString()}<br>
        ⏰ ${now.toLocaleTimeString()}
    `;
}

// ====== Tool 2: Form Tester ======
document.getElementById("testForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("testName").value;
    let email = document.getElementById("testEmail").value;
    let phone = document.getElementById("testPhone").value;
    let message = document.getElementById("testMessage").value;

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

// ====== (اختیاری) آپ کا پرانا Google Apps Script والا کوڈ ======
// اگر آپ اسے استعمال کرنا چاہیں تو اس کے اوپر سے "/" ہٹا دیں۔
/*
const scriptURL = 'https://script.google.com/macros/s/AKfycbyb8XB_p_I5dMZfba5uHHgw22DrQRCUxULKgQjUSQn1CslnYHmAUQij0siuw6V_RAG1YA/exec';
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        btn.innerText = "Sending...";
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(() => {
                alert("پیغام موصول ہو گیا!");
                form.reset();
                btn.innerText = "Send Message";
            })
            .catch(() => {
                alert("کچھ مسئلہ پیش آیا۔");
                btn.innerText = "Send Message";
            });
    });
}
*/
