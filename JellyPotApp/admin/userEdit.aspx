<%@ Page Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.UserEdit" Trace="false" ValidateRequest="false" %>

<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<cms:master runat="server" href="main.master" />

<cms:content runat="server" forRegion="title">
    <title><adm:text runat="server" textNode="Main/Admin" /></title>
</cms:content>

<cms:content runat="server" forRegion="htmlHeader">
    <script type="text/javascript">
	    	/* global confirm */
        /* global msgDeleteConfirm */
        function DeleteUser() {
            return (confirm(msgDeleteConfirm));
        }
    </script>
</cms:content>

<cms:content runat="server" forRegion="main">
  <div class="head">
      <h1><adm:text runat="server" textNode="UM/UserTitle" /></h1>
  </div>

	<div class="item admin">
		<div class="user">
			<p>
				<app:div runat="server" id="divLoginName" tag="label">
					<adm:text runat="server" textNode="UM/User" />
					<app:input runat="server" class="txt" id="txLoginName" />
					<app:div runat="server" id="divErrLoginName" tag="span" class="errMsg">
						<app:span runat="server" id="lbErrLoginName" tag="span" />
					</app:div>
				</app:div>

				<app:div runat="server" id="divPwd1" tag="label">
					<adm:text runat="server" textNode="UM/Pwd1" />
					<app:input runat="server" id="txPwd1" ispassword="true" class="txt" />
					<app:div runat="server" id="divErrPwd1" tag="span" class="errMsg">
						<app:span runat="server" id="lbErrPwd1" tag="span" />
					</app:div>
				</app:div>

				<app:div runat="server" id="divPwd2" tag="label">
					<adm:text runat="server" textNode="UM/Pwd2" />
					<app:input runat="server" id="txPwd2" ispassword="true" class="txt" />
					<app:div runat="server" id="divErrPwd2" tag="span" class="errMsg">
						<app:span runat="server" id="lbErrPwd2" tag="span" />
					</app:div>
				</app:div>
			</p>
		</div>
	</div>

	<div class="item admin">
        <h2><adm:text runat="server" textNode="UM/UserOptions/Title" /></h2>
        <p class="checks">
            <label>
                <app:check runat="server" id="chAccess" />
                <adm:text runat="server" textNode="UM/UserOptions/AllowAccess" />
            </label>
            <app:div runat="server" id="divEditor" tag="label">
                <app:check runat="server" id="chIsEditor" />
                <adm:text runat="server" textNode="UM/UserOptions/AllowEdit" />
            </app:div>
            <label>
                <app:check runat="server" id="chIsAdmin" />
                <adm:text runat="server" textNode="UM/UserOptions/AllowAdmin" />
            </label>
            <app:div runat="server" id="divSysAdmin" tag="label">
                <app:check runat="server" id="chIsSysAdmin" />
                <adm:text runat="server" textNode="UM/UserOptions/AllowSysAdmin" />
            </app:div>
        </p>
    </div>

    <app:div runat="server" id="divGroups" class="item admin">
        <h2><adm:text runat="server" textNode="UM/UserOptions/Groups" /></h2>
        <adm:DragRefColPicker runat="server" id="selGroups" class="listPickerX" />

    </app:div>

    <div class="controls">
        <adm:adminButton id="btSave" textNode="Main/Save" runat="server" class="bt" />
        <adm:adminButton id="btCancel" textNode="Main/Cancel" runat="server" class="link" />
        <adm:adminButton id="btDelete" textNode="Main/Delete" runat="server" class="bt trash" style="float: right;" onclick="DeleteUser();" />
    </div>

</cms:content>