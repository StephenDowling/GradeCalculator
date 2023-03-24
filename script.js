/*
    Grade Calculator 
    S Dowling 21189994
    24 03 2023
*/

function calculate(){
    //declare
    let numSubjects=0;
    let sumOfMarks=0;
    var average;
    var grade;

    numSubjects=parseInt(prompt("How many subjects did you take?"));
    for(i=1;i<=numSubjects;i++){
        sumOfMarks=sumOfMarks+parseFloat(prompt("Please enter the mark you received in each subject"));
    }
    //compute
    average=sumOfMarks/numSubjects;
    if(average<40&&average>=0){
        grade='F';
    }
    else if(average>=40&&average<60){
        grade='D';
    }
    else if(average>=60&&average<75){
        grade='C';
    }
    else if(average>=75&&average<85){
        grade='B';
    }
    else if(average>=85){
        grade='A';
    }
    else{
        alert(("Please provide a mark above zero and a valid number of subjects taken"));
    }
    //output 
    alert(("Your average grade was "+average+". Your grade is "+grade+"."));
}