var alertWindowLoad = function(e) {
console.log('Window loaded');

//GET CALC DIV
// var calcdiv = document.getElementById('calc');
// CREATE TABLE (calctab) INSIDE OF DIV
var calctable = document.createElement('table');
    calctable.className = 'calc';
var numbers = document.getElementsByClassName('number');
// calcdiv.append(calctable);
var inputNums = [];
var operands = [];
var currentNumber = '';
////////////////////////////////////////////////
var trow1 = document.createElement('tr');
//---------------------------------------------
var tdTotal = document.createElement('td');
    tdTotal.className = 'total';
    // tdTotal.textContent = '';
    tdTotal.colSpan = '3';
    //---------------------------------------------
var tdClear = document.createElement('td');
    tdClear.className = 'clear';
    tdClear.textContent = 'C';
    tdClear.addEventListener('click', function(e){
      currentNumber = '';
      inputNums = [];
    tdTotal.textContent = currentNumber;
    });
    //---------------------------------------------
calctable.appendChild(trow1);
calctable.appendChild(tdTotal);
calctable.appendChild(tdClear);
////////////////////////////////////////////////
var trow2 = document.createElement('tr');
// SEVEN 7 .........................................
var td7 = document.createElement('td');
    td7.className = 'number';
    td7.textContent ='7';
    td7.addEventListener('click', function(e){
      currentNumber += '7';
    tdTotal.textContent = currentNumber;
    });
// EIGHT 8 .........................................
var td8 = document.createElement('td');
    td8.className = 'number';
    td8.textContent ='8';
    td8.addEventListener('click', function(e){
      currentNumber += '8';
    tdTotal.textContent = currentNumber;
    });
// NINE 9 .........................................
var td9 = document.createElement('td');
    td9.className = 'number';
    td9.textContent ='9'
    td9.addEventListener('click', function(e){
      currentNumber += '9';
    tdTotal.textContent = currentNumber;
    });
    //---------------------------------------------
var tdDIV = document.createElement('td');
    tdDIV.className = 'math';
    tdDIV.textContent ='/';
    tdDIV.addEventListener('click', function(e){
      operands.push('/');
      doTheMath();
    });
    //---------------------------------------------
calctable.appendChild(trow2);
calctable.appendChild(td7);
calctable.appendChild(td8);
calctable.appendChild(td9);
calctable.appendChild(tdDIV);
////////////////////////////////////////////////
var trow3 = document.createElement('tr');
// FOUR 4 .........................................
var td4 = document.createElement('td');
    td4.className = 'number';
    td4.textContent ='4'
    td4.addEventListener('click', function(e){
      currentNumber += '4';
    tdTotal.textContent = currentNumber;
    });
// FIVE 5 .........................................
var td5 = document.createElement('td');
    td5.className = 'number';
    td5.textContent ='5'
    td5.addEventListener('click', function(e){
      currentNumber += '5';
    tdTotal.textContent = currentNumber;
    });
// SIX 6 .........................................
var td6 = document.createElement('td');
    td6.className = 'number';
    td6.textContent ='6'
    td6.addEventListener('click', function(e){
      currentNumber += '6';
    tdTotal.textContent = currentNumber;
    });
    //---------------------------------------------
var tdSUB = document.createElement('td');
    tdSUB.className = 'math';
    tdSUB.textContent ='-';
    tdSUB.addEventListener('click', function(e){
      operands.push('-');
      doTheMath();
    });
    //---------------------------------------------
calctable.appendChild(trow3);
calctable.appendChild(td4);
calctable.appendChild(td5);
calctable.appendChild(td6);
calctable.appendChild(tdSUB);
////////////////////////////////////////////////
var trow4 = document.createElement('tr');
// ONE 1 .........................................
var td1 = document.createElement('td');
    td1.className = 'number';
    td1.textContent ='1'
    td1.addEventListener('click', function(e){
      currentNumber += '1';
    tdTotal.textContent = currentNumber;
    });
// TWO 2 .........................................
var td2 = document.createElement('td');
    td2.className = 'number';
    td2.textContent ='2'
    td2.addEventListener('click', function(e){
      currentNumber += '2';
    tdTotal.textContent = currentNumber;
    });
// THREE 3 .........................................
var td3 = document.createElement('td');
    td3.className = 'number';
    td3.textContent ='3'
    td3.addEventListener('click', function(e){
      currentNumber += '3';
    tdTotal.textContent = currentNumber;
    });
    //---------------------------------------------
var tdMULT = document.createElement('td');
    tdMULT.className = 'math';
    tdMULT.textContent ='x'
    tdMULT.addEventListener('click', function(e){
      doTheMath();
      operands.push('*');
    });
    //---------------------------------------------
calctable.appendChild(trow4);
calctable.appendChild(td1);
calctable.appendChild(td2);
calctable.appendChild(td3);
calctable.appendChild(tdMULT);
////////////////////////////////////////////////
var trow5 = document.createElement('tr');
//---------------------------------------------
var tdDEC = document.createElement('td');
    tdDEC.className = 'number';
    tdDEC.textContent ='.'
    tdDEC.addEventListener('click', function(e){
      if (!currentNumber.includes('.')){
        currentNumber += '.';
      }
    tdTotal.textContent = currentNumber;
    });
    //---------------------------------------------
var td0 = document.createElement('td');
    td0.className = 'number';
    td0.textContent ='0'
    td0.addEventListener('click', function(e){
      currentNumber += '0';
    tdTotal.textContent = currentNumber;
    });
    //---------------------------------------------
var tdEQUALS = document.createElement('td');
    tdEQUALS.className = 'equals';
    tdEQUALS.textContent ='='
    tdEQUALS.addEventListener('click', function(e){
      inputNums.push(tdTotal.textContent);
      doTheMath();
    });
    //---------------------------------------------
var tdADD = document.createElement('td');
    tdADD.className = 'math';
    tdADD.textContent ='+'
    tdADD.addEventListener('click', function(e){
      operands.push('+');
      doTheMath();
    });

    //---------------------------------------------
//~*~*~*~*~*~*~*~*~*~* MATH FUNCTION (goes here)
var doTheMath = function(){
  inputNums.push(tdTotal.textContent);
  if(inputNums.length < 2){
    console.log("IN IF");
    tdTotal.textContent = '';
    console.log(inputNums);
    currentNumber = '';
  }
  else {
    var oper = operands[operands.length-1];
    var tempResult = parseFloat(inputNums[0]) + oper + parseFloat(inputNums[1]);
    tempResult = eval(tempResult);
    inputNums = [];
    inputNums.push(tempResult);
    console.log(tempResult);
    tdTotal.textContent = tempResult;
    currentNumber = '';
  }
};

//#####################################################
calctable.appendChild(trow5);
calctable.appendChild(tdDEC);
calctable.appendChild(td0);
calctable.appendChild(tdEQUALS);
calctable.appendChild(tdADD);
//**//**//**//**//**//**//**//**//**//**//**//**//**//**//
document.body.appendChild(calctable);
//**//**//**//**//**//**//**//**//**//**//**//**//**//**//

}
window.addEventListener('load', alertWindowLoad);
