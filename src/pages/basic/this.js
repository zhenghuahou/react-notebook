import Highlight from "../../components/highlight";
export default function This() {
  const code = `
    var value = 1;
    var foo = {
    value: 2,
    bar: function () {
            return this.value;
        }
    }

    //示例1
    console.log(foo.bar()); //this:foo输出2
    //示例2
    console.log((foo.bar)());//this:foo,输出2
    //示例3
    console.log((foo.bar = foo.bar)());//this:window,输出1
    //示例4
    console.log((false || foo.bar)());//this:window,输出1
    //示例5
    console.log((foo.bar, foo.bar)());//this:window,输出1
  `;

  return (
    <>
      <h3>this</h3>
      <Highlight className="code">{code}</Highlight>
    </>
  );
}
