<%@ Page 
	language="c#" autoeventwireup="false" 
	inherits="Bet.JellyPot.Admin.Login" 
%>

<%@ register tagprefix="app" namespace="Bet.AppBase.UI" assembly="BetAppBaseUI" %>
<%@ register tagprefix="cms" namespace="Bet.JellyPot.UI" assembly="JellyPot" %>
<%@ register tagprefix="adm" namespace="Bet.JellyPot.Admin" assembly="JellyPot" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>
		<adm:text runat="server" textNode="Main/Admin" />
	</title>
	<cms:jstag runat="server" />
	<adm:adminStyleLink runat="server" href="/admin/assets/css/main.css" />
</head>
<body class="login">
	<div class="poster">
	</div>
	<form method="post" runat="server">
	    <div id="loginFormA">
		    <div id="loginFormB">
			    <h1><cms:projecttitle runat="server" /></h1>
			    <app:div runat="server" id="divForm" tag="">
				    <p>
					    <label>
						    <adm:text runat="server" textNode="LoginPage/Name" />
						    <app:input runat="server" id="txJmeno" class="txt" />
					    </label>
					    <label>
						    <adm:text runat="server" textNode="LoginPage/Password" />
						    <app:input runat="server" id="txPwd" class="txt" />
					    </label>
				    </p>
				    <app:span runat="server" id="lbWarn" tag="p" class="error" />
				    <adm:adminbutton runat="server" id="btLogin" textNode="LoginPage/Login" class="bt" />
			    </app:div>
			    <app:span runat="server" id="lbErr" tag="p" class="error" />
		    </div>
	    </div>
	</form>
	<footer>
      <a class="jellypot-weblink" href="http://www.jellypot.net">
				<cms:img runat="server" src="/admin/assets/img/jellypot.svg" />
			</a>
      <p>&copy; 2006-2021 <a href="http://www.anfas.cz">AnFas</a> a <a href="http://www.teamin.cz/jellypot.aspx">TeamIn</a></p>
    </footer>
</body>
</html>
