/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
createNameSpace("moduloWiki.$");
//var modulo = modulo || {};
var imports = {
    req: request,
    jQuery: $
}
//patron module de Douglas Crockford
moduloWiki.$ = (function (imports) {
    var _request = imports.req;
    var _namespace = "moduloWiki.$";
    var _$ = imports.jQuery;
    var _container = undefined;

    function getContainer() {
        return _container !== undefined ? _$("#" + _container) : undefined;
    }
    ;

    function setContainer(container) {
        _container = container;
    }
    ;

    function postEvent(uri, dataIn) {
        return "en desarrollo";
    }

    return {
        namespace: _namespace,
        request: _request,
        setContainer: setContainer,
        getContainer: getContainer,
        postEvent: postEvent
    };
}(imports));

function createNameSpace(nameSpaceString) {
    var names = nameSpaceString.split(".");

    //global object is the parent for first level nameSpace
    var parent = window;

    //if any nameSpace level doesn't exist, create it
    for (var i = 0, imax = names.length; i < imax; i++) {
        if (!parent[names[i]])
            parent[names[i]] = {};
        parent = parent[names[i]];
    }
}

