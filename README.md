# Knowledge-point
一些有趣的知识点

### 给div增加 placeholder 属性
```bash
.box:empty:before {
  content: attr(placeholder);
}

<div contenteditable='true' placeholder='div中输入文字' class='box'> </div>
```