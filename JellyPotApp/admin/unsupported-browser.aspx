<%@ Page %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title><adm:text runat="server" textNode="Main/Admin" /></title>
	<adm:adminStyleLink runat="server" href="/admin/assets/css/main.css" />
</head>
<body>
    <div class="unsupported-browser">
        <h1><adm:text runat="server" textNode="UnsupBrow/Brow/Head" /></h1>
        <adm:text runat="server" textNode="UnsupBrow/Brow/BodyA" />
        <ul><!--
         --><li>
                <img src="assets/img/ie.png" />
                <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet Explorer</a>
                <span class="ver">10+</span>
            </li><!--
         --><li>
                <img src="assets/img/firefox.png" />
                <a href="http://www.mozilla.org/en-US/firefox/new/">Firefox</a>
                <span class="ver"><adm:text runat="server" textNode="UnsupBrow/Brow/Actual" /></span>
            </li><!--
         --><li>
                <img src="assets/img/chrome.png" />
                <a href="https://www.google.com/intl/en/chrome/browser/">Chrome</a>
                <span class="ver"><adm:text runat="server" textNode="UnsupBrow/Brow/Actual" /></span>
            </li><!--
         --><li>
                <img src="assets/img/safari.png" />
                <a href="http://www.apple.com/safari/">Safari</a>
                <span class="ver">6.1+</span>
            </li><!--
     --></ul>
        <adm:text runat="server" textNode="UnsupBrow/Brow/BodyB" />
    </div>
</body>
</html>