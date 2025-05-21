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
        <div class="row mb-4 home__images">
            <div class="column medium-12 small-12">
                <je:repeater runat="server" source=".images">
                    <item>
                        <je:img runat="server" field=".photo" size="thumb" class="home__images" />
                    </item>
                </je:repeater>
            </div>            
        </div>

        <div class="row mb-4 home__homeText">
            <div class="column medium-12 small-12">
                <je:item runat="server" field=".homeText" tag="p" class="home__intro-p" />
            </div>            
        </div>

        <div class="row mb-4 home__hotelDesc">
            <je:repeater runat="server" source=".hotelDesc">
                <item>
                    <div class="column medium-4 small-12">
                        <je:item runat="server" field=".name" tag="p" class="home__hoteldesc-p" />
                        <je:repeater runat="server" source=".offer">
                            <item>
                                <div class="column medium-12 small-12">
                                    <je:img runat="server" field=".icon" class="home__offer-img" />
                                    <je:item runat="server" field=".name" tag="p" class="home__offer-p" />
                                </div>
                            </item>
                        </je:repeater>
                        <je:item runat="server" field=".btn" tag="p" class="home__hoteldesc-a" />
                    </div>
                </item>
            </je:repeater>
        </div>

        <div class="row mb-4 home__blocks">
            <je:repeater runat="server" source=".blocks">
                <item>
                    <div class="column medium-12 small-12">
                        <je:img runat="server" field=".photo" size="thumb" class="home__block-img" />
                        <je:item runat="server" field=".subTitle" tag="H2" class="home__block-subtitle" />
                        <je:item runat="server" field=".text" tag="p" class="home__block-p" />

                        <je:repeater runat="server" source=".offer">
                            <item>
                                <div class="column medium-12 small-12">
                                    <je:img runat="server" field=".icon" class="home__offer-img" />
                                    <je:item runat="server" field=".name" tag="p" class="home__offer-p" />
                                </div>
                            </item>
                        </je:repeater>

                        <je:item runat="server" field=".note" tag="p" class="home__block-note" />
                    </div>
                </item>
            </je:repeater>
        </div>

        <div class="row home__activity">
            <je:repeater runat="server" source=".activity">
                <item>
                    <div class="column medium-4 small-12">
                        <je:item runat="server" field=".name" tag="H2" class="home__activity-title" />
                        <je:item runat="server" field=".text" tag="p" class="home__activity-p" />
                        <je:item runat="server" field=".btn" tag="a" class="home__activity-btn" />
                        <je:img runat="server" field=".photo" size="thumb" class="home__activity-img" />
                        <je:item runat="server" field=".subTitle" tag="H3" class="home__activity-subtitle" />

                        <je:repeater runat="server" source=".spendTime">
                            <item>
                                <div class="column medium-12 small-12">
                                    <je:img runat="server" field=".photo" size="thumb" class="home_spendtime-img" />
                                    <je:item runat="server" field=".note" tag="p" class="home__spendtime-note" />
                                </div>
                            </item>
                        </je:repeater>
                    </div>
                </item>
            </je:repeater>
        </div>

        <div class="row home__activity">
            <je:repeater runat="server" source=".explore">
                <item>
                    <div class="column medium-4 small-12">
                        <je:item runat="server" field=".title" tag="H2" class="home__explore-title" />

                        <je:repeater runat="server" source=".exploreMore">
                            <item>
                                <div class="column medium-12 small-12">
                                    <je:img runat="server" field=".photo" size="thumb" class="home__exploreMore-img" />
                                    <je:item runat="server" field=".btn" tag="p" class="home__exploreMore-a" />
                                </div>
                            </item>
                        </je:repeater>
                    </div>
                </item>
            </je:repeater>
        </div>
    </section>
</je:content>
