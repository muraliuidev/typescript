const menu = [
    {name:"Idly" , price: 10},
    {name:"Vada", price: 15},
    {name:"Poori", price: 20},
    {name:"Dosa", price: 30}
]

const cashInRegister = 100
const nextOrderId = 1
const orderQueue = []

function addNewItem(itemObj){
    menu.push(itemObj)
}   

function placeOrder(itemName) {
    const selectedItem = menu.find(itemObj => itemObj.name === itemName)
    cashInRegister += selectedItem.price
    const newOrder = { id: nextOrderId++, Item: selectedItem, status: 'ordered' }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder (orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewItem({ name: "Upma", price: 10 })
addNewItem({ name: "Utappam", price: 15 })

placeOrder("Utappam")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)