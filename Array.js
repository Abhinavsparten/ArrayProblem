let arr = [1,4,6,4,2,3,5,9,5,6,8,6,1,1,1,2]

let obj = {};
for(let num of arr) {
    obj[num] = (obj[num] || 0) +1;
}
console.log(obj)