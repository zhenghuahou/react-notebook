import { useOnDemandDataHook ,useNormalDataHook} from "../../hooks";
// https://codesandbox.io/s/hooks-an-xu-geng-xin-forked-2ppxc6?file=/src/hooks.js
const renderCntMap = {};
const renderOnce = (name) => {
  return (renderCntMap[name] = (renderCntMap[name] || 0) + 1);
};

export default function App() {
  return (
    <div className="App">
      {/* <OnlyUseInfoFieldComponent /> */}
      <TwoFieldsComponent />
    </div>
  );
}


function OnlyUseInfoFieldComponent() {
  // const { info } = useNormalDataHook();
  const { info } = useOnDemandDataHook();
  return (
    <fieldset>
      <legend>仅使用了 info 字段</legend>
      <div>info: {info || "-"}</div>
      <div>Render 次数：{renderOnce("OnlyUseInfoFieldComponent")}</div>
    </fieldset>
  );
}

function TwoFieldsComponent() {
  const { info, count } = useOnDemandDataHook();

  return (
    <fieldset>
      <legend>使用了 info 和 count 两个字段</legend>
      <div>info: {info || "-"}</div>
      <div>count: {count}</div>
      <div>Render 次数：{renderOnce("TwoFieldsComponent")}</div>
    </fieldset>
  );
}
