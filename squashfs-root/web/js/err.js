var CMM_ERROR				= 1;
var CMM_RSL_CONFLICT_KEY	= 1001;

// 4500-4599 updata Firmware/Config
var CMM_CFG_FILE_TOO_LONG = 4500;
var CMM_CFG_FILE_FORMAT_ERR = 4501;
var CMM_UPDATE_FILE_LEN_ERR = 4502;
var CMM_UPDATE_FILE_VER_ERR = 4503;
var CMM_GET_SIGN_ERR = 4504;
var CMM_RESTORE_DEFAULT_CFG_ERR = 4505;
var CMM_UPDATE_ADDI_HW_VER_ERR = 4506;

// 4600-4620	sys user
// 4621-4640	management control
// 4641-4660	httpd config

// 5000-5099	DHCP server
var CMM_LAN_IP_ERR 													= 5000;
var CMM_LAN_MASK_ERR 												= 5001;
var CMM_LAN_IP_MASK_DISMATCH 										= 5002;
var CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_WAN 							= 5003;
var CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_OTHER_LAN 					= 5004;
var CMM_LAN_UNEXPECT_EXISTING_LAN_IP_AND_MASK						= 5005;
	
var CMM_DHCPS_SRV_MIN_ADDR_ERR 										= 5010;
var CMM_DHCPS_SRV_MAX_ADDR_ERR 										= 5011;
var CMM_DHCPS_SRV_GATEWAY_ADDR_ERR									= 5012;
var CMM_DHCPS_SRV_DNS1_ADDR_ERR 									= 5013;
var CMM_DHCPS_SRV_DNS2_ADDR_ERR 									= 5014;
var CMM_DHCPS_SRV_RELAY_SRV_ADDR_ERR 								= 5015;
var CMM_DHCPS_SRV_RELAY_SRV_ADDR_EMPTY 								= 5016;
var CMM_DHCPS_SRV_MIN_ADDR_NOT_IN_THE_SAME_SUBNET 					= 5017;
var CMM_DHCPS_SRV_MAX_ADDR_NOT_IN_THE_SAME_SUBNET 					= 5018;
var CMM_DHCPS_SRV_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET 				= 5019;
	
var CMM_DHCPS_FIX_MAP_MAC_ADDR_ERR 									= 5020;
var CMM_DHCPS_FIX_MAP_IP_ADDR_ERR 									= 5021;
var CMM_DHCPS_FIX_MAP_IP_NOT_IN_THE_SAME_SUBNET 					= 5022;
var CMM_DHCPS_FIX_MAP_MAC_CONFLICT 									= 5023;
var CMM_DHCPS_FIX_MAP_IP_CONFLICT 									= 5024;

var CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_EMPTY 					= 5030;
var CMM_DHCPS_CONDITIONAL_POOL_VID_EMPTY 							= 5031;
var CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_ERR 						= 5032;
var CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_ERR 						= 5033;
var CMM_DHCPS_CONDITIONAL_POOL_IPRouters_ADDR_ERR 					= 5034;
var CMM_DHCPS_CONDITIONAL_POOL_DNS1_ADDR_ERR 						= 5035;
var CMM_DHCPS_CONDITIONAL_POOL_DNS2_ADDR_ERR 						= 5036;
var CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_NOT_IN_THE_SAME_SUBNET 		= 5038;
var CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_NOT_IN_THE_SAME_SUBNET 		= 5039;
var CMM_DHCPS_CONDITIONAL_POOL_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET 	= 5040;
var CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_CONPLICT 				= 5041;
var CMM_DHCPS_CONDITIONAL_POOL_VID_CONPLICT 						= 5042;
var CMM_DHCPS_CONDITIONAL_POOL_POOLS_CONPLICT						= 5043;
var CMM_DHCPS_CONDITIONAL_POOL_OPTION_CODE_INVALID 					= 5044;
var CMM_DHCPS_CONDITIONAL_POOL_OPTION_VALUE_EMTPY 					= 5045;

// 5350-5399	CLI

