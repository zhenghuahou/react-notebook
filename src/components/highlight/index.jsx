import { useEffect } from "react";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

hljs.registerLanguage('javascript', javascript);

export default function ArrayToRemoveDuplicates(props) {
  const { children, className, innerHTML = false, ...rest } = props;
  const cns = `code ${className}`

  useEffect(() => {
    document.querySelectorAll("pre").forEach(block => {
      try { hljs.highlightBlock(block); }
      catch (e) { console.log(e); }
    });
  });

  innerHTML && (rest.dangerouslySetInnerHTML = { __html: children })

  return (
    <>
      <pre className={cns} {...rest}>
        <code>
          {children}
        </code>
      </pre>
    </>
  )
}