/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'SOGEFI-NAF-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'NAF_A': '&#xe900;',
		'NAF_B': '&#xe901;',
		'NAF_C': '&#xe902;',
		'NAF_D': '&#xe903;',
		'NAF_E': '&#xe904;',
		'NAF_F': '&#xe905;',
		'NAF_G': '&#xe906;',
		'NAF_H': '&#xe907;',
		'NAF_I': '&#xe908;',
		'NAF_J': '&#xe909;',
		'NAF_K': '&#xe90a;',
		'NAF_L': '&#xe90b;',
		'NAF_M': '&#xe90c;',
		'NAF_N': '&#xe90d;',
		'NAF_O': '&#xe90e;',
		'NAF_P': '&#xe90f;',
		'NAF_Q': '&#xe910;',
		'NAF_R': '&#xe911;',
		'NAF_S': '&#xe912;',
		'NAF_T': '&#xe913;',
		'NAF_U': '&#xe914;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/NAF_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
