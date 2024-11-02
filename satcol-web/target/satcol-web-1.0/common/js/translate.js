function translate(selector) {
    //languaje = getCookie("idioma");
    languaje = "es";
    var dom = (selector.startsWith(".") || selector.startsWith("#") || selector == "body") ? document.querySelector(selector) : selector;
    var str = "", etiquetas = [];
    if (typeof dom === "object" && Boolean(dom)) {
        dom = document.querySelector(selector);
        str = dom.innerHTML;
    } else {
        str = selector;
    }
    switch (languaje) {
        case "es":
        {
            etiquetas = es;
            break;
        }
        case "en":
        {
            etiquetas = en;
            break;
        }
        default :
        {
            etiquetas = es;
            break;
        }
    }
    for (strName in etiquetas)
    {
        str = str.replace(eval("/" + strName + "/g"), etiquetas[strName])
    }
    if (typeof dom === "object" && Boolean(dom)) {
        band = false;
        if (str !== "")
        {
            dom.innerHTML = str;
            band = true;
        }
        return band;
    } else {
        return str;
    }
}