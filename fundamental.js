var student = {
    name: "Tonika",
    batch: 3,
  };
  console.log(student.name + " is in batch " + student.batch);
  var name = 'pooji'
  let age = 5
  age = 6
  console.log(age)
  const age1 = 21
  console.log(age1)
  function fullname(firstname,lastname){
    return "Welcome 🙋‍♂️"+ lastname +", "+firstname + "😊";
  }
  //template literal - released on 2015
  console.log(fullname("poojitha,keerthipati"))
  function movieUrl(domain, genre, year) {
    return `http://${domain}?genere=${genre}&year=${year}`;
  }
  const [,t1,t2,t3=80] = [100,200,null]
  console.log(t1,t2,t3)

  const [z1,z2,...z3] = [20,30,40,50,60] //...-rest operator
  //const [z1,...z2,z3] = [20,30,40,50,60] - ✅ in python ,❌ in js
  console.log(z1,z2,z3)

  console.log(movieUrl("imdb.com", "thriller", 2020));
  //spread Operator
  marks1 = [70,80,60]
  marks2 = [...marks1]
  console.log(marks2)

  let y1 = [30,40]
  let y2 = [50,60]
  console.log(...y1,...y2)
  //Math operations
  console.log(Math.max(75,54,345,23))
  let heights = [120,140,190,80,170]
  console.log(Math.max(heights))
  console.log(Math.max(...heights))
  console.log(Math.max(heights))

const weight = [20,39]
weight[0] = 30
console.log(weight)

var c = 3
var d = '4'
console.log(c+d)
console.log(c-d)

var c = 4
var d = '4'
console.log(c==d)
console.log(c===d)