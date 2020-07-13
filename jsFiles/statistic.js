`use strict`

table (0,`library`)
table (1,`visitors`)

sortByStatistic (0)
sortByStatistic (1)
search2 ()

function table (number, listobj){
    let table = document.getElementsByClassName(`tabHead`)[number];
    let list = JSON.parse(localStorage.getItem(listobj));
    if(list == undefined){
        list ={}
    }
    for(let key in list){
        if(list[key].action > 0){
            let tbr = document.createElement(`tr`);
            let tdate0 = document.createElement(`td`);
            let tdate1 = document.createElement(`td`);
            table.append(tbr);
            tbr.append(tdate0);
            tbr.append(tdate1);
            if(list[key].author == undefined){
                tdate0.innerText = list[key].name
            }else{
            tdate0.innerText =  list[key].author +` / ` + list[key].name;
        }
          
            tdate1.innerText =list[key].action;

        }
    }
}


function sortByStatistic (numm){
    let table = document.getElementsByClassName(`tabHead`)[numm];
for(let counter1 = 1;counter1<table.rows.length;counter1++){
for(let counter = 1; counter < table.rows.length;counter++){
    if(table.rows[counter1].cells[1].innerText > table.rows[counter].cells[1].innerText){
        table.rows[counter].before(table.rows[counter1]);

    }
    }
}
}  



function search2 (){
   
    let searchInput = document.getElementsByClassName(`search1`)[0];// берем ипут
   
    let table = document.getElementsByClassName(`tabHead`)[0];// берем таблицу
    let table1 = document.getElementsByClassName(`tabHead`)[1];// берем таблицу
    document.forms.search.addEventListener(`submit`, function (){ // давим на кнопкку
       searchInput.value = searchInput.value.toLowerCase(); // делаем первые буквы заглавными
        let someText = searchInput.value.trim() // УБЕРАЕМ ЕБАНЫЕ ПРОБЕЛЫ
      for(let counter = 1; counter < table.rows.length;counter++){ // сщитаем ряды
    for(let counter1 = 0; counter1 < table.rows[counter].cells.length;counter1++){ // сщитаем детей в рядах
      
        if(table.rows[counter].cells[counter1].innerText.toLowerCase().indexOf(someText) != -1 && someText.length>=3){ // находим
                     table.rows[counter].classList.add(`blue`)
                     table.rows[0].after(table.rows[counter]);
                     setTimeout(function(){
                         for(let counter = 0;counter<table.rows.length;counter++){
                             if(table.rows[counter].classList == `blue`){
                                 table.rows[counter].classList.remove(`blue`)
                             }
                         }
                     },1000)

                     
                 }
     }
 } 
 
 for(let counter = 1; counter < table1.rows.length;counter++){ // сщитаем ряды
    for(let counter1 = 0; counter1 < table1.rows[counter].cells.length;counter1++){ // сщитаем детей в рядах
      
        if(table1.rows[counter].cells[counter1].innerText.toLowerCase().indexOf(someText) != -1 && someText.length>=3){ // находим
                     table1.rows[counter].classList.add(`blue`)
                     table1.rows[0].after(table1.rows[counter]);
                     setTimeout(function(){
                         for(let counter = 0;counter<table1.rows.length;counter++){
                             if(table1.rows[counter].classList == `blue`){
                                 table1.rows[counter].classList.remove(`blue`)
                             }
                         }
                     },1000)
                    }
                }
            }
            document.forms.search.reset()
    })
}
    