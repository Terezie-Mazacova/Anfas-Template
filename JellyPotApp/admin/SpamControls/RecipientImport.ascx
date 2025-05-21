<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.SpammerAdmin.RecipientImportControl" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="varArea">
  <app:span runat="server" id="lbVarTitle" tag="h1" class="varName" />
  <app:span runat="server" id="lbVarDesc" tag="p" class="varDesc" />

<div class="varEditArea">
  <div class="varAreaSection">
		<adm:adminButton id="btCancel" runat="server" class="linkBack" style="border: none; font-family: Verdana, Geneva, sans-serif; padding: 4px 0 0 20px; height: 16px;" textNode="Main/Back" />
  <h2>Import příjemců</h2>

		<p>Zatím lze importovat pouze emailové adresy příjemců. Ty musí být uloženy
			v textovém souboru, na každém řádku jedna adresa.</p>
		<p>Pokud importní soubor obsahuje adresu, která je již v seznamu obsažena, lze zvolit
		  zda tuto adresu nastavit jako aktivní, pokud by aktivní nebyla.
		</p>

		<app:div runat="server" id="divImportForm">
			<p>Zvolte textový soubor s emailovými adresami:<br />
				<input type="file" name="soub" /></p>
			<p><app:check runat="server" id="chForceActivate" />&nbsp;Aktivovat existující adresy</p>
		</app:div>
		<app:div runat="server" id="divImportVysledek">
			<app:span runat="server" id="lbImportVysledek" tag="p" />
			<p><span class="linkM" onclick="BetJs.Jelly.Admin.OpenSpammerAkce('rcpimport', spamID);">Zopakovat import</span>
		</app:div>
		</div>
		<adm:adminButton id="btImport" runat="server" cssclass="bt" textNode="Main/Import" />
</div>

</div>