/*  Copyright(c) 2009-2011 Shenzhen TP-LINK Technologies Co.Ltd.
 *
 * file		oid_str.js
 * brief	Define object oid for web.	
 * details	
 *
 * author	Wu Zhiqin
 * version	1.0.0
 * date		16Jun20

 *
 * history 	\arg	
 */

/*
 * This file is automatically generated from the data-model spreadsheet.
 * Do not modify this file directly - You will lose all your changes the
 * next time this file is generated!
 */


var INCLUDE_LAN_WLAN

var INCLUDE_VOIP

var INCLUDE_BRIDGING

var INCLUDE_IGMP

var INCLUDE_ETHERNET_WAN

var INCLUDE_CALLLOG

var INCLUDE_USB_VOICEMAIL

var INCLUDE_SNMP

var INCLUDE_RIP

var INCLUDE_DDNS_PH

var INCLUDE_LAN_WLAN_MSSID

var INCLUDE_LAN_WLAN_WDS

var INCLUDE_IPTV

var INCLUDE_CWMP

var INCLUDE_DYNDNS

var INCLUDE_USB

var INCLUDE_USB_STORAGE

var INCLUDE_USB_MEDIA_SERVER

var INCLUDE_USB_SAMBA_SERVER

var INCLUDE_USB_FTP_SERVER

var INCLUDE_USB_OVER_IP

var INCLUDE_ADSLWAN

var INCLUDE_AUTO_PVC

var INCLUDE_IPV6

var INCLUDE_SPECIAL_DIAL_MODE

var INCLUDE_CTC_VOIP

var INCLUDE_CMM_LIB_PON_SWITCH

var INCLUDE_PON_SWITCH

var INCLUDE_PON_BRIDGE_RSTP

var INCLUDE_PON_IGMP

var INCLUDE_PON_SWITCH_PORT

var INCLUDE_PON_STORM_SUPPRESS

var INCLUDE_PON_RATE_LIMIT

var INCLUDE_PON_PORT_RSTP

var INCLUDE_PON_MAC_FILTER

var INCLUDE_PON_STATIC_MAC

var INCLUDE_PON

var INCLUDE_PON_STATISTICS

var INCLUDE_PON_SYS_INFO

var INCLUDE_PON_IOT_CFG

var INCLUDE_GPON_IOT_CFG

var INCLUDE_PON_GPON

var INCLUDE_PON_EPON

var INCLUDE_PON_GPON_IOT

var INCLUDE_PON_GPON_IOT_ME

var INCLUDE_PON_GPON_IOT_CFG

var INCLUDE_EPON_BDCOM

/*
 * brief InternetGatewayDevice.
 */
var IGD = "IGD"

/*
 * brief InternetGatewayDevice.WANDevice.{i}.
 */
var WAN_DEV = "WAN_DEV"

/*
 * brief InternetGatewayDevice.WANDevice.{i}.WANCommonInterfaceConfig.
 */
var WAN_COMMON_INTF_CFG = "WAN_COMMON_INTF_CFG"

/*
 * brief InternetGatewayDevice.WANDevice.{i}.WANCommonInterfaceConfig.Connection.{i}.
 */
var WAN_COMMON_INTF_CONN = "WAN_COMMON_INTF_CONN"

/*
 * brief InternetGatewayDevice.WANDevice.{i}.WANEthernetInterfaceConfig.
 */
var WAN_ETH_INTF = "WAN_ETH_INTF"

/*
 * brief InternetGatewayDevice.WANDevice.{i}.WANEthernetInterfaceConfig.Stats.
 */
var WAN_ETH_INTF_STATS = "WAN_ETH_INTF_STATS"

/*
 * brief InternetGatewayDevice.WANDevice.{i}.WANConnectionDevice.{i}.
 */
var WAN_CONN_DEVICE = "WAN_CONN_DEVICE"

/*
 * brief InternetGatewayDevice.WANDevice.{i}.WANConnectionDevice.{i}.WANIPConnection.{i}.
 */
var WAN_IP_CONN = "WAN_IP_CONN"

/*
 * brief InternetGatewayDevice.WANDevice.{i}.WANConnectionDevice.{i}.WANPPPConnection.{i}.
 */
