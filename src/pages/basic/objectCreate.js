import Highlight from '../../components/highlight';

export default function ObjectCreate() {
  const code = `

    const normalObj = {};   // create a normal object
    const nullProtoObj = Object.create(null); // create an object with "null" prototype
    var t = Object.create(null);
    console.info(' t:', t) // t: {}
    window.tc = t;

    //By default properties are not writable, enumerable or configurable.
    var aab = Object.create({}, { p: { value: 42 } });

    try {
      aab.p = 24;
      alert(1)
    } catch (e) {
      console.info(' e:', e) //Cannot assign to read only property 'p' of object '#<Object>'
    }

    console.info(' aab.p:', aab.p) //42
    for (const prop in aab) {
      console.log('prop:', prop);
    }

    var p = {p: 42,foo:'test'};
    var o2 = Object.create(p)
    console.info(o2.__proto__=== p) //true

  `

  return <>
    <p>
      The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
    </p>
    <Highlight className="code">
      {code}
    </Highlight>
  </>
}



// var tz =  Object.create(Object.prototype, {
//   // foo is a regular 'value property'
//   foo: {
//     writable: true,
//     configurable: true,
//     enumerable:true,
//     value: 'hello'
//   },
//   // bar is a getter-and-setter (accessor) property
//   bar: {
//     configurable: false,
//     get: function() { return 10; },
//     set: function(value) {
//       console.log('Setting `o.bar` to', value);
//     }
// /* with ES2015 Accessors our code can look like this
//     get() { return 10; },
//     set(value) {
//       console.log('Setting `o.bar` to', value);
//     } */
//   }
// });

// var o2 = Object.create({}, {
//   p: {
//     value: 42,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// });

// var o3 = Object.create({p: 42}) 
