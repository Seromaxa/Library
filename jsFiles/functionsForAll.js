`use strict`


function dateCreater (num){
    let dater = document.getElementsByClassName(`date`)[num];
    let year = new Date ();
    let year2 = year.getFullYear()
    for(let counter = 1900;counter <= year.getFullYear();counter++){
        let option = document.createElement(`option`);
        option.innerText = year2--;
        dater.append(option);
    }
  } 

  function opener (button,someElement){
    button.addEventListener(`click`, function (){
        if( someElement.style.display == `none`){
            someElement.style.display = `flex`;
        }else if( someElement.style.display == `flex`){
            someElement.style.display = `none`;
           
        }
        })
    }


    function makeANum (){
        let bookCatcher = JSON.parse(localStorage.getItem(`library`));
        if(bookCatcher == null){
            return 0
        }
    let numm = Object.keys(bookCatcher).length
    return numm;
    }    


    function checkClass(found,value){
        for(let counter = 0;counter < found.length;counter++){
            if(found[counter].previousElementSibling.classList == value){
                found[counter].previousElementSibling.classList.remove(value)
            }
        }
    }    

    function sortBy (numm){
        let table = document.getElementsByClassName(`tabHead`)[0];
    for(let counter1 = 1;counter1<table.rows.length;counter1++){
    for(let counter = 1; counter < table.rows.length;counter++){
        if(table.rows[counter1].cells[numm].innerText < table.rows[counter].cells[numm].innerText){
            table.rows[counter].before(table.rows[counter1]);
    
        }
        }
    }
    }    


    function sorting (){
        let categori = document.getElementsByClassName(`sorting`)[0];
        let chuse;
       switch (categori.value){
           case `ID`: chuse = 0;
           break;
           case `Автор`:chuse = 1;
           break;
           case `Название книги`: chuse = 2;
           break;
           case `Жанр`: chuse = 3; 
           break;
           case `Ф.И.О.`: chuse = 1;
           break;
           case `Абонент`: chuse = 1;
           break;
           case `Книга` : chuse = 2;
          }
    return chuse;
    }   


    function upper (some){
        let set =``;
        let result = some.split(` `) ;
        for(let a = 0;a <result.length;a++){
            result[a] = result[a].charAt(0).toUpperCase() + result[a].substr(1).toLowerCase();
            set += result[a] + ` `
        }
        return set;
        }    



        function search (numm){
   
            let searchInput = document.getElementsByClassName(`search1`)[0];// берем ипут
           
            let table = document.getElementsByClassName(`tabHead`)[numm];// берем таблицу
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
         document.forms.search.reset()
             
            })
        }
        
        
        function secondplaite (){
            let plait2 = plait.cloneNode(true)
            plait2.classList.add(`change_holder`);
            plait2.id = `change_holder`;
            plait.after(plait2);
            plait2.children[0].children[1].name =`changeForm`;
            let changeForm = document.forms[`changeForm`];
            changeForm.button.type = `button`
           
            for(counter = 0;counter<changeForm.length;counter++){
            changeForm.elements[counter].id += `_change`
            changeForm.elements[counter].previousElementSibling.htmlFor += `_change`;
            let lableText = changeForm.elements[counter].previousElementSibling.innerText;
            changeForm.elements[counter].previousElementSibling.innerText = `Изменить ` + lableText; 
        }
        changeForm.button_change.addEventListener(`click`,function(){
            let asker = document.getElementsByClassName(`holderOF`)[0];
            asker.style.display = `flex`;
        
        })
        
        dateCreater (1)
            let xrest = document.getElementsByClassName(`closet`)[1];
            xrest.addEventListener(`click`,() =>{
                  plait2.style.display = `none`
               
              })
        }        



        function catcher(value,obj){
            let bookCatcher = JSON.parse(localStorage.getItem(obj));
            if(bookCatcher == null){
                bookCatcher = {}
            }
            for(let key in localStorage){
                if(key.includes(value)){
                    let name = key;
            let someBook = JSON.parse(localStorage.getItem(key));
            bookCatcher[name] = someBook
            localStorage.setItem(obj, JSON.stringify(bookCatcher))
            localStorage.removeItem([name]);
                }
               
            }
                 
            }        


            