var WAN_PPP_CONN = "WAN_PPP_CONN"

/*
 * brief InternetGatewayDevice.ModelName.
 */
var IGD_DEV_INFO = "IGD_DEV_INFO"

/*
 * brief InternetGatewayDevice.X_TPLINK_NetCfg.
 */
var NET_CFG = "NET_CFG"

/*
 * brief InternetGatewayDevice.X_TPLINK_UserCfg.
 */
var USER_CFG = "USER_CFG"

/*
 * brief InternetGatewayDevice.X_TPLINK_AppCfg.
 */
var APP_CFG = "APP_CFG"

/*
 * brief InternetGatewayDevice.X_TPLINK_AppCfg.HttpCfg.
 */
var HTTP_CFG = "HTTP_CFG"

/*
 * brief InternetGatewayDevice.LANDevice.{i}.
 */
var LAN_DEV = "LAN_DEV"

/*
 * brief InternetGatewayDevice.LANDevice.{i}.LANHostConfigManagement.
 */
var LAN_HOST_CFG = "LAN_HOST_CFG"

/*
 * brief InternetGatewayDevice.LANDevice.{i}.LANHostConfigManagement.IPInterface.{i}.
 */
var LAN_IP_INTF = "LAN_IP_INTF"

/*
 * brief InternetGatewayDevice.LANDevice.{i}.LANHostConfigManagement.DHCPStaticAddress.{i}.
 */
var LAN_DHCP_STATIC_ADDR = "LAN_DHCP_STATIC_ADDR"

/*
 * brief InternetGatewayDevice.LANDevice.{i}.LANHostConfigManagement.DHCPConditionalServingPool.
 * {i}.
 */
var LAN_DHCP_COND_SRV_POOL = "LAN_DHCP_COND_SRV_POOL"

/*
 * brief InternetGatewayDevice.LANDevice.{i}.LANHostConfigManagement.DHCPConditionalServingPool.
 * {i}.DHCPOption.{i}.
 */
var LAN_DHCP_COND_SRV_POOL_OPT = "LAN_DHCP_COND_SRV_POOL_OPT"

/*
 * brief InternetGatewayDevice.LANDevice.{i}.LANEthernetInterfaceConfig.{i}.
 */
var LAN_ETH_INTF = "LAN_ETH_INTF"

/*
 * brief InternetGatewayDevice.LANDevice.{i}.Hosts.
 */
var LAN_HOSTS = "LAN_HOSTS"

/*
 * brief InternetGatewayDevice.LANDevice.{i}.Hosts.Host.{i}.
 */
var LAN_HOST_ENTRY = "LAN_HOST_ENTRY"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.
 */
var SWITCH = "SWITCH"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.BridgeRstp.
 */
var BRIDGE_RSTP = "BRIDGE_RSTP"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.BridgeRstp.BridgeRstpRTInfo.
 */
var BRIDGE_RSTP_RT_INFO = "BRIDGE_RSTP_RT_INFO"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.IGMP.
 */
var IGMP = "IGMP"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.IGMP.IgmpRTInfo.
 */
var IGMP_RT_INFO = "IGMP_RT_INFO"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.SwitchPort.{i}.
 */
var SWITCH_PORT = "SWITCH_PORT"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.SwitchPort.{i}.StormSuppress.
 */
var STORM_SUPPRESS = "STORM_SUPPRESS"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.SwitchPort.{i}.RateLimit.
 */
var RATE_LIMIT = "RATE_LIMIT"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.SwitchPort.{i}.PortRstp.
 */
var PORT_RSTP = "PORT_RSTP"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.SwitchPort.{i}.PortRstp.PortRstpRTInfo.
 */
var PORT_RSTP_RT_INFO = "PORT_RSTP_RT_INFO"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.SwitchPort.{i}.MacFilter.{i}.
 */
var MAC_FILTER = "MAC_FILTER"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.SwitchPort.{i}.StaticMac.{i}.
 */
var STATIC_MAC = "STATIC_MAC"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.SwitchPort.{i}.SwitchRtStats.
 */
