
/*
 author
 hqs
 */

(function () {

	/*创建include对象*/
    var _include = window.include;
	var include = window.include = function(selector, content) {

	};

    include.extend = function (obj) {
        if (typeof obj === "object") {
            for (var i in obj) {
                this[i] = obj[i];
            }
        }

        return this;
    };

	// ajax type
	function _ajaxFun(url, type, data, _arguments) {
		var success;
		var error;
		var progress;
		if(typeof data === "object" && _arguments.length > 2) {
			success = _arguments[2];
			if(_arguments.length >= 3) {
				error = _arguments[3];
				progress = _arguments[4] || null;
			}
		} else if(typeof data === "function") {
			success = data;
			if(_arguments.length > 2) {
				error = _arguments[2];
				progress = _arguments[3] || null;
			}
		}

		include.ajax({
			type: type,
			url: url,
			data: typeof data === "object" ? data : null,
			success: success,
			error: error,
			progress: progress
		});

	}

    // 链接ajax发送的参数数据
    function _JoinParams(data) {

        var params = [];
        if (data instanceof Object) {
            _compilerparams(params, data, "");
        }
        return params.join("&") || "";

    }

    function _compilerparams(params, data, preKey) {
        preKey = preKey || "";

        for (var key in data) {
            var data2 = data[key];

            if (data2 === undefined) {
                continue;
            }

            else if (data2 !== null && data2.constructor === Object) {
                for (var key2 in data2) {

                    var _key = "";
                    var _key2 = "[" + key2 + "]";
                    if (preKey === "") {
                        _key = preKey + key + _key2;
                    } else {
                        _key = preKey + "[" + key + "]" + _key2;
                    }

                    var _value = data2[key2];

                    if (_value.constructor === Array || _value.constructor === Object) {

                        _compilerparams(params, _value, _key);
                    } else {
                        params.push(encodeURIComponent(_key) + '=' + encodeURIComponent(_value));
                    }

                }
            }

            else if (data2 !== null && data2.constructor === Array) {

                for (var key2_ in data2) {
                    var data3 = data2[key2_];
                    if (typeof data3 === "object") {
                        for (var key3 in data3) {

                            var _key_ = "";
                            var _key2_ = "[" + key2_ + "]" + "[" + key3 + "]";
                            if (preKey === "") {
                                _key_ = preKey + key + _key2_;
                            } else {
                                _key_ = preKey + "[" + key + "]" + _key2_;
                            }

                            var _value_ = data3[key3];

                            if (_value_.constructor === Array || _value_.constructor === Object) {

                                _compilerparams(params, _value_, _key_);
                            } else {
                                params.push(encodeURIComponent(_key_) + '=' + encodeURIComponent(_value_));
                            }

                        }
                    } else {
                        var _key_2 = preKey + key + "[]";
                        var _value_2 = data3;
                        params.push(encodeURIComponent(_key_2) + '=' + encodeURIComponent(_value_2));
                    }

                }

            } else {
                var _key_3 = "";
                if (preKey === "") {
                    _key_3 = preKey + key;
                } else {
                    _key_3 = preKey + "[" + key + "]";
                }
                var dataVal = data[key];
                dataVal = dataVal === null ? "" : dataVal;
                params.push(encodeURIComponent(_key_3) + '=' + encodeURIComponent(dataVal));

            }

        }
    }

    include.extend({

		// create XHR Object
		createXHR: function() {

			if(window.XMLHttpRequest) {

				//IE7+、Firefox、Opera、Chrome 和Safari
				return new XMLHttpRequest();
			} else if(window.ActiveXObject) {

				//IE6 及以下
				var versions = ['MSXML2.XMLHttp', 'Microsoft.XMLHTTP'];
				for(var i = 0, len = versions.length; i < len; i++) {
					try {
						return new ActiveXObject(version[i]);
					
					} catch(e) {
						//跳过
					}
				}
			} else {
				throw new Error('浏览器不支持XHR对象！');
			}

		},

		/* 封装ajax函数
				 @param {string}opt.type http连接的方式，包括POST和GET两种方式
				 @param {string}opt.url 发送请求的url
				 @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
				 @param {object}opt.data 发送的参数，格式为对象类型
				 @param {function}opt.contentType   内容类型
				 @param {function}opt.success ajax发送并接收成功调用的回调函数
				 @param {function}opt.error ajax发送并接收error调用的回调函数
				 @param {function}opt.getXHR 获取xhr对象
				 @param {number}opt.timeout // 超时
		 	*/
		ajax: function(opt) {

			// 参数object对象
			opt = opt || {};
			opt.type = typeof opt.type === "string" ? opt.type.toUpperCase() : "GET";
			opt.url = typeof opt.url === "string" ? opt.url : '';
			opt.async = typeof opt.async === "boolean" ? opt.async : true;
			opt.data = typeof opt.data === "object" ? opt.data : {};
			opt.success = opt.success || function() {};
			opt.error = opt.error || function() {};
			opt.contentType = opt.contentType || "application/x-www-form-urlencoded;charset=utf-8";
			opt.progress = opt.progress || {};

			var xhr = include.createXHR();
			if(typeof opt.timeout === "number") {
                xhr.timeout = opt.timeout;
			}

			xhr.xhrFields = opt.xhrFields || {};

			// 连接参数
			var postData = _JoinParams(opt.data); // params.join('&');

			if(opt.type.toUpperCase() === 'POST' || opt.type.toUpperCase() === 'PUT' || opt.type.toUpperCase() === 'DELETE') {
				opt.url = opt.url.indexOf("?") === -1 ? opt.url + "?" + "_=" + Math.random() : opt.url + "&_=" + Math.random();

				xhr.open(opt.type, opt.url, opt.async);
				xhr.setRequestHeader('Content-Type', opt.contentType);
				xhr.send(postData);
			} else if(opt.type.toUpperCase() === 'GET') {
				if(postData.length > 0) {
					postData = "&" + postData;
				}
				opt.url = opt.url.indexOf("?") === -1 ? opt.url + "?" + "_=" + Math.random() + postData : opt.url + "&_=" + Math.random() + postData;

				xhr.open(opt.type, opt.url, opt.async);
				xhr.send(null);
			}
			xhr.onreadystatechange = function() {

				if(xhr.readyState === 4) {
					if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
						if(typeof opt.success === "function") {
							try {
								opt.success(JSON.parse(xhr.responseText), xhr.status, xhr.statusText);
							} catch(e) {
								//TODO handle the exception
								opt.success(xhr.responseText, xhr.status, xhr.statusText);
							}

						}
					} else {
						if(typeof opt.error === "function") {
							opt.error(xhr.status, xhr.statusText);
						}
					}

				}
			};

		},

		// get
		get: function(url, data) {
			_ajaxFun(url, "get", data, arguments);
		},
		// html字符串转dom对象
		htmlStringToDOM: function(txt) {

			var df2 = document.createDocumentFragment();
			var df = document.createElement("div");
			var div = document.createElement("div");
			div.innerHTML = txt;
			df.appendChild(div);
			var _nodes = df.getElementsByTagName("div")[0].childNodes;
			for(var i = _nodes.length; i > 0; i--) {
				if(window.addEventListener) {
					df2.insertBefore(_nodes[i - 1], df2.childNodes[0]);
				} else {
					df2.insertBefore(_nodes[i - 1], df2.firstChild);
					
				}

			}
			df = null;
			return df2;

		}

	});

})();

