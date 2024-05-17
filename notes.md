```javascript
let t1 = [80, 90];
let t2 = [50, 60];
let t3 = [...t1, ...t2];
console.log(t3);
//   [80, 90, 50, 60]

//   Math operation
console.log(Math.max(6, 7, 4)); // Accepts n no. of argument

let heights = [120, 140, 190, 80, 170]; // object
//   console.log(
//     Math.max(heights[0], heights[1], heights[2], heights[3], heights[4])
//   );
console.log(Math.max(heights)); // NaN
console.log(Math.max(...heights)); // 190

//   ... rest
function own_max(...nums) {
  // code
  return nums;
}
console.log(own_max(5, 6, 10));
console.log(own_max(5, 6, 10, 7, 80, 60));
```

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Self closing tags -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h1 {
        color: crimson;
      }

      .title {
        color: orange;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to the app</h1>
    <h2 id="sub-heading">Welcome to the app</h2>
    <h3 class="title">Welcome to the app</h3>
    <h4 class="title">Welcome to the app</h4>
    <h5 class="title">Welcome to the app</h5>
    <h6>Welcome to the app</h6>

    <!-- src - source | linked -->
    <!-- <script src="fundamentals.js"></script> -->
    <!-- <script src="basic-loops.js"></script> -->
    <script>
      var h2 = document.getElementById("sub-heading");
      console.log(h2.innerText);
      h2.innerText = "This is super cool"; // update your html
    </script>
  </body>
</html>

<!-- To create boilerplate code -->
<!-- !<tab> -->
```
