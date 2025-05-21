<%@ Page language="C#" %>
<je:container runat="server" source="about">
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
                <je:item runat="server" field=".introText" tag="p" class="mt-4" />
                <je:img runat="server" field=".introImg" size="thumb" class="image mb-6" />
            </div>
        </div>

        <div class="row">
            <je:repeater runat="server" source=".block">
                <item>
                    <div class="column medium-12 small-12">
                        <je:item runat="server" field=".subtitle" tag="h3" class="title-2" />
                        <je:item runat="server" field=".text" tag="p" class="paragraph" />
                        <je:img runat="server" field=".introImg" size="thumb" class="img mb-6 mt-4" />
                    </div>
                </item>
            </je:repeater>
        </div>
    </section>
</je:content>
