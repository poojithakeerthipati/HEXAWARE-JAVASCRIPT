console.log("Hi from Loops")
for(let i=1;i<=10;i++){
    console.log(`2 * ${i} = ${2*i}`)
  }
const marks = [40,50,60,70,40]

console.log("normal for loop")
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}

console.log("for...in")
for (let idx in marks){
    console.log(marks[idx]) //idx gives index value
}
console.log("for...of")
for(let mark of marks){
    console.log(mark)//gives the data
}

