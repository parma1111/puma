//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit", myfunction);


var data1 = JSON.parse(localStorage.getItem("products")) || [];


function myfunction(event) {
    event.preventDefault(event);
    var type = document.querySelector("#type").value;
    var desc = document.querySelector("#desc").value;
    var price = document.querySelector("#price").value;
    var image = document.querySelector("#image").value;

    var obj1 = {
        type:type,
        desc:desc,
        price:price,
        image:image,
    }
    data1.push(obj1);
    localStorage.setItem("products", JSON.stringify(data1));
}