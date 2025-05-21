<%@ Page Language="c#" CodeBehind="users.aspx.cs" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.Users" Trace="false" ValidateRequest="false" %>

<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<cms:master runat="server" href="main.master" />

<cms:content runat="server" forRegion="htmlHeader">
    <script type="text/javascript">
    	/* global confirm */
    	/* global msgDeleteConfirm */
    	function UsersRemove() {
            if (confirm(msgDeleteConfirm)) {
                document.forms[0].hAkce.value = 3;
                document.forms[0].submit();
            }
        }
    </script>
</cms:content>

<cms:content runat="server" forRegion="main">
    <div class="head">
        <h1><adm:text runat="server" textNode="UM/Title" /></h1>
    </div>
    <div class="item admin">
        <app:simpleRepeater runat="server" id="rpPracovnici">
            <nocontenttemplate>
				<p>
                    <adm:text runat="server" textNode="UM/NoAdminA" />
                    <adm:text runat="server" textNode="UM/NoAdminB" />
				</p>
				<div class="controls">
                    <span class="bt" onclick="BetJs.Jelly.Admin.OpenAdmin('useredit.aspx');">
                        <adm:text runat="server" textNode="UM/AddAdmin" />
                    </span>
				</div>
			</nocontenttemplate>
            <headertemplate>
			    <table class="list">
              <tr>
                  <th><adm:text runat="server" textNode="UM/User" /></th>
                  <th class="userGroup"><adm:text runat="server" textNode="UM/Groups" /></th>
                  <th></th>
              </tr>
			</headertemplate>
            <itemtemplate>
                <tr class="collectionItem">
				    <td class="userName">
                        <app:rpItem runat="server" tag="span" field="loginName" />
				    </td>
				    <td class="userGroup">
                        <app:rpItem runat="server" method="GetRoles" class="maly" />
				    </td>
				    <td class="userModify">
              <app:rpElem runat="server" tag="span" class="btMini icon-user" onclick="BetJs.Jelly.Admin.OpenAdmin('useredit.aspx?id={arg}');" argfield="userID"><adm:text runat="server" textNode="UM/Details" /></app:rpElem>
					    <app:rpElem runat="server" tag="span" class="btMini icon-key" onclick="BetJs.Jelly.Admin.OpenAdmin('userpwd.aspx?id={arg}');" argfield="userID"><adm:text runat="server" textNode="UM/PwdChange" /></app:rpElem>
				    </td>
			    </tr>
            </itemtemplate>
            <footertemplate>
                </table>
			    <p>
				    <span class="btMini icon-plus" onclick="BetJs.Jelly.Admin.OpenAdmin('userEdit.aspx');"><adm:text runat="server" textNode="UM/AddUser" /></span>
				    <app:rpElem runat="server" manipulateMethod="SetVisibility" tag="">
					    <span class="fR">
					        <span class="link" onclick="UsersRemove();">
                                <adm:text runat="server" textNode="UM/RemoveAdmin" />
					        </span>
					    </span>
				    </app:rpElem>
			    </p>
			</footertemplate>
        </app:simpleRepeater>
        <app:hiddenInt runat="server" id="hAkce" />
    </div>
</cms:content>