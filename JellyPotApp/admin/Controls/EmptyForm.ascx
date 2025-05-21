<%@ 
	Control Language="c#" AutoEventWireup="false" 
	Inherits="Bet.JellyPot.Admin.EmptyForm" 
%>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="clean-slate">
    <h1><adm:text runat="server" textNode="Main/Welcome" /> <cms:projectTitle runat="server" /></h1>
    <p><adm:text runat="server" textNode="Main/WelcomeStart" /></p>
</div>