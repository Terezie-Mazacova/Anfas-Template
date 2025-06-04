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
                <div class="row footer__section">
                    <div class="column medium-12 small-12">
                        <div class="footer__spendtime-box">
                            <je:repeater runat="server" source="footer.loremIpsum">
                                <item>
                                    <je:img runat="server" field=".photo" size="thumb" class="footer__spendtime-img" />
                                </item>
                            </je:repeater>
                        </div>
                    </div>
                    
                </div>

                <div class="row footer__secondpart">
                    <je:repeater runat="server" source="footer.secondPart">
                        <item>
                            <div class="column medium-12 small-12">
                                <je:img runat="server" field=".photo" class="footer__secondpart-img" />
                                <je:item runat="server" field=".note" tag="p" class="footer__secondpart-note" />
                            </div>
                            <div class="column medium-3 small-12">                                
                                <je:item runat="server" field=".contactData" tag="div" class="footer__secondpart-data" />
                            </div>
                            <div class="column medium-3 small-12 footer__secondpart-container">
                                <je:repeater runat="server" source=".socialMedia">
                                    <item>
                                        <je:a runat="server" href="{.link}" class="footer__secondpart-icons">
                                            <je:img runat="server" field=".photo" />
                                        </je:a>
                                    </item>
                                </je:repeater>
                            </div>

                            <div class="column medium-3 small-12">
                                
                                <div class="footer__secondpart-info">
                                    <je:repeater runat="server" source="footer.pages">
                                        <item>
                                            <je:aVar runat="server" href="stranka.aspx">
                                                <je:item runat="server" field=".name" />
                                            </je:aVar>
                                        </item>
                                    </je:repeater>
                                </div>
                            </div>

                            <div class="column medium-3 small-12">
                                <je:item runat="server" field=".secondInfo" tag="div" class="footer__secondpart-infos" />
                            </div>
                            
                        </item>
                    </je:repeater>
                </div>

                <je:repeater runat="server" source="footer.secondPart">
                    <item>
                        <je:img runat="server" field=".photoBg" class="footer__section_photobg" />
                    </item>
                </je:repeater>
            </div>
        </div>
    </div>
</footer>