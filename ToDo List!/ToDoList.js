//html tag access 
let todoinput = document.querySelector(`.todoinput`);
let form = document.querySelector(`.form`);
let todoTilel = document.querySelector(`.todoTilel`);
let todoTilelChenge = document.querySelector(`.todoTilelChenge`);
let plusbtn = document.querySelector(`.plusbtn`);
let checkbtn = document.querySelector(`.checkbtn`);
let editbtn = document.querySelector(`.editbtn`);
let deletebtn = document.querySelector(`.deletebtn`);
let allitem = document.querySelector(`.allitem`);
let ol = document.querySelector(`.ol`);

// form preventDefault
form.addEventListener(`submit`,(e)=>{
    e.preventDefault()
})
//List Structure
function getListStructure(text){
    let finalList = `
    <li class="flex justify-between mt-5 bg-white py-3 px-3 rounded-xl items-center w-full     ">
            <div class="itemspandinput">
                <p class="text-x md:text-3xl todoTilel  ">${text}</p>
                <input type="text" class=" todoTilelChenge inputStyle border md:text-3xl w-[150px] md:w-[250px] hidden "">
            </div>
            <div class="btndiv">
                <button class="checkbtn btnStyle"><i class="fa-solid fa-check"></i></button>
                <button  class="editbtn btnStyle"><i class="fa-solid fa-pen-to-square"></i></button>
                <button  class="deletebtn btnStyle"><i class="fa-solid fa-trash"></i></button>
            </div>

    </li>
    `
    return finalList
}

//add todo list

plusbtn.addEventListener(`click`,()=>{

    // invalid value
    if (todoinput.value == ``){
        alert(`please insert the value and continue`)
        return;
    }
    //dublicate
    let alltodoTilel = document.querySelectorAll(`.todoTilel`);

    for(let exittext of alltodoTilel){
        
        if(exittext.textContent == todoinput.value){
            alert(`Todo Item is already Exist`)
            return;
        }
    }

    //properli work
    ol.insertAdjacentHTML(`beforeend`,getListStructure(todoinput.value))
    todoinput.value = ``
})

// remove item 
ol.addEventListener(`click`,(e)=>{
    let deletebtn = e.target.closest(`.deletebtn`)
    if (deletebtn){
        let li = e.target.closest(`li`)
        li.remove()
    }
    
})





