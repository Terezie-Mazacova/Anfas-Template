<%@ Page %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title><adm:text runat="server" textNode="Main/Admin" /></title>
	<adm:adminStyleLink runat="server" href="/admin/assets/css/main.css" />
	<adm:adminJsTag runat="server" />
	<script type="text/javascript">
		// detekce moderniho prohlizece
		/* global BetJs */
		if (BetJs.Browsers.DetectBlob() && BetJs.Browsers.DetectXhr2()) {
			window.location.href = 'login.aspx';
		} else {
			window.location.href = 'unsupported-browser.aspx';
		}
	</script>
</head>
<body>
    <article class="unsupported-browser">
        <h1><adm:text runat="server" textNode="UnsupBrow/Js/Head" /></h1>
        <adm:text runat="server" textNode="UnsupBrow/Js/Body" />
    </article>
</body>
</html>
