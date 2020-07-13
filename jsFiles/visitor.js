`use strict`
let newUser = document.getElementsByName(`chuser`)[0]; // Кнопка для слушателя
let plait = document.getElementsByClassName(`plaite`)[0]
plait.style.display = `none`;
let xrest = document.getElementsByClassName(`closet`)[0]; // Крестик на всп блоке
let sortButt = document.getElementsByClassName(`button`)[0];
let doneUsers = document.forms[`user_form`]
$(`#telephone1`).mask(`+38 (999) 999-99-99`)
$(`#age`).mask(`99/99/9999`)
let visitors = catcher(`user`,`visitors`)

secondplaite2 ()
youreChoise()
listCreater2()


search (0)
opener (newUser,plait)


doneUsers.addEventListener(`submit`,(event)=>{
    checkClass(doneUsers,`red`)
    let checker = showErrors2()
    if(checker == false){
        event.preventDefault()
    }else{
    fillUser ()
    }
})

document.addEventListener(`keydown`,function(event){
    if(event.keyCode === 27){
        checkClass(doneUsers,`red`)
        doneUsers.reset()
        plait.style.display = `none`
        document.getElementsByClassName(`change_holder`)[0].style.display = `none`
    }
})

xrest.addEventListener(`click`,() =>{
    checkClass(doneUsers,`red`)
    doneUsers.reset()
      plait.style.display = `none`
  })

  sortButt.addEventListener(`click`,()=>{
    let chuse = sorting ();
      sortBy (chuse);
  })  

 

function createUser(){
    user = {
        name: upper($(`#visitor`).val()),
        phone: $(`#telephone1`).val(),
        age: $(`#age`).val(),
        action: 0,
        id: idCreaterUser (),
    }
    return user;
}

function idCreaterUser (){
    let name = upper($(`#visitor`).val());
    let phone = $(`#telephone1`).val();
    let age = $(`#age`).val();
    let set =``;
    let set2 = ``;
    let set3 = ``;
    
    result = name.split(` `) ;
        for(let a = 0;a <result.length;a++){
            result[a] = result[a].charAt(0);
    set += result[a]
        }

  let  result2 = phone.split(`-`)
    let index = result2.length;
    set2 = result2[index-1];
let result3 = age.split(`/`);
let index2 = result3.length;
set3 = result3[index2-2];
let numm = makeANum2 ()
let idet = set2 + set + (+set3 + +numm);
return doneUsers.indUser.value = idet;
    }


    function fillUser (){
        let user = createUser (); 
        let name = user.id   
        let number = makeANum2();
    
    return localStorage.setItem(`user`+ number + `/` + name,JSON.stringify(user));
    }
    function makeANum2 (){
        let bookCatcher = JSON.parse(localStorage.getItem(`visitors`));
        if(bookCatcher == null){
            return 0
        }
    let numm = Object.keys(bookCatcher).length
    return numm;
    }  

    function showErrors2 (){       
          for(let counter = 0; counter < doneUsers.length;counter++){
              if(doneUsers[counter].value == ""){
                doneUsers[counter].previousElementSibling.classList = `red`;
      }
          }
      for(let counter = 0; counter<doneUsers.length;counter++){
          if(doneUsers[counter].value == ""){
           return false
          }
      }
      }

      function secondplaite2 (){
        let plait2 = plait.cloneNode(true)
        plait2.classList.add(`change_holder`);
        plait2.id = `change_holder1`;
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
    
        let xrest = document.getElementsByClassName(`closet`)[1];
        xrest.addEventListener(`click`,() =>{
              plait2.style.display = `none`
           
          })
    } 



      
