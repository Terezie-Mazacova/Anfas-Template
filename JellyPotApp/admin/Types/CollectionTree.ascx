<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.CollectionTreeField" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="item clearfix">
	<span class="title">
		<app:span runat="server" id="lbFieldTitle" tag="" />
		<app:span runat="server" id="lbFieldDesc" tag="span" class="desc" />
	</span>

	<div class="var simpleCol sortableCol jVarCol jTreeCol">
		<app:div runat="server" id="divFilter">
			<app:input runat="server" id="txFilter" class="txt txFilter" />
			<app:div runat="server" id="divFilterErr" class="error" style="display: none;">
				<p class="errMsg"><span><adm:text runat="server" textNode="Variables/FilterNoItems" /></span></p>
			</app:div>
		</app:div>
		<cms:TreeRepeater runat="server" id="rpMain" source="kategorie" writeIds="true">
			<header>
				<table>
			</header>

			<item>
				<app:rpRow runat="server" id="rpMain" tag="tr" manipulateMethod="PisAtts" IdField="id">
					<td><cms:TreeSpace runat="server">
							<space><span class="t"> </span></space>
							<Lspace><span class="t L"> </span></Lspace>
							<Tspace><span class="t T"> </span></Tspace>
							<Ispace><span class="t I"> </span></Ispace>
						</cms:TreeSpace>
						<app:rpItem runat="server" Method="CalcText" tag="" />
					</td>
					<td class="controls"></td>
				</app:rpRow>
			</item>
			<footer>
				<app:rpItem runat="server" tag="tr" class="emptyItem jEmptyItem" manipulateMethod="PisPrvni" />
				</table>
			</footer>
		</cms:TreeRepeater>

		<div class="controls">
			<adm:adminspan runat="server" id="lbAdd" tag="span" textNode="Variables/AddItem" class="btMini icon-plus" />
			<app:div runat="server" id="divTreeControls" tag="">
				<span class="level">
					<span class="caption"><adm:text runat="server" textNode="Variables/ChangeLevel" />:</span>
					<adm:adminspan runat="server" id="lbDoleva" tag="span" class="move-left" textNode="Variables/ChangeLevelLeft" />
					<adm:adminspan runat="server" id="lbDoprava" tag="span" class="move-right" textNode="Variables/ChangeLevelRight" />
				</span>
			</app:div>
		</div>

		<app:hiddenInt runat="server" id="akce" />
		<app:hidden runat="server" id="selected" />
		<app:hiddenInt runat="server" id="target" />
		<app:hiddenInt runat="server" id="parent" />

</div>
</div>