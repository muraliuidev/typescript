const menu = [
    {name:"Idly" , price: 10},
    {name:"Vada", price: 15},
    {name:"Poori", price: 20},
    {name:"Dosa", price: 30}
]

const cashInRegister = 100
const orderQueue = []

function addNewItem(itemObj){
    menu.push(itemObj)
}   
