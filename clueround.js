const quiz=[
        // Final ko lagi 
        {
            question:"Identify the personality on the basis of given clues",
            clue1:"He/she is an American Entrepreneur , industrial designer and media propietor was born on 24 February , 1955 AD " , 
            clue2:"Co founder , primary investor and chairman of PIXAR",
            clue3:"He was late CEO and chairman of apple",
            ans:"Steve Jobs"
        },
        {
            question:"Identify the personality on the basis of given clues",
            clue1:"She was an Indian born- American Astronaut born on 17 March, 1962 AD in kamal, India",   
            clue2:"Awarded with congressional space Medal of Honor IN 2004 AD",
            clue3:"She is the first woman of Indian origin to go to space",
            ans:"Kalpana Chawla"
        },
        {
            question:"Identenfiy the river on the basis of given clues",
            clue1:" It originates from valdai plateau and falls in the caspian sea covering the distance of 3685 Km . ",
            clue2:"Its old name is Rha . ",
            clue3:"It completely lies in Russia and the longest river of Europe . ",
            ans:"Volga River"
        }

        
]

let mainquestion=document.querySelector(".formainquestion");
let clue_1=document.querySelector(".clue1")
let clue_2=document.querySelector(".clue2")
let clue_3=document.querySelector(".clue3")
let ams=document.querySelector(".ans1");
let amsgiver=document.querySelector(".getans1");
let givenext=document.querySelector(".getnextquestion");
let firstclue_give=document.querySelector(".forfirstclue")
let secondclue_give=document.querySelector(".forsecondclue")
let thirdclue_give=document.querySelector(".forthirdclue")
let counter=0;
let counter_for_others=0;

amsgiver.addEventListener("click", ()=>{
    ams.innerHTML=quiz[counter_for_others].ans;
})
givenext.addEventListener("click", ()=>{
    if(counter==0){
        mainquestion.innerHTML=quiz[counter].question;
        counter_for_others=counter;
        counter+=1;}
    else if (counter<=2){
        mainquestion.innerHTML=quiz[counter].question;
        clue_1.innerHTML=""
        clue_2.innerHTML=""
        clue_3.innerHTML=""
        ams.innerHTML=""
        counter+=1;
        counter_for_others+=1
    }
    else{
        window.open("streams.html", "_self")
    }
})
firstclue_give.addEventListener("click", ()=>{
    clue_1.innerHTML=quiz[counter_for_others].clue1;
})
secondclue_give.addEventListener("click", ()=>{
    clue_2.innerHTML=quiz[counter_for_others].clue2;
})
thirdclue_give.addEventListener("click", ()=>{
    clue_3.innerHTML=quiz[counter_for_others].clue3;
})
