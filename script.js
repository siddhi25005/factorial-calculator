let num=document.querySelector(".input");
let rbox=document.querySelector(".res");
num.addEventListener("input",function(){
    let fact=1;
    for(let i=1;i<=Number(num.value);i++) {
        fact*=i;
    }
    rbox.innerText=`factorial is=${fact}`;
})