var SWITCH_RT_STATS = "SWITCH_RT_STATS"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.SwitchPort.{i}.SwitchTimeStats.
 */
var SWITCH_TIME_STATS = "SWITCH_TIME_STATS"

/*
 * brief InternetGatewayDevice.X_TPLINK_Switch.SwitchPort.{i}.SwitchRuntimeData.
 */
var SWITCH_RT_DATA = "SWITCH_RT_DATA"

/*
 * brief InternetGatewayDevice.X_TPLINK_Pon.{i}.
 */
var PON = "PON"

/*
 * brief InternetGatewayDevice.X_TPLINK_Pon.{i}.OpticalStats.
 */
var OPTICAL = "OPTICAL"

/*
 * brief InternetGatewayDevice.X_TPLINK_Pon.{i}.PonRegInfo.
 */
var PON_REG_INFO = "PON_REG_INFO"

/*
 * brief InternetGatewayDevice.X_TPLINK_Pon.{i}.OmciRtStats.
 */
var OMCI_RT_STATS = "OMCI_RT_STATS"

/*
 * brief InternetGatewayDevice.X_TPLINK_Pon.{i}.UniStats.
 */
var UNI_STATS = "UNI_STATS"

/*
 * brief InternetGatewayDevice.X_TPLINK_Pon.{i}.PonRtStats.
 */
var PON_RT_STATS = "PON_RT_STATS"

/*
 * brief InternetGatewayDevice.X_TPLINK_Pon.{i}.PonTimeStats.
 */
var PON_TIME_STATS = "PON_TIME_STATS"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.
 */
var PON_CFG = "PON_CFG"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.PonAuthCtc.
 */
var PON_AUTH_CTC = "PON_AUTH_CTC"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.EponAuthMac.
 */
var EPON_AUTH_MAC = "EPON_AUTH_MAC"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.EponOnuSn.{i}.
 */
var EPON_ONU_SN = "EPON_ONU_SN"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.EponChipsetID.{i}.
 */
var EPON_CHIPSETID = "EPON_CHIPSETID"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.EponCapabilities.{i}.
 */
var EPON_CAPABILITIES = "EPON_CAPABILITIES"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.GponAuthSn.
 */
var GPON_AUTH_SN = "GPON_AUTH_SN"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.GponOnuSn.{i}.
 */
var GPON_ONU_SN = "GPON_ONU_SN"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.GponAuthPwd.
 */
var GPON_AUTH_PWD = "GPON_AUTH_PWD"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.GponTcont.
 */
var GPON_T_CONT = "GPON_T_CONT"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonCfg.GponDebug.
 */
var GPON_DEBUG = "GPON_DEBUG"

/*
 * brief InternetGatewayDevice.X_TPLINK_statsParameter.
 */
var STATS_PARAM = "STATS_PARAM"

/*
 * brief InternetGatewayDevice.X_TPLINK_oamStats.
 */
var OAM_STATS = "OAM_STATS"

/*
 * brief InternetGatewayDevice.X_TPLINK_mpcpStats.
 */
var MPCP_STATS = "MPCP_STATS"

/*
 * brief InternetGatewayDevice.Services.
 */
var SERVICES = "SERVICES"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.
 */
var VOICE = "VOICE"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.X_TPLINK_CTC_GlobalParameterConfig.
 */
var XTP_CTC_GLOBAL_PARAM_CFG = "XTP_CTC_GLOBAL_PARAM_CFG"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.X_TPLINK_CTC_SIPParameterConfig.
 */
var XTP_CTC_SIP_PARAM_CFG = "XTP_CTC_SIP_PARAM_CFG"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.X_TPLINK_CTC_FaxModemConfig.
 */
var XTP_CTC_FAX_MODEM_CFG = "XTP_CTC_FAX_MODEM_CFG"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.X_TPLINK_CTC_POTSStatus.
 */
var XTP_CTC_POTSSTATUS = "XTP_CTC_POTSSTATUS"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.X_TPLINK_CTC_IADOperation.
 */
var XTP_CTC_IAD_OPERATION = "XTP_CTC_IAD_OPERATION"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.X_TPLINK_CTC_SIPDigitMap.
 */