function youreChoise(){  
  let holder = document.createElement(`div`);
  holder.style.display=`none`
  holder.classList.add(`holderOF`)
    let forOfchuse = document.createElement(`div`);
    forOfchuse.classList.add(`plait_of_choice`);
    forOfchuse.style.backgroundImage = `reading-3.svg`
  forOfchuse.innerHTML = `<p class = ask> Вы действительно хотите измени Абонента</p>`
  let buttonHolder =document.createElement(`div`);
  buttonHolder.style.cssText = `width:100%; display:flex; justify-content: space-evenly;align-items: center;`
  let buttNo = document.createElement(`button`);
  let buttYes = document.createElement(`button`);
  buttNo.innerText =`НЕТ`;
  buttYes.innerText = `ДА`
  buttNo.classList.add(`ask_button`)
  buttYes.classList.add(`ask_button`)
  buttNo.value = `НЕТ`
  buttNo.type = `button`
  buttYes.value = `ДА`
  buttYes.type = `submit`

  let changeForm = document.forms[`changeForm`];
    changeForm.append(holder)
    holder.append(forOfchuse)
    forOfchuse.append(buttonHolder);
    buttonHolder.append(buttNo);
    buttonHolder.append(buttYes);

buttNo.addEventListener(`click`,()=>{
    holder.style.display = `none`
})

}

function changer (){
    let catcherCH = JSON.parse(localStorage.getItem(`visitors`))
    let changeForm = document.forms[`changeForm`];
        for(let key in catcherCH){
            if(catcherCH[key].id === this.value){
             changeForm.visitor_change.value = catcherCH[key].name;
             changeForm.telephone1_change.value = catcherCH[key].phone;
             changeForm.age_change.value = catcherCH[key].age;
changeForm.addEventListener(`submit`,function(){  
   
    catcherCH[key].name = upper(changeForm.visitor_change.value);
    catcherCH[key].phone = changeForm.telephone1_change.value;
    catcherCH[key].age = changeForm.age_change.value;
  
    return  localStorage.setItem(`visitors`,JSON.stringify(catcherCH));     
})

}
}
}

function deleter2 () {
    let listHolder = document.getElementsByClassName(`tabHead`)[0];
let catcher = JSON.parse(localStorage.getItem(`visitors`))
    for(let key in catcher){
        if(catcher[key].id === this.value){
            
            delete catcher[key];
        }
        for(let counter = 0;counter< listHolder.rows.length;counter++){
            if(listHolder.rows[counter].cells[0].innerText === this.value){
            
                listHolder.rows[counter].remove()
            }

        }
    }
return localStorage.setItem(`visitors`,JSON.stringify(catcher))
}




