<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.CollectionImgField" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="item clearfix">
  <span class="title">
    <app:span runat="server" id="lbFieldTitle" tag="" />
		<app:span runat="server" id="lbFieldDesc" tag="span" class="desc" />
  </span>

	<div class="var">
		<app:div runat="server" tag="div" id="divContent" class="imgColContainer">
			<app:simplerepeater runat="server" id="rpCol">
				<noContentTemplate>
				</noContentTemplate>
				<headertemplate></headertemplate>
				<itemtemplate>
					<app:rpItem runat="server" method="ImgLink" tag="" />
				</itemtemplate>
				<footertemplate></footertemplate>
			</app:simplerepeater>
			</app:div>
		<app:div runat="server" id="divNoContent">
			<p class="noContent"><adm:text runat="server" textNode="Variables/NoItems" /></p>
		</app:div>

		<div class="controls">
			<adm:adminSpan runat="server" id="mAdd" class="btMini icon-plus" textNode="Variables/AddItem" />
			<adm:adminSpan runat="server" id="mBulkAdd" class="btMini icon-plus" textNode="Variables/BulkAddItem" />
		</div>

		<app:hiddenInt runat="server" id="hAkce" />
		<app:hidden runat="server" id="hAkceParams" />
	</div>
</div>
