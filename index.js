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
let x = 0;
let y = 0;
const cMonYear = Months[cMonth + mOffset] + " " + cYear;
prevNextIcon = document.querySelectorAll(".icons button");
//console.log(document.getElementById("currDate").innerHTML);
let output = Months[x] +" " + cDate + " "+ (cYear + y);
console.log(fDay);
console.log(output.cDay);
console.log(output);
console.log(x);
console.log(y);

function showCurrDate(){
    let ci = cMonth + mOffset;
    if (ci > 11){ 
        (y = 1) && ( x = ci - 12)
    }else{
    (x = ci) && (y = 0)
};

let output = Months[x] +" " + cDate + " "+ (cYear + y);

document.getElementById("currDate").innerHTML = Months[x] +" " + cDate + " "+( cYear + y);
    
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
    console.log(Months[x]);
    let test = cMonth + mOffset;
    let sDay = new Date(cYear + y, test, 1, 0).getDay();
    let foo = new Date((cYear + y), (cMonth + mOffset, 1)).getDay;
    console.log(foo);

    if(cYear + y == 2025 && sDay == 0){
        zDay = sDay + 6
    }else if(cYear + y == 2024){
        zDay = sDay
    }else{
        zDay = sDay - 1
    };



    /*
    let zDay = sDay - 1;
    if(zDay < 0){
        zDay += 7
    }else{
        zDay = zDay
    };
    */
    console.log(output);
    console.log(cMonth);
    console.log(test);
    console.log(Months[test]);
 
    console.log(cYear + y, Weekday[sDay], sDay);
    console.log(Weekday[sDay]);
    console.log(Weekday[zDay], zDay);
    console.log(Weekday);
    console.log(Weekday[0]);
    console.log(Weekday[1]);
    console.log(Weekday[2]);
    console.log(Weekday[3]);
    console.log(Weekday[4]);
    console.log(Weekday[5]);
    console.log(Weekday[6]);
    
};
 //   showCurrDate();

//window.onload = () => {

    
   //     document.getElementById("currDate").innerHTML = cMonth + 1 + mOffset +" " + cDate + " " + cYear;
    
//};
   // document.getElementById("currDate").innerHTML = cMonYear;
   

 //   document.getElementById("weekday").innerHTML = Weekday;
 //   for (let i = 1; i <= lDay; i++);
    console.log(lDay, cDay );
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
  
   // Months.keys[i] =
   //  Months;
   /*
   let i = 1;
   mOffset += i;
   document.getElementById("NavR").addEventListener('click', () => {
     // mOffset = mOffset + 1;
    
    i++;
    
     //mOffset++ ;
      console.log("test "+ mOffset);
      })
   console.log("next month", `${mOffset}`, mOffset, Months);
   */
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
lD = /*document.getElementById("today").innerHTML = */ new Date(cYear, cMonth + 1, 0).getDate();
let i = 1;
document.querySelectorAll(".wDates").forEach(el => el.remove());

/*
prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "NavL" ? cMonth - 1 : cMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(cYear, cMonth, new Date().getDate());
            cYear = date.getFullYear(); // updating current year with new date year
            cMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        lastDayCalculator(); // calling Calendar function
        prevNextIcon.forEach(icon => { // getting prev and next icons
            icon.addEventListener("click", () => { // adding click event on both icons
                // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
                currMonth = icon.id === "NavL" ? currMonth - 1 && mOffset - 1 : currMonth + 1 && mOffset + 1;
        
                if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                    // creating a new date of current year & month and pass it as date value
                    date = new Date(cYear, cMonth, new Date().getDate());
                    cYear = date.getFullYear(); // updating current year with new date year
                    cMonth = date.getMonth(); // updating current month with new date month
                } else {
                    date = new Date(); // pass the current date as date value
                }
            //    renderCalendar(); // calling renderCalendar function
             /*   showCurrDate(){
                    document.getElementById("currDate").innerHTML = cMonth + 1 + mOffset +" " + cDate + " " + cYear;
                    }; 
            }); 
        
        });   
        
        
        
    // function showCurrDate(){
   //     document.getElementById("today").innerHTML = cMonth + 1 + mOffset +" " + cDate + " " + cYear;
      //  }
    })}); */
    document.querySelectorAll(".bDates").forEach(el => el.remove());
for( let b = 0; b < zDay; b++){
    const button = document.createElement("button");
button.innerText = "";
//console.log(Months[x]);
button.id = (`${b}` + " " + `${Months[x]}` + " " + `${(cYear + y)}`);
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
win.document.write()
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
/*
const renderCalendar = () => {
    let firstDayofMonth = new Date(cYear, cMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(cYear, cMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(cYear, cMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(cYear, cMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
   }

renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "NavL" ? currMonth - 1 && mOffset - 1 : currMonth + 1 && mOffset + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(cYear, cMonth, new Date().getDate());
            cYear = date.getFullYear(); // updating current year with new date year
            cMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
        function showCurrDate(){
            document.getElementById("today").innerHTML = cMonth + 1 + mOffset +" " + cDate + " " + cYear;
            };
    });

});
*/


//function showCurrDate(){
//document.getElementById("today").innerHTML = cMonth + 1 + mOffset +" " + cDate + " " + cYear;
//}
formCalendar();
//const sympArray = [];
//const symp








