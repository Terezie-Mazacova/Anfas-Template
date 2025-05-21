<%@ Control %>
<script>
    window.orejimeConfig = {
        appElement: "main",
        cookieName: "<je:item runat='server' field='jelly.projectName' />Cookies",
        cookieExpiresAfterDays: 365,
        debug: true,
        privacyPolicy: "privacy-policy",
        logo: "/assets/img/logo.svg",
        lang: "<je:item runat='server' field='jelly.lang' />",
        translations: {
            <je:item runat='server' field='jelly.lang' />: {
                consentModal: {
                    title: "<je:text runat="server" textNode="Cookies/title" />",
                    <je:if runat="server" condition="cookies.modal">
                        <then>
                            description: "<je:item runat="server" field="cookies.modal" />",
                        </then>
                        <else>
                            description: "<je:text runat="server" textNode="Cookies/description" />",
                        </else>
                    </je:if>
                    privacyPolicy: { name: "<je:text runat="server" textNode="Cookies/privacyPolicy" />", text: "<%-- <je:text runat="server" textNode="Cookies/learnMore" /> {privacyPolicy}. --%> \n" },
                },
                consentNotice: {
                    title: "<je:text runat="server" textNode="Cookies/settings" />",
                    changeDescription: "<je:text runat="server" textNode="Cookies/change" />",
                    learnMore: "<je:text runat="server" textNode="Cookies/learnMoreSettings" />",
                    <je:if runat="server" condition="cookies.window">
                        <then>
                            description: "<je:item runat="server" field="cookies.window" />",
                        </then>
                        <else>
                            description: "<je:text runat="server" textNode="Cookies/descriptionSettings" />: {purposes}.\n",
                        </else>
                    </je:if>
                },
                accept: "<je:text runat="server" textNode="Cookies/accept" />",
                acceptTitle: "<je:text runat="server" textNode="Cookies/acceptTitle" />",
                acceptAll: "<je:text runat="server" textNode="Cookies/acceptAll" />",
                save: "<je:text runat="server" textNode="Cookies/save" />",
                saveData: "<je:text runat="server" textNode="Cookies/saveData" />",
                decline: "<je:text runat="server" textNode="Cookies/decline" />",
                declineAll: "<je:text runat="server" textNode="Cookies/declineAll" />",
                close: "<je:text runat="server" textNode="Cookies/close" />",
                enabled: "<je:text runat="server" textNode="Cookies/enabled" />",
                disabled: "<je:text runat="server" textNode="Cookies/disabled" />",
                app: {
                    optOut: { title: "(opt-out)", description: "<je:text runat="server" textNode="Cookies/optOutMore" />" },
                    required: { title: "(<je:text runat="server" textNode="Cookies/requiredSimple" />)", description: "<je:text runat="server" textNode="Cookies/requiredMore" />" },
                    purposes: "<je:text runat="server" textNode="Cookies/purposes" />",
                    purpose: "<je:text runat="server" textNode="Cookies/purpose" />",
                },
                poweredBy: " ",
                newWindow: "<je:text runat="server" textNode="Cookies/newWindow" />",

                <je:repeater runat="server" source="cookies.cookies">
                    <item>
                        "<je:item runat="server" field=".sid" />": {     
                        },
                    </item>
                </je:repeater>
                purposes: {
                    analytics: "<je:text runat="server" textNode="Cookies/analytics" />",
                    ads: "<je:text runat="server" textNode="Cookies/ads" />",
                    required: "<je:text runat="server" textNode="Cookies/required" />",
                },
            },
        },
        apps: [
            <je:repeater runat="server" source="cookies.cookies">
                <item>
                    {
                        name: "<je:item runat="server" field=".sid" />",
                        title: "<je:item runat="server" field=".name" />",
                        purposes: [<je:if runat="server" condition=".analytics"><then>"analytics",</then></je:if><je:if runat="server" condition=".security"><then>"security",</then></je:if><je:if runat="server" condition=".ads"><then>"ads"</then></je:if>],
                        cookies: ["<je:if runat="server" condition=".analytics"><then>analytics</then></je:if><je:if runat="server" condition=".security"><then>security</then></je:if><je:if runat="server" condition=".ads"><then>ads</then></je:if>"]
                    },
                </item>
            </je:repeater>
            {
                name: "always-on",
                title: "<je:text runat="server" textNode="Cookies/mandatory" />",
                purposes: [],
                required: true
            }
        ],
        categories: [
            {
                name: 'analytics',
                title: '<je:text runat="server" textNode="Cookies/analytics" />',
                description: "<je:text runat="server" textNode="Cookies/analyticsDesc" />",
                apps: [<je:repeater runat="server" source="cookies.cookies"><item><je:if runat="server" condition=".analytics"><then>'<je:item runat="server" field=".sid" />',</then></je:if></item></je:repeater>],
            },
            {
                name: 'ads',
                title: '<je:text runat="server" textNode="Cookies/ads" />',
                description: "<je:text runat="server" textNode="Cookies/adsDesc" />",
                apps: [<je:repeater runat="server" source="cookies.cookies"><item><je:if runat="server" condition=".ads"><then>'<je:item runat="server" field=".sid" />',</then></je:if></item></je:repeater>],
            },
            {
                name: 'required',
                title: '<je:text runat="server" textNode="Cookies/required" />',
                description: '<je:text runat="server" textNode="Cookies/requiredDesc" />',
                apps: ['always-on']
            }
        ]
    }
</script>

<je:repeater runat="server" source="cookies.cookies">
    <item>
        <script type="opt-in" data-type="application/javascript" data-name="<je:item runat="server" field=".sid" />">
            <je:item runat="server" field=".code" />
        </script>
    </item>
</je:repeater>