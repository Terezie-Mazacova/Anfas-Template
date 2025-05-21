
var BetJs;
if (!BetJs) BetJs = {};
if (!BetJs.Jelly) BetJs.Jelly = {};

BetJs.Jelly.Client = (function () {
	var public = {}; // zkratka pro verejne cleny

	// -----------------------------------------------------------------------------
	public.OnEnter = function (el, e) {
		/// <summary> 
		/// funkce zabezpecuje odesilani pomoci klavesy enter. Funkce je volana
		///	z udalosti onKeyDown controlu VirtualForm
		/// </summary>
		if (e.keyCode === 13) {
			var $els = $(el).find('input[type=submit]');
			if ($els.length > 0) {
				$(el).append($('<input></input>').attr('name', $els.attr('name')).attr('type', 'hidden').attr('value', $els.attr('value')));
			}
		}
	};

	return public;

	// -----------------------------------------------------------------------------
})();
