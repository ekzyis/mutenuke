# mutenuke

Never see 'reply from someone you muted' on Stacker News again.

## Installation via userscript extension

1. Install a userscript extension like [Tampermonkey](https://www.tampermonkey.net/)
2. Go to the [mutenuke page on GreasyFork](https://greasyfork.org/en/scripts/567098-mutenuke)
3. Click "Install this script"

## Installation via [Brave Shields](https://brave.com/shields/)

On Brave, you don't need a userscript extension. You can run custom scriptlets within Shields as mentioned [here](https://brave.com/privacy-updates/32-custom-scriptlets/)!

1. Go to brave://settings/shields/filters
2. Enable developer mode
3. Save this as a new custom scriptlet named 'mutenuke':

```js
window.addEventListener('DOMContentLoaded', () => {
    function mutenuke() {
        document
            .querySelectorAll('div[class*="comment_collapsed"]')
            .forEach(node => {
                if (node.textContent.startsWith('reply from someone you muted')) {
                    node.remove();
                }
            }
        )
    }

    // Run on initial page load
    mutenuke();

    // Watch for dynamically loaded content
    const observer = new MutationObserver(mutenuke);
    observer.observe(document.body, { childList: true, subtree: true });
})
```

4. Save this as a new custom filter:

```
stacker.news##+js(user-mutenuke.js)
```

Done!

<sub>_Installation via Brave Shields will cause [React hydration errors](https://react.dev/errors/418?invariant=418), but as far as I know, it doesn't impact the functionality of the site._</sub>