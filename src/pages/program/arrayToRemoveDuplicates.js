import { useEffect } from "react";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
// import 'highlight.js/styles/monokai-sublime.css';

hljs.registerLanguage('javascript', javascript);

export default function ArrayToRemoveDuplicates() {


    useEffect(() => {
        document.querySelectorAll("pre").forEach(block => {
            try { hljs.highlightBlock(block); }
            catch (e) { console.log(e); }
        });
    });

    const code = `
    var array = [1, 2, 1, 1, '1'];

    function unique(array) {
       return Array.from(new Set(array));
    }
    
    console.log(unique(array)); // [1, 2, "1"]
    `

    return (
        <>
            <p>
                数组去重
            </p>
            <pre className="code">
                <code >
                    {code}
                </code>
            </pre>
        </>
    )
}