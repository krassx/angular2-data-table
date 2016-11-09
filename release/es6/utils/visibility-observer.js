export function checkVisibility(element, callback, zone) {
    let timeout;
    function check() {
        // https://davidwalsh.name/offsetheight-visibility
        const { offsetHeight, offsetWidth } = element;
        if (offsetHeight && offsetWidth) {
            clearTimeout(timeout);
            if (callback)
                zone.run(() => callback());
        }
        else {
            clearTimeout(timeout);
            zone.runOutsideAngular(() => {
                timeout = setTimeout(() => check(), 50);
            });
        }
    }
    check();
}
//# sourceMappingURL=visibility-observer.js.map