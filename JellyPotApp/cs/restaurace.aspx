<%@ Page language="C#" %>
<je:container runat="server" source="restaurant">
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

        <div class="row mb-4 atmosphere__intro-img">
            <je:repeater runat="server" source=".introImages">
                <item>
                    <div class="column medium-12 small-12">
                        <je:img runat="server" field=".photo" size="thumb" class="atmosphere__intro-images" />
                    </div>
                </item>
            </je:repeater>
        </div>

    </section>
</je:content>
