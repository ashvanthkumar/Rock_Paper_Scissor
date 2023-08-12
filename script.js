
let c=0;
let pc=0,cc=0;
let pval;
document.getElementById('rock').addEventListener('click',()=>{
    pval=1;
    computer();
})
document.getElementById('paper').addEventListener('click',()=>{
    pval=2;
    computer();
})
document.getElementById('scissor').addEventListener('click',()=>{
    pval=3;
    computer();
})

let cval;

function computer(){
    cval=Math.ceil(Math.random()*3);
    console.log(cval);
    calculate();
}

function calculate(){
    if(cval==pval)
    {
        /*document.getElementById('p1').innerHTML='Draw';*/
        if(cval==1) display('ROCK','ROCK');
        if(cval==2) display('PAPER','PAPER');
        if(cval==3) display('SCISSOR','SCISSOR');
    }
    else if(pval==1 && cval==3)
    {
       /* document.getElementById('per').innerHTML='ROCK';
        document.getElementById('com').innerHTML='SCISSOR';*/
        ++pc;
        display('ROCK','SCISSOR');
    }
    else if(pval==1 && cval==2)
    {
        /*document.getElementById('per').innerHTML='ROCK';
        document.getElementById('com').innerHTML='PAPER';*/
        ++cc;
        display('ROCK','PAPER');
    }
    else if(pval==2 && cval==1)
    {
        /*document.getElementById('per').innerHTML='PAPER';
        document.getElementById('com').innerHTML='ROCK';*/
        pc++;
        display('PAPER','ROCK');
    }
    else if(pval==2 && cval==3)
    {
        /*document.getElementById('per').innerHTML='PAPER';
        document.getElementById('com').innerHTML='SCISSOR';*/
        cc++;
        display('PAPER','SCISSOR');
    }
    else if(pval==3 && cval==1)
    {
        /*document.getElementById('per').innerHTML='SCISSOR';
        document.getElementById('com').innerHTML='ROCK';*/
        cc++;
        display('SCISSOR','ROCK');
    }
    else if(pval==3 && cval==2)
    {
        /*document.getElementById('per').innerHTML='SCISSOR';
        document.getElementById('com').innerHTML='PAPER';*/
        pc++;
        display('SCISSOR','PAPER');
    }
    if(pc==3)
    {
        document.getElementById('p1').innerHTML=' Person wins ';
    }
    else if(cc==3)
    {
        document.getElementById('p1').innerHTML=' Computer wins ';
    }
    if(cc==3 || pc==3)
    {
        setTimeout(restart,10000);
    }
}

function restart()
{
    cc=0;
    pc=0;
    document.getElementById('summary').innerHTML="";
    document.getElementById('p1').innerHTML="";
}

function display(a,b){
    console.log(a+" "+b);
    let li=document.createElement('li');
    let d=document.getElementById('summary');
    
    li.setAttribute('id', a+" "+b);
    li.appendChild(document.createTextNode(a+"["+pc+"]"+" \xa0\xa0\xa0\xa0\xa0\xa0\xa0"+b+"["+cc+"]"));
    d.appendChild(li);
}

document.getElementById('reset').addEventListener('click',()=>{
    cc=0;
    pc=0;
    document.getElementById('summary').innerHTML="";
    document.getElementById('p1').innerHTML="";
    
})