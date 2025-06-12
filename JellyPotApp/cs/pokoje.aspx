<%@ Page language="C#" %>
<je:container runat="server" source="rooms">
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

    <!-- Intro Images -->
    <section class="canvas canvas--white canvas--jumbo">
        <div class="row intro__images row--wide">
            <div class="intro__images-big">
                <je:repeater runat="server" source=".introImages">
                    <item1>
                        <je:img runat="server" src="/assets/img/logo-images.svg" class="intro__images-logo" />
                        <je:img runat="server" field=".photo" size="thumb" class="intro__images-img intro__images-img--big" />
                    </item1>
                </je:repeater>
            </div>
            <div class="intro__images-small">
                <je:repeater runat="server" source=".introImages">
                    <item1></item1>
                    <item>
                        <je:img runat="server" field=".photo" size="thumb" class="intro__images-img intro__images-img--small" />
                    </item>
                </je:repeater>
            </div>
        </div>
    </section>

    <!-- Intro Text -->
    <section class="canvas canvas--white">
        <div class="row intro__text">
            <item>
                <div class="column medium-10 small-12">
                    <je:item runat="server" field=".note" tag="div" class="text text--perex intro__text-p" />
                </div>
            </item>
        </div>

        <div class="row">
            <div class="medium-12 small-12">
                <div class=" atmos__faci">
                    <je:repeater runat="server" source=".facilities">
                        <item>
                            <div class="atmos__faci-wrapper">
                                <je:img runat="server" field=".photo" size="thumb" class="atmos__faci-images" />
                                <je:item runat="server" field=".name" class="text atmos__faci-note" />
                            </div>
                        </item>
                    </je:repeater>
                </div>
            </div>
        </div>
    </section>
</je:content>
