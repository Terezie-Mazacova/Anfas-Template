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

    <!-- Intro Images -->
    <section class="canvas canvas--white canvas--jumbo">
        <div class="row intro__images row--wide">
            <div class="intro__images-big">
                <je:repeater runat="server" source=".introImages">
                    <item1>
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
                <div class="column medium-8 small-12">
                    <je:item runat="server" field=".introText" tag="div" class="intro__text-p" />
                </div>
            </item>
        </div>

        <div class="row hotel__desc">
            <je:repeater runat="server" source=".hotelDesc">
                <item>
                    <div class="column medium-6 small-12">
                        <div class=" hotel__desc-wrapper">
                            <je:item runat="server" field=".name" tag="h2" class="hotel__desc-title" />

                            <div class="hotel__desc-container">
                                <je:repeater runat="server" source=".offer">
                                    <item>
                                        <div class="hotel__desc-offer">
                                            <je:img runat="server" field=".icon" class="hotel__desc-icon" />
                                            <je:item runat="server" field=".text" tag="div" class="hotel__desc-note" />
                                        </div>
                                    </item>
                                </je:repeater>
                            </div>
                            

                            <je:item runat="server" field=".btn" tag="p" class="hotel__desc-a" />
                        </div>
                    </div>
                </item>
            </je:repeater>
        </div>
    </section>

    <!-- Section Blocks -->
    <section class="canvas canvas--white">
        <je:repeater runat="server" source=".blocks">
            <item>
                <div class="row blocks__section row--wide">
                    <div class="column medium-7 small-12 blocks__section-box">
                        <je:repeater runat="server" source=".photoBlock">
                            <item>
                                <je:img runat="server" field=".photo" size="thumb" class="blocks__section-img blocks__section-img--{.parent.itr}" />
                            </item>
                        </je:repeater>
                    </div>

                    <div class="column medium-4 small-12 blocks__section-box">
                        <je:item runat="server" field=".text" tag="div" class="text" />

                        <div class="blocks__section-wrapper-icon">
                            <je:repeater runat="server" source=".icon">
                                <item>
                                    <je:img runat="server" field=".photo"  class="" />
                                </item>
                            </je:repeater>
                            <je:item runat="server" field=".note" tag="div" class="blocks__section-note" />
                        </div>
                    </div>
                    <div class="column medium-1 small-12"></div>
                </div>
            </item>
            <item2>
                <div class="row blocks__section row--wide">
                    <div class="column medium-5 small-12 blocks__section-box">
                        <je:repeater runat="server" source=".photoBlock">
                            <item>
                                <je:img runat="server" field=".photo" size="thumb" class="blocks__section-img blocks__section-img--{.parent.itr}" />
                            </item>
                        </je:repeater>
                    </div>

                    <div class="column medium-4 small-12 blocks__section-box">
                        <je:item runat="server" field=".text" tag="div" class="text" />

                        <div class="blocks__section-wrapper-icon">
                            <je:repeater runat="server" source=".icon">
                                <item>
                                    <je:img runat="server" field=".photo"  class="" />
                                </item>
                            </je:repeater>
                            <je:item runat="server" field=".note" tag="div" class="blocks__section-note" />
                        </div>
                    </div>
                    <div class="column medium-2 small-12"></div>
                </div>
            </item2>
            <item3>
                <div class="row blocks__section row--wide">
                    <div class="column medium-1 small-12"></div>
                    <div class="column medium-5 small-12 blocks__section-box">
                        <je:repeater runat="server" source=".photoBlock">
                            <item>
                                <je:img runat="server" field=".photo" size="thumb" class="blocks__section-img blocks__section-img--{.parent.itr}" />
                            </item>
                        </je:repeater>
                    </div>

                    <div class="column medium-4 small-12 blocks__section-box">
                        <je:item runat="server" field=".text" tag="div" class="text" />

                        <div class="blocks__section-wrapper-icon">
                            <je:repeater runat="server" source=".icon">
                                <item>
                                    <je:img runat="server" field=".photo"  class="" />
                                </item>
                            </je:repeater>
                            <je:item runat="server" field=".note" tag="div" class="blocks__section-note" />
                        </div>
                    </div>
                    <div class="column medium-2 small-12"></div>
                </div>
            </item3>
            <item4>
                <div class="row blocks__section row--wide">
                    <div class="column medium-6 small-12 blocks__section-box">
                        <je:repeater runat="server" source=".photoBlock">
                            <item>
                                <je:img runat="server" field=".photo" size="thumb" class="blocks__section-img blocks__section-img--{.parent.itr}" />
                            </item>
                        </je:repeater>
                    </div>

                    <div class="column medium-4 small-12 blocks__section-box">
                        <je:item runat="server" field=".text" tag="div" class="text" />

                        <div class="blocks__section-wrapper-icon">
                            <je:repeater runat="server" source=".icon">
                                <item>
                                    <je:img runat="server" field=".photo"  class="" />
                                </item>
                            </je:repeater>
                            <je:item runat="server" field=".note" tag="div" class="blocks__section-note" />
                        </div>
                    </div>
                    <div class="column medium-2 small-12"></div>
                </div>
            </item4>
        </je:repeater>
    </section>

    <!-- Section Activity -->
    <section class="canvas canvas--white">
        <div class="row row--wide">
            <div class="column medium-12 small-12">
                <div class="activ__section">
                    <je:repeater runat="server" source=".activity">
                        <item>
                            <div class="activ__section-img-wrapper">
                                <je:img runat="server" field=".photo" size="thumb" class="activ__section-img" />
                            </div>

                            <div class="activ__section-wrapper">
                                <je:item runat="server" field=".text" tag="div" class="text text--lg activ__section-title" />
                                <je:a runat="server" href="{.link}" class="btn mt-2">
                                    <je:item runat="server" field=".btn" />
                                </je:a>
                            </div>
                            
                            <div class="activ__section-container">
                                <div class="row">
                                    <div class="column medium-6 small-12">
                                        <je:item runat="server" field=".subTitle" tag="div" class="text text--lg activ__section-subtitle" />
                                    </div>
                                </div>
                                <div class="row">
                                    <je:repeater runat="server" source=".spendTime">
                                        <item>
                                            <div class="column xlarge-2 large-3 medium-6 small-12">
                                                <je:img runat="server" field=".photo" size="thumb" class="activ__section-photos" />
                                            </div>
                                        </item>
                                    </je:repeater>
                                </div>
                            </div>
                        </item>
                    </je:repeater>
                </div>
            </div>
        </div>
    </section>


    <!-- Section Explore -->
    <section class="canvas canvas--white">
        <div class="row explore__section">
            <je:repeater runat="server" source=".explore">
                <item>
                    <je:item runat="server" field=".title" tag="p" class="" />
                    <div class="row">
                        <je:repeater runat="server" source=".exploreMore">
                            <item>
                                <div class="column medium-6 small-12">
                                    <div class="explore__section-box explore__section-box--<je:item runat="server" field=".itr" />">
                                        <je:img runat="server" field=".photo" size="thumb" class="explore__section-photo" />
                                        <je:item runat="server" field=".btn" tag="p" class="explore__section-a" />
                                    </div>
                                </div>
                            </item>

                            <item2n>
                                <div class="column medium-6 small-12 explore__section-shift">
                                    <div class="explore__section-box explore__section-box--<je:item runat="server" field=".itr" />">
                                        <je:img runat="server" field=".photo" size="thumb" class="explore__section-photo" />
                                        <je:item runat="server" field=".btn" tag="p" class="explore__section-a" />
                                    </div>
                                </div>
                            </item2n>
                        </je:repeater>
                    </div>
                    
                </item>
            </je:repeater>
        </div>
    </section>
</je:content>
