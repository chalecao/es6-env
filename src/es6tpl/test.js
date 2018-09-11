import {nodeTpl} from "./tpl"

var aa = (a) => (e) => {
    console.log(a, e)
}
var bb = () => [`<span style="color:orange;">qqqqq</span>`, `<span style="color:red;">bbbbb</span>`]
var cc = () => [nodeTpl`<div ${{ click: aa(456) }} class='ok'>222</div>`, nodeTpl`<div ${{ click: aa(456) }} class='ok'>333</div>`];
// 调用
var node = nodeTpl`<h2 ${{ click: aa(123) }} class='ok'>测试${bb()}</h2>${cc()}`;

console.log(node)

document.body.appendChild(node)


