
// document.querySelector("body").setAttribute("class","bgChange")
document.querySelector(".blastOn").onclick = function() {
    document.querySelector('body').classList.add("bgChange")
    document.querySelector('.purpleimg').classList.add("purple","fireBall")
    document.querySelector('.lightning').classList.add("lightningBlast")
    document.querySelector('body').classList.add("afterBlast")
    
}


document.querySelector(".blastOff").onclick = function() {
    document.querySelector('body').classList.remove("bgChange")
    document.querySelector('.purpleimg').classList.remove("purple","fireBall")
    document.querySelector('.lightning').classList.remove("lightningBlast")
    // document.querySelector('.gojoimg').classList.remove("gojo")
}