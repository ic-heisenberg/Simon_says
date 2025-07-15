let h3=document.querySelector("h3");
let gameseq=[];
let userseq=[];
let started = false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","yellow","green","purple"];
let highscore=0;

document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
        setTimeout(levelup,1000);
    }
});
function  buttonflash(btn){
    btn.classList.add("gameflash");
    setTimeout(() => {
            btn.classList.remove("gameflash");        
    }, 250);

}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randInd=Math.floor(Math.random() *3);
    let randColor=btns[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
    console.log(randBtn);
    buttonflash(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    console.log("gameseq");

}
function restart(){
    userseq=[];
    gameseq=[];
    level=0;
    started=false;
    let body=document.querySelector("body");
    body.style.backgroundColor="red";
    setTimeout(()=>{
        body.style.backgroundColor="white";
    },150);
    h3.innerText=`Highscore : ${highscore}`;
    
}
function checkans(idx){
    if(userseq[idx] == gameseq[idx])
    {
        highscore=Math.max(highscore,level);
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000 );
    }

    }
    else { 
        h2.innerHTML=`Game over! <br> <b> Your Score: ${level} Highscore: ${highscore} <b> <br> Press any key to Start `;
    restart();
    }
}
//user pressing button
function pressbtn(){
    let btn=this;
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");        
    }, 200);
    let col=btn.getAttribute("id");
    userseq.push(col);
    console.log(userseq);
    console.log(col);
    checkans(userseq.length-1);

}
let allbtn= document.querySelectorAll(".btn");
for(btn of allbtn){
 btn.addEventListener("click", pressbtn);
}