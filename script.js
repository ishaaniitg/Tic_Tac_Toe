let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset-btn")
let newgame = document.querySelector(".new-btn")
let msg = document.querySelector("#msg")
let msg_cont = document.querySelector(".msg-c")
let turno = true; // player O
let count=0;
const winpattern = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
const reset_game = () => {
    turno=true;
    enable_box();
    msg_cont.classList.add("hide")
     count=0;
}
boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
         if(turno){
            box.innerText="O";
            turno=false;
         } else {
            box.innerText="X";
            turno=true
         }
         box.disabled = true;
         count++;
         checkwinner(count);
    })
})
const showdraw = () => {
    disable_box();
    msg.innerText= `Game was a draw !`
     msg_cont.classList.remove("hide")
}
const enable_box =()=> {
    for(let box of boxes ){
        box.disabled = false;
        box.innerText="";
    }
}
const disable_box =()=> {
    for(let box of boxes ){
        box.disabled = true;
    }
    count=0;
}
const showWinner = (winner) => {
    msg.innerText= ` Congratualtions , Winner is  ${winner}`
    msg_cont.classList.remove("hide")
}
const checkwinner = () => {
    for(let pattern of winpattern){
     let val1 = boxes[pattern[0]].innerText
      let val2 = boxes[pattern[1]].innerText
       let val3 = boxes[pattern[2]].innerText
       if(val1 != "" && val2 != "" && val3 != ""){
       if(val1 === val2 && val2 === val3){
        disable_box();
        showWinner(val1);
       }
    }
    }
    if(count === 9){
        showdraw();
    }
}
newgame.addEventListener("click",reset_game)
reset.addEventListener("click", reset_game)