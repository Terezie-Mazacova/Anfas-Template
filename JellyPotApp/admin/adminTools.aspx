<%@ Page 
	language="c#" AutoEventWireup="false" trace="false" validateRequest="false"
	Codebehind="err.aspx.cs" 
	Inherits="Bet.JellyPot.Admin.AdminToolsPage"  
%>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<cms:master runat="server" href="main.master" />

<cms:content runat="server" forRegion="main">
	<div class="head">
		<h1><adm:text runat="server" textNode="AdminTools/Title" /></h1>
		<p><adm:text runat="server" textNode="AdminTools/Desc" /></p>
	</div>
	
	<div class="item admin">
		<h2><adm:text runat="server" textNode="AdminTools/TextFiles/Title" /></h2>
		<app:div runat="server" id="divNoLangs">
			<p><adm:text runat="server" textNode="AdminTools/TextFiles/NoLangs" /></p>
		</app:div>
		<app:div runat="server" id="divLangs">
			<p><adm:text runat="server" textNode="AdminTools/TextFiles/Desc" composemethod="SetDesc" /></p>
			<div class="controls">
				<adm:adminButton runat="server" id="btTxtCheck" textNode="AdminTools/TextFiles/Check" class="bt" />
			</div>
				
			<div class="protocol">
				<app:span runat="server" id="lbTxtCheckDetails" tag="p" />
				<app:simplerepeater runat="server" id="rpLog">
					<headertemplate><ul></headertemplate>
					<item>
						<li>
							<app:rpItem runat="server" manipulatemethod="SetErrCssClass" tag="i"/>
							<span class="heading"><app:rpItem runat="server" field="msg" /></span>
						</li>
						</item>
						<footertemplate></ul></footertemplate>
				</app:simplerepeater>
				</div>

		</app:div>
	</div>

	<app:div runat="server" id="divAdminLangs" tag="div" class="item admin">
		<h2>Kontrola admin jazykových souborů</h2>
		<p>tato část je viditelná pouze ve vývojové verzi</p>
		<div class="controls">
			<adm:adminButton runat="server" id="btTxtAdminCheck" textNode="AdminTools/TextFiles/CheckAdminFiles" class="bt" />
		</div>
				
		<div class="protocol">
			<app:span runat="server" id="lbTxtAdminCheckDetails" tag="p" />
			<app:simplerepeater runat="server" id="rpAdminLog">
				<headertemplate><ul></headertemplate>
				<item>
					<li>
						<app:rpItem runat="server" manipulatemethod="SetErrCssClass" tag="i"/>
						<span class="heading"><app:rpItem runat="server" field="msg" /></span>
					</li>
					</item>
					<footertemplate></ul></footertemplate>
			</app:simplerepeater>
			</div>
	</app:div>

	<div class="item admin">
		<h2><adm:text runat="server" textNode="AdminTools/Resave/Title" /></h2>
		<p><adm:text runat="server" textNode="AdminTools/Resave/Desc" /></p>
		<div class="controls">
			<adm:adminButton runat="server" id="btResave" textNode="AdminTools/Resave/Resave" class="bt" />
			<app:span runat="server" id="lbResaveResult" tag="p" />
		</div>
	</div>

 	<div class="item admin">
		<%-- vymazani cache --%>
		<h2><adm:text runat="server" textNode="AdminTools/Cache/Title" /></h2>
		<p><adm:text runat="server" textNode="AdminTools/Cache/Desc" /></p>
		<div class="controls">
			<adm:adminButton runat="server" id="btCacheClear" textNode="AdminTools/Cache/Go" class="bt" />
			<app:span runat="server" id="lbCacheClearResult" tag="p" />
		</div>
	</div>

</cms:content>
