window.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState === "hidden") {
        window.dispatchEvent(new CustomEvent("tabHidden"));
    } else if (document.visibilityState === "visible") {
        window.dispatchEvent(new CustomEvent("tabVisible"));
    }
});