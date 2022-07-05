window.addEventListener("scroll", ()=>{
    var navBar = document.querySelector("nav");
    // var devs = document.querySelector("article")
    // devs.classList.toggle("sticky", window.scrollY > 0)
    navBar.classList.toggle("sticky", window.scrollY > 0)
    console.log('hello')
});

var btn = document.getElementsByClassName("link");
var slide =document.getElementById("slide");

btn[0].onclick = function(){
    slide.style.transform =" translateX(0px)";
    for(i=0; i<3; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}

btn[1].onclick = function(){
    slide.style.transform =" translateX(-890px)";
    for(i=0; i<3; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}

btn[2].onclick = function(){
    slide.style.transform =" translateX(-1785px)";
    for(i=0; i<3; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}
