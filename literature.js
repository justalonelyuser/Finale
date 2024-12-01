const option1 = document.querySelector(".op-btn1")
const option2 = document.querySelector(".op-btn2")
const option3 = document.querySelector(".op-btn3")
const option4 = document.querySelector(".op-btn4")
const option5 = document.querySelector(".op-btn5")
const option6 = document.querySelector(".op-btn6")
const option7 = document.querySelector(".op-btn7")
const option8 = document.querySelector(".op-btn8")
const option9 = document.querySelector(".op-btn9")
const option10 = document.querySelector(".op-btn10")
const option11 = document.querySelector(".op-btn11")
const option12 = document.querySelector(".op-btn12")
const option13 = document.querySelector(".op-btn13")
const option14 = document.querySelector(".op-btn14")
const option15 = document.querySelector(".op-btn15")
let counter=0;
const showBtn = document.querySelector(".forbtn")
const nextBtn = document.querySelector(".nextbtn")

const questioncont = document.querySelector(".maintext")

option1.addEventListener("dblclick", openquestion1)
option2.addEventListener("dblclick", openquestion2)
option3.addEventListener("dblclick", openquestion3)
option4.addEventListener("dblclick", openquestion4)
option5.addEventListener("dblclick", openquestion5)
option6.addEventListener("dblclick", openquestion6)
option7.addEventListener("dblclick", openquestion7)
option8.addEventListener("dblclick", openquestion8)
option9.addEventListener("dblclick", openquestion9)
option10.addEventListener("dblclick", openquestion10)


showBtn.style.display = 'none'
nextBtn.style.display = 'none'

const quiz=[
    {
        question: `The Konark temple is related to which god ?`,
        ans:"Sun"
    },
    {
        question:`Who is the author of the book "You can Win"`,
        ans:"Shiv Khera",
    },
    {
        question: `Which is the largest religious monument in the world ?`,
        ans: `Angkor Wat ( Cambodia )`
    },
    {
        question: `On which novel , the Sherlock Holmes character was first
        appeared ?`,
        ans: "A study in Scarlet"
    },
    {
        question: `Who founded Judaism ?`,
        ans: "Abraham"
    },
    {
        question: `Who killed Sirius Black in Harry Potter and the Order of the Pheonix`,
        ans: "Bellatrix Lestrange"
    },
    {
        question: `Which greek hero was called  "tamer of horses" ?`,
        ans: "Hector"
    },
    {
        question: "Who is known as the father of epic poetry ?",
        ans: "Homer"
    },
    {
        question: `Which saint is believed to have introduced Christianity in
        India ?`,
        ans: "Thomas the Apostle ( Saint Thomas )"
    },
    {
        question: `Who wrote the first English dictionary ?`,
        ans: "Samuel Johnson"
    },


]

function openquestion1(){
    counter+=1;
   const quiz_for_1=quiz[0].question
   let ans_for_1=quiz[0].ans
   questioncont.innerHTML=quiz_for_1; 
   option1.style.display='none';
   option1.style.backgroundColor="red"
   option2.style.display='none';
   option3.style.display='none';
   option4.style.display='none';
   option5.style.display='none';
   option5.style.display='none';
   option6.style.display='none';
   option6.style.display='none';
   option7.style.display='none';
   option8.style.display='none';
   option9.style.display='none';
   option10.style.display='none';
   showBtn.style.display = 'block';
   nextBtn.style.display = 'block';
   showBtn.addEventListener("click", ()=>{
    questioncont.innerHTML=ans_for_1;
   })
 }




function openquestion2(){
    const quiz_for_1=quiz[1].question
    let ans_for_1=quiz[1].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option2.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion3(){
    const quiz_for_1=quiz[2].question
    let ans_for_1=quiz[2].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option3.style.display='none';
    option3.style.backgroundColor="red"
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion4(){
    const quiz_for_1=quiz[3].question
    let ans_for_1=quiz[3].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option4.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion5(){
    const quiz_for_1=quiz[4].question
    let ans_for_1=quiz[4].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option5.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion6(){
    const quiz_for_1=quiz[5].question
    let ans_for_1=quiz[5].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option6.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion7(){
    const quiz_for_1=quiz[6].question
    let ans_for_1=quiz[6].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option7.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion8(){
    const quiz_for_1=quiz[7].question
    let ans_for_1=quiz[7].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option8.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}   

function openquestion9(){
    const quiz_for_1=quiz[8].question
    let ans_for_1=quiz[8].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option9.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion10(){
    const quiz_for_1=quiz[9].question
    let ans_for_1=quiz[9].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option10.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function getNext(){
    if(counter<10){
        questioncont.innerHTML="Select Option";
        option2.style.display='flex';
        option1.style.display='flex';
        option3.style.display='flex';
        option4.style.display='flex';
        option5.style.display='flex';
        option5.style.display='flex';
        option9.style.display='flex';
        option6.style.display='flex';
        option6.style.display='flex';
        option7.style.display='flex';
        option8.style.display='flex';
        option10.style.display='flex';
        showBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
    else{
        window.open("streams.html", "_self");
    }

}