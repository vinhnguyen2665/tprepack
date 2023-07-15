 /*
 * Mini JS Library 1.0
 *
 * Copyright © 2015 Shenzhen TP-LINK Technologies Co.Ltd
 * Author: Wang Wenhao 
 */
var ACT_GET = 1;
var ACT_SET = 2;
var ACT_ADD = 3;
var ACT_DEL = 4;
var ACT_GL = 5;
var ACT_GS = 6;
var ACT_OP = 7;
var ACT_CGI = 8;

var ACT_OP_REBOOT = "ACT_REBOOT";
var ACT_OP_FACTORY_RESET = "ACT_FACTORY_RESET";
var ACT_OP_DHCP_RENEW = "ACT_DHCP_RENEW";
var ACT_OP_DHCP_RELEASE = "ACT_DHCP_RELEASE";
var ACT_OP_PPP_CONN = "ACT_PPP_CONN";
var ACT_OP_PPP_DISCONN = "ACT_PPP_DISCONN";
var ACT_OP_WLAN_GET_NEW_PIN = "ACT_WLAN_GET_NEW_PIN";
var ACT_OP_WLAN_RESTORE_PIN = "ACT_WLAN_RESTORE_PIN";
var ACT_OP_WLAN_UPDATE_ASSOC = "ACT_WLAN_UPDATE_ASSOC";
var ACT_OP_WLAN_WPS_PBC = "ACT_WLAN_WPS_PBC";
var ACT_OP_WLAN_WPS_PIN = "ACT_WLAN_WPS_PIN";
var ACT_OP_WLAN_SCAN = "ACT_WLAN_SCAN";
var ACT_OP_NTP_REQUEST = "ACT_NTP_REQUEST";
var ACT_OP_DLNA_MANUAL_SCAN = "ACT_DLNA_MANUAL_SCAN";

var ACT_OP_OAM_RESTART = "ACT_OAM_RESTART";	/* Added by YeZuopou @ 17Jul13 */
var ACT_OP_OMCI_RESTART = "ACT_OMCI_RESTART";	/* Added by YeZuopou @ 17Jul13 */

/* tyz add in 20120131 */
var innerHTML_t = 0;
var buValue_t = 1;
var selOption_t = 2;
var value_t = 3;
var noSubIndex = -1;
/* end in 20120131 */

