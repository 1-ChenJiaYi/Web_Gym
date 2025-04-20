# 八股——HTML


### 1、src和href的区别：
(1) src: 在script、img、iframe等标签中使用，当浏览器进行资源解析时，会暂停其它资源的解析，直到解析完当前src的内容为止。
<br>
(2) href: 指向外部资源，经常在a、link元素中使用，不会阻断其它资源的加载。 

---

### 2、HTML5新增的特性：*
(1) 语义化标签：head、footer、nav、main、section等 
<br>
(2) 表单类型：email、number、时间控件、color颜色拾取器、placeholer、autofocuszdon获取焦点.
<br> 


---

### 3、HTML语义化的理解：
(1) 具体情况具体分析，根据内容选择最合适的标签。
<br> 
(2) 好处：a、有利于SEO优化。 b、方便爬虫识别内容。c、有利于代码的可读性和规范性，便于维护。

---

### 4、文档声明的作用：
```html 
<!DOCTYPE html>
```
它是HTML5的文档说明，告诉浏览器用相对应的解析器。

---
### 5、iframe * 
(1) 作用：通常用来加载外部的内容，不影响网页内的加载。
(2) 优点：可以将网页完整的加载进来；增加代码的可读性；用来加载显示较慢的内容，如广告、视频等。
(3) 缺点：浏览器引擎对内容无法识别，对SEO优化不利；会阻塞onload事件加载；会产生很多其它的页面，不利于管理。

---

### 6、Canvas 和 SVG **
(1) Canvas: 通过js绘制2d图，是逐像素进行渲染。
(2) SVG: 基于xml描述的2d图形语言，每个元素都是有用的，可以为其添加事件。

----

### 7、script的defer和async区别：
两者都是异步加载外部的js脚本 

是解析script时的模式
(1) defer是在文档被解析完成后才开始解析。
(2) async 加载完脚本后立刻执行。

多个async不能保证加载顺序，而多个defer可以按先后顺序加载。

---
### 8、dom回顾：
操作dom：

```js
// 1、锁定/查找节点
const x = document.querySelectorAll("class_name/id")
const x = document.querySelector("")

const x = document.getElementById("") 
const x = document.getElementByClassName("") 
const x = document.getElementByTagName("") 


// 2、添加节点：
document.appendChild(dom) 

// 3、移除节点：
document.removeChild(dom) 

// 4、移动节点：将目标元素加入dom 
document.appendChild()  


// 5、
```








---