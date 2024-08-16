let myArray = []
let disc ;
    let inp = document.getElementById('inp');

const MyEvent = () => {
    crop.innerHTML = ''     
    for (let i = 0; i < myArray.length; i++) {
        crop.innerHTML += `<div>${myArray[i]}</div>
        <button class="btn btn-danger" onclick="edititem(${i})">Edit</button>
        <button class="btn btn-success" onclick="deleteitem(${i})">Delete</button>`
        console.log(myArray);
        }
        }

function deleteitem(index){
    let  confamu = confirm("Are you sure you want to delete")
    if (confamu == true){
        myArray.splice(index, 1)
        inp.value = ""
        MyEvent() 
    }else{
        MyEvent()
    }}   

const addButton = () => {
    myArray.push(inp.value)
    console.log(myArray)
    inp.value =""
    MyEvent()
}

const edititem = (index) =>{
    let table = prompt('What item do you want to edit', myArray[index])
    myArray[index] = table
    MyEvent()
    console.log(myArray);
}