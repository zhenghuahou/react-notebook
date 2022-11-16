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
        console.info(111111)
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
      创建 shadow DOM 结构
      </p>
     <my-web-component></my-web-component>
    </>
  )
}