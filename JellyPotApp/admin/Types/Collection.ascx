<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.CollectionField" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="item clearfix">
  <span class="title">
    <app:span runat="server" id="lbFieldTitle" tag="" />
		<app:span runat="server" id="lbFieldDesc" tag="span" class="desc" />
  </span>
  
	<div class="var simpleCol plainCol jVarCol">
		<app:div runat="server" id="divFilter">
			<app:input runat="server" id="txFilter" class="txt txFilter" />
			<app:div runat="server" id="divFilterErr" class="error" style="display: none;">
				<p class="errMsg"><span><adm:text runat="server" textNode="Variables/FilterNoItems" /></span></p>
			</app:div>
		</app:div>
		<app:SimpleRepeater runat="server" id="rpCol">
			<headerTemplate><table>
			</headerTemplate>
			<itemtemplate>
          <app:rpRow runat="server" tag="tr" manipulateMethod="PisAtts">
							<app:rpItem runat="server" Method="CalcText" />
              <td class="controls"></td>
          </app:rpRow>
			</itemtemplate>
			<footerTemplate></table>
			</footerTemplate>
		</app:SimpleRepeater>

		<div class="controls">
			<adm:adminspan runat="server" id="lbAdd" tag="span" textNode="Variables/AddItem" class="btMini icon-plus" />
		</div>

  </div>
</div>
