import React from "react";

export default class Comments extends React.Component {

    componentDidMount() {
        let script = document.createElement("script");
        let anchor = document.getElementById("inject-comments-for-utterances");
        script.setAttribute("src", "https://utteranc.es/client.js");
        script.setAttribute("crossorigin", "anonymous");
        script.setAttribute("async", "true");
        script.setAttribute("repo", "rochakgupta/nextjs-blog");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("label", "utterances blog comment");
        script.setAttribute("theme", "github-light");
        anchor.appendChild(script);
    }

    render() {
        return (
            <div id="inject-comments-for-utterances"></div>
        );
    }
}