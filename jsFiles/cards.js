`use strict`
let newCard = document.getElementsByName(`chuser`)[0]; // Кнопка для слушателя
let plait = document.getElementsByClassName(`plaite`)[0]
plait.style.display = `none`;
let xrest = document.getElementsByClassName(`closet`)[0]; // Крестик на всп блоке
let sortButt = document.getElementsByClassName(`button`)[0];
let former = document.forms.cardForm
let houseKeeper =  catcher(`card`,`houseKeeper`);
let listBook = list(`listBook`,`library`,`bookGet`);
let listUser = list (`listVisitors`,`visitors`,`visitorGet`);

listCreater3()
opener (newCard,plait)
search (0)



xrest.addEventListener(`click`,() =>{
    if(listUser.classList != `hide`){
        listUser.classList.add(`hide`);}

    if(listBook.classList != `hide`){
        listBook.classList.add(`hide`);}
    checkClass(former,`red`)
      former.reset()
      plait.style.display = `none`
     
      
  })

  document.addEventListener(`keydown`,function(event){
    if(event.keyCode === 27){
        checkClass(former,`red`)
        former.reset()
        plait.style.display = `none`
        // document.getElementsByClassName(`change_holder`)[0].style.display = `none`
    }
})  


sortButt.addEventListener(`click`,()=>{
    let chuse = sorting ();
      sortBy (chuse);
  })  



function list (wichlist,locit, inp){
    let listBook = document.getElementById(wichlist);
    let listItems = JSON.parse(localStorage.getItem(locit));
    if(listItems == null){
        listItems = {}
    }
    let numm = Object.keys(listItems).length
    let ind = Object.keys(listItems)
    for(let counter = 0;counter< numm;counter++){
        if(listItems[ind[counter]].amount <= 0 && listItems[ind[counter]].amount != undefined){
                delete listItems[ind[counter]];
        }else{
        let item = document.createElement(`li`)
       
        item.innerText = listItems[ind[counter]].name + ` ` + listItems[ind[counter]].author + `  ` + listItems[ind[counter]].id;
        if(listItems[ind[counter]].author === undefined){
            item.innerText = listItems[ind[counter]].name + ` ` + listItems[ind[counter]].phone + `  ` + listItems[ind[counter]].id;
        }
      
            item.addEventListener(`click`,function(){
                document.getElementById(inp).value = this.innerText
                listBook.classList.add(`hide`)
            })
        
             
        listBook.append(item);
      
        }
    }
return listBook
}



document.getElementById(`bookGet`).addEventListener(`input`,function(){
    let val = this.value.trim();
    listBook.classList.remove(`hide`);
    console.log(listBook)
    
   let list = document.querySelectorAll(`.listBook li`);
  myExp = new RegExp (val,"i")
    if(val != ``){
       list.forEach(function (elem) {
           if(elem.innerText.search(myExp) == -1){
               elem.classList.add(`hide`)
           }else{
               elem.classList.remove(`hide`)
            //    listBook.prepend(elem)
           }
       });
}else{
    list.forEach(function (elem) {
            elem.classList.remove(`hide`)
        })
}

})


document.getElementById(`visitorGet`).addEventListener(`input`,function(){
    let val = this.value.trim();
    listUser.classList.remove(`hide`);
    list = document.querySelectorAll(`.listVisitors li`);
  myExp = new RegExp (val,"i")
    if(val != ``){
       list.forEach(function (elem) {
           if(elem.innerText.search(myExp) == -1){
               elem.classList.add(`hide`)
           }else{
               elem.classList.remove(`hide`)
            
           }
       });
}else{
    list.forEach(function (elem) {
            elem.classList.remove(`hide`)
        })
}

})

former.addEventListener(`submit`, function(event){
    checkClass(former,`red`)
    let checker = showErrors3 ();
     if (checker == false){
         event.preventDefault()
     }else{   
     fillCard()
     }

})
function showErrors3 (){       
    for(let counter = 0; counter < former.length;counter++){
        if(former[counter].value == ""){
        former[counter].previousElementSibling.classList = `red`;
}
    }
for(let counter = 0; counter< former.length;counter++){
    if(former[counter].value == "" && former[counter].type != `hidden`){
     return false
    }
}
}




