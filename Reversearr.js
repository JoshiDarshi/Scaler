//first way to reverse array
let arr = [54,'a',true,11]
for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i])
}
//second way to reverse array
let arr2 = arr
console.log(arr2)
arr2.reverse(arr)
console.log(arr)
//