<%@ Control Language="C#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.VariableSelectorForm" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="head">
	<app:Span runat="server" id="lbVarTitle" tag="h1" />
	<app:Span runat="server" id="lbVarDesc" tag="p" class="desc" />
</div>

<div class="item clearfix">
  <span class="title">
		<adm:adminspan runat="server" tag="span" textNode="Variables/SelectType" />
  </span>
  
	<div class="var simpleCol plainCol jVarCol">
	<app:SimpleRepeater runat="server" ID="rpTypes">
		<header><table></header>
		<item>
      <app:rpRow runat="server" tag="tr" manipulateMethod="WriteRowActions">
          <app:RpItem runat="server" method="RenderTypeName" />
      </app:rpRow>
     </item>
		<footer></table></footer>
	</app:SimpleRepeater>
	</div>
</div>

<div class="taskbar">
	<app:HiddenInt runat="server" id="hButtonAction" />
	<adm:AdminSpanButton runat="server" id="btCancel" class="link" action="99">
		<adm:Text runat="server" textNode="EditButtons/Cancel" />
	</adm:AdminSpanButton>
</div>