function makeCard (){
  let b =  document.getElementById(`bookGet`).value;
  let u = document.getElementById(`visitorGet`).value;
let bArr = b.split(` `);
let uArr = u.split(` `);
let card = {}
let book = bArr[bArr.length - 1];
let users = uArr[uArr.length - 1];
  let library = JSON.parse(localStorage.getItem(`library`));
  let visitors = JSON.parse(localStorage.getItem(`visitors`));
//   let nummLib = Object.keys(library);
//   let nummVis = Object.keys(visitors);
let item;
let gotedBook;
for(let key in library){
    if(library[key].id === book){
    card.bookName = library[key].name;
    card.bookAuthor = library[key].author;
    card.bookId = library[key].id;
    item = key;
    gotedBook = library[key]
}
}

  for( let key in visitors){
      if(visitors[key].id === users){
        card.userName = visitors[key].name;
        card.userId = visitors[key].id;
        visitors[key].action +=1;

      }
    }
    gotedBook.amount -=1
    gotedBook.action +=1
    let getDate =  new Date()
    card.dateGet = getDate.getFullYear() + `-`+ getDate.getMonth() +`-` +getDate.getDate()  + ` / ` + getDate.getHours()+`:`+getDate.getMinutes();
    card.id = `C`+ item + makeANum3();
    localStorage.setItem(`library`,JSON.stringify(library));
    localStorage.setItem(`visitors`,JSON.stringify(visitors))
    return card;
  }


function makeANum3 (){
    let bookCatcher = JSON.parse(localStorage.getItem(`houseKeeper`));
    if(bookCatcher == null){
        return 0
    }
let numm = Object.keys(bookCatcher).length
return numm;
} 


function fillCard (){
    let card = makeCard (); 
    let name = card.userId   
    let number = makeANum3();

return localStorage.setItem(`card`+ number + `/` + name,JSON.stringify(card));
}

function listCreater3(){
    let listHolder = document.getElementsByClassName(`tabHead`)[0];
    let cards = JSON.parse(localStorage.getItem(`houseKeeper`));
    if(cards == null){
        cards = {}

    }else{
    let number = Object.keys(cards).length
    let ind = Object.keys(cards);
    for(let counter = 0;counter < number;counter++){
        let tabR = document.createElement(`tr`);
        listHolder.append(tabR);
        let listItem0 = document.createElement(`td`);
        let listItem1 = document.createElement(`td`);
        let listItem2 = document.createElement(`td`);
        let listItem3 = document.createElement(`td`);
        let listItem4 = document.createElement(`td`);
        let returnDate = document.createElement(`button`);
    returnDate.classList.add(`returner`)
    returnDate.value = cards[ind[counter]].id

    returnDate.addEventListener(`click`,history)
        listItem0.innerText = cards[ind[counter]].id;
        listItem1.innerText = cards[ind[counter]].userName;
        listItem2.innerText = cards[ind[counter]].bookAuthor + ` ` + cards[ind[counter]].bookName;
        listItem3.innerText = cards[ind[counter]].dateGet
        
        tabR.append(listItem0);
        tabR.append(listItem1);
        tabR.append(listItem2);
        tabR.append(listItem3);
        tabR.append(listItem4);

        
        if(cards[ind[counter]].back === undefined){
            listItem4.append(returnDate)

        returnDate.innerHTML =` <svg version="1.1" id="Capa_5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 469.331 469.331" style="enable-background:new 0 0 469.331 469.331;" xml:space="preserve">
   <g>
       <path d="M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4
           c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6
           l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3
           S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1
           l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4
           s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z"/>
   </g>
   
   </svg>`
        }else{
            listItem4.innerText = cards[ind[counter]].back 
        }

    }
}
}

function history () {
    let book = JSON.parse(localStorage.getItem(`library`));
    // let user = JSON.parse(localStorage.getItem(`visitors`));
    let card = JSON.parse(localStorage.getItem(`houseKeeper`));
       
    // let bookNumm = Object.keys(book).length;
    // let bookKeys = Object.keys(book);
    // let userNumm = Object.keys(user).length;
    // let userKeys = Object.keys(user);
    // let cardNumm = Object.keys(card).length;
    // let cardKeys = Object.keys(card);

    let card1;
    // let book1;
    // let user1;
    let returnDate = new Date();


    for(let key in card){
        if(card[key].id === this.value){
         card1 = card[key];
         card[key].back = returnDate.getFullYear() + `-`
         + returnDate.getMonth() +`-` +returnDate.getDate()  + ` / `
          + returnDate.getHours()+`:`+returnDate.getMinutes();
          this.parentElement.innerHTML = card[key].back ;
      

        }
    }
for(let key in book){
    if (card1.bookId == book[key].id){
     
     if(book[key].amount > 0){
        book[key].amount += 1;
     }else{
        let item = document.createElement(`li`);
        item.innerText = book[key].name + ` ` + book[key].author + `  ` + book[key].id; 
            item.addEventListener(`click`,function(){
                document.getElementById(`bookGet`).value = this.innerText;
                listBook.classList.add(`hide`);
            })
            listBook.append(item);
            book[key].amount +=1;
        }
        localStorage.setItem(`library`,JSON.stringify(book));
      
        
    }
    
}

localStorage.setItem(`houseKeeper`, JSON.stringify(card));
    
}