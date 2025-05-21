<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.UserGroupsField" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cmsa" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<app:div runat="server" id="divItem" class="item clearfix">
  <span class="title">
    <app:span runat="server" id="lbFieldTitle" tag="" />
		<app:span runat="server" id="lbFieldDesc" tag="span" class="desc" />
  </span>
  <div class="var">
		<cmsa:DragRefColPicker runat="server" id="selMain" />
		<app:span runat="server" id="lbErr" tag="p" class="errMsg" />
  </div>
</app:div>