var XTP_CTC_SIP_DIGIT_MAP = "XTP_CTC_SIP_DIGIT_MAP"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.X_TPLINK_VoiceProcessSts.
 */
var XTP_VOICE_PROCESS_STS = "XTP_VOICE_PROCESS_STS"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.X_TPLINK_VoiceProcess.
 */
var XTP_VOICE_PROCESS = "XTP_VOICE_PROCESS"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.Capabilities.
 */
var VOICE_CAP = "VOICE_CAP"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.Capabilities.SIP.
 */
var VOICE_CAP_SIP = "VOICE_CAP_SIP"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.Capabilities.MGCP.
 */
var VOICE_CAP_MGCP = "VOICE_CAP_MGCP"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.Capabilities.Codecs.{i}.
 */
var VOICE_CAP_CODECS = "VOICE_CAP_CODECS"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.
 */
var VOICE_PROF = "VOICE_PROF"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.ServiceProviderInfo.
 */
var VOICE_PROF_PROVIDER = "VOICE_PROF_PROVIDER"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.SIP.
 */
var VOICE_PROF_SIP = "VOICE_PROF_SIP"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.SIP.EventSubscribe.{i}.
 */
var VOICE_PROF_SIP_EVTSUBSCRIBE = "VOICE_PROF_SIP_EVTSUBSCRIBE"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.MGCP.
 */
var VOICE_PROF_MGCP = "VOICE_PROF_MGCP"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.RTP.
 */
var VOICE_PROF_RTP = "VOICE_PROF_RTP"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.FaxT38.
 */
var VOICE_PROF_FAXT38 = "VOICE_PROF_FAXT38"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.X_TPLINK_UsbVoiceMail.
 */
var XTP_USB_VOICEMAIL_PUBLICCFG = "XTP_USB_VOICEMAIL_PUBLICCFG"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.X_TPLINK_MultiIsp.{i}.
 */
var XTP_MULTI_ISP = "XTP_MULTI_ISP"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.X_TPLINK_MultiIsp.{i}.
 * Codec.
 */
var XTP_MULTIISP_CODEC = "XTP_MULTIISP_CODEC"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.X_TPLINK_MultiIsp.{i}.
 * Codec.List.{i}.
 */
var XTP_MULTIISP_CODEC_LIST = "XTP_MULTIISP_CODEC_LIST"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.Line.{i}.
 */
var VOICE_PROF_LINE = "VOICE_PROF_LINE"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.Line.{i}.SIP.
 */
var VOICE_PROF_LINE_SIP = "VOICE_PROF_LINE_SIP"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.Line.{i}.
 * X_TPLINK_UsbVoiceMail.
 */
var VOICE_PROF_LINE_XTPUSBVM = "VOICE_PROF_LINE_XTPUSBVM"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.Line.{i}.CallingFeatures.
 */
var VOICE_PROF_LINE_CALLFEAT = "VOICE_PROF_LINE_CALLFEAT"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.Line.{i}.VoiceProcessing.
 */
var VOICE_PROF_LINE_PROC = "VOICE_PROF_LINE_PROC"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.Line.{i}.Codec.
 */
var VOICE_PROF_LINE_CODEC = "VOICE_PROF_LINE_CODEC"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.Line.{i}.Codec.List.{i}.
 */
var VOICE_PROF_LINE_CODEC_LIST = "VOICE_PROF_LINE_CODEC_LIST"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.VoiceProfile.{i}.Line.{i}.Stats.
 */
var VOICE_PROF_LINE_STATS = "VOICE_PROF_LINE_STATS"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.PhyInterface.{i}.
 */
var VOICE_PHY_INTERFACE = "VOICE_PHY_INTERFACE"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.PhyInterface.{i}.Tests.
 */
var VOICE_PHYINTERFACE_TESTS = "VOICE_PHYINTERFACE_TESTS"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.X_TPLINK_MultiIspDialPlan.
 */
var XTP_VOICE_MULTI_ISPDIALPLAN = "XTP_VOICE_MULTI_ISPDIALPLAN"

/*
 * brief InternetGatewayDevice.Services.VoiceService.{i}.X_TPLINK_PSTN.{i}.
 */
var XTP_VOICE_PSTN = "XTP_VOICE_PSTN"