(function() {

	if(window.addEventListener) {
		window.addEventListener("load", function() {
			includeHtml();
		});
	} else {
        window.attachEvent("onload", function () {
            includeHtml();
        });
	}

	function includeHtml() {
		var _htmls = document.getElementsByTagName("include");
		
		for(var i = 0; i < _htmls.length; i++) {

            (function (obj) {

                var src = obj.getAttribute("src");
                var prop = obj.getAttribute("obj") || "";

                if (prop) {
                    prop = JSON.parse(prop);
                } else {
                    prop = {};
                }
                include.get(src, prop, function (data) {
                    var parent = obj.parentNode;
                    var newElement = include.htmlStringToDOM(data);
                    if (obj.addEventListener) {
                        parent.replaceChild(newElement, obj);
                        //obj.innerHTML = data;
                    } else if (obj.outerHTML) {
                        //obj.outerHTML = data;
                        parent.replaceChild(newElement, obj);
                    }
                    var index = obj.getAttribute("index") || "";
                    var isHead = obj.hasAttribute("header");
                    if (isHead) {
                        if (!isNaN(index)) {
                            index = window.parseInt(index);
                            $(".nav li").removeClass("active");
                            $(".nav li").eq(index).addClass("active");
                        }
                    }

                });
            })(_htmls[i]);

		}
	}

})();