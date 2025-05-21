<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.SpammerAdmin.MessegeControl" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<table id="mainTab">
<tr><td colspan="2" class="borderBottom varTable">
	<app:span runat="server" id="lbVarTitle" tag="p" class="varName" />
	<app:span runat="server" id="lbVarDesc" tag="p" class="varDesc" />
</td></tr>

<tr><td class="varTable s1">
	<p class="fName">předmět:</p>
</td>
<td class="varTable">
	<p><app:input runat="server" id="txSubject" /></p>
	<app:span runat="server" id="lbErrSubject" tag="p" class="warn" />
</td>
</tr>

<tr><td class="varTable s1">
	<p class="fName">předmět:</p>
</td>
<td class="varTable">
	<p><app:input runat="server" id="txSubject" /></p>
	<app:span runat="server" id="lbErrSubject" tag="p" class="warn" />
</td>
</tr>

<tr><td class="varTable s1">&nbsp;
	
</td><td class="varTable">
<app:SimpleRepeater runat="server" id="rpMsgs">
	<noContentTemplate>
		<p class="noContent"><adm:text runat="server" textNode="Variables/NoItems" /></p>
	</noContentTemplate>
	<headerTemplate><table class="collection">
	</headerTemplate>
	<itemtemplate>
		<app:rpButton runat="server" onClickMethod="CalcLink" Method="CalcText" tag="tr" class="link" onmousemove="HiT(this);" onmouseout="LoT(this);">
			<td><app:rpItem runat="server" field="subject" /></td>
			<td><app:rpItem runat="server" method="casOdeslani" /></td>
		</app:rpButton>
	</itemtemplate>
	<footerTemplate></table>
	</footerTemplate>
</app:SimpleRepeater>

<adm:adminspan runat="server" id="lbAdd" tag="p" textNode="Variables/AddItem" class="linkM" style="margin-top: 5px;" />


<tr><td colspan="2" class="borderTop varTable">
<p>&nbsp;
		
</p>
</td></tr>
</table>


