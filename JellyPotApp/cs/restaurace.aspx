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
        <div class="row intros__text">
            <item>
                <div class="column medium-8 small-12">
                    <je:item runat="server" field=".title" class="" />

                </div>
            </item>
        </div>
    </section>

    <!-- Sekce Bloky -->
    <section class="canvas canvas--white">
        <je:repeater runat="server" source=".blocks">
            <item>
                <div class="row row--wide info__blocks">
                    <div class="row  <je:if runat="server" condition=".switch"><then>info__blocks-switch</then></je:if>">
                        <div class="column medium-6 small-12">
                            <je:item runat="server" field=".text" tag="div" class="text info__blocks-text" />
                        </div>
                    </div>
                    
                    <div class="row info__blocks-container <je:if runat="server" condition=".switch"><then>info__blocks-switch</then></je:if>">
                        
                        <div class="info__blocks-second column medium-8 small-12 info__blocks-box--<je:item runat="server" field=".itr" />">
                            <je:repeater runat="server" source=".photoBlock">
                                <item1></item1>
                                <item>
                                    <je:img runat="server" field=".photo" size="thumb" class="info__blocks-img" />
                                </item>
                            </je:repeater>
                        </div>

                        <div class="info__blocks-first column medium-4 small-12 info__blocks-box--<je:item runat="server" field=".itr" />">
                            <je:repeater runat="server" source=".photoBlock">
                                <item1>
                                    <je:img runat="server" field=".photo" size="thumb" class="info__blocks-img info__blocks-img--mg" />
                                </item1>
                            </je:repeater>
                        </div>
                    </div>
                </div>
            </item>
        </je:repeater>
    </section>
</je:content>
