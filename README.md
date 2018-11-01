# Knowledge-point
一些有趣的知识点

### 1. 给div增加 placeholder 属性
#### HTML结构
```bash
<div contenteditable='true' placeholder='div中输入文字' class='box'> </div>
```
#### CSS样式
```bash
.box:empty:before {
  content: attr(placeholder);
}
```

### 2. h2标签中嵌套P标签，要求p标签的宽度不得超过h2标签中的大写文字宽度
#### HTML结构
```bash
<h2>
  IPHONE XR<br>
  IS THE FUCKING<br>
  BEST EVER MADE
  <p>iPhone XR has not been authorized as required by the rules of the Federal Communications Commission. iPhone XR is not, and may not be, offered for sale or lease, or sold or leased, until authorization is obtained.</p>
</h2>
```
#### CSS样式
```bash 
h2 {
  display: table;
}
p {
  display: table-caption;
  caption-side: bottom;
}
```
* `display:table-caption`: 表示元素的display水平表现为表格标题，自动自适应于外部表格容器宽度；
* `caption-side:bottom`: 可以设置表格标题在底部；
* `display:table`: 元素的宽度为 auto 的时候表现为 “包裹性”。
  
### 3. for循环
* for-in 循环 
  
  数据格式： var data = ['表单1', '表单2', '表单3'];
```js
for (var i in data) {
  console.log(data[i])
};
// 表单1 表单2 表单3
```
* 思考问题：for循环，for-in，for-of，forEach？ [参考网站](https://blog.csdn.net/yyl927117/article/details/69631817)

### 4. 定位事件穿透
* span定位在div上，click事件锁定div上，让span定位穿透并且可以点击

```bash
span {pointer-events: none;}
```

### 5. AngularJS 事件监听
* $broadcast 父传子

```bash
$rootScope.$broadcast('to-index', 'index');
$scope.$on('to-child', function() {
  console.log('.....')
})
```

### 6. AngularJS 报错
* 一旦压缩之后报错，错误信息 “Uncaught Error:[$injector:unpr] Unknown provider: eProvider <- e <”
* 发现原来我缺少了 '[]'
  
```bash
.directive('onFinishRenderFilters', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {}
  };
})
//- 改成如下就可解决问题：
.directive('onFinishRenderFilters', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {}
  };
}]) 
```

### 7. 去除IOS input标签点击时候的灰色背景

```bash
-webkit-tap-highlight-color:rgba(0,0,0,0);
```