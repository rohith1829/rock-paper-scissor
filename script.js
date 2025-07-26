const choices = document.querySelectorAll(".choice");
let MyWin;
let myscore=0,comscore=0;
const ele=["rock","paper","scissors"];
const msg=document.querySelector("#result");
const myscore1=document.querySelector("#myscore");
const comscore1=document.querySelector("#comscore");


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let clicked = choice.getAttribute("id");
    let com_clicked=com();
    if(clicked===com_clicked)
        gameDraw();
    else{

         if(clicked==="paper"){
            MyWin=com_clicked==="rock"?true:false;
            
            
        }
        else if(clicked===rock){
            MyWin=com_clicked==="paper"?false:true;
        }
        else{
            
            MyWin=com_clicked==="paper"?true:false;
        }
        if(MyWin)
            myscore++;
        else
            comscore++;
        showScore();
        
        showWin(clicked,com_clicked)
    }
  });
});

const com=()=>{
    return ele[Math.floor(Math.random()*3)];
}
const gameDraw=()=>{
    msg.innerText="Game is drawn"

}
const showWin=(clicked,com_clicked)=>{
    if(MyWin)
        msg.innerText=`You Win! ${clicked} beats ${com_clicked}`;
    else
        msg.innerText=`You Lost! ${com_clicked} beats ${clicked}`;

}
const showScore=()=>{
    myscore1.innerText=myscore;
    comscore1.innerText=comscore;
}
