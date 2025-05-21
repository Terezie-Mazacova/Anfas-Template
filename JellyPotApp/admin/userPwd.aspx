<%@ Page Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.UserPwd" Trace="false" ValidateRequest="false" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<cms:master runat="server" href="main.master" />

<cms:content runat="server" forRegion="main">
    <div class="head">
        <h1>
            <adm:text runat="server" textNode="UM/PwdChangeTitle" />
        </h1>
    </div>

    <div class="item admin">
        <app:div runat="server" id="divZmena" class="user">
            <p><adm:text runat="server" textNode="UM/UserTitle" />: <app:span runat="server" id="lbUserName" tag="strong"/></p>

					<app:div runat="server" id="divOldPwd" tag="p">
						<label>
							<adm:text runat="server" textNode="UM/OldPwd" />
							<app:input runat="server" id="txOldPwd" ispassword="true" class="txt" />
							<app:div runat="server" id="divErrOldPwd" tag="span" class="errMsg">
								<app:span runat="server" id="lbErrOldPwd" tag="span" />
							</app:div>
						</label>
					</app:div>

					<p>
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

				</app:div>

        <app:div runat="server" id="divHotovo">
            <p>
                <adm:text runat="server" textNode="UM/PwdOk" />
            </p>
        </app:div>
    </div>

    <app:div runat="server" id="divControls" class="controls">
        <adm:adminButton id="btSave" textNode="Main/Save" class="bt" runat="server" />
        <adm:adminButton id="btCancel" textNode="Main/Cancel" class="link" runat="server" />
    </app:div>

</cms:content>