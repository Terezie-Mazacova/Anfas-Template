<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.Vars" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<%-- jazyky --%>
<app:div runat="server" id="divLangs">
	<div id="navLangs" class="langs">
		<h2><adm:text runat="server" textNode="Main/Language" />:</h2>
		<app:StringSelect runat="server" id="selJazyky" onchange="BetJs.Jelly.Admin.OnLangChange();" />
  </div>
</app:div>
<%-- promenne --%>
<adm:varRepeater runat="server" id="rpVars">
	<header>
		<div id="navVars" class="vars">
	</header>
	<group>
		<app:rpitem runat="server" field="text" tag="h2" />
	</group>
	<variable>
		<app:rpRow runat="server" writeID="false" onclick="{arg}" argfield="onclick" tag="a" atts="href: #">
			<app:rpItem runat="server" field="text" />
		</app:rpRow>
	</variable>
	<custom>
		<app:rpRow runat="server" writeID="false" onclick="{arg}" argfield="onclick" tag="a" atts="href: #">
			<app:rpitem runat="server" field="text" />
		</app:rpRow>
	</custom>
	<footer>
		</div>
	</footer>
</adm:varRepeater>

<%-- administrace --%>
<adm:varRepeater runat="server" id="rpAdmin">
	<header>
		<div id="navAdmin" class="admin">
	</header>
	<group>
		<app:rpitem runat="server" field="text" tag="h2" />
	</group>
	<variable>
		<app:rpRow runat="server" writeID="false" onclick="{arg}" argfield="onclick" tag="a" atts="href: #">
			<app:rpitem runat="server" field="text" />
		</app:rpRow>
	</variable>
	<footer>
		</div>
	</footer>
</adm:varRepeater>