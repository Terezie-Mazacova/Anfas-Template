<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.FileField" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<app:div runat="server" id="divItem" class="item clearfix">
	<span class="title">
		<app:span runat="server" id="lbFieldTitle" tag="" />
		<app:span runat="server" id="lbFieldDesc" tag="span" class="desc" />
	</span>

	<div class="var simpleCol">
		<app:span runat="server" id="lbFileTag" />
				
		<div class="controls">
			<adm:adminSpan runat="server" id="mAdd" class="btMini icon-plus" textNode="Files/Add2" />
			<adm:adminSpan runat="server" id="mEdit" class="btMini icon-pencil" textNode="Files/Edit" />
			<adm:adminSpan runat="server" id="mDelete" class="btMini icon-trash" textNode="Files/Delete2" />
		</div>

		<app:div runat="server" id="divErr" tag="p" class="errMsg">
			<app:span runat="server" id="lbErr" tag="span" />
		</app:div>
		<app:hiddenInt runat="server" id="hImg" />

	</div>
</app:div>