var questionarray=[
 {
     ques:"which language is widely used?",
     a:"html",
     b:"css",
     c:"javascript",
     d:"java",
     correct:"javascript"
    },
     
   { ques:"which language is widely used for front?",
    a:"html",
    b:"css",
    c:"javascript",
    d:"java 2",
    correct:"html"
   },
   { ques:"who is best test player?",
    a:"virat",
    b:"smith",
    c:"kane williamson",
    d:"rohit",
    correct:"smith"
   },
   { ques:"richest man in world",
   a:"musk",
   b:"bezos",
   c:"Ambani",
   d:"none of these",
   correct:"bezos"
  }
]
//for a,b,c,d
var a=document.getElementById('a');
var b=document.getElementById('b');
var c=document.getElementById('c');
var d=document.getElementById('d');

var a2=document.getElementById('a2');
var b2=document.getElementById('b2');
var c2=document.getElementById('c2');
var d2=document.getElementById('d2');

var question=document.querySelector('.question');
var content=document.querySelector('.content');
var btn=document.querySelector('.btn');
var questionindex=0;
var correct=0;
function loadquestion(){
   question.innerText=questionarray[questionindex].ques;
   a.setAttribute("value",`${questionarray[questionindex].a}`);
   a2.innerText=questionarray[questionindex].a;
   b.setAttribute("value",`${questionarray[questionindex].b}`);
   b2.innerText=questionarray[questionindex].b;
   c.setAttribute("value",`${questionarray[questionindex].c}`);
   c2.innerText=questionarray[questionindex].c;
   d.setAttribute("value",`${questionarray[questionindex].d}`);
   d2.innerText=questionarray[questionindex].d;
}
loadquestion();
btn.addEventListener('click',function(){
    const option= document.querySelectorAll('input[name="option"]');
    let selectedValue=undefined;
    for (const rb of option) {
        if (rb.checked) {
            selectedValue = rb.value;
            rb.checked=false;
            break;
        }
    }
     if(selectedValue==undefined)
      alert('please select the option ');
      else
      {
    if( questionindex<questionarray.length  && selectedValue==questionarray[questionindex].correct )
    {  
       correct++; 
    }
    questionindex++; 
    if(questionindex<questionarray.length)
    { 
    loadquestion();
    }
    else
    {
        content.style.display="none";
        btn.style.display="none";
      var final= document.querySelector('.final'); 
      final.innerText=`Your Final Score is:${correct}`;
    //   final.style.display="block";
    }
}
});

var btn2=document.querySelector('.btn2');
btn2.addEventListener('click',function(){
  location.reload();

});
