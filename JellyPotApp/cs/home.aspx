<%@ Page language="C#" %>
<je:container runat="server" source="homepage">
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
        <div class="row mb-4">
            <div class="column medium-12 small-12">
                <je:repeater runat="server" source=".images">
                    <item>
                        <je:img runat="server" field=".photo" size="thumb" class="images" />
                    </item>
                </je:repeater>
                
            </div>            
        </div>

        <div class="row mb-4">
            <div class="column medium-12 small-12">
                <je:item runat="server" field=".hometext" tag="p" class="intro-p" />
            </div>            
        </div>

        <div class="column medium-12 small-12">
            <div class="row mb-4">
                <je:repeater runat="server" source=".hoteldesc">
                    <item>
                        <div class="column medium-4 small-12">
                            <je:item runat="server" field=".name" tag="p" class="hoteldesc-p" />
                            <je:repeater runat="server" source=".offer">
                                <item>
                                    <div class="column medium-12 small-12">
                                        <je:img runat="server" field=".icon" class="offer-img" />
                                        <je:item runat="server" field=".name" tag="p" class="offer.p" />
                                    </div>
                                </item>
                            </je:repeater>
                            <je:item runat="server" field=".btn" tag="p" class="hoteldesc-a" />
                        </div>
                    </item>
                </je:repeater>
            </div>
        </div>

        <div class="column medium-12 small-12">
            <div class="row mb-4">
                <je:repeater runat="server" source=".firstblock">
                    <item>
                        <div class="column medium-4 small-12">
                            <je:img runat="server" field=".photo" size="thumb" class="firstblock-img" />
                            <je:item runat="server" field=".subtitle" tag="H2" class="firstblock-subtitle" />
                            <je:item runat="server" field=".text" tag="p" class="firstblock-p" />
                        </div>
                    </item>
                </je:repeater>
            </div>
        </div>

        <div class="row home__activity">
            <je:repeater runat="server" source=".activity">
                <item>
                    <div class="column medium-4 small-12">
                        <je:item runat="server" field=".name" tag="H2" class="home__activity-title" />
                        <je:item runat="server" field=".text" tag="p" class="activity-p" />
                        <je:item runat="server" field=".btn" tag="a" class="activity-btn" />
                        <je:img runat="server" field=".photo" size="thumb" class="activity-img" />
                        <je:item runat="server" field=".subtitle" tag="H3" class="activity-subtitle" />

                        <je:repeater runat="server" source=".spendtime">
                            <item>
                                <div class="column medium-12 small-12">
                                    <je:img runat="server" field=".photo" size="thumb" class="spendtime-img" />
                                    <je:item runat="server" field=".note" tag="p" class="spendtime-note" />
                                </div>
                            </item>
                        </je:repeater>
                        
                    </div>
                </item>
            </je:repeater>
        </div>

        <div class="row">
            <je:repeater runat="server" source=".explore">
                <item>
                    <div class="column medium-4 small-12">
                        <je:item runat="server" field=".title" tag="H2" class="explore-title" />

                        <je:repeater runat="server" source=".exploreMore">
                            <item>
                                <div class="column medium-12 small-12">
                                    <je:img runat="server" field=".photo" size="thumb" class="exploreMore-img" />
                                    <je:item runat="server" field=".btn" tag="p" class="exploreMore-a" />
                                </div>
                            </item>
                        </je:repeater>
                    </div>
                </item>
            </je:repeater>
        </div>
    </section>
</je:content>
