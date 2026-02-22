// ==UserScript==
// @name         mutenuke
// @namespace    https://github.com/ekzyis
// @version      1.1
// @description  Never see 'reply from someone you muted' on Stacker News again
// @author       ekzyis
// @match        https://stacker.news/*
// @grant        none
// @run-at       document-idle
// @license      MIT
// ==/UserScript==

function mutenuke() {
    document
        .querySelectorAll('div[class*="comment_collapsed"]')
        .forEach(node => {
            if (node.textContent.startsWith('reply from someone you muted')) {
                node.style = 'display: none';
            }
        }
    )
}

// Run on initial page load
mutenuke();

// Watch for dynamically loaded content
const observer = new MutationObserver(mutenuke);
observer.observe(document.body, { childList: true, subtree: true });
