<%@ Control Language="C#" AutoEventWireup="true" Inherits="Bet.JellyPot.Admin.CollectionNullField" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="item clearfix">
  <span class="title">
    <app:span runat="server" id="lbFieldTitle" tag="" />
		<app:span runat="server" id="lbFieldDesc" tag="span" class="desc" />
  </span>

	<div class="var">
		<adm:adminspan runat="server" tag="p" class="colNotSaved" textNode="Variables/CollectionNotSaved" />
	</div>
</div>
