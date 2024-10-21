// 多ES6内置api做兼容处理
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";

import "@/index.less";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>demo1</div>);