(function(){
var window = this,
	undefined;
	
	window.$ = {
		// for quick use
		w: window,
		d: document,
		c: function (obj) {
			return document.createElement(obj);
		},
		head: document.getElementsByTagName("head")[0],
		div: document.createElement("div"),
		bak: document.createElement("div"),
		ret: 0,
		
		// web settings
		sim: false,
		params: "./js/local.js",
		cn: false,
		qss: false,
		
		// private use
		magic: "0y8nc5094yeyrnoq",
		local: location.protocol == "file:",
		flag: navigator.appVersion.match(/MSIE/) ? parseInt(navigator.appVersion.match(/MSIE\s(\d)/)[1]) : 0,
			
		// developer use
		curPage: undefined,
		mainParam: undefined,
		diagParam: undefined,
		coverParam: undefined,
		accStack: [],
		
		// global config from server 
		model: "",	// device model
		desc: "",	// device description
		ports: 4,	// lan ports
		itv: 2, 	// iTV port num
		
		//functions
		each: function (elems, handle, argument) {
			var l = elems.length;
			if (l === undefined) {
				for (var obj in elems)
					if (handle.call(elems[obj], argument, obj) === false)
						return false;
			}
			else
				for (var i = 0; i < l; i++) {
					if (handle.call(elems[i], argument, i) === false)
						return false;
				}
			return true;
		},
/*
		find: function(container, query) {
			if (query === undefined) {
				query = container;
				container = $.d;
			}
			if ((container.nodeType && container.nodeType == 1 || container == $.d) && typeof query === "string") {
				query = " " + query;
				var qs = query.match(/\s*[#\.]?\w+/g);
				var ql;
				var ret = (container instanceof Array) ? container : [container];

				var contains = $.d.compareDocumentPosition ? function(a, b){
					return !!(a.compareDocumentPosition(b) & 16);
				} : function(a, b){
					return a !== b && (a.contains ? a.contains(b) : true);
				};
				
				while(ql = qs.shift()){
					var newRet = [];
					var exp = ql.match(/(\s*)([#\.]?)(\w+)/);
					if (exp)
						switch (exp[2]) {
						case '#':
							var obj = $.d.getElementById(exp[3]);

							if (obj && ((exp[1] && !$.each(ret, function(arg){if (contains(this, arg)) return false}, obj))
								|| (!exp[1] && $.inArray(obj, ret))))
								newRet = [obj];
							else
								return null;
							break;
						case '.':
							$.each(ret, function(){
								if (exp[1])
									$.surf(this, function(){if ($.hasClass(this, exp[3]) && !$.inArray(this, newRet)) newRet.push(this)});
								else if ($.hasClass(this, exp[3]) && !$.inArray(this, newRet))
									newRet.push(this);
							});
							break;
						default:
							$.each(ret, function(){$.merge(newRet, this.getElementsByTagName(exp[3]))});
							break;
						}
					if (newRet.length) {
						ret = newRet; 
						newRet = null;
					}
					else
						return null;
				}
				return ret;
			}
		},
*/		
/*		
		//do not change DOM structure
		surfAll: function(container, handle, argument) {
			if (container.nodeType && container.nodeType == 1 || container == $.d)
				$.each(container.childNodes, function(arg){
					if (handle.call(this, arg[1]) !== false)
						$.surfAll(this, arg[0], arg[1]);
					}, [handle, argument]);
		},
		
		//do not change DOM structure
		surf: function(container, handle, argument) {
			$.surfAll(container, function(arg){
				if (this.nodeType == 1) 
					return arg[0].call(this, arg[1]);
				else
					return false;
			}, [handle, argument])
		},
*/		
		//can change DOM structure
		chgChd: function(childs, handle)
		{
			var tmp = $.mkArr(childs);
			$.each(tmp, function(){if (this.nodeType == 1) return handle.call(this);});
			tmp = null;
		},
		
		id: function (id) {
			return $.d.getElementById(id);
		},
		
		merge: function (arr1, arr2) {
			for (var i = 0, l = arr2.length; i < l; i++)
				if (!$.inArray(arr2[i], arr1))
					arr1.push(arr2[i]);
		},
		
		mkArr: function(array) {
			if (!array) return [];
			var ret = [];
			for (var i = 0, l = array.length; i < l; i++)
				ret[i] = array[i];
			return ret;
		},
		
		inArray: function(elem, elems) {
			for ( var i = 0, l = elems.length; i < l; i++)
				if (elems[i] === elem)
					return true;
			return false;
		},
		
		realLen: function(str) {
			var len = 0;
			for (var i = 0, l = str.length; i < l; i++) {
				len += str.charCodeAt(i) > 127 ? ($.cn ? 2 : 3) : 1;
			}
			return len;
		},
/*		
		removeNode: function(arr, node) {
			for ( var i = 0, l = arr.length; i < l; i++)
				if (arr[i] === node) {
					return arr.splice(i, 1)[0];
			}
			return false;
		},
*/		
		attach: function(elem, type, data, handler) {
			var tmp;
			if (handler)
				tmp = data;
			else 
				handler = data;
			var handle = function (e) {
				var event = event || e;
				var ret = handler.call(elem, event, tmp);
				//tmp = null;	/* this will make 'data' take effect only once */
				return ret;
			};
			if (elem.addEventListener)
				elem.addEventListener(type, handle, false);
			else if (elem.attachEvent)
				elem.attachEvent("on" + type, handle);
		},
		
		adjust: function(num, step) {
			return Math.round(parseInt(num,10)/step)*step;
		},
		
		hasClass: function(elem, className) {
			return elem && $.inArray(className, (elem.className ? elem.className : "").split(/\s+/));
		},
		
		addClass: function (elem, className) {
			if (elem && elem.nodeType == 1 && !$.hasClass(elem, className))
				elem.className += (elem.className ? " " : "") + className;
		},
		
		removeClass: function (elem, className) {
			if (elem && elem.nodeType == 1 && $.hasClass(elem, className)) {
				elem.className = elem.className.replace(className, "");
				elem.className = elem.className.replace(/\s+/, " ");
			}
		}, 

		cssFloat: function(elem, type) {
			var floattype = (elem.style.cssFloat === undefined ? "styleFloat" : "cssFloat");
			if (type == "left" || type == "right" || type == "none")
				elem.style[floattype] = type;
			else
				return elem.style[floattype];
		},

		opacity: function(elem, opacity) {
			if (!opacity)
				opacity = 0;
			if (elem.style.opacity === undefined)		//should not use opacity as CSS
			{
				elem.zoom = 1;
				elem.style.filter = (elem.style.filter || "").replace( /alpha\([^)]*\)/, "" ) +
									(parseInt(opacity) + '' == "NaN" ? "" : "alpha(opacity=" + opacity * 100 + ")");
			}
			else
				elem.style["opacity"] = opacity;
		},
		
		html: function(elem, value) {
			if (elem && elem.innerHTML !== undefined){
				if (value === undefined)
					return elem.innerHTML;
				else
					elem.innerHTML = value;
			}
			return null;
		},
		
		dhtml: function(str, hook, midhook) {
			$.div.innerHTML = "div" + str;
			$.div.removeChild($.div.firstChild);
				var scripts = [];
			$.chgChd($.div.childNodes, function() {
				if (this.nodeName && this.nodeName.toLowerCase() === "script")
					scripts.push(this);
				else
					hook.call(this);
			});
			if (midhook) midhook();
			$.each(scripts, function() {$.script(this.text || this.textContent || this.innerHTML || "")});
			$.empty($.div);
		},
		
		append: function(elem, value, midhook) {
			if (elem && elem.nodeType == 1 && typeof value === "string")
				$.dhtml(value, function (){elem.appendChild(this)}, midhook);
		}, 
/*		
		prepend: function(elem, value) {
			if (elem && elem.nodeType == 1 && typeof value === "string")
				$.dhtml(value, function (){elem.insertBefore(this, elem.firstChild)});
		}, 
		
		before: function(elem, value) {
			if (elem && elem.nodeType == 1 && typeof value === "string")
				$.dhtml(value, function (){elem.parentNode.insertBefore(this, elem)});
		},
		
		after: function(elem, value) {
			if (elem && elem.nodeType == 1 && typeof value === "string")
				$.dhtml(value, function (){elem.parentNode.insertBefore(this, elem.nextSibling)});
		},
*/		
		remove: function(elem) {
			if (elem && elem.parentNode)
				elem.parentNode.removeChild(elem);
		},
		
		empty: function(elem) {
			while (elem && elem.firstChild)
				elem.removeChild(elem.firstChild);
		},
		
		script: function(data) {
			if (data && /\S/.test(data)) {
				var script = $.d.createElement("script");

				script.type = "text/javascript";
				if (script.text === undefined)
					script.appendChild($.d.createTextNode(data));
				else
					script.text = data;

				$.head.insertBefore(script, $.head.firstChild);
				$.head.removeChild(script);
			}
		}, 
		
		ajax: function(s) {
			if (s.type)
				s.type = s.type.toUpperCase();
			else
				s.type = "GET";
			
			if (s.data && typeof s.data !== "string")
				return false;

			if (s.type == "GET")
				s.url += (s.url.match(/\?/) ? "&" : "?") + "_=" + (+new Date());
				
			var requestDone = false;
				
			var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
			
			try {
				xhr.open(s.type, s.url, s.async);
			} catch(e) {
				if (s.error) s.error(ERR_EXIT);
			}
			var onreadystatechange = function(){
				if (xhr.readyState == 0) {
					if (ival) {
						clearInterval(ival);
						ival = null;
					}
				} else if (!requestDone && xhr && xhr.readyState == 4) {
					requestDone = true;

					if (ival) {
						clearInterval(ival);
						ival = null;
					}

					if ($.ajok(xhr)) {
						if (s.bScript)
							$.script(xhr.responseText);
						
						if (s.success)
							s.success(s.bScript ? 0 : xhr.responseText);
					}
					else if (s.error) {
						s.error(typeof xhr.status !== "number" ? ERR_INTERNAL : (xhr.status + ERR_INTERNAL)); /*71000-72000: httpd error*/
					}

					if ( s.async )
						xhr = null;
				}
			};
			
			if ( s.async ) {
				var ival = setInterval(onreadystatechange, 13);
			}

			try {
				xhr.send(s.data);
			} catch(e) {
				if (s.error) s.error(ERR_NONE_FILE);
			}

			if ( !s.async )
				onreadystatechange();
		}, 

		ajok: function(xhr) {
			try {
				return !xhr.status && $.local ||
					( xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304 || xhr.status === 0;
			} catch(e){}
			return false;
		},
		
		asyncId: 1,
		asyncStack: {},

		getAsync: function() {
			var id = $.asyncId;
			$.asyncStack[id] = true;
			$.asyncId ++;
			return id;
		},
		
		checkAsync: function(id) {
			return $.asyncStack[id];
		},
		
		clearAsync: function() {
			for (var i in $.asyncStack) delete $.asyncStack[i];
		},
				
		deleteCookie: function(name) { 
			var LargeExpDate = new Date ();
			document.cookie = name + "=; expires=" +LargeExpDate.toGMTString(); 
		},
		
		// add on
		io: function(path, bScript, hook, data, noquit, unerr) {
			var ret = 0; 
			var async = !!hook;
			hook = typeof hook === "function" ? hook : null;
			var id;
			if (hook && !noquit) id = $.getAsync();
			$.ajax(
			{
				type: data ? "POST" : "",
				url: path,
				bScript: bScript,
				async: async,
				data: data ? data : null,
				success:function(data)
				{
					if (hook) {
						if ($.checkAsync(id) || noquit) hook(data);
					}
					else
						ret = data;
				},
				error:function(errno)
				{
					if(errno == ERR_NOT_ACCEPTED)
					{
						$.deleteCookie("Authorization");
						window.location.reload();				
					}
					else
					{
						if (errno > ERR_NETWORK) errno = ERR_NETWORK;
						$.err("io", errno, unerr);
					}
					
					if (hook) {
						if ($.checkAsync(id) || noquit) hook(data);
					}
					else
						ret = errno;
				}
			});
			return ret;
		},
		
		stkPop: function(stack, times)
		{
			times = times ? times : 1;
			if (typeof stack === "string") stack = stack.split(",");
			for (var i = 1, l = stack.length; i < l; i++) {
				if (stack[i] == 0) break;
			}
			for (i--; times > 0; i--, times--)
				stack[i] = 0;
			return stack.join(",");
		},
		
		arr2obj: function(arr, param) {
			var ret = {};
			if (param === undefined) return ret;
			for (var i = 0, l = arr.length; i < l; i++) {
				if (arr[i][param]) ret[arr[i][param]] = arr[i];
			}
			return ret;
		},
		
		obj2str: function(obj, sign1, sign2, tailing) {
			var ret = "";
			for (var i in obj)
				ret += i + (obj[i] || obj[i] === 0 || obj[i] === "" ? sign1 + obj[i] : "") + sign2;
			if (tailing)
				return ret;
			else
				return ret.substr(0, ret.length - sign2.length);
		},
		
		toStr: function(data, sign1, sign2, tailing) {
			return data ? (typeof data === "string" && data || data instanceof Array && data.join(sign2) + (tailing ? sign2 : "") || $.obj2str(data, sign1, sign2, tailing)) : "";
		},
		
		cgi: function(path, arg, hook, noquit, unerr) {
			var expr = /(^|\/)(\w+)\.htm$/;
			if ($.local || $.sim) path = $.params;
			else path = (path ? path : $.curPage.replace(/\.htm$/, ".cgi")) + (arg ? "?" + $.toStr(arg, "=", "&") : "");
			$.ret = 0;
			var func = hook ? function(ret) {if (!ret && (ret = $.ret)) $.err("cgi", $.ret, unerr); if (typeof hook === "function") hook(ret);} : null;
			var ret =  $.io(path, true, func, null, noquit, unerr);
			
			if (!ret && (ret = $.ret))
				$.err("cgi", $.ret, unerr);
			return ret;
		},
		
		backup: function(id) {
			$.empty($.bak);
			// IE will lost checked info after append
			if ($.flag) {
				var con = $.id(id);
				var checks  = [];
				var inputs = $.mkArr(con.getElementsByTagName("input"));
				$.each(inputs, function(arg, index){ if (this.checked) checks[index] = true;});
			}
			$.chgChd($.id(id).childNodes, function(){$.bak.appendChild(this)});
			if ($.flag) $.each(checks, function(arg, index){ if (this == true) {inputs[index].checked = true;}});
		},
		
		restore: function(id) {
			$.empty($.id(id));
			// IE will lost checked info after append
			if ($.flag) {
				var checks  = [];
				var inputs = $.mkArr($.bak.getElementsByTagName("input"));
				$.each(inputs, function(arg, index){ if (this.checked) checks[index] = true;});
			}
			$.chgChd($.bak.childNodes, function(){$.id(id).appendChild(this)});
			if ($.flag) $.each(checks, function(arg, index){ if (this == true) {inputs[index].checked = true;}});
		},
		
		err: function(src, errno, unerr) {
			if (unerr) return errno;
			$.clearAsync();
			var click = "$.addLoading(this, 500, function(){$.reload($.mainParam)})";
			var value = "Refresh";
			if (src != "exe" && src != "main") {
				click = "$.addLoading(this, 500, function(){$.refresh()})";
				value = "Refresh";
			}
			else if (errno > 1000 && errno < 10000) {
					$.removeLoading();
					$.backup("main");
					click = "$.restore(\"main\")";
					value = "Back";
				}

			var obj = "<p class='et'>ERROR</p><div class='con1 M'><p class='ct'>Error</p><p class='bl'></p><div class='con2'><p class='L1'>Errno: "+errno+"</p><p class='br'></p>"
					+ "<p class='L1'>" + (e_str[errno] ? e_str[errno] : e_str[ERR_UNKOWN]) +"</p></div><p class='bl'></p>";
			obj += "<p class='tail'><input type='button' class='button L' value='"+value+"' onclick='"+click+"' /></p></div>";
			$.loadMain(obj, $.mainParam);
		},
		
		load: function(html, id, resize, hook1, hook2, midhook) {
			var con = $.id(id);
			if (html.indexOf("<") < 0) {
				$.io(html, false, function(ret) {
					if (typeof ret !== "number")
						$.fill(con, ret, hook1, hook2, resize, midhook)
					else
						$.err(id, ret);
				}, null, id == "ban" || id == "menu" || id == "help");
			}
			else
				$.fill(con, html, hook1, hook2, resize, midhook);
		},
		
		fill: function(container, content, hook1, hook2, resize, midhook) {
			if (hook1) hook1();
			$.empty(container);
			$.append(container, content, midhook);
			if (hook2) hook2();
			if (resize) $.resize();
		},
		
		loadBanner: function(path) {
			$.load(path, "ban", false);
		},
		
		loadMenu: function(path) {
			$.load(path, "menu", false);
		},
		
		loadMain: function(path, arg) {
			if (!path) path = $.curPage;
			var bFile = (path.indexOf("<") < 0);
			if (bFile) {
				$.empty($.bak);
				$.clearAsync();
			}
			$.load(
				bFile ? "./main/" + path : path,
				"main",
				true,
				function() {
					if (bFile) {
						$.curPage = path;
						$.accStack.push(path);
					}
					$.mainParam = arg;
					while($.as.length) $.as.pop();
					while($.ds.length) $.ds.pop();
					while($.ansiarg.length) $.ansiarg.pop();
					$.addClass($.id("main"), "nv");
					$.unlock();
				},
				function(){$.removeClass($.id("main"), "nv");},
				bFile ? $.trans : undefined
			);
		},
		
		loadHelp: function(path) {
			return 0;
			if (!path)
				path = "./help/" + $.curPage.match(/(\w+)\.htm$/)[1] + "_h.htm";
			else
				path = "./help/" + path;
			$.remove($.id("helpBtn"));
			if ($.cn)
				$.append($.id("tail"), "<input type='button' class='button L' id='helpBtn' onclick='$.loadHelpCn(\""+path+"\")' value='Help' />");
			//else
			//	$.load(path, "help", true);
		},
		
		loadHelpCn: function(path) {
			$.backup("main");
			$.load("<div class='con1 L' id='con1'></div>", "main");
			$.load(path, "con1", true, null, function(){$.append($.id("con1"), "<p class='tail'><input type='button' class='button L' value='Back' onclick='$.restore(\"main\")' /></p>")});
		},
		
		loadCover: function(path, opacity, arg) {
			$.load(path, "cover", false, function(){
				$.diagParam = arg;
				$.removeClass($.id("cover"), "nd");
				$.opacity($.id("cover"), opacity);
			});
		},
/*		
		loadDiag: function(path, opacity) {
			$.load(path, "diag", true, function(){
				$.loadCover("<p></p>", 0.2);
				$.removeClass($.id("diag"), "nd");
				$.opacity($.id("diag"), opacity);
			});
		},
		
		unloadDiag: function() {
			$.addClass($.id("diag"), "nd");
			$.addClass($.id("cover"), "nd");
		},
*/		
		reload: function(arg) {
			$.loadMain(null, arg);
		},
		
		refresh: function(domain, port, page) {
			if ($.local)
				location.href = location.href.replace(/\?[^?]*/, "");
			else {
				var ret = location.href.match(/(https?):\/\/([^:\/]+)(:\d+)?/);
				location.href = ret[1] + "://" + (domain ? domain : ret[2]) + (port ? ":" + port : (ret[3] ? ret[3] : "")) +  (page ? "/index.htm?page=" + page.match(/\w+\.htm$/) : "");
			}
		},
		
		resize: function () {
			if (arguments[0] && arguments[0].nodeName){
				switch (arguments[0].nodeName.toLowerCase()) {
				case "table":
					$.resizeTlb.apply(this, arguments);
					break;
				}
			}
			else {
				switch ($.flag)	{
				case 6:
				case 7:
					$.id("menu").style["height"] = "auto";
/*					if (!$.cn) $.id("help").style["height"] = "auto";*/
					$.w.scrollBy(0, 1);		/*fix ie7 bug*/
					var height = $.d.body.clientHeight;
					$.id("menu").style["height"] = height - $.id("ban").clientHeight - ($.id("bottom") ? $.id("bottom").clientHeight : 0)- 30 + "px";
/*					if (!$.cn) $.id("help").style["height"] = height - 100 + "px";*/
					$.w.scrollBy(0, -1);		/*fix ie7 bug*/
					break;
				default:
					$.id("con").style["minHeight"] = $.d.documentElement.clientHeight - ($.id("bottom") ? $.id("bottom").clientHeight : 0) + "px";
					//if (!$.flag)
						$.id("cover").style["height"] = $.d.body.clientHeight + "px";
					break;
				}
			}
		},
		
		resizeTlb: function(tlb, rows, rowLines) {
			var div = tlb.parentNode;
			if (tlb.rows.length > rows) {
				div.style["height"] = ((rowLines ? rowLines : 1) * 18 + 3) * rows + "px";
				$.addClass(div, "scroll");
			}
			else {
				div.style["height"] = "auto";
				$.removeClass(div, "scroll");
			}
		},
		
		lock: function() {
			$.removeClass($.id("cover"), "nd");
			$.opacity($.id("cover"), 0);
		},
		
		unlock: function() {
			$.addClass($.id("cover"), "nd");
		},
		
		addLoading: function(obj, interval, hook) {
			$.remove($.id("_load"));
			$.lock();
			$.append(obj.parentNode, "<span class='load' id='_load'></span>");
			if (interval){
				$.timeout(function(){if (!hook || hook() !== false) $.removeLoading(); }, interval);
			}
		},
		
		removeLoading: function() {
			$.remove($.id("_load"));
			$.unlock();
		},
/*		
		addLoading1: function(obj, interval, hook) {
			$.addClass($.id("cover"), "cover");
			$.loadCover("<p></p>", 0.5);
			if (interval) {
				setTimeout(function(){if (hook) if (hook() !== false) {$.removeClass($.id("cover"), "cover"); $.unloadCover();}}, interval);
			}	
		},
		
		removeLoading1: function() {
			$.removeClass($.id("cover"), "cover");
			$.unloadCover();
		},		
*/
		timeout: function(hook, interval) {
			var id = $.getAsync();
			setTimeout(function(){if ($.checkAsync(id) && hook) hook();}, interval);
		},
		
		auto: function(handle, interval, imediate, args, hook, id) {
			if (id) {
				if (!$.checkAsync(id)) return;
			}
			else
				id = $.getAsync();
			if (imediate) {
				if (handle(args) === false) {
					if (hook) hook(args);
					return;
				}
			}
			setTimeout(function(){
				$.auto(handle, interval, 1, args, hook, id);
			}, interval);
		},
		
		guage: function(strs, step, interval, hook, start, end, diag) {
			var str = "<p class='et'>Restarting</p><div class='con1 L'><p class='ct'>"
			+strs[0]+"</p><p class='bl'></p><div class='con2'><p class='center'>"
			+strs[1]+"</p><p class='br'></p><div><b class='gitem' id='_gitem'></b><div class='gbar' id='_gbar'></div></div><p class='br'></p></div><p class='bl'></p><p class='tail'>&nbsp;</p></div>";
			if (diag) $.loadCover(str, 1); else $.loadMain(str);
			$.auto(function(args){
				var percent = Math.floor(args[2] * 100 / args[3]);
				$.h(args[0], percent + "%");
				args[1].style.width = (4.5*percent + "px");
				if (args[2] >= args[3])
					return false;
				args[2]++;
			}, interval, true,[$.id("_gitem"), $.id("_gbar"), start ? start : 0, step, end ? end : step], hook);
		},
		
		ansiarg: [],
		
		ansi: function(str) {
			var arr = str.split("\r\n");
			for (var i = 0, l = arr.length; i < l; i++) {
				var ret = arr[i].split('=');
				if (ret[1] && $.asc(ret[1], true)) {
					arr[i] = "\\" + ret[0];
					$.ansiarg.push(ret);
				}
			}
			return arr.join("\r\n");
		},
		
		as: [],		//act stack
		ds: [],		//returned data stack
		
		act: function(type, oid, stack, pStack, attrs) {
			if (!type || !oid)
				return false;
			stack = stack ? stack : "0,0,0,0,0,0";
			pStack = pStack ? pStack : "0,0,0,0,0,0";
			attrs = $.toStr(attrs, "=", "\r\n", true);
			attrs = attrs.replace(/__stack=[0-9,]*\r\n/, "");
			var ret = null;
			switch (type) {
				case ACT_ADD:		//add
					if ($.cn) attrs = $.ansi(attrs);
				case ACT_GET:		//get
					ret = {};
					break;
				case ACT_GL:		//get list
				case ACT_GS:		//get list sub
					ret = [];
					break;
				case ACT_SET:		//set
				case ACT_CGI:
					oid = oid ? oid : $.curPage.replace(/\.htm$/, ".cgi");
					if ($.cn) attrs = $.ansi(attrs);
				case ACT_DEL:		//del
				case ACT_OP:
					break;
				default: 
					return false;
			}
			$.as.push([type, null, oid, stack, pStack, attrs, attrs ? attrs.match(/\r\n/g).length : 0]);
			$.ds.push(ret);
			return ret;
		},
		
		exe: function(hook, unerr) {
			var url = "/cgi?";
			var data = "";
			var index = 0;
			var obj;
			var bAnsi = false;
			
			if ($.as.length == 0 || $.local || $.sim) {
				if (hook && typeof hook === "function") $.timeout(hook, 200);
				while($.as.pop() !== undefined);
				while($.ds.pop() !== undefined);
				return 0;
			}
			
			$.empty($.id("ansiform"));
			while ($.ansiarg.length) {
				obj = $.ansiarg.shift();
				$.append($.id("ansiform"), "<input type='hidden' name='"+obj[0]+"' value='"+obj[1]+"' />");
				bAnsi = true;
			}
			
			while(obj = $.as.shift()){
				url += obj[0] + (obj[1] ? "=" + obj[1] : "") + "&";
				data += "[" + obj[2] + "#" + obj[3] + "#" + obj[4] + "]" + index + "," + obj[6] + "\r\n" + obj[5];
				index++;
			}			
			url = url.substr(0, url.length - 1);
			
			if (hook) {
				var tmpds = $.mkArr($.ds);
				while($.ds.length) $.ds.pop();	
			}
			
			var resolve = function(ret, ds) {
				if (typeof ret !== "number") {
					var lines = ret.split('\n');
					ret = 0;
					$.ret = 0;
					var scripts = "";
					
					for (var i = 0, l = lines.length; i < l; i++) {
						if (lines[i] == "") continue;
						if (lines[i].charAt(0) == "[") {
							if (scripts != "") {
								$.script(scripts);
								if ($.ret) {
									ret = $.ret;
									$.err("cgi", ret, unerr);
									break;
								}
								scripts = "";
							}
							var n = lines[i].indexOf("]");
							var j = parseInt(lines[i].substr(n+1), 10);
							var stack = lines[i].substr(1, n-1);
							var instance;
							if (stack == "error") {
								if (j) {
									ret = j;
									if (ret != ERR_HTTP_ERR_CGI_INVALID_ANSI) $.err("exe", ret, unerr);
									break;
								}
							}
							else if (ds[j] instanceof Array) {
								instance = {__stack: stack};
								ds[j].push(instance);
							}
							else if (ds[j] != null) {
								instance  = ds[j];
								instance.__stack = stack;
							}
						}
						else {
							if (stack == "cgi") {
								scripts += lines[i] + '\n';
							}
							else {
								var attr = lines[i].split("=");
								instance[attr[0]] = attr.slice(1).join('=');
							}
						}
					}
				}
				while(ds.length) ds.pop();
				return ret;
			}
			
			if (bAnsi) {
				var formObj = $.d.forms[0];	
				try {
					formObj.target = "up_frame";
					formObj.action = "/cgi/ansi";
					formObj.submit();
				}catch(e){}
			}
			
			if (hook) {
				var resolve2 = function(){$.io(url, false, function(ret){ ret = resolve(ret, tmpds); if (typeof hook === "function") hook(ret);}, data, false, unerr)};
				if (bAnsi) $.timeout(resolve2, 100);
				else resolve2();
				return 0;
			}
			else {
				while(ret = $.io(url, false, null, data, false, unerr)) {
					ret = resolve(ret, $.ds);
					if (ret != ERR_HTTP_ERR_CGI_INVALID_ANSI) return ret;
					count++;
					if (count > 3) return $.err("exe", ERR_HTTP_ERR_CGI_INVALID_ANSI, unerr);
				}
			}
		},

		alert: function() {
			var errno = arguments[0];
			var l = arguments.length;
			if (arguments[l - 1] === true) return errno;
			if (e_str[errno]) {
				str = e_str[errno];
				for (var i = 1; i < l; i++)
					str = str.replace("$", arguments[i]);
			}
			else str = e_str[ERR_UNKOWN];
			//	alert("Errno: " + errno + "\n\n" + str);
			alert(str);
			return errno;
		},

		num: function() {
			var l = arguments.length - 1;
			var unalert = arguments[l];
			if (unalert !== true) { l++; unalert = false; }
			var val = arguments[0];
			if (typeof val === "string" && val.match(/\D/))
				return $.alert(ERR_NUM_INVAD, unalert);
			var val = parseInt(val, 10);
			if (isNaN(val)) return $.alert(ERR_NUM_INVAD, unalert);
			if (l == 1) return 0;
			for (var i = 1; i < l; i++) {
				if (val >= arguments[i][0] && val <= arguments[i][1] || val === arguments[i])
					return 0;
			}
			return $.alert(ERR_NUM_OUTRANGE, unalert);
		},
		
		step: function(num, step) {
			return Math.round(parseInt(num,10)/step)*step;
		},
		
		asc: function(str, unalert) {
			for (var i = 0, l = str.length; i < l; i++)
				if (str.charCodeAt(i) > 127) return $.alert(90201, unalert);
			return 0;
		},
		
		ip2num: function(ip) {
			if (typeof ip === "number") return ip;
			var ret, val;
			if (!(ret = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/))) return false;
			for (var i = 1, val = 0; i <= 4; i++) {
				if (parseInt(ret[i], 10) > 255) return false;
				val = (val << 8) + parseInt(ret[i], 10);
			}
			return val;
		},
		
		num2ip: function(num) {
			if (typeof num !== "number") return false;
			return "" + ((num >> 24) + 256) % 256 + "." + (num >> 16 & 0xff) + "." + (num >> 8 & 0xff) + "." + (num & 0xff);
		},
		
		ifip: function(ip, unalert) {
			if ((ip = $.ip2num(ip)) === false) return $.alert(ERR_IP_FORMAT, unalert);
			if (ip == -1) return $.alert(ERR_IP_BROADCAST, unalert);
			var net = ip >> 24;
			if (net == 0) return $.alert(ERR_IP_SUBNETA_NET_0, unalert);
			if (net == 127) return $.alert(ERR_IP_LOOPBACK, unalert);
			//let the device to check whether can use type C subnet and 255 host addr
			//if (net >= -64 && net < -32) if ((ip & 0xff) == 0xff) return $.alert(ERR_IP_SUBNETC_HOST_255, unalert);
			if (net >= -32 && net < -16) return $.alert(ERR_IP_MULTICAST, unalert);
			if (net >= -16 && net < 0) return $.alert(ERR_IP_PRESERVED, unalert);
			return 0;
		},
		
		mask: function(mask, unalert) {
			if ((mask = $.ip2num(mask)) >= 0) return $.alert(ERR_MASK_INVAD, unalert);
			for (var i = 32; i > 0; i--, mask = mask >> 1)
				if (mask % 2) return mask == -1 ? 0 : $.alert(ERR_MASK_INVAD, unalert);
		},
		
		ipmask: function(ip, mask, unalert) {
			var temp;
			ip  = $.ip2num(ip);
			mask = $.ip2num(mask);
			if ((ip & mask) == mask || (ip & mask) == 0) return $.alert(ERR_IPMASK_SUBNET_INVAD, unalert);
			if ((ip & ~mask) == ~mask || (ip & ~mask) == 0) return $.alert(ERR_IPMASK_HOST_INVAD, unalert);
			return 0;
		},
		
		ipmaskgw: function(ip, mask, gw, unalert) {
			ip  = $.ip2num(ip);
			mask = $.ip2num(mask);
			gw = $.ip2num(gw);
			if ((ip & mask) != (gw & mask)) return $.alert(ERR_IPGW_NOT_SAME_SUBNET, unalert);
			return 0;
		},
		
		mac: function(mac, unalert) {
			if (!(ret = mac.match(/^([0-9a-fA-F]{2})(:[0-9a-fA-F]{2}){5}$/))) return $.alert(ERR_MAC_FORMAT, unalert);
			if (mac== "00:00:00:00:00:00") return $.alert(ERR_MAC_ZERO, unalert);
			if (mac.match(/^[fF]{2}(:[fF]{2}){5}$/)) return $.alert(ERR_MAC_BROADCAST, unalert);
			if (parseInt(ret[1], 16) % 2) return $.alert(ERR_MAC_MULTICAST, unalert);
			return 0;
		},

		//add by Yang Jinge
		ip2ip: function (ip)
		{
			var ipParts = ip.split(".");
			for (var i = 0; i < 4; i++)
			{
				ipParts[i] = parseInt(ipParts[i], 10);
			}
			var ipStr = ipParts[0] + "." + ipParts[1] + "." + ipParts[2] + "." + ipParts[3];
			return ipStr;
		},

		isname:function(pName){
			var c;
			var len = pName.length;
			var ch = "\\/\":*?<>|&";
			if (len == 0 || pName.charAt(len - 1) == ' ' || pName.charAt(len - 1) == '\n' || pName.charAt(len - 1) == '\t' 
				|| pName.charAt(len - 1) == '\r' || pName.charAt(len - 1) == '\v' || pName.charAt(len - 1) == '\f')
			{
				return false;
			}
			for (var i = 0; i < pName.length; i++)
			{
				c = pName.charAt(i);
				if (ch.indexOf(c) != -1)
					return false;
			}
			return true;
		},

		isdomain: function(domain){
			var c; 
			var gotDot = false;
			var ch = "-.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			if ((domain.charAt(0) == ".")
					|| (domain.charAt(0) == "-")
					|| ((domain.charAt(domain.length - 1) == "."))
					|| ((domain.charAt(domain.length - 1) == "-")))
				return false;
			for (var i = 0; i < domain.length; i++)
			{
				c = domain.charAt(i);
				if (ch.indexOf(c) == -1)
					return false; 
				if ((c == "-") && (gotDot == true))
					return false;
				if ((c == ".") && (gotDot == true))
					return false;
				if ((c == ".") && (gotDot == false))
					gotDot = true;
				if ((c == "-") && (gotDot == false))
					gotDot = true;
				if ((c != ".") && (c != "-") && (gotDot == true))
					gotDot = false;
			} 
			return true; 
		},
		
		isnum:function(num_string){
			var c;
			var ch = "0123456789";
			for (var i = 0; i < num_string.length; i++)
			{
				c = num_string.charAt(i); 
				if (ch.indexOf(c) == -1) 
				return false; 
			}
			return true; 
		},
		
		ishexstr:function(num_string){
			var c;
			var ch = "0123456789abcdefABCDEF";
			for (var i = 0; i < num_string.length; i++)
			{
				c = num_string.charAt(i); 
				if (ch.indexOf(c) == -1) 
				return false; 
			}
			return true; 
		},
		
		getrightfirstonebitpos: function(num){
			var i;
			var pos = 0;
			var numArr = [1, 2, 4, 8, 16, 32, 64, 128];
			for ( i = 0; i < 8; i++ )
			{
				if ( ((num & numArr[i]) >> i) == 0 )
					pos++;
			}
			return pos;
		},
		
		getmaskbit: function(mask){
			var i, j;
			var pos = 0;
			var numArr = [1, 2, 4, 8, 16, 32, 64, 128];
			var maskPart = mask.split(".");
			for ( i = 3; i >= 0; i--)
			{
				for ( j = 0; j < 8; j++ )
				{
					if ( ((maskPart[i] & numArr[j]) >> j) == 0 )
						pos++;
				}
			}
			return pos;
		},
		
		isOrderIp: function(ip1, ip2){
			var ipS = ip1.split(".");
			var ipE = ip2.split(".");
			for (var i = 0; i < 4; i++)
			{
				if (parseInt(ipS[i], 10) < parseInt(ipE[i], 10))
					return true;
				else if (parseInt(ipS[i], 10) > parseInt(ipE[i], 10))
					return false;
			}
			return true;
		},
/*
		chgElem: function(elem, val) {
			if (elem && elem.nodeName) {
				switch (elem.nodeName.toLowerCase())
				{
					case "input":
						elem.value = val;
						break;
					case "option":
						elem.text = val;
						break;
					default:
						elem.innerHTML = val;
						break;
				}
			}
		},
*/
		reverseStr: function(str){
			var newStr="";
			for(var i = 0; i < str.length; i++ )
			{
				newStr += str.substring(str.length-1-i, str.length-i);
			}
			return newStr;
		},
		formatNum:function(num){
			var numNew = $.reverseStr(num.toString());
			if(numNew.length > 3)
			{
				numNew = numNew.replace(/(\d\d\d)/g, function($0,$1){return $1+","});
			}
			numNew = (numNew.charAt(numNew.length-1) == ',')? numNew.substring(0, numNew.length-1):numNew;
			return $.reverseStr(numNew);
		},
		
		trans: function() {
			if (!$.qss && ($.curPage == "wlQss.htm" || $.curPage == "wlQssAdv.htm"))
				$.each(["p", "span", "b", "i"], function(){
					$.each($.id("main").getElementsByTagName(this), function() {
						if ($.hasClass(this, "T"))
							$.h(this, $.h(this).replace("QSS", "WPS"));
					});
				});
		}
	};
	
	(function(){
		$.h = $.html;
		$.unloadCover = $.unlock;
		
		try{document.execCommand('BackgroundImageCache', false, true);}catch(e){};
		
		var newcss = function() {
			var link = $.c("link");
			link.rel = "Stylesheet";
			link.type = "text/css";
			return link;
		}
		var css = newcss();
		switch($.flag) {
		case 5:
		case 6:
			css.href = "./css/ie6.css"; break;
		case 7:
			css.href = "./css/ie7.css"; break;
		case 8:
			css.href = "./css/ie8.css"; break;
		default:
			css.href = "./css/other.css"; break;
		}
		
		$.head.insertBefore(css, $.head.firstChild);
		
		$.w.onresize=$.resize;
		
		$.attach(document.documentElement, "keydown", function(e){
			var key = e.keyCode ? e.keyCode : e.charCode;
			if (key == 116) {
				$.refresh();
				if (document.all) {
					e.keyCode = 0;
					e.returnValue = false;
				}
				else {
					e.cancelBubble = true;
					e.preventDefault();
				}
			}
		});
		
		if ($.local)
			$.io($.params, true);
			
		/*
		var infoobj = $.act(ACT_GET, IGD_DEV_INFO, null, null, ["modelName", "description"]);
		var ethobj = $.act(ACT_GET, ETH_SWITCH, null, null, ["numberOfVirtualPorts"]);
		var itvobj = $.act(ACT_GET, IPTV_CFG, null, null, ["iptvLanPort"]);
		$.exe();
		if ($.local) {
			infoobj = {modelName: "TD-W89741N", description: "ADSL+ Router"};
			ethobj = {numberOfVirtualPorts: 4};
			itvobj = {iptvLanPort: 2};
		}
		$.model = infoobj.modelName;
		$.desc = infoobj.description;
		$.ports = parseInt(ethobj.numberOfVirtualPorts, 10);
		$.itv = parseInt(itvobj.iptvLanPort, 10);
		try { if ($.model) document.title = $.model; } catch(e) {}
		*/
	})();
})();