// 9000 DM
var CMM_METHOD_NOT_SUPPORTED				= 9000;
var CMM_REQUEST_DENIED						= 9001;
var CMM_INTERNAL_ERROR						= 9002;
var CMM_INVALID_ARGUMENTS					= 9003;
var CMM_RESOURCE_EXCEEDED					= 9004;
var CMM_INVALID_PARAM_NAME					= 9005;
var CMM_INVALID_PARAM_TYPE					= 9006;
var CMM_INVALID_PARAM_VALUE 				= 9007;
var CMM_INVALID_CONFIG_FILE					= 9802;
var CMM_OBJECT_NOT_FOUND					= 9804;
var CMM_INSTANCE_NOT_FOUND					= 9805;
var CMM_OBJECT_BUF_EXCEEDED					= 9808;
var CMM_REACH_MAX_INSTANCE_NUM				= 9812;

// 71000-71999 errno from httpd
var ERR_HTTP_BASE = 71000;

var HTTP_ERR_FORMAT = 71011;
var ERR_HTTP_ERR_GET = 71012;
var ERR_HTTP_ERR_SET = 71013;
var ERR_HTTP_ERR_CGI_INVALID_FORMAT = 71014;
var ERR_HTTP_ERR_CGI_INVALID_OP = 71015;
var ERR_HTTP_ERR_CGI_INVALID_CGI = 71016;
var ERR_HTTP_ERR_CGI_INVALID_ANSI = 71017;
var ERR_HTTP_ERR_IO = 71111;
var ERR_HTTP_ERR_SOFT_UP = 71211;
var ERR_HTTP_ERR_CONF_UP = 71221;
var ERR_HTTP_ERR_USER_TYPE = 71231;
var ERR_HTTP_ERR_USER_CMM_ARG = 71232;
var ERR_HTTP_ERR_USER_PWD_NOT_CORRECT = 71233;
var ERR_HTTP_ERR_USER_WEB_ARG = 71234;
var ERR_HTTP_ERR_TOOL_GET_IPMAC = 71241;

//errno from WEB
//80000 - 80999 WEB basic error
var ERR_UNKOWN = 80000;

var ERR_EXIT = 80001;
var ERR_NONE_FILE = 80002;

var ERR_GET = 80011;
var ERR_SET = 80012;

var ERR_NUM_INVAD = 80101;
var ERR_NUM_OUTRANGE = 80102;

var ERR_STR_NOT_ASCII = 80201;

var ERR_IP_FORMAT = 80301;
var ERR_IP_BROADCAST = 80302;
var ERR_IP_SUBNETA_NET_0 = 80303;
var ERR_IP_LOOPBACK = 80304;
var ERR_IP_SUBNETC_HOST_255 = 80305;
var ERR_IP_MULTICAST = 80306;
var ERR_IP_PRESERVED = 80307;

var ERR_MASK_INVAD = 80308;

var ERR_IPMASK_SUBNET_INVAD = 80309;
var ERR_IPMASK_HOST_INVAD = 80310;
var ERR_IPGW_NOT_SAME_SUBNET = 80311;

var ERR_MAC_FORMAT = 80401;
var ERR_MAC_ZERO = 80402;
var ERR_MAC_BROADCAST = 80403;
var ERR_MAC_MULTICAST = 80404;

// 84500-84599 updata Firmware/Config
var ERR_CONF_FILE_NONE = 84500;
var ERR_FIRM_FILE_NONE = 84501;

// 84600-84619	sys user
var ERR_USER_OLD_PWD_EMPTY = 84600;
var ERR_USER_OLD_PWD_ASCII = 84601;
var ERR_USER_NAME_EMPTY = 84602;
var ERR_USER_NAME_ASCII = 84603;
var ERR_USER_PWD_EMPTY = 84604;
var ERR_USER_PWD_ASCII = 84605;
var ERR_USER_NAME_PWD_CONFLICT = 84606;

// 84620-84639	management control
var ERR_APP_LOCAL_HOST = 84620;
var ERR_APP_REMOTE_HOST = 84620;

// 84640-84659	httpd config
var ERR_HTTP_LOCAL_PORT = 84640;
var ERR_HTTPS_LOCAL_PORT = 84641;
var ERR_HTTP_HTTPS_LOCAL_CONFILICT = 84642;
var ERR_HTTP_REMOTE_PORT = 84643;
var ERR_HTTP_REMOTE_HTTPS_LOCAL_CONFILICT = 84644;
var ERR_HTTPS_REMOTE_PORT = 84645;
var ERR_HTTP_LOCAL_HTTPS_REMOTE_CONFILICT = 84646;
var ERR_HTTP_HTTPS_REMOTE_CONFILICT = 84647;

	

