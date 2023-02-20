const upBtn = document.getElementById("upbtn");
const downBtn = document.getElementById("downbtn");
const circle= document.getElementById('circle');
let  x=circle.style.transform;



upBtn.addEventListener('click',()=>{
   const y= x + "rotate(-90deg)";
   circle.style.transform=y;
   console.log(y)
   x=y;
})
downBtn.addEventListener("click", () => {
  const y = x + "rotate(90deg)";
  circle.style.transform = y;
  console.log(y);
  x = y;
});