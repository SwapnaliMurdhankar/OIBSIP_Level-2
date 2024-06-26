function getHistory(){
  return document.getElementById("display-screen").innerText;
}


function printHistory(num){
  return document.getElementById("display-screen").innerText=num;
}


function getOutput(){
  return document.getElementById("total-value").innerText;
}


function printOutput(num){
  if(num==""){
      document.getElementById("total-value").innerText=num;
  }
  else{
      document.getElementById("total-value").innerText=getFormattedNum(num);
  }
}


function getFormattedNum(num){
  if(num=="-"){
      return "";
  }
  var n=Number(num);
  var value=n.toLocaleString("en");
  return value;
}


function reverseNum(num){
  return Number(num.replace(/,/g,''));
}

var operator= document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
  operator[i].addEventListener('click',function(){
      if(this.id=="clear"){
          printHistory("");
          printOutput("");
      }


      else if(this.id=="backspace"){
          var output=reverseNum(getOutput()).toString();
          if(output){
              output=output.substring(0,output.length-1);
              printOutput(output);
          }
      }

      else{
             var output=getOutput();
              var history=getHistory();
                  if(output=="" && history!=""){
                    if(isNaN(history[history.length-1])){
                       history=history.substring(0,history.length-1);
              }
          }


        if(output!="" || history!=""){
              output=output==""?output:reverseNum(output);
              history=history+output;
              if(this.id=="="){
                  var result=eval(history);
                  printOutput(result);
                  printHistory(history+"="+eval(history));
              }
              else{
                  history=history+this.id;
                  printHistory(history);
                  printOutput("");
           }
      }


          if(this.id=="ans"){
              console.log(this.id);
          
              printOutput(history)
              history="";
              printHistory(history)
           
      }

      }
  })
}


var number= document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
  number[i].addEventListener('click',function(){
      var output=reverseNum(getOutput());
      if(output!=NaN){
          output=output+this.id;
          printOutput(output)
      }
  })
}