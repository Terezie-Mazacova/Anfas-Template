<%@ Page language="C#" %>
<je:container runat="server" source="atmosphere">
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

        <div class="row atmosphere__intro-text">
            <div class="column medium-12 small-12">
                <je:item runat="server" field=".title" tag="h1" class="atmosphere__main-title" />
                <je:item runat="server" field=".note" tag="div" class="text " />
            </div>
        </div>

        <div class="atmosphere__facilities">
            <je:repeater runat="server" source=".facilities">
                <item>
                    <div class="atmosphere-faci">
                        <je:img runat="server" field=".photo" size="thumb" class="atmosphere__facilities-images" />
                        <je:item runat="server" field=".name" tag="span" class="atmosphere__facilities-span" />
                    </div>
                </item>
            </je:repeater>
        </div>

        <div class="row atmosphere__InfoBlocks">
            <je:repeater runat="server" source=".infoBlocks">
                <item>
                    <div class="column medium-12 small-12">
                        <je:item runat="server" field=".title" tag="h2" class="atmosphere__InfoBlocks-subtitle" />
                        <je:item runat="server" field=".text" tag="div" class="atmosphere__InfoBlocks-p" />

                        <je:repeater runat="server" source=".blockImages">
                            <item>
                                <div class="column medium-12 small-12">
                                    <je:img runat="server" field=".photo" size="thumb" class="atmosphere__blockImages-img" />
                                </div>
                            </item>
                        </je:repeater>
                    </div>
                </item>
            </je:repeater>
        </div>
    </section>

    <section class="canvas canfas--firts canvas--black">
        <div class="row mb-4 atmosphere__intro-img">
            <je:item runat="server" field=".title" tag="h1" class="atmosphere__main-title" />
            <je:item runat="server" field=".note" tag="div" class="text " />
        </div>
    </section>
</je:content>