/*
 * brief InternetGatewayDevice.X_TPLINK_CallFireWallCfg.
 */
var XTP_IGD_CALL_FIREWALL_CFG = "XTP_IGD_CALL_FIREWALL_CFG"

/*
 * brief InternetGatewayDevice.X_TPLINK_SpeedDialCfg.
 */
var XTP_IGD_SPEED_DIAL_CFG = "XTP_IGD_SPEED_DIAL_CFG"

/*
 * brief InternetGatewayDevice.X_TPLINK_MultiIspDialPlan.
 */
var XTP_IGD_MULTI_ISP_DIAL_PLAN = "XTP_IGD_MULTI_ISP_DIAL_PLAN"

/*
 * brief InternetGatewayDevice.X_TPLINK_MultiIspDialPlan.List.{i}.
 */
var XTP_IGD_MULTIISPDP_LIST = "XTP_IGD_MULTIISPDP_LIST"

/*
 * brief InternetGatewayDevice.X_TPLINK_CallLogCfg.
 */
var XTP_CALLLOGCFG = "XTP_CALLLOGCFG"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonVlanScan.
 */
var PON_VLAN_SCAN = "PON_VLAN_SCAN"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonVlanScan.VlanScanResult.{i}.
 */
var VLAN_SCAN_RESULT = "VLAN_SCAN_RESULT"

/*
 * brief InternetGatewayDevice.X_TPLINK_PonMulticastVlan.
 */
var PON_MULTICAST_VLAN = "PON_MULTICAST_VLAN"

/*
 * brief InternetGatewayDevice.X_TPLINK_EponVlanMode.
 */
var EPON_VLAN_MODE = "EPON_VLAN_MODE"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponFwRule.
 */
var GPON_FW_RULE = "GPON_FW_RULE"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponFwRule.FwRuleEntryLocal.{i}.
 */
var GPON_FW_RULE_ENTRY_LOCAL = "GPON_FW_RULE_ENTRY_LOCAL"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponFwRule.FwRuleEntryRemote.{i}.
 */
var GPON_FW_RULE_ENTRY_REMOTE = "GPON_FW_RULE_ENTRY_REMOTE"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponIotCfg.
 */
var GPON_IOT_CFG = "GPON_IOT_CFG"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponIotCfg.IotCfgList.{i}.
 */
var GPON_IOT_CFG_LIST = "GPON_IOT_CFG_LIST"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponIotCfg.IotCfgImport.
 */
var GPON_IOT_CFG_IMPORT = "GPON_IOT_CFG_IMPORT"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponOmci.
 */
var GPON_OMCI = "GPON_OMCI"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponOmci.OmciMe.{i}.
 */
var GPON_OMCI_ME = "GPON_OMCI_ME"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponOmci.OmciMe.{i}.MeAttr.{i}.
 */
var GPON_OMCI_ME_ATTR = "GPON_OMCI_ME_ATTR"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponOmci.OmciMeRT.{i}.
 */
var GPON_OMCI_ME_RT = "GPON_OMCI_ME_RT"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponOmci.OmciMeRT.{i}.MeAttrRT.{i}.
 */
var GPON_OMCI_ME_ATTR_RT = "GPON_OMCI_ME_ATTR_RT"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponOmci.MeInst.{i}.
 */
var GPON_OMCI_ME_INST = "GPON_OMCI_ME_INST"

/*
 * brief InternetGatewayDevice.X_TPLINK_GponOmci.MeInst.{i}.MeIot.{i}.
 */
var GPON_OMCI_ME_IOT = "GPON_OMCI_ME_IOT"

/*
 * brief InternetGatewayDevice.X_TPLINK_EponIotCfg.
 */
var EPON_IOT_CFG = "EPON_IOT_CFG"

/*
 * brief InternetGatewayDevice.X_BDCOM_Epon.
 */
var EPON_BDCOM = "EPON_BDCOM"

/*
 * brief InternetGatewayDevice.X_BDCOM_Epon.X_BDCOMWanVlan.
 */
var BDCOM_WAN_VLAN = "BDCOM_WAN_VLAN"

