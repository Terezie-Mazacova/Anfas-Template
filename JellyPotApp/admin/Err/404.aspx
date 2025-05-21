<%@ Page %>
<%@ Register TagPrefix="je" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>404!</title>
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
        a {
            color: rgb(0, 142, 200);
            text-decoration: none;
            border-bottom: 1px solid lightgray;
        }
    </style>
</head>
<body>
    <!-- wi:diagnostics:page404 -->
    <div class="container">
        <h1>Omlouváme se, ale stránka tu není</h1>
        <p>Zadali adresu do prohlížeče ručně? Možná v ní máte chybu. Zkontrolujte, zda v adrese stránky (URL) nejsou překlepy, jsou správně velká a malá písmena, pomlčky a lomítka atd.</p>
        <p>Nebo zkuste začít na <je:a runat="server" href="/" preservelangdir="true">homepage</je:a>, z ní vedou odkazy do všech částí webu.</p>

        <h1>Sorry, that page isn’t here</h1>
        <p>Did you type the URL? You may have typed the address (URL) incorrectly. Check to make sure you’ve got the right spelling, capitalization, etc.</p>
        <p>You can also start over at the <je:a runat="server" href="/" preservelangdir="true">homepage</je:a> which has links to all parts of the website.</p>
    </div>
</body>
</html>