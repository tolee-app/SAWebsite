function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if(btnText.textContent === "...Read more"){
    moreText.style.display = "inline";
    btnText.innerHTML = "Read less";
    }
    else{
        moreText.style.display = "none";
        btnText.innerHTML = "...Read more";     
    }
}
function myFunction2(){
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
    if(btnText2.textContent === "...Read more"){
        moreText2.style.display = "inline";
        btnText2.innerHTML = "Read less";
        }
        else{
            moreText2.style.display = "none";
            btnText2.innerHTML = "...Read more";     
        }

}
function myFunction3(){
    var moreText3 = document.getElementById("more3");
    var dots3 = document.getElementById("dots3");
    var btnText3 = document.getElementById("myBtn3");
    if(btnText3.textContent === "...Read more"){
        moreText3.style.display = "inline";
        btnText3.innerHTML = "Read less";
        }
        else{
            moreText3.style.display = "none";
            btnText3.innerHTML = "...Read more";     
        }
}

function myFunction4(){
    var dots4 = document.getElementById("dots4");
    var moreText4 = document.getElementById("more4");
    var btnText4 = document.getElementById("myBtn4");
    if(btnText4.textContent === "...Read more"){
        moreText4.style.display = "inline";
        btnText4.innerHTML = "Read less";
        }
        else{
            moreText4.style.display = "none";
            btnText4.innerHTML = "...Read more";     
        }
}