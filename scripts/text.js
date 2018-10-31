/** 3.for循环 
 * 
 */
function three1() {
  var data = ['表单1', '表单2', '表单3'];
  for (var i in data) {
    console.log(data[i])
  };
};
// three1();

function three2() {
  var data = ['表单1', '表单2', '表单3'];
  for (var i = 0; i < data.length; i++) {
    console.log(data[i])
  };
};
// three2();

function three3() {
  var arr = ["a", "b", "c"];
  arr.name = "hello";
  for (var v in arr) { //这里的v代表的是key值，主要用于输出key值
    console.log(v + ': ' + arr[v]);
  }
};
three3();