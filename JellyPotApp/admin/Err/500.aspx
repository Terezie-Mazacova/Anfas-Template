<%@ Page %>
<%@ Register TagPrefix="je" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<!DOCTYPE html>
<html>
<head>
    <title>500!</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <style>
        * {
            line-height: 1.6em;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: "Segoe UI", Arial, sans-serif;
            border-top: 1em solid rgb(43, 107, 149);
            background: white;
        }
        h1, p {
            margin-bottom: 1em;
            margin-bottom: 1rem;
        }
        .container {
            width: 44em;
            max-width: 100%;
            margin: auto;
        }
        h1 {
            font-size: 2em;
            line-height: 1em;
            margin-top: 2em;
            color: $orange;
        }
        h2 {
            font-size: 1.2em;
        }
        p strong {
            color: darkred;
        }
        a {
            color: rgb(0, 142, 200);
            text-decoration: none;
            border-bottom: 1px solid lightgray;
        }
    </style>
</head>
<body>
    <!-- wi:diagnostics:page500 -->
    <div class="container">
        <div class="column">
            <h1>Omlouváme se, na serveru je nějaký problém</h1>
            <p>
                Neudělali jste nic špatně... Za to můžeme my.
            </p>
            <p>
                Můžete zkusit obnovit stránku, problém je možná dočasný. Pokud to nepomůže, zkuste to prosím později &ndash; chyba nám byla
                automaticky nahlášena a opravíme jí.
            </p>
            <p>
                Jiné části webu mohou fungovat, zkuste <je:a runat="server" href="/" preservelangdir="true">homepage</je:a>.
            </p>
        </div>
        <div class="column">
            <h1>Sorry, we are experiencing a&nbsp;server problem</h1>
            <p>
                You didn't do anything wrong... We did.
            </p>
            <p>
                You can try resfreshing the page, the problem may be temporary. If it doesn't help, please try again later &ndash; we have
                been notified of the problem and we will fix it.
            </p>
            <p>
                Other parts of the site may be working, try <je:a runat="server" href="/" preservelangdir="true">homepage</je:a>.
            </p>
        </div>
    </div>
</body>
</html>
