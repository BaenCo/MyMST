const gebid = document.getElementById;
const d = new Date();
let cYear = d.getFullYear();
const cMonth = d.getMonth();
const cDate = d.getDate();
const cDay = d.getDay(); 
const lDay = new Date(cYear, cMonth , 0);
const fDay = new Date(cYear, cMonth, cDay);
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const Weekday = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
let mOffset = 0;
let ci = 0;
let x = 0;
let y = 0;
const cMonYear = Months[cMonth + mOffset] + " " + cYear;
prevNextIcon = document.querySelectorAll(".icons button");
//console.log(document.getElementById("currDate").innerHTML);
let output = Months[x] +" " + cDate + " "+ (cYear + y);
console.log(cDay + "cDay")
console.log(fDay + "fDay");
//console.log(output.cDay);
console.log(output);
console.log(x);
console.log(y);
let test = cMonth + mOffset;
let sDay = 0;
//= new Date(cYear + y, ci, 1, 0).getDay();
let foo = new Date((cYear + y), (cMonth + mOffset, 1)).getDay;
//console.log(sDay);
console.log( Months[ci] +" " + cDate + " "+( cYear + y).getDay)


/*  if(cYear + y > 2024 && sDay == 0){
    zDay = sDay + 6
}else if(cYear + y == 2024){
    zDay = sDay
}else{
    zDay = sDay - 1
};*/
//console.log("zday " + zDay);



/*
let zDay = sDay - 1;
if(zDay < 0){
    zDay += 7
}else{
    zDay = zDay
};
*/
function yCheck(){
    if (ci > 11){ 
        
        (y = y + 1,  mOffset = mOffset - 11), 
        (console.log(`ci subtracted, first branch ${ci}, ${y}`))
       
     }else if
         (ci < 0){
             
         y = y - 1, mOffset = mOffset + 11;
         }};



     if(ci == 12){
         mOffset = 11 - cMonth
       }else if (ci < 0){
         mOffset = ((12 - cMonth) * -1)
       }
       console.log("mOffset at negative is " + mOffset)
     


function showCurrDate(){
    console.log(output);
console.log(x);
console.log(y);
    ci = cMonth + mOffset;
    
   // cMonth + mOffset;
    console.log("ci initialized " + ci)
    if (ci > 11){ 
        
       (y = y + 1,  mOffset = mOffset - 12), 
       (console.log(`ci subtracted, first branch ${ci}, ${y}`)),
       datePush();
       
    }else if
        (ci < 0){
            
        (y = y - 1, mOffset = mOffset + 12),
        console.log(`ci added to, second branch ${ci}, ${y}`)
        datePush();
  //  (ci = ci) && (y = y)

    console.log(Months[ci]);

   // console.log( "sday " + sDay);
    console.log("mOffset catch " + mOffset)
  //  if(ci > 11){
  //      mOffset = 12 - cMonth
   //   }else 
      if (ci < 0){
        mOffset = 12 + cMonth      
      }
      console.log("mOffset at if is " + mOffset)
    };

   
function datePush(){document.getElementById("currDate").innerHTML = Months[ci] +" " + cDate + " "+( cYear + y);
    ci = cMonth + mOffset;};
console.log(document.getElementById("currDate").innerHTML);
console.log(Months[x] +" " + cDate + " " + ( cYear + y ));    
console.log(fDay);
    
    console.log(Months);
    console.log("cMonth variable " + cMonth);
    console.log("mOffset variable " + mOffset);
    console.log("cDate varable " + cDate);
    console.log("cYear variable " + cYear);
    console.log("ci variable " +ci);
    console.log( cMonth + 1 + mOffset);
    console.log(Months[ci]);

    console.log(output);
    console.log(cMonth);
    console.log(test);
    console.log(Months[test]);

    let sDay = new Date(cYear + y, ci, 1, 0).getDay();
 
    console.log(cYear + y, Weekday[sDay], sDay);
    console.log(Weekday[sDay]);
    //console.log(Weekday[zDay], zDay);
    console.log(Weekday);
    console.log(Weekday[0]);
    console.log(Weekday[1]);
    console.log(Weekday[2]);
    console.log(Weekday[3]);
    console.log(Weekday[4]);
    console.log(Weekday[5]);
    console.log(Weekday[6]);
    datePush();
};
 //   showCurrDate();

