// Given an array of arrays, flatten them into a single array
function flatten(arr) {
  var merged = [].concat.apply([], arrays);
  console.log(merged);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];



flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
let result = arr.reduce(function(count,item) {   
    if(count[item] === undefined) count[item] = 1;
    else count[item] += 1;
    return count;
  },[])
  return result;
}


countOccurrences(['a', 'b', 'c', 'b', 'a']);
// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }

/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự từ nhỏ đến lớn (ascending order)
 */
function sortNumbers(arr) {
  var ascendingNumber = arr.sort(function(a,b){
    return a - b;
  });
  console.log(ascendingNumber);
}

sortNumbers([5, 1, 3, 2]); // [1, 2, 3, 5]

/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
 */
function sortNumbers(arr) {
  return arr.sort(function(a,b){
    return b - a;
  });

}

sortNumbers([5, 1, 3, 2]); // [5, 3, 2, 1]


/**
 * Sort an array from shortest string to longest
 */
function lengthSort(arr) {
 	for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length - i - 1; j++) {
    var temp = arr[j]
    if (arr[j].length > arr[j + 1].length) {
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
    }
  }
}
return arr;
}

lengthSort(["dog", "wolf", "by", "family", "eaten"]) 
// ["by", "dog", "wolf", "eaten", "family"] 
// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length

// Sort the objects in the array by age
function byAge(arr){
  arr.sort(function(a, b){
    return a.age-b.age
})
console.log(arr)
}


byAge([
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
]);
///
/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 */
var students = [
  { name: 'A', score: 100 },
  { name: 'B', score: 10 },
  { name: 'C', score: 101 },
  { name: 'D', score: 50 },
  { name: 'E', score: 75 }
];

/**
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
function getTopStudents(students) {
  var topStudents = students.sort(function (a, b){
    return b.score - a.score;
  });
  return topStudents.slice(0, 3);
}

/**
 * Chạy thử hàm
 */
getTopStudents(students);

/* 
  Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
*/

function powerup(arr) {
   return arr.map((x)=>{
    if(x%2==0){
      return Math.pow(x,2);
    }
    return x;
  })
}

powerup([0, 3, 6, 7, 4]); // [0, 3, 36, 7, 16] 

/* 
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

function average(arr) {
  var sum = 0;
  for(var i =0;i<arr.length;i++)
      sum+=arr[i];
        return sum/arr.length;
}

average([8, 8 , 6.75]) // 8


/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.

  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  return arr.map((x)=>{
    if(x < 0){
      return x*(-1);
    }
    return x;
  })
}

positiveNumber([-2, 3, -4, -7, 10]); // [ 2, 3, 4, 7, 10 ]

/*
  Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100
*/



function random() {
  return Math.floor(Math.random() * 101); 
}

random(); // The number between 1 and 100

/* 
  viết hàm updateObj để xóa thuộc tính rollno khỏi đối tượng student
  và in ra kết quả
*/

var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 
};

function updateObj(obj,name) {
  delete obj[name];
  console.log(obj)}
updateObj(student, "rollno");
/* 
    var student = { 
      name : "David Rayy", 
      sclass : "VI", 
    }; 
*/

/* 
  Viết hàm lengthObj để in ra độ dài của một đối tượng
*/

function lengthObj(obj) {
  return Object.keys(obj).length;
}

var student = {
  name: "Jerry", 
  age: 14,
  role: "student"
}

lengthObj(student); // length: 3


/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/

function Shape(color, shape, fill) {
  this.color = color;
  this.shape = shape;
  this.fill = fill;
}

var shape1 = new Shape("red", "rectangle", true);
var shape2 = new Shape("orange", "triangle", false);
var shape3 = new Shape("tomato", "circle", true);
 console.log(shape1);
  console.log(shape2);
  console.log(shape3);
