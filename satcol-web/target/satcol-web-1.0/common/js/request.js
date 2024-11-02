var request = (function (request, $) {
    "use strict";
    var _request = request || {};
    var rest_url = REST_URL;
    var site_url = "";
    _request.responseType = "application/json";
    _request.dataType = "json";
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2)
            return parts.pop().split(";").shift();

    }
    ;
    _request.getHeadersAuth = function () {
        return {
            "Authorization": "Bearer " + getCookie("access_token"),
            "uid": getCookie("uid"),
            "uname": getCookie("uname")
        };
    };
    _request.parseUri = function (path) {
        return rest_url + "/" + path;
    };
    _request.parseUrl = function (url) {
        return site_url + "/" + url;
    };
    _request.post = function (path, data) {
        var _self = this;
        return  new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: _self.parseUri(path),
                data: JSON.stringify(data),
                success: function (data, textStatus, jqXHR) {
                    if (data.result === 1) {
                        debug.error(data.resultMessage + ", " + _self.parseUri(path));
                    } else if (data.result === 2) {
                        debug.warn(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    } else if (data.result === 3) {
                        debug.info(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    } else {
                        debug.log(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    reject(jqXHR);
                }
            });
        });

    };
    _request.get = function (path, data) {
        var _self = this;
        return  new Promise(function (resolve, reject) {
            $.ajax({
                type: "GET",
                url: _self.parseUri(path),
                data: JSON.stringify(data),
                success: function (data, textStatus, jqXHR) {
                    if (data.result === 1) {
                        debug.error(data.resultMessage + ", " + _self.parseUri(path));
                    } else if (data.result === 2) {
                        debug.warn(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    } else if (data.result === 3) {
                        debug.info(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    } else {
                        debug.log(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    reject(jqXHR);
                }
            });
        });
    };
    _request.put = function (path, data) {
        var _self = this;
        return  new Promise(function (resolve, reject) {
            $.ajax({
                type: "PUT",
                url: _self.parseUri(path),
                data: JSON.stringify(data),
                success: function (data, textStatus, jqXHR) {
                    if (data.result === 1) {
                        debug.error(data.resultMessage + ", " + _self.parseUri(path));
                    } else if (data.result === 2) {
                        debug.warn(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    } else if (data.result === 3) {
                        debug.info(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    } else {
                        debug.log(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    reject(jqXHR);
                }
            });
        });
    };
    _request.delete = function (path, data) {
        var _self = this;
        return  new Promise(function (resolve, reject) {
            $.ajax({
                type: "DELETE",
                url: _self.parseUri(path),
                data: JSON.stringify(data),
                success: function (data, textStatus, jqXHR) {
                    if (data.result === 1) {
                        debug.error(data.resultMessage + ", " + _self.parseUri(path));
                    } else if (data.result === 2) {
                        debug.warn(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    } else if (data.result === 3) {
                        debug.info(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    } else {
                        debug.log(data.resultMessage + ", " + _self.parseUri(path));
                        resolve(data);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    reject(jqXHR);
                }
            });
        });
    };
    return request;
}(this.request || {}, $));


