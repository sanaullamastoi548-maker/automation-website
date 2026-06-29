// Particles.js initialization
particlesJS("particles-js", {"particles": {"number": {"value": 40}, "color": {"value": "#f59e0b"}, "line_linked": {"enable": true, "color": "#f59e0b", "opacity": 0.2}}});

// Contact Form submission logic
const scriptURL = 'https://script.google.com/macros/s/AKfycbyb8XB_p_I5dMZfba5uHHgw22DrQRCUxULKgQjUSQn1CslnYHmAUQij0siuw6V_RAG1YA/exec';
const form = document.getElementById('contactForm');
// باقی فارم والا کوڈ یہاں آئے گا

// 1. Particles.js initialization (اگر آپ کے پاس پارٹیکلز کا کوڈ ہے تو وہ یہاں رہے گا)
particlesJS("particles-js", {
    "particles": {
        "number": {"value": 40}, 
        "color": {"value": "#f59e0b"}, 
        "line_linked": {"enable": true, "color": "#f59e0b", "opacity": 0.2}
    }
});

// 2. Google Form Submission Logic
const scriptURL = 'https://script.google.com/macros/s/AKfycbyb8XB_p_I5dMZfba5uHHgw22DrQRCUxULKgQjUSQn1CslnYHmAUQij0siuw6V_RAG1YA/exec';
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', e => {
    e.preventDefault();
    submitBtn.innerText = "Sending...";
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(() => { 
            alert("پیغام موصول ہو گیا!"); 
            form.reset(); 
            submitBtn.innerText = "Send Message"; 
        })
        .catch(() => { 
            alert("کچھ مسئلہ پیش آیا۔"); 
            submitBtn.innerText = "Send Message"; 
        });
});
