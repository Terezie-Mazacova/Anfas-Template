<%@ Page language="c#" Codebehind="err.aspx.cs" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.ErrTest" trace="false" validateRequest="false" %>
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
				if (document.forms[0][name]) {
					for (var ip = 0; ip < document.forms[0][name].length; ++ip) {
						if (document.forms[0][name][ip].value == value) {
							document.forms[0][name][ip].checked = true;
							break;
						}
					}
				}
			}
		</script>		
</cms:content>

<cms:content runat="server" forRegion="main">
  <div class="head">
    <h1><adm:text runat="server" textNode="ErrTest/Title" /></h1>
  </div>

	<div class="item admin">
		<%-- odeslani mailu --%>
		<h2><adm:text runat="server" textNode="ErrTest/Email/Title" /></h2>

    <cms:elem runat="server" id="divEmailsTable">
			<table class="list">
			<tr>
				<th>&nbsp;</th>
				<th><adm:text runat="server" textNode="ErrTest/Email/ServerTable/ForAtt" /></th>
				<th><adm:text runat="server" textNode="ErrTest/Email/ServerTable/Server" /></th>
				<th><adm:text runat="server" textNode="ErrTest/Email/ServerTable/Recipient" /></th>
			</tr>			
			<%-- nasledujici control obsahuje cely vnitrek tabulky --%>
			<app:span runat="server" id="lbMailTableContent" tag="" />
			</table>

			<div class="controls"><adm:adminButton runat="server" id="btMail" textNode="ErrTest/Email/Sent" class="bt" /></div>
    </cms:elem>
    <cms:elem runat="server" id="divNoEmails">
      <p><adm:text runat="server" textNode="ErrTest/Email/NoLogMails" /></p>
    </cms:elem>

		<app:span runat="server" id="lbVysledek" tag="p" />
		<app:span runat="server" id="lbDetails" tag="pre" />
    <app:hidden runat="server" id="hEd" />
	</div>

	<div class="item admin">
		<%-- vyvolani chyby --%>
		<h2><adm:text runat="server" textNode="ErrTest/Err/Title" /></h2>
		<p><adm:text runat="server" textNode="ErrTest/Err/Desc" /></p>
		<p>
      <adm:text runat="server" textNode="ErrTest/Err/Invoke" />
			<adm:adminButton runat="server" id="btError" textNode="ErrTest/Err/GoErrs" class="link" />,
      <adm:adminButton runat="server" id="btWrongTypeError" textNode="ErrTest/Err/GoWrongTypes" class="link" />,
      <adm:adminButton runat="server" id="btUnvalidVarError" textNode="ErrTest/Err/GoUnvalidVars" class="link" />,
      <adm:adminButton runat="server" id="btCrawlerError" textNode="ErrTest/Err/GoCrawlers" class="link" />
    </p>
		<app:span runat="server" id="lbErrVysledek" tag="p" />
	</div>

	<div class="item admin">
		<%-- udaje o aplikaci --%>
		<h2><adm:text runat="server" textNode="ErrTest/Version/Title" /></h2>
		<app:span runat="server" id="lbVersionTable" class="list" />
	</div>

</cms:content>