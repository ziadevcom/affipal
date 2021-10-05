import parse, { domToReact } from "html-react-parser";

export function parser(html) {
  const options = {
    replace: (domNode) => {
      if (domNode.name === "p") {
        return (
          <p style={{ lineHeight: "inherit" }}>
            {domToReact(domNode.children)}
          </p>
        );
      }
      if (domNode.name === "ul") {
        return (
          <ul style={{ lineHeight: "inherit" }}>
            {domToReact(domNode.children)}
          </ul>
        );
      }
      if (domNode.name === "ol") {
        return (
          <ol style={{ lineHeight: "inherit" }}>
            {domToReact(domNode.children)}
          </ol>
        );
      }
    },
  };
  return parse(html, options);
}
