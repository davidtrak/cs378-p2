let mac_num = document.getElementById("mac_num");
let pasta_num = document.getElementById("pasta_num");
let taco_num = document.getElementById("taco_num");
let ench_num = document.getElementById("ench_num");
let total = document.getElementById("subtotal");

// add event listeners
let inc_buttons = document.getElementsByClassName("btn-add");
for (let btn of inc_buttons) {
    btn.addEventListener("click", add);
}

let dec_buttons = document.getElementsByClassName("btn-sub");
for (let btn of dec_buttons) {
    btn.addEventListener("click", subtract);
}

let clear_button = document.querySelector(".btn-clear");
if (clear_button) {
    clear_button.addEventListener("click", clear);
}

let order_button = document.querySelector(".btn-o");
if (order_button) {
    order_button.addEventListener("click", order);
}

function add(){
    let id = this.id; // mac-add
    // remove add and add num
    id = id.substring(0, id.length - 3) + "num";
    let num = document.getElementById(id);
    num.innerHTML = parseInt(num.innerHTML) + 1;

    // update total
    let price = document.getElementById(id.substring(0, id.length - 3) + "price");
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML);
}

function subtract(){
    let id = this.id; // mac-sub
    // remove sub and add num
    id = id.substring(0, id.length - 3) + "num";
    let num = document.getElementById(id);
    // min value is 0
    num.innerHTML = Math.max(0, parseInt(num.innerHTML) - 1);

    // update total
    let price = document.getElementById(id.substring(0, id.length - 3) + "price");
    total.innerHTML = Math.max(0, parseInt(total.innerHTML) - parseInt(price.innerHTML));
}

function clear(){
    let nums = document.getElementsByClassName("count");
    for (let num of nums) {
        num.innerHTML = 0;
    }
    total.innerHTML = 0;
}

function order(){
    if (parseInt(total.innerHTML) === 0) {
        alert("No items in cart!");
    } else {
        let message = "Order placed.\n";

        let nums = document.getElementsByClassName("count");
        for (let num of nums) {
            if (parseInt(num.innerHTML) > 0) {
                message += num.innerHTML + " order(s) of " + num.id.substring(0, num.id.length - 4) + "\n";
            }
        }

        message += "Total: $" + total.innerHTML;

        alert(message);
    }
}
