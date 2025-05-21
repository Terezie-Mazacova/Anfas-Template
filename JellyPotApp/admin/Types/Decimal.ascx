<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.DecimalField" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>

<app:div runat="server" id="divItem" class="item clearfix">
  <span class="title">
    <app:span runat="server" id="lbFieldTitle" tag="" />
		<app:span runat="server" id="lbFieldDesc" tag="span" class="desc" />
  </span>
  <div class="var">
    <app:input runat="server" id="txMain" class="txt txDecimal" />
		<app:div runat="server" id="divErr" tag="p" class="errMsg">
			<app:span runat="server" id="lbErr" tag="span" />
		</app:div>
  </div>
</app:div>
