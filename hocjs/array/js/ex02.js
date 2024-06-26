// console.log(Array.prototype);

// var users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users);

// 1. at(index) ==> Trả về phần tử theo index
// console.log(users.flat(2));

// 2. concat() ==> Nối nhiều mảng thành 1 mảng
// var arr1 = ["A", "B", "C"];
// var arr2 = ["1", "2", "3"];
// var arr3 = [7, 8, 9, ["F8"]];
// // var arr = arr1 + arr2;
// var arr = arr1.concat(arr2, [4, 5, 6], arr3);
// console.log(arr);

// 3. fill() ==> Cập nhật tất cả phần tử mảng thành 1 giá trị
// console.log(users.fill(10));

// 4. includes() ==> Kiểm tra 1 phần tử có nằm trong 1 mảng hay không?
// console.log(users.includes("User 21"));

// 5. indexOf() ==> Kiểm tra 1 phần tử có trong 1 mảng không? ==> Trả về index đầu tiên
// console.log(users.indexOf("User 2"));

// 6. lastIndexOf() ==> Kiểm tra 1 phần tử có nằm trong 1 mảng không? ==> trả về index cuối cùng

// 7. slice(start, end) ==> cắt mảng từ index start đến end-1
// console.log(users.slice(1, 3));
// console.log(users.slice(1));
// console.log(users.slice(-2));

// 8. join(str) ==> Nối mảng thành chuỗi
// console.log(users.join(" - "));

// 9. sort() ==> Sắp xếp mảng theo thứ tự tăng dần (Sắp xếp kí tự, thay đổi mảng ban đầu)
/* 
sort(function(a, b) {
    a: Phần tử sau
    b: Phần tử trước
    Nếu hàm callback trả về giá trị âm ==> đổi chỗ a và b
})
*/

// var arr = ["An", "Dũng", "Tùng", "Anh"];
// arr.sort();
// console.log(arr);

// var numbers = [1, 100, 10, 2, 8, 9];
// numbers.sort();
// console.log(numbers);
// numbers.sort(function (a, b) {
//   if (b > a) {
//     return -1000;
//   }
// });
// console.log(numbers);

// Bài tập:
var users = [
  "Tạ Hoàng An",
  "Đặng Ngọc Sơn",
  "Lưu Anh Quân",
  "Lê Đức Nam",
  "Trung Tuyển",
];
var getFirstName = function (name) {
  return name.split(" ").slice(-1).join();
};
users.sort(function (a, b) {
  if (getFirstName(a) < getFirstName(b)) {
    return -1;
  }
});
// console.log(users);

// 10. reverse() ==> Đảo ngược mảng
users.reverse();
console.log(users);

// 11. push() ==> Thêm phần tử vào cuối mảng (trả số lượng phần tử sau khi đã thêm xong)
var count = users.push("Item 5", "Item 6", "Item 7");
console.log(users);
console.log(count);

// 12. unshift() ==> Thêm phần tử vào đầu mảng
var count = users.unshift("Item 5", "Item 6", "Item 7");
console.log(users);
console.log(count);

// 13. pop() ==> xoá phần tử cuối mảng
var value = users.pop();
console.log(users);
console.log(value);

// 14. shift() ==> Xoá phần tử đầu mảng;
var value = users.shift();
console.log(users);
console.log(value);
