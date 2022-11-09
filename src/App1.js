import './App.css';
import { useEffect,useRef } from 'react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function App() {
  const [value, setValue] = useState('');
  const editorRef = useRef();

  console.info(' editorRef:',editorRef);
  window.abc = editorRef;
  const EditorConfig = {
    modules: {
      toolbar: [
        [{ 'color': [] }, { 'background': [] }], 
        [{ 'header': '1' }, { 'header': '2' }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
      ],
    },
    formats:[
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ]
  }

  // useEffect(function () {
  //   var quill = new Quill('#editor-container', {
  //     modules: {
  //       toolbar: [
  //         [{ header: [1, 2, false] }],
  //         ['bold', 'italic', 'underline'],
  //         ['image', 'code-block']
  //       ]
  //     },
  //     placeholder: 'Compose an epic...',
  //     theme: 'snow'  // or 'bubble'
  //   });

  // }, [])

  return (
    <div className="App">
        <ReactQuill
          theme="snow"
          ref={editorRef}
          // value={value}
          onChange={(v)=>{
            console.info(' v:',v);
            setValue(22)
          }} 
          modules={EditorConfig.modules}
          formats={EditorConfig.formats}
          placeholder={'this.props.placeholder'}
          />;
    </div>
  );
}

export default App;
