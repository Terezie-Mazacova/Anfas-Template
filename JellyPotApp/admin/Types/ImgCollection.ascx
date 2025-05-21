<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.ImgCollectionField" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<app:div runat="server" id="divItem" class="item clearfix">
  <span class="title">
    <app:span runat="server" id="lbFieldTitle" tag="" />
		<app:span runat="server" id="lbFieldDesc" tag="span" class="desc" />
  </span>

  <div class="var">
		<app:simplerepeater runat="server" id="rpCol">
			<noContentTemplate>
				<p class="noContent"><adm:text runat="server" textNode="Variables/NoItems" /></p>
			</noContentTemplate>
			<headertemplate><div class="imgColContainer sortable"></headertemplate>
			<itemtemplate>
				<app:rpItem runat="server" method="ImgLink" tag="" />
			</itemtemplate>
			<footertemplate></div></footertemplate>
		</app:simplerepeater>

		<app:div runat="server" id="divErr" tag="p" class="errMsg">
			<app:span runat="server" id="lbErr" tag="span" />
		</app:div>

		<div class="controls">
			<adm:adminSpan runat="server" id="mBulkAdd" class="btMini icon-plus" textNode="Imgs/BulkAdd" />
			<adm:adminSpan runat="server" id="mBulkDelete" class="btMini icon-trash" textNode="Imgs/BulkDelete" />
		</div>

		<app:hiddenInt runat="server" id="hImg" />
		<app:hiddenInt runat="server" id="hIdx" />
		<app:hiddenInt runat="server" id="hAkce" />
		<app:hidden runat="server" id="hAkceParams" />
	</div>
</app:div>
