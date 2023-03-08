const incrementBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");
let myCount = document.getElementById('my-count');
let displayCount = document.getElementById("save-el");
const originalParagraph = displayCount.textContent;


let count = 0;

incrementBtn.addEventListener('click', function(){
    count = count + 1;
    myCount.innerText = count;
})

saveBtn.addEventListener("click", function(){
    let previousCount = count + " - ";
    displayCount.textContent += previousCount;
    myCount.textContent = 0;
    count = 0;
})

resetBtn.addEventListener("click", function(){
    myCount.textContent = 0;
    count = 0;
    displayCount.textContent = originalParagraph;
})