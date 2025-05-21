<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.SimpleImgField" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<app:div runat="server" id="divItem" class="item clearfix">
    <span class="title">
        <app:span runat="server" id="lbFieldTitle" tag="" />
        <app:span runat="server" id="lbFieldDesc" tag="span" class="desc" />
    </span>
    <div class="var">

			<div class="singleImg">
				<app:div runat="server" id="divImgBox" class="thumb singleImgItem">
					<div class="outer">
						<div class="inner">
						<%-- tohle musi byt na jednom radku bez mezery --%>
            </div><app:span runat="server" id="lbImgTag" />
					</div>
				</app:div>
				<div class="controls">
					<adm:adminSpan runat="server" id="mAdd" class="btMini icon-plus" textNode="Imgs/Add2" />
					<adm:adminSpan runat="server" id="mEdit" class="btMini icon-pencil" textNode="Imgs/Edit" />
					<adm:adminSpan runat="server" id="mDelete" class="btMini icon-trash" textNode="Imgs/Delete2" />
				</div>
			</div>

      <app:div runat="server" id="divErr" tag="p" class="errMsg">
          <app:span runat="server" id="lbErr" tag="span" />
      </app:div>
      <app:HiddenInt runat="server" id="hImg" />
    </div>
</app:div>