<%@ Control %>

<footer class="canvas canvas--footer">
    <div class="row text-left">
        <div class="column medium-4 small-12">
            <a class="consent-modal-button"><je:text runat="server" textNode="Cookies/detailed" /></a>
        </div>
    </div>

    <div class="row footer__loremIpsum">
        <je:repeater runat="server" source="footer.loremIpsum">
            <item>
                <div class="column medium-12 small-12">
                    <je:img runat="server" field=".photo" size="thumb" class="footer__spendtime-img" />
                </div>
            </item>
        </je:repeater>
    </div>

    <div class="row footer__secondPart">
        <je:repeater runat="server" source="footer.secondPart">
            <item>
                <div class="column medium-12 small-12">
                    <je:img runat="server" field=".photo" size="thumb" class="footer__secondPart-img" />
                    <je:item runat="server" field=".note" tag="p" class="foote__secondPart-note" />
                    <je:item runat="server" field=".contactData" tag="p" class="footer_secondPart-data" />

                    <je:repeater runat="server" source=".socialMedia">
                        <item>
                            <div class="column medium-12 small-12">
                                <je:img runat="server" field=".photo" size="thumb" class="footer__socialMedia-img" />
                            </div>
                        </item>
                    </je:repeater>

                    <je:item runat="server" field=".info" tag="p" class="footer__secondPart-info" />
                    <je:item runat="server" field=".secondInfo" tag="p" class="footer__secondPart-secondInfo" />
                    <je:img runat="server" field=".photoBg" size="thumb" class="footer__secondPart-photoBg" />
                </div>
            </item>
        </je:repeater>
    </div>
</footer>