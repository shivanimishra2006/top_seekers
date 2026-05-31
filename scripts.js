console.log("JS Loaded");
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('active',window.scrollY > 0);
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    document.querySelector(".newsletter button").addEventListener("click", function() {
        let email = document.querySelector(".newsletter input").value;
        if(email) {
            alert("Thank you for subscribing!");
        } else {
            alert("Please enter a valid email.");
        }
    });
});
function filterMenu(category) {
    const items = document.querySelectorAll('.Menu-box');

    for(let i=0;i<items.length;i++)
    {
        const item=items[i];

        if(category==='all' || item.dataset.category===category)
        {
            item.style.display='block';
        }
        else
        {
            item.style.display='none';
        }
    }
}
