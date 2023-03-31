/*
    Week 10 Lab
    S Dowling 21189994
    31 03 2023
*/

var numSubjects;
var sumOfMarks=0;
var arr=[];
var average;
var grade;

function calculate(){
    
    numSubjects=parseInt(prompt("How many subjects did you take?"));
    
    for(i=0;i<numSubjects;i++){
        arr[i]=parseFloat(prompt("Please enter the mark you received for subject number "+(i+1)));
        sumOfMarks=sumOfMarks+arr[i];
    }
    document.getElementById("main").innerHTML+=("Your results are: ");
    
    for(i=0;i<numSubjects;i++){
        document.getElementById("main").innerHTML+=(arr[i]+", ");
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
        document.getElementById("average").innerHTML+=("Please provide a mark above zero and a valid number of subjects taken");
    }
    //output 
    document.getElementById("average").innerHTML+=(("Your average grade was "+average+". Your grade is "+grade+"."));
}