<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.SpammerAdmin.MessageListControl" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>
<div class="varArea">
	<app:span runat="server" id="lbVarTitle" tag="h1" class="varName" />
	<app:span runat="server" id="lbVarDesc" tag="p" class="varDesc" />


<div class="varEditArea">
  <div class="varAreaSection">
	<p><span class="linkM" onclick="BetJs.Jelly.Admin.OpenSpammerAkce('edit', 0);">přidat novou zprávu</span>
	<span class="separator">|</span> <span onclick="BetJs.Jelly.Admin.OpenSpammerAkce('rcplist', 0);" class="linkM">seznam příjemců</span></p>
  </div>
<div class="varAreaSection">
	<h2>Seznam hromadných zpráv</h2>
	<app:simpleRepeater runat="server" id="rpZpravy">
		<noContent>žádné zprávy dosud nebyly vytvořeny</noContent>
		<header><table class="table email">
		<tr>
			<th>Předmět</th>
			<th>Stav</th>
			<th>Datum</th>
            <th>&nbsp;</th>
		</tr>
		</header>
		<item>
          <app:rpButton runat="server" tag="tr" class="link" onclick="BetJs.Jelly.Admin.OpenSpammerAkce('detail', {arg});" argField="msgID">
			<td><app:rpitem runat="server" field="subject" />&nbsp;</td>
			<td><app:rpitem runat="server" method="Stav" />&nbsp;</td>
			<td><app:rpitem runat="server" method="Datum" />&nbsp;</td>
            <td><span class="linkM">Editovat</span></td>
          </tr>
		</app:rpButton></item>
		<footer></table></footer>
	</app:simpleRepeater>
	<p style="padding-top: 2em;"><span class="linkN" onclick="BetJs.Jelly.Admin.OpenSpammerAkce('edit', 0);">přidat novou zprávu</span></p>
    </div>
</div>
</div>
