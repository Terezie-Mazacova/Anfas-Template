<%@ Page language="C#" %>
<je:container runat="server" source="mainpage">
    <je:master runat="server" href="/masters/main.master" />
</je:container>


<je:content runat="server" forRegion="head">

    <meta property="og:title" content="<je:text runat="server" textNode="Errors/error"/> | <je:item runat='server' field='common.pageTitle' format='plainText' />">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<je:item runat='server' field='jelly.fullUrl' format='plainText' />">
    <meta property="og:image" content="<je:imglink mode='sitemap' runat='server' field='common.ogImage' />">
    <meta name="description" content="<je:item runat='server' field='common.metaDescription' format='plainText' />" />
    <title><je:text runat="server" textNode="Errors/error"/> | <je:item runat="server" field="common.pageTitle" format='plainText' /></title>
</je:content>

<je:content runat="server" forRegion="headerClass">header--scrolled</je:content>

<je:content runat="server" forRegion="main">
    <section class="canvas canvas--white">
        <div class="row align-center">
            <div class="column medium-12 small-12">
                <div class="error">
                    <div class="error__bg">404</div>
                    <h1 class="error__name">
                        <je:text runat="server" textNode="Errors/error" />
                    </h1>
                    <h2 class="error__title">
                        <je:text runat="server" textNode="Errors/ooops" />
                    </h2>
                    <p class="error__text">
                        <je:text runat="server" textNode="Errors/notFound" /><br>
                        <je:text runat="server" textNode="Errors/try" /> <a href="/cs/uvod"><je:text runat="server" textNode="Errors/homepage" /></a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</je:content>
