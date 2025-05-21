<%@ Page Language="c#" CodeBehind="registration.aspx.cs" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.EmailTestPage" Trace="false" ValidateRequest="false" %>

<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<cms:master runat="server" href="main.master" />

<cms:content runat="server" forRegion="htmlHeader">
<script type="text/javascript">
	/* jshint eqeqeq: false */
	function Ini() {
		var name = 'ed';
		var value = document.forms[0].hEd.value;
		var ok = false;
		for (var ip = 0; ip < document.forms[0][name].length; ++ip) {
			if (document.forms[0][name][ip].value == value) {
				document.forms[0][name][ip].checked = true;
				break;
			}
		}
	}

	function Reload() {
		document.forms[0].submit();
	}
</script>
</cms:content>

<cms:content runat="server" forRegion="main">
	<div class="head">
		<h1><adm:text runat="server" textNode="EmailTest/Title" /></h1>
	</div>

	<div class="item admin">
		<cms:elem runat="server" id="divFormList">
			<table class="list">
				<tr>
					<th></th>
					<th><adm:text runat="server" textNode="EmailTest/ServerTable/Form" /></th>
					<th><adm:text runat="server" textNode="EmailTest/ServerTable/Server" /></th>
					<th><adm:text runat="server" textNode="EmailTest/ServerTable/Sender" /></th>
					<th><adm:text runat="server" textNode="EmailTest/ServerTable/Recipient" /></th>
					<th></th>
				</tr>
				<app:span runat="server" id="lbTable" tag="" />
			</table>

			<p class="custom-address">
				<app:check runat="server" id="chVlastniEmail" />
				<adm:text runat="server" textNode="EmailTest/OwnMail" />: <app:input runat="server" id="txVlastniMail" class="txt" />
			</p>
			<div class="controls">
				<adm:adminButton runat="server" id="btMail" textNode="EmailTest/Sent" class="bt" />
				<span class="link icon-refresh" onclick="Reload();"><adm:text runat="server" textNode="EmailTest/ReloadTable" /></span>
			</div>
		</cms:elem>

		<cms:elem runat="server" id="divNoForm">
			<p><adm:text runat="server" textNode="EmailTest/ServerTable/NoForms" /></p>
		</cms:elem>

		<app:span runat="server" id="lbTestWarn" tag="p" class="resultWarn" />
		<app:span runat="server" id="lbVysledek" tag="p" />
		<app:span runat="server" id="lbDetails" tag="pre" />
		<app:hidden runat="server" id="hEd" />
	</div>
</cms:content>