// 85000-85099 LAN & DHCPS
var ERR_LAN_IP_INVAD = 85000;
var ERR_LAN_MASK_INVAD = 85001;
var ERR_LAN_IPMASK_INVAD = 85002;

var ERR_DHCP_START_IP_INVAD = 85010;
var ERR_DHCP_END_IP_INVAD = 85011;
var ERR_DHCP_LEASE_INVAD = 85012;
var ERR_DHCP_GATEWAY_INVAD = 85013;
var ERR_DOMAIN_INVAD = 85014;
var ERR_DHCP_DNS1_INVAD = 85015;
var ERR_DHCP_DNS2_INVAD = 85016;
var ERR_DHCP_RMT_SRV_EMPTY = 85017;
var ERR_DHCP_RMT_SRV_INVAD = 85018;
var ERR_LAN_SEC_IP_INVAD = 85019;
var ERR_DHCP_POOL_INVAD = 85020;

var ERR_DHCP_COND_POOL_DEV_NAME_EMPTY = 85040;
var ERR_DHCP_COND_POOL_VID_EMPTY = 85041;
var ERR_DHCP_COND_POOL_START_IP_INVAD = 85042;
var ERR_DHCP_COND_POOL_END_IP_INVAD = 85043;
var ERR_DHCP_COND_POOL_GW_INVAD = 85044;
var ERR_DHCP_COND_POOL_OPT_VAL_EMPTY = 85045;
var ERR_DHCP_COND_DNS1_INVAD = 85046;
var ERR_DHCP_COND_DNS2_INVAD = 85047;
var ERR_GATEWAY_INVAD = 85048;

// 85700-85799	Static IP
var ERR_STAIP_IP_INVAD = 85700;
var ERR_STAIP_MASK_INVAD = 85701;
var ERR_STAIP_GW_INVAD = 85702;
var ERR_STAIP_IP_MASK_CONFLICT = 85703;
var ERR_STAIP_GW_MASK_CONFLICT = 85704;
var ERR_STAIP_IP_GW_CONFLICT = 85705;
var ERR_STAIP_DNS1_INVAD = 85706;
var ERR_STAIP_DNS2_INVAD = 85707;

// 85800-85899	Dynamic IP
var ERR_WAN_HOST_NAME_INVALID = 85800;
var ERR_WAN_DNS_INVAD = 85801;


// HTTP protocol error
var ERR_INTERNAL = 90000;
var ERR_NOT_FOUND = 90404;
var ERR_NOT_ACCEPTED = 90500;

	
var ERR_BR_RSTP_HELLO_TIME_F = 91601;
var ERR_BR_RSTP_HELLO_TIME_R = 91602;
var ERR_BR_RSTP_FORWARD_TIME_F = 91603;
var ERR_BR_RSTP_FORWARD_TIME_R = 91604;
var ERR_BR_RSTP_AGING_TIME_F = 91605;
var ERR_BR_RSTP_AGING_TIME_R = 91606;
var ERR_BR_RSTP_PRIORITY_F = 91607;
var ERR_BR_RSTP_PRIORITY_R = 91608;

//102000-? IE error
var ERR_NETWORK = 102000;

/********************************************************************************************/
window.e_str = {};

// error strings

// 1, 1001
e_str[CMM_ERROR]				= "Internal Error!";
e_str[CMM_RSL_CONFLICT_KEY]		= "Keyword already exists! Please input another one.";

