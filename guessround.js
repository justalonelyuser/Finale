const db=[
    //final
{
    question:"What is the dept of Mariana Trench? [In meters]",
    ans:"11,034m",
},
{
    question:"What is the length of Nile River?[In KM]",
    ans:"6,650 KM"
},
{
    question:"What is the height of Statue of Unity?[In meters]",
    ans:"182 m"
},]

let nextq=document.querySelector(".getnextquestion");
let giveans=document.querySelector(".getans1");
let qholder=document.querySelector(".forq");
counter=0;
nextq.addEventListener("click", ()=>{
    if(counter<=2){
        qholder.innerHTML=db[counter].question;
    }
    else{
        window.open("streams.html", "_self");
    }
})
giveans.addEventListener("click", ()=>{
    if(counter<=2){
        qholder.innerHTML=db[counter].ans;
        counter=counter+1;
    }
    else{

    }
})