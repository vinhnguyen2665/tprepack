if (!$.paramsloaded)
{
	var menulist = ["sys.htm", "optic.htm", "sw_status.htm", "rt_stats.htm", "time_stats.htm",
					"lan.htm", "wan.htm", "port.htm", "mac.htm", "mac_static.htm", "mac_filter.htm", 
					"igmp.htm", "isolation.htm", "user.htm", "softup.htm", "tcont.htm",
					"factory_set.htm", "restart.htm", "cfg.htm","rstp_bridge.htm", "rstp_port.htm"];
	$.paramsloaded = true;
	if (!$.find)
		$.find =  function( container, query ) {
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
							$.each(ret, function(){$.merge(newRet, $.d.getElementsByTagName(exp[3]))});
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
		};	
}

if($.curPage)
{
	switch(/(\w+).htm$/.exec($.curPage)[1])
	{
	case "demorpm":
		var testarg = "好的\"\\\'";
		break;
	case "softup":
		var _ret = 0;
		break;
	case "brdemo":
		var vlan = 1;
		var brlist = ["br0", "br1"];
		var filterlist = ["br0", "br1", "br0", "br1", "br0"];
		var iflist = ["eth0", "eth0.1", "eth0.2", "eth0.3", "eth0.4"];
		break;
	case "status":
		var swVer = "0.9.9 Build 101111 Rel.12345";
		var hwVer = "1.0.0";
		var lanArg = ["00-11-22-33-44-55", "192.168.1.1", "255.255.255.0"];
		var wanArg = ["00-11-22-33-44-56", "172.31.70.120", "255.255.0.0", "172.31.70.1", "172.31.70.1,0.0.0.0"];
		var wlArg = ["Enabled", "TPLINK_334455", "6", "11n", "300Mbps", "00-11-22-33-44-55"];
		var staArg = ["7453689", "1022303", "21232", "3821"];
		$.ret = 0;
		break;
	case "bnr":
		$.ret = 0;
		break;
	}
}