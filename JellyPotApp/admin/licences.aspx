<%@ Page 
	language="c#" AutoEventWireup="false" trace="false" validateRequest="false"
	Inherits="Bet.JellyPot.Admin.LicencesPage" 
%>

<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<cms:master runat="server" href="main.master" />

<cms:content runat="server" forRegion="htmlHeader">
	<style media="all" type="text/css">
.validOk { font-weight: bold; color: #0b0; }
.validNok { font-weight: bold; color: #b00; }
	</style>
</cms:content>

<cms:content runat="server" forRegion="main">

  <div class="head">
    <h1><adm:text runat="server" textNode="Registrations/Title" /></h1>
  </div>

  <div class="item admin">
		<table class="list">
			<tr>
				<th><adm:text runat="server" textNode="Registrations/Name" /></th>
				<th><adm:text runat="server" textNode="Registrations/ValidFrom" /></th>
				<th><adm:text runat="server" textNode="Registrations/ValidTo" /></th>
				<th>&nbsp;</th>
			</tr>
			<%-- ostatni radky tabulky jsou generovany servem do tohoto controlu --%>
			<app:span runat="server" id="lbVysledek" tag="" />
		</table>
  </div>

</cms:content>
