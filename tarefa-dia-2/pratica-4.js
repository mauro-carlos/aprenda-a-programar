let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional":false};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};
let total
if (produtoA["internacional"] === true) {
    total = 1.20 * produtoA["valor"]
    console.log(`produto ${produtoA["nome"]} é INTERNACIONAL e o valor TOtal é ${total}`);
} 
else {
    total = 1.12 * produtoA ["valor"]
    console.log(`produto ${produtoA["nome"]} é NACIONAL e o valor TOtal é ${total}`);
}
if (produtoB["internacional"] === true) {
    total = 1.20 * produtoB["valor"]
    console.log(`produto ${produtoB["nome"]} é INTERNACIONAL e o valor TOtal é ${total}`);
} 
else {
    total = 1.12 * produtoB["valor"]
    console.log(`produto ${produtoB["nome"]} é NACIONAL e o valor TOtal é ${total}`);
}

if (produtoC["internacional"] === true) {
    total = 1.20 * produtoC["valor"]
    console.log(`produto ${produtoC["nome"]} é INTERNACIONAL e o valor TOtal é ${total}`);
} 
else {
    total = 1.12 * produtoC["valor"]
    console.log(`produto ${produtoC["nome"]} é NACIONAL e o valor TOtal é ${total}`);
}