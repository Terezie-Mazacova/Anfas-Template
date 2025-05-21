<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.CollectionForm" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="head">
	<app:span runat="server" id="lbVarTitle" tag="h1" />
	<app:span runat="server" id="lbVarDesc" tag="p" class="desc" />
</div>

<div class="items">
	<app:div runat="server" id="divCategory">
        <label class="categorize clearfix">
            <span class="caption">
                <app:span runat="server" id="lbCategory" />
            </span>
            <app:Select runat="server" id="selCategory" onchange="BetJs.Jelly.Admin.OnCollectionFilter();" />
		</label>
	</app:div>

	<app:divn runat="server" id="divPlace" tag="" />
</div>
