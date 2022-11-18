// https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements

import Highlight from '../../components/highlight';

// 闭包实现
// (function(){
//   const _shadows = new WeakMap();
//   class MyWebComponent extends HTMLElement {
//       constructor() {
//           super();
//           console.info('>>>> this:',this)
//           _shadows.set(this, this.attachShadow({ mode: "closed" }));
//       }
//       connectedCallback() {
//           _shadows.get(this).innerHTML = `
//           <p>I'm in the closed Shadow Root!</p>
//       `;
//       }
//   }

//   window.customElements.define("my-web-component", MyWebComponent);
// })();

// 正常实现
class MyWebComponent extends HTMLElement {
  constructor() {
    super();
    window.test = this.attachShadow({ mode: "closed" });
    this._root = window.test;
    window.myweb = this;
    console.info(' this:', this)
  }
  connectedCallback() {
    this._root.innerHTML = `
          <p>I'm in the closed Shadow Root!非闭包</p>
      `;
  }
}
window.customElements.define("my-component", MyWebComponent);

export default function ShadowDOM() {

  const code = `
  const $myWebComponent = document.querySelector("my-web-component");
  $myWebComponent.shadowRoot // null
  $myWebComponent._root // shadow-root (closed)
  `

  return (
    <>
      <p>
        Web components 的一个重要属性是封装——可以将标记结构、样式和行为隐藏起来，并与页面上的其他代码相隔离，
        保证不同的部分不会混在一起，可使代码更加干净、整洁。其中，Shadow DOM 接口是关键所在，
        它可以将一个隐藏的、独立的 DOM 附加到一个元素上。
      </p>
      <hr></hr>
      <p>
        使用生命周期回调函数
        在 custom element 的构造函数中，可以指定多个不同的回调函数，它们将会在元素的不同生命时期被调用：
      </p>
      <p>connectedCallback：当 custom element 首次被插入文档 DOM 时，被调用。</p>
      <p>disconnectedCallback：当 custom element 从文档 DOM 中删除时，被调用。</p>
      <p>adoptedCallback：当 custom element 被移动到新的文档时，被调用。</p>
      <p>attributeChangedCallback: 当 custom element 增加、删除、修改自身属性时，被调用。</p>
      <hr></hr>
      <my-component></my-component>
      <hr></hr>
      <Highlight>
        {code}
      </Highlight>
    </>
  )
}