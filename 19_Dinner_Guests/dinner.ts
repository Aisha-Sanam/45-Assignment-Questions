let t = ["Waleed", "Huzaifa", "Bilal", "Saqib", "Ahad"];
// console.log("Mr.", t[0], "are invited for a dinner in my house tonight!");
// console.log("Mr.", t[1], "are invited for a dinner in my house tonight!");
// console.log("Mr.", t[3], "are invited for a dinner in my house tonight!");
// console.log("Mr.", t[4], "are invited for a dinner in my house tonight!");
console.log("Everyone I have found a bigger dinner table!");
t.unshift("Shakoor");
t.push("Fazzy");
t.push("Umer");
for (var i = 0; i < t.length; i++) {
    console.log("Mr. ", t[i], " are invited for a dinner tonight!");
}

let arraylength = t.length;
console.log("Length of the array is: ",arraylength);