$(`#telephone1_change`).mask(`+38 (999) 999-99-99`)
$(`#age_change`).mask(`99/99/9999`)
function listCreater2(){
    let listHolder = document.getElementsByClassName(`tabHead`)[0];
    let booker = JSON.parse(localStorage.getItem(`visitors`));
    if(booker == null){
        booker = {}

    }else{
    let number = Object.keys(booker).length
    let ind = Object.keys(booker);
    for(let counter = 0;counter < number;counter++){
        let tabR = document.createElement(`tr`);
        listHolder.append(tabR);
        let listItem0 = document.createElement(`td`);
        let listItem1 = document.createElement(`td`);
        let listItem2 = document.createElement(`td`);
        let listItem3 = document.createElement(`td`);
        let listItem4 = document.createElement(`td`);
        

        let changeButton = document.createElement(`button`);// сделать кнопкой
changeButton.classList.add(`img_cheng`);
changeButton.style.cssText = `border: none; background: none; outline: none;`
let plaite2 = document.getElementsByClassName(`change_holder`)[0];
opener(changeButton,plaite2);
let delButton = document.createElement(`button`);
delButton.classList.add(`img_delete`)
delButton.style.cssText = `border: none; background: none;outline: none;`



changeButton.addEventListener(`click`,changer)

delButton.addEventListener(`click`,deleter2);




        listItem0.innerText = booker[ind[counter]].id;
        listItem1.innerText = booker[ind[counter]].name;
        listItem2.innerText = booker[ind[counter]].phone;
      
      

        


        tabR.append(listItem0);
        tabR.append(listItem1);
        tabR.append(listItem2);
        tabR.append(listItem3);
        tabR.append(listItem4);
     

listItem3.append(changeButton);
listItem4.append(delButton);

changeButton.value = booker[ind[counter]].id;
delButton.value = booker[ind[counter]].id
changeButton.innerHTML = `<svg version="1.1" id="Capa_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 611.927 611.927" style="enable-background:new 0 0 611.927 611.927; width: 13px;cursor: pointer;" xml:space="preserve">
<g>
<path d="M385.127,607.254c-0.797,0-2.319,0-3.116,0c-16.448-3.116-31.303-14.057-39.129-28.984
   c-0.797-0.797-0.797-1.594-1.594-2.319c-0.797-1.594-7.029-13.333-25.071-14.057h-0.725c-6.232,0-11.739,0-17.97,0h-0.87
   c-18.767,0-25.071,13.333-25.071,14.057c-0.797,0.797-0.797,1.594-1.594,2.319c-7.826,14.854-22.68,25.796-39.129,28.984
   c-2.319,0.797-4.71,0.797-7.029,0c-14.854-3.913-30.506-9.42-44.636-16.448c-2.319-0.797-3.913-2.319-5.507-3.913
   c-10.144-13.333-14.854-31.303-10.941-47.751c0-0.797,0-1.594,0.797-3.116c0-1.594,3.116-14.854-10.144-26.593l-0.797-0.797
   c-4.71-3.913-9.42-7.826-14.057-11.739l0,0c-6.232-4.71-12.536-7.029-19.564-7.029c-5.507,0-9.42,1.594-9.42,1.594
   c-0.797,0.797-1.594,0.797-3.116,0.797c-15.651,6.232-34.419,5.507-49.273-3.116c-2.319-0.797-3.913-2.319-4.71-4.71
   c-8.623-12.536-16.449-25.796-23.477-39.926c-0.797-2.319-1.594-3.913-1.594-6.232c0-17.246,8.623-34.419,21.883-44.636
   c0.797-0.797,1.594-1.594,2.319-1.594c0.797-0.797,11.739-9.42,9.42-27.39c0,0,0,0,0-0.797c-1.594-5.507-2.319-11.739-3.116-17.97
   c0-0.797,0-0.797,0-0.797c-3.116-17.97-17.97-21.883-17.97-21.883c-0.797,0-1.594-0.797-3.116-0.797
   c-16.449-5.507-30.506-18.767-36.013-35.216C0,284.878,0,283.284,0,280.965c1.594-14.057,3.913-28.984,7.826-43.839
   c0.797-2.319,1.594-3.913,3.116-5.507c11.739-14.057,28.984-21.883,46.157-21.158c0.797,0,1.594,0,3.116,0
   c3.913,0,16.449-0.797,24.274-14.854c0,0,0-0.797,0.797-0.797c2.319-4.71,5.507-10.144,9.42-15.651c0,0,0-0.797,0.797-0.797
   c8.623-15.651,1.594-27.39,0.797-28.984c-0.797-0.797-0.797-1.594-1.594-2.319c-9.42-15.651-11.739-34.419-4.71-51.664
   c0.797-1.594,1.594-3.913,3.116-5.507c10.144-10.144,21.158-19.564,32.897-27.39c1.594-1.594,3.913-2.319,5.507-2.319
   c17.97-3.913,36.81,1.594,50.07,13.333c0.797,0.797,1.594,0.797,2.319,1.594c0,0,7.029,6.232,17.246,6.232
   c3.116,0,7.029-0.797,10.941-1.594l0,0c6.232-2.319,12.536-4.71,17.97-6.232c16.449-6.232,18.767-20.361,18.767-21.883
   c0-0.797,0-1.594,0.797-2.319c2.319-17.97,13.333-34.419,29.709-43.041c1.594-0.797,3.913-1.594,5.507-1.594
   c15.651-0.797,26.593-0.797,42.244,0c2.319,0,3.913,0.797,5.507,1.594c16.448,8.623,27.39,24.274,29.709,42.244
   c0,0.797,0.797,1.594,0.797,3.116c0,1.594,2.319,14.854,18.767,21.883l0,0c6.232,1.594,12.536,3.913,17.97,6.232l0,0
   c3.913,1.594,7.826,2.319,10.941,2.319c10.941,0,17.246-6.232,17.246-6.232c0.797-0.797,1.594-1.594,2.319-1.594
   c13.333-11.739,32.1-17.246,50.07-13.333c2.319,0.797,3.913,1.594,5.507,2.319c11.739,8.623,22.68,17.97,32.897,27.39
   c1.594,1.594,2.319,3.116,3.116,5.507c6.232,17.246,4.71,36.013-4.71,51.664c0,0.797-0.797,1.594-1.594,2.319
   c-0.797,0.725-7.826,13.333,0.797,28.984c0,0,0,0.797,0.797,0.797c3.116,5.507,6.232,10.144,9.42,15.651c0,0,0,0.797,0.797,0.797
   c7.826,13.333,20.361,14.854,24.274,14.854c0.797,0,2.319,0,3.116,0c17.246-0.797,35.216,7.029,46.157,21.158
   c1.594,1.594,2.319,3.913,3.116,5.507c3.913,14.057,6.232,28.984,7.826,43.839c0,2.319,0,3.913-0.797,6.232
   c-6.232,17.246-19.564,29.709-36.013,35.216c-0.797,0.797-1.594,0.797-3.116,0.797c-1.594,0-14.854,4.71-17.97,22.68v0.797
   c-0.797,6.232-1.594,12.536-3.116,17.97v0.797c-2.319,15.651,9.42,24.274,9.42,24.274c0.797,0.797,1.594,1.594,2.319,2.319
   c13.333,10.941,21.883,27.39,21.883,44.636c0,2.319-0.797,4.71-1.594,6.232c-6.232,13.333-14.057,27.39-23.477,39.926
   c-1.594,1.594-3.116,3.116-4.71,4.71c-8.623,4.71-17.97,7.029-28.187,7.029l0,0c-7.029,0-14.854-1.594-21.158-3.913
   c-0.797,0-1.594-0.797-3.116-0.797l0,0c0,0-3.913-1.594-9.42-1.594c-7.029,0-13.333,2.319-18.767,7.029c0,0,0,0-0.797,0
   c-3.913,3.913-8.623,7.826-14.057,11.739c0,0-0.797,0-0.797,0.797c-11.739,10.144-11.739,21.158-10.941,25.796
   c0.797,1.594,0.797,3.116,0.797,4.71l0,0c3.116,16.448-0.797,33.622-11.739,46.157c-1.594,1.594-3.116,3.116-5.507,3.913
   c-14.057,6.232-29.709,11.739-44.636,16.448C387.445,607.254,385.924,607.254,385.127,607.254z M194.194,565.734
   c10.941,4.71,21.883,8.623,32.897,11.739c7.826-2.319,14.057-7.826,17.246-14.854c0.797-0.797,0.797-1.594,1.594-3.116
   c6.232-10.941,21.883-26.593,48.548-27.39c0.797,0,0.797,0,0.797,0h0.797c6.232,0,11.739,0,17.97,0h0.797h0.797
   c25.796,0.797,42.244,16.449,48.548,27.39c0.797,0.797,1.594,1.594,1.594,3.116c3.116,7.029,9.42,12.536,17.246,14.854
   c10.941-3.116,22.68-7.029,32.897-11.739c3.913-7.029,5.507-14.854,3.116-22.68c0-0.797-0.797-2.319-0.797-3.116
   c-2.319-12.536,0-34.419,19.564-52.461l0.797-0.797l0.797-0.797c5.507-3.913,9.42-7.826,14.057-11.739l0.797-0.797
   c0,0,0.797,0,0.797-0.797c10.941-8.623,23.477-13.333,36.81-13.333c7.826,0,14.057,1.594,17.97,3.116
   c0.797,0,2.319,0.797,3.116,0.797c3.913,1.594,7.826,2.319,11.739,2.319l0,0c3.913,0,7.826-0.797,10.942-2.319
   c6.232-9.42,12.536-19.564,17.246-29.709c-0.797-7.826-5.507-15.651-11.739-20.361c-0.797-0.797-1.594-1.594-2.319-2.319
   c-10.144-8.623-22.68-26.593-18.767-52.461v-0.797v-0.797c1.594-5.507,2.319-11.739,3.116-17.97c0-0.797,0-0.797,0-1.594v-0.797
   c5.507-25.796,23.477-38.332,35.216-43.041c0.797-0.797,1.594-0.797,3.116-1.594c7.826-2.319,14.854-7.826,18.767-15.651
   c-1.594-10.941-3.116-21.883-5.507-32.1c-6.232-6.232-14.057-9.42-22.68-8.623c-1.594,0-2.319,0-3.913,0
   c-8.623,0-32.1-3.116-47.751-28.187l-0.797-0.797c-3.116-6.232-6.232-10.942-9.42-16.449l-0.797-0.797c0,0,0-0.797-0.797-0.797
   c-12.536-23.477-7.029-44.636-0.797-55.577c0.797-0.797,0.797-1.594,1.594-3.116c4.71-7.029,6.232-15.651,3.913-24.274
   c-7.826-7.029-15.651-14.057-24.274-20.361c-8.623-0.797-17.246,2.319-23.477,7.826c-0.797,0.797-1.594,1.594-3.116,2.319
   c-0.797,5.507-12.536,13.333-30.506,13.333c-6.232,0-13.333-0.797-19.564-3.116h-0.797h-0.797
   c-5.507-2.319-11.739-4.71-17.246-6.232h-0.797c0,0,0,0-0.797,0c-24.274-9.42-34.419-29.709-36.81-42.244
   c0-0.797-0.797-2.319-0.797-3.116c-0.797-8.623-5.507-16.448-12.536-21.158c-11.739-0.797-19.564-0.797-31.303,0
   c-7.029,4.71-11.739,12.536-12.536,21.158c0,0.797,0,2.319-0.797,3.116c-2.319,12.536-11.739,32.897-36.81,42.244c0,0,0,0-0.797,0
   h-0.797c-5.507,1.594-11.739,3.913-17.246,6.232h-0.797h-0.797c-6.232,2.319-12.536,3.116-19.564,3.116
   c-17.97,0-29.709-7.826-35.216-12.536c-0.797-0.797-1.594-1.594-3.116-2.319c-6.232-6.232-14.854-9.42-23.477-7.826
   c-8.623,6.232-16.449,13.333-24.274,20.361c-2.319,8.623-0.797,17.246,3.913,24.274c0.797,0.797,0.797,1.594,1.594,3.116
   c6.232,10.942,11.739,32.897-0.797,55.577v0.797l-0.797,0.797c-3.116,5.507-6.232,10.144-9.42,15.651
   c0,0.797-0.797,0.797-0.797,1.594c-15.651,25.071-39.129,28.187-47.751,28.187c-0.797,0-2.319,0-3.116,0
   c-8.623-0.797-16.449,2.319-22.68,8.623c-2.319,10.942-4.71,21.883-5.507,32.1c3.913,7.826,10.144,13.333,18.767,15.651
   c0.797,0,2.319,0.797,3.116,1.594c11.739,4.71,29.709,17.246,35.216,43.041v0.797c0,0.797,0,0.797,0,1.594
   c0.797,6.232,1.594,11.739,3.116,17.97v0.797v0.797c3.913,25.796-8.623,43.839-18.767,52.461c-0.797,0.797-1.594,1.594-2.319,2.319
   c-7.029,4.71-10.941,12.536-11.739,20.361c5.507,10.144,10.941,20.361,17.246,29.709c7.029,3.116,15.651,3.116,23.477-0.797
   c0.797-0.797,2.319-0.797,3.116-0.797c3.913-1.594,10.144-3.116,17.97-3.116c13.333,0,25.796,4.71,36.81,13.333c0,0,0,0,0.797,0
   s0.797,0.797,1.594,0.797c3.913,3.913,8.623,7.826,14.057,11.739l0.797,0.797l0.797,0.797
   c19.564,17.246,21.883,39.926,19.564,52.461c0,0.797,0,2.319-0.797,3.116C188.687,550.88,190.281,558.705,194.194,565.734z
    M306.072,462.478c-84.489,0-152.601-68.837-152.601-152.602s68.113-153.399,152.601-153.399s152.601,68.837,152.601,152.601
   S390.561,462.478,306.072,462.478z M306.072,185.39c-68.113,0-124.414,55.577-124.414,124.414s56.302,123.69,124.414,123.69
   s124.414-55.577,124.414-124.414S374.185,185.39,306.072,185.39z"/>
</g></svg>`

delButton.innerHTML = `<svg version="1.1" id="Capa_4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 613.4 613.4" style="enable-background:new 0 0 613.4 613.4;width: 13px; cursor: pointer;" xml:space="preserve">
<g>
<path d="M473.635,306.75l115.581-115.581c31.295-31.295,31.295-82.087,0-114.481l-52.891-52.891C521.227,8.699,500.731,0,479.134,0
   c-21.596,0-42.093,8.599-57.191,23.796L306.263,140.477L190.781,24.896C175.684,9.798,155.187,1.1,133.591,1.1
   c-21.596,0-42.093,8.599-57.191,23.796L23.409,77.787C9.411,91.785,0.712,112.382,0.712,133.978s8.599,42.093,23.796,57.191
   L139.99,306.75L24.509,422.331C9.411,437.428,0.712,457.925,0.712,479.522c0,21.596,8.599,42.093,23.796,57.191L77.4,589.604
   c15.098,15.098,35.594,23.796,57.191,23.796c21.596,0,42.093-8.599,57.191-23.796l115.581-115.581l114.481,114.481
   c15.098,15.098,35.594,23.796,57.191,23.796c21.596,0,42.093-8.599,57.191-23.796l52.891-52.891
   c31.295-31.295,31.295-82.087,0-114.481L473.635,306.75z M560.021,507.617l-51.792,52.891c-15.098,15.098-42.093,15.098-57.191,0
   L321.46,430.93c-4.299-4.299-8.599-5.399-13.998-5.399c-5.399,0-9.698,2.2-13.998,5.399L163.786,560.508
   c-15.098,15.098-42.093,15.098-57.191,0l-52.891-52.891c-7.599-7.599-11.898-18.397-11.898-29.195s4.299-21.596,11.898-29.195
   l129.479-129.479c7.599-7.599,7.599-20.497,0-28.095L53.604,162.074c-8.599-6.499-12.998-17.297-12.998-28.095
   c0-10.798,4.299-21.596,11.898-29.195l52.891-52.891c15.098-15.098,42.093-15.098,57.191,0L292.165,181.47
   c3.199,3.199,8.599,5.399,13.998,5.399c5.399,0,10.798-2.2,13.998-5.399L449.739,51.892c15.098-15.098,42.093-15.098,57.191,0
   l53.091,52.891c16.197,16.197,16.197,42.093,0,57.191L430.442,291.552c-3.199,3.199-5.399,8.599-5.399,13.998
   s2.2,10.798,5.399,13.998l129.579,129.779C576.218,466.524,576.218,492.52,560.021,507.617z"/>
</g>
</svg>`
    }
       
    }
    
}