// 4500-4599 updata Firmware/Config
e_str[CMM_CFG_FILE_TOO_LONG] = "Invalid file size! Please check your file and try again.";
e_str[CMM_CFG_FILE_FORMAT_ERR] = "You put a wrong file.";
e_str[CMM_UPDATE_FILE_LEN_ERR] = "Invalid file size! Please check your file and try again.";
e_str[CMM_UPDATE_FILE_VER_ERR] = "The uploaded file was not accepted by the device.";
e_str[CMM_GET_SIGN_ERR] = "Error! Please try again.";
e_str[CMM_RESTORE_DEFAULT_CFG_ERR] = "Failed to restore default setings.";
e_str[CMM_UPDATE_ADDI_HW_VER_ERR] = "The uploaded file does not match the device's current hardware version.";

 
// 5000-5099	DHCP server
e_str[CMM_LAN_IP_ERR] 													= "Invalid LAN IP adddress! Please input another one.";
e_str[CMM_LAN_MASK_ERR] 												= "Invalid Subnet Mask! Please input another one.";
e_str[CMM_LAN_IP_MASK_DISMATCH] 										= "LAN IP does not match the Subnet Mask, or it is reserved IP Address.";
e_str[CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_WAN] 							= "The LAN IP should not be in the same subnet with WAN IP. Please input another one.";
e_str[CMM_LAN_IP_IN_THE_SAME_SUBNET_WITH_OTHER_LAN] 					= "The LAN IP should not be in the same subnet with LAN IP of other groups. Please input another one.";
e_str[CMM_LAN_UNEXPECT_EXISTING_LAN_IP_AND_MASK]						= "Failed to get default LAN IP for the new group. Please alter LAN IP and Subnet Mask of other groups.";

e_str[CMM_DHCPS_SRV_MIN_ADDR_ERR] 										= "Invalid Start IP Address. Please input another one.";
e_str[CMM_DHCPS_SRV_MAX_ADDR_ERR] 										= "Invalid End IP Address. Please input another one.";
e_str[CMM_DHCPS_SRV_GATEWAY_ADDR_ERR] 									= "Invalid Subnet Mask. Please input another one.";
e_str[CMM_DHCPS_SRV_DNS1_ADDR_ERR] 										= "Invalid Primary DNS! Please input another one.";
e_str[CMM_DHCPS_SRV_DNS2_ADDR_ERR] 										= "Invalid Secondary DNS! Please input another one.";
e_str[CMM_DHCPS_SRV_RELAY_SRV_ADDR_ERR] 								= "Invalid Remote Server's IP Address! Please input another one.";
e_str[CMM_DHCPS_SRV_RELAY_SRV_ADDR_EMPTY] 								= "Please input Remote Server's IP Address.";
e_str[CMM_DHCPS_SRV_MIN_ADDR_NOT_IN_THE_SAME_SUBNET] 					= "Start IP Address is not in the same subnet with LAN IP or it is reserved IP Address. Please input another one.";
e_str[CMM_DHCPS_SRV_MAX_ADDR_NOT_IN_THE_SAME_SUBNET] 					= "End IP Address is not in the same subnet with LAN IP or it is reserved IP Address. Please input another one.";
e_str[CMM_DHCPS_SRV_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET] 				= "Default Gateway is not in the same subnet with LAN IP or it is reserved IP Address. Please input another one.";

e_str[CMM_DHCPS_FIX_MAP_MAC_ADDR_ERR] 									= "Invalid IP address! Please input another one.";
e_str[CMM_DHCPS_FIX_MAP_IP_ADDR_ERR] 									= "Invalid MAC address! Please input another one.";
e_str[CMM_DHCPS_FIX_MAP_IP_NOT_IN_THE_SAME_SUBNET] 						= "IP Address is not in the same subnet with LAN IP or it is reserved IP Address. Please input another one.";
e_str[CMM_DHCPS_FIX_MAP_MAC_CONFLICT]				 					= "MAC address conflicts with the existing rules. Please input another one.";
e_str[CMM_DHCPS_FIX_MAP_IP_CONFLICT] 									= "IP address conflicts with the existing rules. Please input another one.";

