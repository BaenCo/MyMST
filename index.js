const lsName = localStorage.getItem(name);
console.log(lsName);
const parseName = JSON.parse(lsName);
const lsDate = JSON.parse(lsName);
let mOffset = 0;
//const gebid = document.getElementById;
const d = new Date();
let cYear = d.getFullYear();
const cMonth = d.getMonth();
const cDate = d.getDate();
const cDay = d.getDay(); 
let ci = cMonth + mOffset;
//const lDay = new Date(cYear,  ci, 0);
const tStamp = (d.getHours() , d.getMinutes())
// new Date(cYear, cMonth, cDay);
const Months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Weekday = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];


let x = 0;
let y = 0;
const cMonYear = Months[cMonth + mOffset] + " " + cYear;
prevNextIcon = document.querySelectorAll(".icons button");
//console.log(document.getElementById("currDate").innerHTML);
let output = Months[x] +" " + cDate + " "+ (cYear + y);
console.log(cDay + "cDay")
//console.log(fDay + "fDay");
//console.log(output.cDay);
console.log(output);
console.log(x);
console.log(y);
let test = cMonth + mOffset;
//let sDay = 0;
//= new Date(cYear + y, ci, 1, 0).getDay();
let foo = new Date((cYear + y), (cMonth + mOffset, 1)).getDay;
//console.log(sDay);
console.log( `${Months[ci] +" " + cDate + " "+( cYear + y)+ " " + Weekday[cDay]}`);


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


function noteRead(){
    localStorage.getItem(`dayNotes`);
console.log(dayNotes), JSON.parse(dayNotes)
};

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
     
       function nMonth(){
        mOffset = mOffset + 1 ; 
        /*(mOffset >= 11) ? mOffset - 11 : mOffset = mOffset;
        console.log(mOffset);*/
       
       
         // showCurrDate();
         formCalendar()
            showCurrDate();
      };
      function pMonth(){
         mOffset = mOffset - 1;
         //  Months[i--];
        
         showCurrDate()
         formCalendar();
      }
      showCurrDate();

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

    console.log(Months[ci]);
function datePush(){
    document.getElementById("currDate").innerHTML =  Months[cMonth] + " " + cDate + 
    " " + cYear,
    document.getElementById("dispDate").innerHTML = Months[ci] +" " + " "+( cYear + y);
    ci = cMonth + mOffset;
};
//console.log(document.getElementById("currDate").innerHTML);
/*
console.log(Months[x] +" " + cDate + " " + ( cYear + y ));    
///console.log(fDay);
    
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
    console.log(Months[ci]);

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
    console.log(Weekday[6]); */
    datePush();
};

