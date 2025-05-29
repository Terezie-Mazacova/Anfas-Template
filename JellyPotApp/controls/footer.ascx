<%@ Control %>

<footer class="canvas canvas--white">
    <!--
    <div class="row text-left">
        <div class="column medium-4 small-12">
            <a class="consent-modal-button"><je:text runat="server" textNode="Cookies/detailed" /></a>
        </div>
    </div>
    -->

    <div class="row row--wide">
        <div class="column medium-12 small-12">
            <div class="footer">
                <div class="row">
                    <je:repeater runat="server" source="footer.loremIpsum">
                        <item>
                            <div class="column medium-4 small-6">
                                <je:img runat="server" field=".photo" size="thumb" class="footer__spendtime-img" />
                            </div>
                        </item>
                    </je:repeater>
                </div>
                <div class="row footer__secondPart">
                    <je:repeater runat="server" source="footer.secondPart">
                        <item>
                            <div class="column medium-3 small-12">
                                <je:img runat="server" field=".photo" size="thumb" class="footer__secondPart-img" />
                                <je:item runat="server" field=".note" tag="p" class="foote__secondPart-note" />
                                <je:item runat="server" field=".contactData" tag="p" class="footer_secondPart-data" />
                            </div>
                            <div class="column medium-3 small-12">
                                <je:repeater runat="server" source=".socialMedia">
                                    <item>
                                            <je:img runat="server" field=".photo" size="thumb" class="footer__socialMedia-img" />
                                    </item>
                                </je:repeater>

                                <je:item runat="server" field=".info" tag="p" class="footer__secondPart-info" />
                            </div>
                            <div class="column medium-3 small-12">
                                <je:item runat="server" field=".secondInfo" tag="p" class="footer__secondPart-secondInfo" />
                            </div>
                        </item>
                    </je:repeater>
                </div>
            </div>
        </div>
    </div>
</footer>