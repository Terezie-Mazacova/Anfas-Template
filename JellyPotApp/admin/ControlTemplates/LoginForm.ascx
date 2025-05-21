<%@ Control 
	Language="c#" AutoEventWireup="false" 
	Inherits="Bet.JellyPot.UI.LoginForm" 
%>
<%@ Register TagPrefix="je" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>

<je:virtualForm runat="server" class="loginForm">
<je:elem runat="server" id="divLoginForm" tag="">
	<p>login:<je:txinput runat="server" id="txLogin" /></p>
	<p>pwd:<je:txinput runat="server" id="txPwd" /></p>
	<!-- pro control btInput lze vyuzit i atributy textValue nebo textNode, ktery odkazuje na text z textoveho souboru (stejne jako u controlu Txt) -->
	<p><je:btInput runat="server" id="btLogin" textvalue="prihlasit se" /></p>
	<je:elem runat="server" id="errBadLogin">Přihlašovací jméno nebo heslo jsou chybné.</je:elem>
</je:elem>

<je:elem runat="server" id="divLogoffForm" tag="">
	<p>již jste přihlášen jako:<je:user runat="server" field="loginName" /></p>
	<p><je:btInput runat="server" id="btLogoff" textvalue="odhlasit se" /></p>
	<!-- pokud nechcete uzivatelum povolit zmenu hesla, nastavte u toho tlacitka atribut visible="false" -->
	<p><je:btInput runat="server" id="btToChPwd" textvalue="zmenit heslo" /></p>
	<je:elem runat="server" id="errPwdOk">Změna hesla byla provedena.</je:elem>
</je:elem>

<je:elem runat="server" id="divChPwdForm" tag="">
	<p>pwdO:<je:txinput runat="server" id="txPwdOld" /></p>
	<p>pwdN1:<je:txinput runat="server" id="txPwdNew1" /></p>
	<p>pwdN2:<je:txinput runat="server" id="txPwdNew2" /></p>
	<p><je:btInput runat="server" id="btChPwd" textvalue="zmenit heslo" /></p>
	<je:elem runat="server" id="errBadOldPwd">Původní heslo není správné.</je:elem>
	<je:elem runat="server" id="errBadNewPwd">Heslo musí být alespoň tři znaky dlouhé.</je:elem>
	<je:elem runat="server" id="errBadPwdMatch">Heslo a jeho ověření se neshoduje.</je:elem>
</je:elem>
</je:virtualForm>
