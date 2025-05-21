// =============================================================================
// 
// -----------------------------------------------------------------------------
/* jshint ignore:start */
var appBaseLang;
$(document).ready(function () {
    BetJs.Texts.IniEn(appBaseLang);
});
var BetJs;
(function (BetJs) {
    var Texts;
    (function (Texts) {
        function IniEn(lang) {
            // prepsani textu, pokud je jako jazyk vybrana anglictina
            if (lang === 'en') {
                for (var k in txs)
                    BetJs.Texts[k] = txs[k];
            }
        }
        Texts.IniEn = IniEn;
        ;
        // -----------------------------------------------------------------------------
        // definice textu pro cs
        var txs = {
            weekDaysAbbr: 'Su, Mo, Tu, We, Th, Fr, Sa',
            monthNames: 'January, February, March, April, May, June, July, August, September, October, November, December',
            prikazySendingData: 'sending data ...',
            dobaUnvalidMsg: 'Unvalid time value (duration must be in the format h:mm).',
            casUnvalidMsg: 'Unvalid time value (time must be in the format h:mm).',
            datumUnvalidMsg: 'Unvalid date (date must be in the format d/m/yyyy).',
            cenaUnvalidMsg: 'Unvalid value.'
        };
        // =============================================================================
    })(Texts = BetJs.Texts || (BetJs.Texts = {}));
})(BetJs || (BetJs = {}));