e_str[CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_EMPTY]	 					= "Please input Client Name.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_VID_EMPTY] 							= "Please input Vendor ID.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_ERR] 							= "Invalid Start IP Address. Please input another one.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_ERR] 							= "Invalid End IP Address. Please input another one.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_IPRouters_ADDR_ERR] 					= "Invalid or lack of Default Gateway. Please input another one.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_DNS1_ADDR_ERR] 						= "Invalid or lack of Primary DNS. Please input another one.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_DNS2_ADDR_ERR] 						= "Invalid or lack of Secondary DNS. Please input another one.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MIN_ADDR_NOT_IN_THE_SAME_SUBNET] 		= "Start IP Address is not in the same subnet with LAN IP or it is reserved IP Address. Please input another one.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_MAX_ADDR_NOT_IN_THE_SAME_SUBNET] 		= "End IP Address is not in the same subnet with LAN IP or it is reserved IP Address. Please input another one.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_GATEWAY_ADDR_NOT_IN_THE_SAME_SUBNET] 	= "Default Gateway is not in the same subnet with LAN IP or it is reserved IP Address. Please input another one.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_DEVICE_NAME_CONPLICT] 					= "Client Name conflicts with the existing entries. Please input another one.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_VID_CONPLICT] 							= "Vendor ID conflicts with the existing entries. Please input another one.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_POOLS_CONPLICT]						= "DHCP Address Pool overlaps an existing DHCP address pool. Please input another one";
e_str[CMM_DHCPS_CONDITIONAL_POOL_OPTION_CODE_INVALID] 					= "Reserved option out of range.";
e_str[CMM_DHCPS_CONDITIONAL_POOL_OPTION_VALUE_EMTPY] 					= "Please input reserved option values.";

// 5350-5399	CLI

// 9000 DM
e_str[CMM_METHOD_NOT_SUPPORTED]				= "The function call is not supported!";
e_str[CMM_REQUEST_DENIED]					= "The request is denied. Please check whether the value or operation is legal or not.";
e_str[CMM_INTERNAL_ERROR]					= "Internal error!";
e_str[CMM_INVALID_ARGUMENTS]				= "Illegal value！";
e_str[CMM_RESOURCE_EXCEEDED]				= "Buffer overflow or the value is too great!";
e_str[CMM_INVALID_PARAM_NAME]				= "Illegal parameter name!";
e_str[CMM_INVALID_PARAM_TYPE]				= "Illegal parameter type!";
e_str[CMM_INVALID_PARAM_VALUE]				= "Illegal value!";
e_str[CMM_INVALID_CONFIG_FILE]				= "Illegal configuration file! Please check its format and value.";
e_str[CMM_OBJECT_NOT_FOUND]					= "Corresponding object not found!";
e_str[CMM_INSTANCE_NOT_FOUND]				= "Corresponding case not found!";
e_str[CMM_OBJECT_BUF_EXCEEDED]				= "Object buffer overflow!";
e_str[CMM_REACH_MAX_INSTANCE_NUM]			= "The entries number has reached the max!";

// 71000-71999 errno from httpd
e_str[ERR_HTTP_ERR_GET] = "IO failed at obtaining.";
e_str[ERR_HTTP_ERR_SET] = "IO failed at configuring.";
e_str[ERR_HTTP_ERR_IO] = "Failed to access data.";
e_str[ERR_HTTP_ERR_SOFT_UP] = "Failed to upload upgrade file! You may upload a wrong file.";
e_str[ERR_HTTP_ERR_CONF_UP] = "Failed to upload configuration file! You may upload a wrong file.";
e_str[ERR_HTTP_ERR_USER_PWD_NOT_CORRECT] = "Incorrect old password!";
e_str[ERR_HTTP_ERR_TOOL_GET_IPMAC] = "Failed to get current PC's MAC address!";

//errno from WEB
//80000 - 81000 WEB basic error
e_str[ERR_UNKOWN] = "Error Unknown!";

e_str[ERR_GET] = "Failed to get parameters!";
e_str[ERR_SET] = "Failed to set parameters!";

e_str[ERR_NUM_INVAD] = "Illegal value!";
e_str[ERR_NUM_OUTRANGE] = "The value is not in the required range!";

e_str[ERR_STR_NOT_ASCII] = "The character string contains non-ASCII characters!";

e_str[ERR_IP_FORMAT] = "Wrong format of IP address!";
e_str[ERR_IP_BROADCAST] = "The IP address can not be broadcast address!";
e_str[ERR_IP_SUBNETA_NET_0] = "Class A network number of the IP address can not be 0!";
e_str[ERR_IP_LOOPBACK] = "The IP address can not be loopback address!";
e_str[ERR_MASK_INVAD] = "Illegal Subnet mask!";
e_str[ERR_IP_SUBNETC_HOST_255] = "Class C host number of the LAN IP address can not be 255!";
e_str[ERR_IP_MULTICAST] = "The LAN IP address can not be multicast address!";
e_str[ERR_IP_PRESERVED] = "The LAN IP address can not be reserved IP address!";
e_str[ERR_IPMASK_SUBNET_INVAD] = "The IP address does not match the subnet mask: illegal network number.";
e_str[ERR_IPMASK_HOST_INVAD] = "The IP address does not match the subnet mask: illegal host number.";
e_str[ERR_IPGW_NOT_SAME_SUBNET] = "The IP address is not in the same subnet as Gateway!";

