jsx 构建视图的基础知识
jsx:javaScript and xml(html) 把 js 和 html 标签混合在一起
@1 vscode如何支持jsx语法
   +创建的js文件把js后缀改成jsx即可
   +webpack打包规则中,也是会对.jsx这种文件按照js处理
   +在dom中使用{}即可使用js表达式 : 变量 ,值,数学运算,三元运算符,

==============
import React from "react"; //React 语法核心
import ReactDOM from "react-dom/client"; //构建 HTML(WebApp)的核心

const root = ReactDOM.createRoot(document.getElementById("root"));//获取页面中id为root的容器作为根容器

root.render(<div>demo1</div>); //基于render方法渲染我们编写的视图,把渲染后的内容插入到根容器中渲染
