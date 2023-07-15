var m_str =
{
	add: "Add",
	del: "Delete",
	delall: "Delete All",
	view: "View",
	edit: "Edit",
	save: "Save",
	back: "Back",
	next: "Next",
	prev: "Previous",
	help: "Help",
	reload: "Reload",
	refresh: "Refresh",
	start: "Start",
	end: "End",
	stop: "Stop",
	conn: "Connect",
	disconn: "Disconnect",
	connected: "Connected",
	connecting: "Connecting",
	disconnected: "Disconnected",
	renew: "Renew",
	release: "Release",
	en: "Enable",
	dis: "Disable",
	allow: "Allow",
	deny: "Deny",
	enabled: "Enabled",
	disabled: "Disabled",
	enall: "Enable All",
	disall: "Disable All",
	addnew: "Add New",
	ensel: "Enable Selected",
	dissel: "Disable Selected",
	delsel: "Delete Selected",
	auto: "Auto",
	none: "None",
	err: "Error",
	errno: "Errno",
	success: "Success",
	fail: "Fail",
	finish:"Finish",
	reboot:"Reboot",
	quit: "Quit",
	optional: "(Optional)"
};
var c_str =
{
	creboot: "The device will reboot. Are you sure to continue?",
	cdefaults: "All the current configurations will be lost after Modem Router is restored. Are you sure to continue?",
	del_con: "Are you sure to delete this interface?",
	save_reboot: "Reboot the device to make your changes take effect. Are you sure to continue?",
	dslcfg_ask:"Click OK will cause disconnection. Are you sure to continue?",
	lancfg_ask:"Modification of LAN IP address or subnet mask requires a re-login. Besides, the PC may become unable to access the Modem Router. Are you sure to continue?",
	refresh: "The webpage will refresh. Are you sure to continue?",
	refresh_dis:"This page will be refreshed and it may lead to disconnection. Are you sure to continue?"
};
var s_str =
{
	static_ip:"Static IP",
	dev_restart:"Rebooting",
	wait_dev:"The system is rebooting. Please wait...",
	conf_update:"Upload in progress, Please wait...",
	conf_inure:"Configuration is taking effect",
	wait_inure:"Please wait configuration take effect and device restart...",
	firmware_upload:"Firmware is uploading",//软件上传中
	firmware_uploading:"Uploading...",//软件上传中...
	device_upgrading:"The device is upgrading", //设备升级中
	mac_aging_time_num:"输入步长为7,MAC的老化时间",
	number_adjust:"将被调整为",
	confirm_go:".是否继续?",
	rstp_port_pri_num:"输入步长为:16,端口优先级"
};
var n_str = 
{
	test: {
		loc_title: "Localization Test",
		loc_info: "This page do the localization test.",
		loc_sel_info: "Select List",
		loc_sel_opt1: "Translate1",
		loc_sel_opt2: "Translate2",
		loc_tlb_th1: "Table Header1",
		loc_tlb_th2: "Table Header2",
		loc_sp_info: "Special text",
		loc_btn1: "Special button"
	},
	backNRestore:
	{
		conf_save_note:"Click the Backup button to save all configuration settings to your local computer as a file.We suggest you back up your configuration files first before modifying settings or upgrading firmware.",
		conf_backup_btn:"Backup",
		conf_restore_note:"You can restore your settings by loading configuration files.",
		conf_path:"Configuration File:",
		conf_load_btn:"Restore",
		t_note:"Notice:",
		conf_note:"1.The current configuration will be covered with the uploading configuration file. Wrong process will lead the device unmanaged.2.The restoring process lasts for 20 seconds and the Router will restart automatically then. Keep the power of the Router on during the process, in case of any damage."
	},
	lan:
	{
		lan_info:"This page displays current LAN connection and allows you to configure corresponding LAN port.",
		lan_group:"Group",
		lan_ip_addr:"IP Address",
		lan_subnet_mask:"Subnet Mask",
		lan_dhcp_pool:"DHCP Pool",
		lan_edit:"Edit"
	},
	lanEdit:
	{
		lan_info:"The parameters of LAN can be configured on this page.",
		lan_note:"Note:If the LAN IP address or subnet mask is changed, please make sure the DHCP Address Pool and the static IP assigned by DHCP Server are in the same subnet with the new LAN IP."
	},
	restart:{
		T_reboot:"Click this button below to reboot the router.",//单击此按钮将使路由器重新启动。
	    button_reboot:"Reboot"//重启路由器
	  },
	softup:{
		upgrade_tips:"You'll get new fuctions after upgrading the firmware of the router.",//通过升级本路由器的软件，您将获得新的功能。
		file_path:"Firmware File Path",//软件路径
		firmware_version:"Firmware version",//当前软件版本
		hardware_version:"Hardware version",//当前硬件版本
		upgrade_notice:"Note:",//注意：
		versions_matched:"Please select the right firmware version that corresponds to the current hardware.",//升级时请选择与当前硬件版本一致的软件。
		upgrade_process:"It is important to keep power supplied during the entire process. Loss of power during the upgrade could damage the device.The upgrade process takes about 50 seconds,after that,the router will reboot automatically.",//升级过程不能关闭路由器电源，否则将导致路由器损坏而无法使用。升级过程约50秒，当升级结束后，路由器将会自动重新启动。
		button_upgrade:"Upgrade"//升级
	},
	logConf:{
		local_save:"Save Locally",//保存在本地
		remote_save:"Save Remotely",//保存在远程
		lowest_priority_1:"Minimum Level",//最低优先级
		lowest_priority_2:"Minimum Level",//最低优先级
		IP_address:"Server IP",//IP地址
		t_port:"Server Port",//端口
		equipment_name:"Local Facility Name"//本机设备名		
	},
	defaultCfg:{
	  T_restore:"Click this button below to restore factory defaults.",//单击此按钮将使路由器恢复出厂设置。
		button_restore:"Restore"//出厂设置
	},
	manageCtrl:{
		cur_status:"Current User Status",//当前用户状态
		user_type:"User Type:",//用户类型：
		name:"User Name:",//用户名：
		host_ip:"Host IP Address:",//用户主机IP地址：
		host_mac:"Host MAC Address:",//用户主机MAC地址：
		account_set:"Account Management",//管理帐户设置
		org_password:"Old Password:",//原密码：
		new_name:"New User Name:",//新用户名：
		new_password:"New Password:",//新密码：
		new_affirm:"Confirm Password:",//新密码确认：
		serve_set:"Service Configuration",//管理服务设置
		manege_serve:"Management Service",//管理服务
		host:"Host(IP/MAC)",//主机(IP或MAC)
		http_serves:"HTTP Service",//HTTP服务
		limite:"Host(IP/MAC)",//限定主机(IP或MAC)
		local_manage:"Local Management",//本地管理
		remote_manage:"Remote Management"//远端管理
	}
};