e_str[ERR_MAC_FORMAT] = "Wrong format of MAC address!";
e_str[ERR_MAC_ZERO] = "The MAC address can not be in 00:00:00:00:00:00 format!";
e_str[ERR_MAC_BROADCAST] = "The MAC address can not be broadcast address!";
e_str[ERR_MAC_MULTICAST] = "The MAC address can not be multicast address!";

// 84500-84599 updata Firmware/Config
e_str[ERR_CONF_FILE_NONE] = "Please select configuration file!";
e_str[ERR_FIRM_FILE_NONE] = "Please select upgrade file!";

// 84600-84619	sys user
e_str[ERR_USER_OLD_PWD_EMPTY] = "The Old Password can not be blank!";
e_str[ERR_USER_OLD_PWD_ASCII] = "The Old Password must be ASCII character!";
e_str[ERR_USER_NAME_EMPTY] = "The New Username can not be blank! ";
e_str[ERR_USER_NAME_ASCII] = "The New Username must be ASCII character!";
e_str[ERR_USER_PWD_EMPTY] = "The New Password can not be blank!";
e_str[ERR_USER_PWD_ASCII] = "The New Password must be ASCII character!";
e_str[ERR_USER_NAME_PWD_CONFLICT] = "The Confirm Password is not accordant with the New Password!";

// 84620-84639	management control
e_str[ERR_APP_LOCAL_HOST] = "IP address or MAC address must be input!";
e_str[ERR_APP_REMOTE_HOST] = "IP address or MAC address must be input!";

// 84640-84659	httpd config
e_str[ERR_HTTP_LOCAL_PORT] = "HTTP Local Management port number is not integer or it is not in the required range. Please input 80 or the integer between 1024 and 65535.";
e_str[ERR_HTTPS_LOCAL_PORT] = "HTTPS Local Management port number is not integer or it is not in the required range. Please input 443 or the integer between 1024 and 65535.";
e_str[ERR_HTTP_HTTPS_LOCAL_CONFILICT] = "HTTP Local Management port number is the same as HTTPS Local Management port number! Please input another one.";
e_str[ERR_HTTP_REMOTE_PORT] = "HTTP Remote Management port number is not integer or it is not in the required range. Please input 80 or the integer between 1024 and 65535.";
e_str[ERR_HTTP_REMOTE_HTTPS_LOCAL_CONFILICT] = "HTTP Remote Management port number is the same as HTTPS Local Management port number! Please input another one.";
e_str[ERR_HTTPS_REMOTE_PORT] = "HTTPS Remote Management port number is not integer or it is not in the required range. Please input 443 or the integer between 1024 and 65535.";
e_str[ERR_HTTP_LOCAL_HTTPS_REMOTE_CONFILICT] = "HTTP Local Management port number is the same as HTTPS Remote Management port number! Please input another one.";
e_str[ERR_HTTP_HTTPS_REMOTE_CONFILICT] = "HTTP Remote Management port number is the same as HTTPS Remote Management port number! Please input another one.";


// 85000-85099	DHCP server
// lancfg.htm
e_str[ERR_LAN_IP_INVAD] = "LAN port’s IP address can not be null or illegal.";
e_str[ERR_LAN_MASK_INVAD] = "LAN port’s Subnet Mask can not be null or illegal.";
e_str[ERR_LAN_IPMASK_INVAD] = "LAN port’s IP address can’t match Subnet Mask.";

