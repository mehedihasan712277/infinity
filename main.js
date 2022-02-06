function first() {
    document.getElementById("main").classList.remove("line3");
    document.querySelector(".sun1").classList.add("sun4");
    document.querySelector(".sun1").classList.remove("sun3");
    document.querySelector(".sun2").classList.add("sun3");
    document.querySelector(".sun2").classList.remove("sun4");
}
function second() {
    document.getElementById("main").classList.add("line3");
    document.querySelector(".sun2").classList.add("sun4");
    document.querySelector(".sun2").classList.remove("sun3");
    document.querySelector(".sun1").classList.add("sun3");
    document.querySelector(".sun1").classList.remove("sun4");
}
document.addEventListener("scroll", function() {
    let x = document.getElementById("nav");
    x.classList.toggle("nav1", scrollY > 100);
})