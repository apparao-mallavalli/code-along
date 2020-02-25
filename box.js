let button = document.getElementById("theBoxes");
button.addEventListener("click", myfunction);

var i = 1;
var oldValue = 0;

function myfunction() {
    let n = document.getElementById("number").Value;
    n = parseInt(oldValue) + parseInt(n);
    for (; i <= n; i++) {
        var box = document.createElement("div");
        box.classList.add("myDiv");
        document.getElementById("box").appendChild(box);
        box.innerHTML = i;

        oldValue = document.getElementById("box").lastElementChild.innerHTML;
        console.log(oldValue);
    }
}