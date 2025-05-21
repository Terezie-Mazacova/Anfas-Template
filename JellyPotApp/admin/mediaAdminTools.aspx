<%@ Page 
	Language="c#" AutoEventWireup="false" Trace="false" ValidateRequest="false"
	Inherits="Bet.JellyPot.Admin.MediaAdminToolsPage"  
%>

<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<cms:master runat="server" href="main.master" />

<cms:content runat="server" forRegion="main">
    <div class="head">
        <h1><adm:text runat="server" textNode="MediaAdminTools/Title" /></h1>
        <p><adm:text runat="server" textNode="MediaAdminTools/Desc" /></p>
    </div>

    <div class="item admin">
        <%-- Obrazky --%>
        <h2><adm:text runat="server" textNode="MediaAdminTools/Check/Title" /></h2>
        <p><adm:text runat="server" textNode="MediaAdminTools/Check/Desc" /></p>

        <div class="controls">
            <adm:adminButton runat="server" id="btCheck" textNode="MediaAdminTools/Check/Check" class="bt" />
            <adm:adminButton runat="server" id="btRepair" textNode="MediaAdminTools/Repair/Repair" class="bt" />
        </div>

        <div class="protocol">
            <app:span runat="server" id="lbCheckTitle" tag="h3" />
            <app:span runat="server" id="lbCheckDetails" tag="p" />
            <app:simplerepeater runat="server" id="rpLog">
                <headertemplate><ul></headertemplate>
                <item>
                    <li>
				        <app:rpItem runat="server" manipulatemethod="SetErrCssClass" tag="i" />
				        <app:rpItem runat="server" field="msg" class="heading" />
				        <app:rpitem runat="server" field="details" class="detail"/>
                    </li>
			    </item>
                <footertemplate></ul></footertemplate>
            </app:simplerepeater>
        </div>
    </div>

    <div class="item admin">
        <%-- Mazani --%>
        <h2><adm:text runat="server" textNode="MediaAdminTools/Delete/Title" /></h2>
        <app:div runat="server" id="divTrashMove">
            <p><adm:text runat="server" textNode="MediaAdminTools/Delete/DescMove" /></p>
        </app:div>
        <app:div runat="server" id="divTrashDelete">
            <p><adm:text runat="server" textNode="MediaAdminTools/Delete/DescDelete" /></p>
        </app:div>
        <div class="controls">
            <adm:adminButton runat="server" id="btTrash" textNode="MediaAdminTools/Delete/Delete" class="bt trash" />
        </div>

        <app:span runat="server" id="lbTrashTitle" tag="p" />
        <app:span runat="server" id="lbTrashDetails" tag="p" class="resultNone" />

        <div class="protocol">
            <app:simplerepeater runat="server" id="rpTrashLog">
                <headertemplate><ul></headertemplate>
                <item>
					<li>
				        <app:rpItem runat="server" manipulatemethod="SetErrCssClass" tag="i" />
				        <app:rpItem runat="server" field="msg" class="heading" />
				        <app:rpitem runat="server" field="details" class="detail"/>
					</li>
				</item>
                <footertemplate></ul></footertemplate>
            </app:simplerepeater>
        </div>
    </div>

</cms:content>