<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.SpammerAdmin.RecipientEditControl" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>
<div class="varArea">
	<app:span runat="server" id="lbVarTitle" tag="h1" class="varName" />
	<app:span runat="server" id="lbVarDesc" tag="p" class="varDesc" />

<div class="varEditArea">
<div class="varAreaSection">
  <p class="form">
    <span class="item">
      <span class="caption"><label for="txJmeno">Jméno</label> a <label>příjmení</label></span>
      <app:input runat="server" id="txJmeno" style="width: 8em;" />
      <app:input runat="server" id="txPrijmeni" style="width: 12em;" />
    </span>
    <span class="item">
      <label class="caption" for="txFirma">Firma</label> <app:input runat="server" id="txFirma" style="width: 20.4em;" /></label>
    </span>
    <span class="item">
      <label class="caption" for="txEmail">Email</label> <app:input runat="server" id="txEmail" style="width: 20.4em;" /></label>
      <app:span runat="server" id="lbEmailErr" tag="span" class="warn" />
    </span>
    <span class="item">
      <label><app:check runat="server" id="chIsActive" /> Aktivní
      <small>(zrušte zaškrtutí tohoto pole, pokud příjemce již nemá dostávat hromadné maily)</small></label>
    </span>
    <span class="item">
      <label class="caption" for="txEmail">Poznámka</label> <app:textarea runat="server" id="txPoznamka" style="width: 100%" /></label>
    </span>
  </p>
</div>
</div>
<p class="buttons">

	<span style="float: left">
		<adm:adminButton id="btCancel" runat="server" class="bt" textNode="Main/BackCancel" /></span>
	<span style="float: right">
		<adm:adminButton id="btDelete" runat="server" class="bt" onclick="DeleteVar();" textNode="Main/Delete" />
		<adm:adminButton id="btSave" runat="server" cssclass="bt" textNode="Main/Save" />
</p>

</div>