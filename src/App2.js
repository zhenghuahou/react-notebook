import logo from './logo.svg';
import './App.css';
import jszip from './intent/jszip-demo';

console.info(' jszip:',jszip);
function App() {

  const onFileChange = async (e) => {
    const { files  } = e.target;
    const [file] = files ;
    const buffer = await jszip.readAsArrayBuffer(file) ;
    console.info('file:',file,' buffer:',buffer);
    window.aa=await jszip.openArrayBuffer(file)
    window.bb = window.aa.read('word/document.xml');
    window.dd = jszip
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
              type="file"
              className="upload-input"
              // accept=".doc,.docx,.pdf"
              onChange={onFileChange}
            />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
