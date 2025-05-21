<%@ Page
    Language="c#" AutoEventWireup="false" Trace="false" ValidateRequest="false"
    CodeBehind="denyDialog.aspx.cs"
    Inherits="Bet.JellyPot.Admin.DenyDialog" %>

<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Insufficient rights</title>
		<adm:adminStyleLink runat="server" href="/admin/assets/css/main.css" />
    <adm:AdminJsTagDialog runat="server" />
    <script type="text/javascript">
    	/* global BetJs */
    	BetJs.Jelly.UploadUtils.DenyDialog();
    </script>
</head>

<app:body runat="server" class="popup">
    <div class="error">
        <app:span runat="server" id="lbErr" tag="p" />
    </div>
</app:body>
</html>