/*
console.log("currdate " + Months[ci])
function lastDay(){
//document.getElementById("lastMDay").innerHTML = lDay
console.log(lDay)
console.log(lDay.getDay())
console.log(lDay.getDate())
}
lastDay()
*/
function formCalendar(){
    console.log(ci)
    let lDay = new Date(cYear,  ci, 0);
    ci = cMonth + mOffset;
    console.log("formCal " + Months[ci])
    let sDay = new Date(cYear + y, ci, 1, 0).getDay()
    lD = new Date(cYear + y, ci + 1, 0).getDate()
    lMlD = lDay.getDate() //last month last day
    console.log(lMlD)
    console.log(sDay)
    sDaD = sDay - 1
    lMlW = (lMlD - sDaD ) //last month last week portion
    nMsD = new Date(cYear + y, ci + 1, 1, 0).getDay() //next month starting day
    console.log(lMlW)
    console.log(nMsD)
    console.log(lD)
    console.log(ci)
//let i = 0;
    document.querySelectorAll(".allDates").forEach(el => el.remove());
    /*document.querySelectorAll(".wDates").forEach(el => el.remove());
    document.querySelectorAll(".bDates").forEach(el => el.remove());
    document.querySelectorAll(".nDates").forEach(el => el.remove()); */
        console.log(sDay);
        console.log(lDay, cDay );
    for( let b = 0; b < sDay; b++ ){ console.log(sDay);
    const button = document.createElement("button");
button.innerText = `${lMlW + b}`
console.log(lD)
console.log(`${lMlW}`)
button.id = (`${lMlW}  ${Months[ci - 1]} ${(cYear + y)}`);
button.classList.add('bDates', 'allDates');

document.getElementById("daysWrapper");
daysWrapper.appendChild(button);
button.addEventListener('click', () => {

    

}

)
}

for( let i = 1; i <= lD; i++) {
const Days = [i];
//Days = Days[i];
//console.log(i);




const button = document.createElement("button");
const dayNotes = `dayNote${i}`
const name = (" dayNotes " + `${Months[ci]} `+` ${i} ` + ` ${(cYear + y)}`);
console.log(i)
console.log(name);
const keyTest =  localStorage.getItem(`${name}`);


const keyOb = JSON.parse(keyTest);
console.log(keyOb)
/*
if (keyOb && !keyOb.icons){
iconShow = ""
    }else if (keyOb && keyOb.icons){
        iconShow = keyOb.icons
    }else{
        console.log("its elsin")
    }

*/


    if (keyOb && keyOb.icons.length > 0 ) { // Check if keyOb and keyOb.icons exist
        console.log(keyOb)
        console.log(keyOb.icons);
        iconShow = i + keyOb.icons;
        button.style.color = "red"
       /* for (let i = 0; i < keyOb.icons.length; i++){
            iconShow += iconShow;
            console.log(iconShow)
        }*/
    } else {
        button.style.color = "darkgreen"
        console.log(localStorage.getItem(dayNotes))
        iconShow = `${i}`
    }
button.innerText = ` ${iconShow}`;
//console.log(Months[x]);
button.id = (`${i} ${Months[ci]} ${(cYear + y)}`);
let id = button.id;
button.classList.add('wDates', 'allDates', 'material-symbols-rounded');
let daysWrapper = document.getElementById("daysWrapper");
daysWrapper.appendChild(button);

button.addEventListener('click', () => {
    

    
  //  localStorage.setItem('lskey', name);
  
    const lskeyTest = localStorage.getItem('lskey');
    console.log(lskeyTest);
 /*   const lsName = localStorage.getItem(name);
    console.log(lsName);
    const parseName = JSON.parse(lsName);
    const lsDate = JSON.parse(lsName);       */
;
    console.log(name);
    console.log(lsDate);
   


 /*   if (lsDate.date != null){
        console.log(lsDate.date)
         }else{
            console.log(' ls is null null null')
         };
*/
/*
         
            console.log(lsDate.date);
            const lsNameStr = lsName.toString();
            const nameStr = name.toString(name);
            console.log(lsNameStr);
            console.log(nameStr);
        
        } else {
            console.log('lsDate or lsDate.date is null or undefined'); 
        }


        */
    console.log(name);
  



  //  if ((lsDate.date != name || lsName == null))
       // !== name || localStorage.getItem(name) == null)
  if (lsDate !== null && lsDate !== undefined && lsDate.date != null ) {




  //  {
        console.log("L.S. is not null or undefined")
    let dayNote = {
        date: `${name}`,
        symptoms: [],
        notes: [],
        icons: [],
      };
      dayNote.ID = i;
     console.log( dayNote.symptoms.length);
     console.log( dayNote.notes.length);
     console.log(dayNote.date);
     const dayNoteSt = JSON.stringify(dayNote);
     console.log(dayNoteSt);
  //  localStorage.setItem(name, dayNoteSt)
console.log("test " + button.id)
  //  localStorage.setItem(`lskey`, name);
    console.log(name);
    console.log(lsName);
    console.log(parseName);
   let keys =  localStorage.getItem(`lskey`);
   let keyCheck = localStorage.getItem(keys);
   let keyOb = JSON.parse(keyCheck);
    console.log(keyOb);
    console.log(keyOb.symptoms);
    console.log(keyOb.notes);
  // let keyCheck = localStorage.getItem(keys);
   console.log(keyCheck);





newNote();
   }else if (name == lsName){ 
        

      

      //  const key = JSON.stringify(`${name}`);
        

/*
        const dayNote = localStorage.getItem(keys);
     keyOb = JSON.parse(dayNote);
     console.log(dayNote);
     dayNoteOb.pass = `${keys}`;
     console.log(dayNoteOb);

*/ 
//const keyParse = JSON.parse(keys); // obsolete; keyname is simple string, not
const keys =  localStorage.getItem(`lskey`);
const keyCheck = localStorage.getItem(keys); // getting notes; keys was keyParse
const keyOb = JSON.parse(keyCheck);
console.log(keyCheck);
console.log(keyOb);
console.log(keys);



        console.log("test already exists " + button.id);
     //   localStorage.setItem(`lskey`, key);
    //    localStorage.setItem(JSON.stringify(`${name}`), JSON.stringify(dayNote));
       // localStorage.setItem(`lskey`, JSON.stringify(`${i}`));
    //keyOb = JSON.parse(`key`);
    console.log(keyOb);
    keyOb.test = "Pulltest";
    console.log(name)
   
   /* ****  Will force save to LS if enabled
          *************************
               ****************
                   *********
                      ***
                       *
    let nameSt = JSON.stringify(name);
    keySt = JSON.stringify(keyOb);
    localStorage.setItem(nameSt, keySt);
    pullTest =localStorage.getItem(nameSt);
    console.log(pullTest);
    */
    newNote();
}else{


    let dayNote = {
        date: `${name}`,
        symptoms: [],
        notes: [],
      };
      dayNote.ID = i;
     console.log( dayNote.symptoms.length);
     console.log( dayNote.notes.length);
     console.log(dayNote.date);
     const dayNoteSt = JSON.stringify(dayNote);
     console.log(dayNoteSt);
     console.log(dayNote);
  // localStorage.setItem(name, dayNoteSt)
console.log("test " + button.id)

const lskeyTest = localStorage.getItem('lskey');
console.log(lskeyTest);
if (localStorage.getItem(lskeyTest) == null) {
  console.log("Item does not exist");
  localStorage.setItem(`lskey`, name);
}
//if ()
    localStorage.setItem(`lskey`, name);
    console.log(name);
    console.log(lsName);
    if (lsName == null){
        console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
    }
    console.log(parseName);
   let keys =  localStorage.getItem(`lskey`);
   console.log(keys);
   let keyCheck = localStorage.getItem(keys);
   console.log(keyCheck);
   let keyOb = JSON.parse(keyCheck);

   //localStorage.setItem(keys, dayNoteSt); // blanks out info and returns new. maybe use as delete

   // const keys =  localStorage.getItem(`lskey`);
  //  const keyCheck = localStorage.getItem(keys); // getting notes; keys was keyParse
  //  const keyOb = JSON.parse(keyCheck);
    let nameSt = JSON.stringify(name);         //
    keySt = JSON.stringify(keyOb);             //copied from above; keeping above  
 //
    if (keyCheck == null){
        

    
 localStorage.setItem(name, dayNoteSt);       //for legacy purposes
    pullTestSt =localStorage.getItem(nameSt); 
    pullTest = localStorage.getItem(name);
    console.log(pullTest);
}}

    console.log('else')

div = document.createElement("div");
div.id = (`${i}` + " " + `${Months[ci]}` + " " + `${(cYear + y)}`);
console.log(div.id);
document.getElementById("noteBook");
div = document.createElement("div");
box = document.createElement("div");
box.setAttribute("style", "background-color: red");
div.classList.add('notes');
//noteBook.appendChild(div);    
newNote();


}


)
}
for( let n = nMsD, i = 1; n < 7 && n > 0; n++, i++){ console.log(nMsD);
    const button = document.createElement("button");
button.innerText = `${i}`;
console.log(lD)
console.log(`${lMlW}`)
button.id = (`${nMsD}  ${Months[ci + 1]} ${(cYear + y)}`);
button.classList.add('nDates', 'allDates');

document.getElementById("daysWrapper");
daysWrapper.appendChild(button);

}
}


function newNote(){
//     LINK TO CHECKBOX.HTML   ---> 
let win = window.open("checkbox.html", "_self");
//let Note = prompt("enter any symptoms")

//};
/*
document.getElementById("noteBook");
div = document.createElement("div");
//div.id = (`${i}` + " " + `${Months[x]}` + " " + `${(cYear + y)}`);
div.classList.add('notes');
document.getElementById("noteBook");
noteBook.appendChild(div);
//div.id = document.querySelectorAll('notes').parentElement.id;
*/
};
//let dispDates =console.log(document.getElementsByClassName("allDates").length)
//document.getElementsByClassName("allDates")

//console.log(dispDates);
formCalendar();