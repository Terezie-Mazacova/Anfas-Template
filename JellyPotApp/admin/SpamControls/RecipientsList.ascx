<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.SpammerAdmin.RecipientsListControl" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="varArea">
	<app:span runat="server" id="lbVarTitle" tag="h1" class="varName" />
	<app:span runat="server" id="lbVarDesc" tag="p" class="varDesc" />
<div class="varEditArea">

<app:div runat="server" id="divLinkBackMain"><span onclick="BetJs.Jelly.Admin.OpenSpammer(spamName);" class="linkBack">zpět na seznam zpráv</span></app:div>
  <div class="varAreaSection">
	<app:div runat="server" id="divLinkBackDetail"><span class="linkBack" onclick="BetJs.Jelly.Admin.OpenSpammerAkce('detail', spamID);">zpět na detail zprávy</span></app:div>
	<p>

	<app:div runat="server" id="divLinkAdd">
		<span class="linkN" onclick="BetJs.Jelly.Admin.OpenSpammerAkce('rcpedit', spamID, 0);">přidat nového příjemce</span>
		<span class="separator">|</span> <span class="linkN" onclick="BetJs.Jelly.Admin.OpenSpammerAkce('rcpimport', spamID);">importovat příjemce</span>
	</app:div>
	</p>
  </div>

<app:div runat="server" id="divPrijemci" tag="div" class="varAreaSection">
	<h2>Seznam příjemců</h2>
	<app:simpleRepeater runat="server" id="rpPrijemci">
		<noContent>žádní příjemci dosud nejsou vytvořeni</noContent>
		<header>
          <table class="table" style="width: 100%;">
		    <tr>
			  <th>Příjmení</th>
			  <th>Jméno</th>
			  <th>Firma</th>
			  <th>Email</th>
			  <th>Stav</th>
              <th>&nbsp;</th>
		    </tr>
		</header>
		<item>
          <app:rpButton runat="server" tag="tr" class="link" onclick="BetJs.Jelly.Admin.OpenSpammerAkce('rcpedit', spamID, {arg});" argField="recipientID">
			<td><app:rpitem runat="server" field="prijmeni" /></td>
			<td><app:rpitem runat="server" field="jmeno" /></td>
			<td><app:rpitem runat="server" field="firma" /></td>
			<td><app:rpitem runat="server" field="email" /></td>
			<td><app:rpitem runat="server" method="StavPrijemce" /></td>
            <td><span class="linkM">Editovat</span></td>
		  </app:rpButton>
        </item>
		<footer></table></footer>
	</app:simpleRepeater>
	<p><span class="linkN" onclick="BetJs.Jelly.Admin.OpenSpammerAkce('rcpedit', spamID, 0);">přidat nového příjemce</span></p>
</app:div>

<app:div runat="server" id="divVysledky" tag="tr"><td class="varTable">
	<p class="fName">Seznam příjemců</p>
	<app:simpleRepeater runat="server" id="rpVysledky">
		<noContent>žádní příjemci nebyli definováni</noContent>
		<header><table class="sysData">
		<tr class="zahlavi">
			<td>příjmení</td>
			<td>jméno</td>
			<td>firma</td>
			<td>email</td>
			<td>stav</td>
		</tr>
		</header>
		<item><app:rpButton runat="server" tag="tr" class="link" onclick="BetJs.Jelly.Admin.OpenSpammerAkce('rcpedit', spamID, {arg});" argField="ItemData.recipientID">
			<td><app:rpitem runat="server" field="ItemData.prijmeni" /></td>
			<td><app:rpitem runat="server" field="ItemData.jmeno" /></td>
			<td><app:rpitem runat="server" field="ItemData.firma" /></td>
			<td><app:rpitem runat="server" method="Email" /></td>
			<td><app:rpitem runat="server" method="Vysledek" /></td>
		</app:rpButton></item>
		<footer></table></footer>
	</app:simpleRepeater>
	<hr class="seda" />	
</td></app:div>

<app:div runat="server" id="divPrubeh" tag="tr"><td colspan="2" class="varTable">
Zahajuje se odesílání hromadné zprávy. V současné chvíli nelze zobrazit seznam příjemců.
</td>
</app:div>

</div>
</div>