//window.onload = () => {

    
   //     document.getElementById("currDate").innerHTML = cMonth + 1 + mOffset +" " + cDate + " " + cYear;
    
//};
   // document.getElementById("currDate").innerHTML = cMonYear;
   

 //   document.getElementById("weekday").innerHTML = Weekday;
 //   for (let i = 1; i <= lDay; i++);
   
//}



/*
function disMonth(){
    let i = 1;
    document.onclick = () => 
    
      
 
      
    document.getElementById("currDate").innerHTML =
    cMonYear;
     Months[cMonth + i], i+=1 ;
   }
   
    
   disMonth();
    */
function nMonth(){
  mOffset = mOffset + 1 ; 
  /*(mOffset >= 11) ? mOffset - 11 : mOffset = mOffset;
  console.log(mOffset);*/
 
 
    showCurrDate();
   formCalendar();
  //    showCurrDate();
};
function pMonth(){
   mOffset = mOffset - 1;
   //  Months[i--];
   showCurrDate();
   formCalendar();
}
showCurrDate();

function lastDay(){
document.getElementById("lastMDay").innerHTML = lDay;
console.log(lDay);
}


function formCalendar(){
    let sDay = new Date(cYear + y, ci, 1, 0).getDay();
lD = new Date(cYear + y, ci + 1, 0).getDate()
/*document.getElementById("today").innerHTML = */// new Date(cYear, cMonth , 0).getDate();
let i = 1;
    document.querySelectorAll(".wDates").forEach(el => el.remove());
    document.querySelectorAll(".bDates").forEach(el => el.remove());
        console.log(sDay);
        console.log(lDay, cDay );
    for( let b = 0; b < sDay; b++){ console.log(sDay);
    const button = document.createElement("button");
button.innerText = "";
//console.log(Months[x]);
button.id = (`${b} + " " + ${Months[x]} + " " + ${(cYear + y)}`);
button.classList.add('bDates');
//let daysWrapper = 
document.getElementById("daysWrapper");
daysWrapper.appendChild(button);
button.addEventListener('click', () => {
console.log("test " + button.id)
}

)
}
for( let i = 1; i <= lD; i++) {
const Days = [i];
//Days = Days[i];
//console.log(i);




const button = document.createElement("button");
button.innerText = `${i}`;
//console.log(Months[x]);
button.id = (`${i}` + " " + `${Months[x]}` + " " + `${(cYear + y)}`);
button.classList.add('wDates');
//let daysWrapper = 
document.getElementById("daysWrapper");
daysWrapper.appendChild(button);
button.addEventListener('click', () => {
console.log("test " + button.id);
newNote();
div = document.createElement("div");
div.id = (`${i}` + " " + `${Months[x]}` + " " + `${(cYear + y)}`);
console.log(div.id);
document.getElementById("noteBook");
div = document.createElement("div");
box = document.createElement("div");
box.setAttribute("style", "background-color: red");
div.classList.add('notes');
noteBook.appendChild(div);
}

)}}

function newNote(){
//     LINK TO CHECKBOX.HTML   ---> 
let win = window.open("checkbox.html");
//let Note = prompt("enter any symptoms")

//};

document.getElementById("noteBook");
div = document.createElement("div");
//div.id = (`${i}` + " " + `${Months[x]}` + " " + `${(cYear + y)}`);
div.classList.add('notes');
document.getElementById("noteBook");
noteBook.appendChild(div);
//div.id = document.querySelectorAll('notes').parentElement.id;

};

formCalendar();