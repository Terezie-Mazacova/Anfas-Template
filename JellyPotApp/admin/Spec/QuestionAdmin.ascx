<%@ Control Language="c#" AutoEventWireup="false" Codebehind="QuestionAdmin.ascx.cs" Inherits="Bet.JellyPot.Admin.QuestionAdmin" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<tr><td class="varTable nameCol">
	<p class="fName">&nbsp;</p>
</td>
<td>
	<table class="collection">
	<tr><td>počátek hlasování: <app:span runat="server" id="lbDate" /></td></tr>
	<tr><td>celkem hlasů: <app:span runat="server" id="lbTotalCount" /></td></tr>
	<tr><td><span onclick="BetJs.Jelly.Admin.QuestionReset();" class="linkM">vynulovat anketu</span></td></tr>
	</table>
	<app:hiddenInt runat="server" id="hQAAkce" />
</td>
</tr>
