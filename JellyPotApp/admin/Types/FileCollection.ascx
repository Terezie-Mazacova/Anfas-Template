<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.FileCollectionField" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<app:div runat="server" id="divItem" class="item clearfix">
  <span class="title">
    <app:span runat="server" id="lbFieldTitle" tag="" />
		<app:span runat="server" id="lbFieldDesc" tag="span" class="desc" />
  </span>
  <div class="var simpleCol sortableCol jFileCol">

<app:SimpleRepeater runat="server" id="rpCol" idfield="id">
	<noContentTemplate>
		<p class="noContent"><adm:text runat="server" textNode="Variables/NoItems" /></p>
	</noContentTemplate>
	<headerTemplate>
		<table>
	</headerTemplate>
	<itemtemplate>
		<app:rpRow runat="server" tag="tr" writeID="true" manipulatemethod="WriteAtts" onclick="BetJs.Tables.Select(this, event);">
			<td class="file-name"><cms:fileIcon runat="server" field=".item" set="default16" /> <cms:item runat="server" field=".item.originalName" /></td>
			<td class="file-size"><cms:item runat="server" field=".item.size" /></td>
			<td class="file-alt"><cms:item runat="server" field=".item.alt" tag="span" /></td>
			<td class="controls"></td>
		</app:rpRow>
	</itemtemplate>
	<footerTemplate>
		<app:rpRow runat="server" tag="tr" manipulatemethod="EmptyRow" writeid="true" class="emptyItem jEmptyItem">
			<td colspan="4">&nbsp;</td>
		</app:rpRow>
		</table>
	</footerTemplate>
</app:SimpleRepeater>

<app:div runat="server" id="divErr" tag="p" class="errMsg">
	<app:span runat="server" id="lbErr" tag="span" />
</app:div>

<div class="controls">
	<adm:adminspan runat="server" id="lbAdd" tag="span" textNode="Files/Add" class="btMini icon-plus jFileAdd"  />
</div>
<%-- jmena hidden controlu jsou prejmenovany v aplikaci --%>
<app:hiddenInt runat="server" id="hAkce" />
<app:hidden runat="server" id="hAkceParams" />
<app:hidden runat="server" id="hSelected" />

	</div>
</app:div>