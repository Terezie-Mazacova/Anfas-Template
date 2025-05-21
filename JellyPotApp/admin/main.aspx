<%@ Page language="c#" Codebehind="main.aspx.cs" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.Main" trace="false" validateRequest="false" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<cms:master runat="server" href="main.master" />

<cms:content runat="server" forRegion="htmlHeader">
</cms:content>

<cms:content runat="server" forRegion="main">
	<app:div runat="server" id="divPlace" tag="div" />
</cms:content>