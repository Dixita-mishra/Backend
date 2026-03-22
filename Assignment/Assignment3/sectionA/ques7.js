let arr=new Array('a','b','a','c');
//prev sol
let prev_map={};
for(const char of arr){
    if(char in prev_map)prev_map[char]++;
    else prev_map[char]=1;  
}
console.log(prev_map);
//using loop (ES6)
// let map=new Map();
// for(const char of arr){
//     if(char in map)map.set(char,map.get(char)+1);
//     else map.set(char,1);
// }
// console.log(map);