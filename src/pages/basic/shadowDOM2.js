//https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM


(function(){
  const _shadows = new WeakMap();
  class MyWebComponent extends HTMLElement {
      constructor() {
          super();
          console.info('>>>> this:',this)
          _shadows.set(this, this.attachShadow({ mode: "closed" }));
      }
      connectedCallback() {
          _shadows.get(this).innerHTML = `
          <p>I'm in the closed Shadow Root!</p>
      `;
      }
  }

  window.customElements.define("my-web-component", MyWebComponent);
})();

export default function ShadowDOM() {
  return (
    <>
      <p>
        Web components 的一个重要属性是封装——可以将标记结构、样式和行为隐藏起来，并与页面上的其他代码相隔离，保证不同的部分不会混在一起，可使代码更加干净、整洁。其中，Shadow DOM 接口是关键所在，它可以将一个隐藏的、独立的 DOM 附加到一个元素上。本篇文章将会介绍 Shadow DOM 的基础使用。
        Element.attachShadow()
      </p>
     <my-web-component></my-web-component>
    </>
  )
}