<%@ Page language="C#" %>
<je:container runat="server" source="mainpage">
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
                <je:item runat="server" field=".title" tag="h1" class="title-1" />
                <je:item runat="server" field=".subtitle" tag="h2" class="title-2 mt-4" />
                <je:item runat="server" field=".text" tag="div" class="text mt-4" />
            </div>
        </div>
        <div class="row">
            <je:repeater runat="server" source=".recipes">
                <item>
                    <je:if runat="server" condition=".hide">
                        <then>
                            
                        </then>
                        <else>
                            <div class="column medium-4 small-12 recipe__item">
                                <je:img runat="server" field=".img" size="thumb" class="recipe__item-img" />
                                <je:item runat="server" field=".name" tag="h3" class="recipe__item-name" />
                                <je:aVar runat="server" href="recept.aspx">
                                    <je:item runat="server" field="labels.celyRecept" tag="div" class="recipe__item-link" />
                                </je:aVar>
                            </div>
                        </else>
                    </je:if>
                </item>
            </je:repeater>
        </div>
    </section>
</je:content>