e_str[ERR_DHCP_START_IP_INVAD] = "Please input Start IP.";
e_str[ERR_DHCP_END_IP_INVAD] = "Please input End IP.";
e_str[ERR_DHCP_LEASE_INVAD] = "Address lease is beyond required rang.";
e_str[ERR_DHCP_GATEWAY_INVAD] = "Wrong format of gateway!";
e_str[ERR_DOMAIN_INVAD] = "Wrong format of default demain!";
e_str[ERR_DHCP_DNS1_INVAD] = "Wrong format of primary DNS Server.";
e_str[ERR_DHCP_DNS2_INVAD] = "Wrong format of Secondary DNS Server.";
e_str[ERR_DHCP_RMT_SRV_EMPTY] = "When DHCP Relay is enabled, please input remote DHCP Server IP.";
e_str[ERR_DHCP_RMT_SRV_INVAD] = "Wrong format of remote Server address.";
e_str[ERR_LAN_SEC_IP_INVAD] = "The second IP can’t be same with LAN port’s IP.";
e_str[ERR_DHCP_POOL_INVAD] = "Wrong configuration of DHCP address pool! DHCP address pool should be in the current net segment and host number must not use 0 or 255.";
e_str[ERR_GATEWAY_INVAD] = "Wrong gateway address! Gateway address should be in the current net segment and host number must not use 0 or 255.";
//condPoolEdit.htm
e_str[ERR_DHCP_COND_POOL_DEV_NAME_EMPTY] = "Please input device names.";
e_str[ERR_DHCP_COND_POOL_VID_EMPTY] = "Please input Vendor ID.";
e_str[ERR_DHCP_COND_POOL_START_IP_INVAD] = "Please input legal Start IP.";
e_str[ERR_DHCP_COND_POOL_END_IP_INVAD] = "Please input legal End IP.";
e_str[ERR_DHCP_COND_POOL_GW_INVAD] = "Please input Gateway address.";
e_str[ERR_DHCP_COND_POOL_OPT_VAL_EMPTY] = "Please input the specified option value.";
e_str[ERR_DHCP_COND_DNS1_INVAD] = "Please input available DNS1.";
e_str[ERR_DHCP_COND_DNS2_INVAD] = "Wrong format of DNS2!";


// 85700-85799	Static IP
e_str[ERR_STAIP_IP_INVAD] = "Illegal IP address, please input another one.";
e_str[ERR_STAIP_MASK_INVAD] = "Illegal Subnet Mask , please input another one.";
e_str[ERR_STAIP_GW_INVAD] = "Illegal default gateway, please input another one.";
e_str[ERR_STAIP_IP_MASK_CONFLICT] = "IP address conflicts with Subnet Mask. Please input another one.";
e_str[ERR_STAIP_GW_MASK_CONFLICT] = "Default gateway conflicts with Subnet Mask. Please input another one.";
e_str[ERR_STAIP_IP_GW_CONFLICT] = "The default gateway doesn’t belong to the net segment of IP address. Please input another one.";
e_str[ERR_STAIP_DNS1_INVAD] = "Illegal primary DNS , please input another one.";
e_str[ERR_STAIP_DNS2_INVAD] = "Illegal secondary DNS, please input another one.";

// 85800-85899	Dynamic IP
e_str[ERR_WAN_HOST_NAME_INVALID] = "Illegal host name, please input another one.";
e_str[ERR_WAN_DNS_INVAD] = "You have selected configuring DNS manully, please set at least one available DNS address.";


// 90000-?	HTTP protocol error
e_str[ERR_INTERNAL] = "System internal error!";
e_str[ERR_NOT_FOUND] = "File not found!";

//120000-? IE error
e_str[ERR_NETWORK] = "Network error. Please check the network connection and the network configuation.";

e_str[ERR_BR_RSTP_HELLO_TIME_F] = "Illegal hello time,please input another one!";
e_str[ERR_BR_RSTP_HELLO_TIME_R] = "Hello time is out of range(1-10)";
e_str[ERR_BR_RSTP_FORWARD_TIME_F] = "Illegal forward time, please input another one!",
e_str[ERR_BR_RSTP_FORWARD_TIME_R] = "Forward time is out of range(4-30)";
e_str[ERR_BR_RSTP_AGING_TIME_F] = "Illeage aging time, please input another one!";
e_str[ERR_BR_RSTP_AGING_TIME_R] = "Aging time is out of range(6-40)";
e_str[ERR_BR_RSTP_PRIORITY_F] = "Illeage priority, please input another one!";
e_str[ERR_BR_RSTP_PRIORITY_R] = "Priority is out of range(0-61440)";