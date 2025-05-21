<%@ Page language="C#" %>
<je:container runat="server" expect="mainpage.recipes">
    <je:master runat="server" href="/masters/main.master" />
</je:container>


<je:content runat="server" forRegion="head">

    <meta property="og:title" content="<je:item runat='server' field='common.pageTitle' format='plainText' />">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<je:item runat='server' field='jelly.fullUrl' format='plainText' />">
    <meta property="og:image" content="<je:imglink mode='sitemap' runat='server' field='common.ogImage' />">
    <meta name="description" content="<je:item runat='server' field='common.metaDescription' format='plainText' />" />
    <title><je:item runat="server" field="common.pageTitle" format='plainText' /></title>
</je:content>

<je:content runat="server" forRegion="headerClass">header--scroll</je:content>

<je:content runat="server" forRegion="main">
    <section class="canvas canvas--first canvas--white">
        <div class="row">
            <div class="column medium-12 small-12">
                <je:item runat="server" field=".name" tag="h1" class="title-1" />
                <je:item runat="server" field=".time" tag="div" class="recipe__page-time" />
                <je:img runat="server" field=".img" size="full" class="recipe__page-img" />
                <je:item runat="server" field=".ingedients" tag="div" class="text recipe__page-text" />
            </div>
        </div>
    </section>
</je:content>
