<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.HeadCtrl" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<header>
	<span class="project"><cms:projectTitle runat="server" /></span>
	<app:div runat="server" id="divIsUser" class="user" tag="div">
        <app:span runat="server" id="lbUserName" /><i class="icon-user"></i>
        <div>
		    <adm:AdminSpan runat="server" id="lbUserLogOff" tag="a" href="#" onclick="BetJs.Jelly.Admin.OpenAdmin('login.aspx?a=logoff'); return false;" textNode="Main/Logout" />
		    <adm:AdminSpan runat="server" id="lbUserPwd" tag="a" href="#" onclick="BetJs.Jelly.Admin.OpenAdmin('userpwd.aspx'); return false;" textNode="Main/PwdChange" />
        </div>
	</app:div>
    <span class="logo">
        <object data="assets/img/jellypot.svg" type="image/svg+xml">
            <img src="assets/img/jellypot.png" />
        </object>
    </span>
	<adm:messageBox runat="server" tag="p" id="messageBox" writeid="true" />	
</header>