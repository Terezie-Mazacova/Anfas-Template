using System;
using System.Web;

using Bet.Utils;
using Bet.JellyPot;

namespace AnFas.Redir {
	// ====================================================================
	/// <summary>
	/// 
	/// </summary> --------------------------------------------------------
	public class UrlRewriter : Bet.JellyPot.ExtLessUrlRewriteModule {

		protected override Bet.JellyPot.UrlRewriteModule GetCurrentModule ( ) {
			return this;
		}

		// ====================================================================
		/// <summary>
		/// 
		/// </summary> --------------------------------------------------------
		protected override RewriteInfo ParseUrl (Url url) {

			string[,] redirs = {
				{"/sitemap", "/sitemap.aspx"},
			};

			string p = url.pathWithoutApp.RemoveSuffix("/");
			string destUrl = null;

			for (int ip = 0; ip < redirs.GetLength(0); ++ip) {
				if (Strings.Compare(p, redirs[ip, 0], Case.Insenzitive)) {
					destUrl = redirs[ip, 1];
					break;
				}
			}
			// pro jistotu, aby nedoslo ke smycce presmerovani
			if (p == destUrl) destUrl = null;

			if (destUrl != null) {
				HttpContext.Current.Response.RedirectLocation = url.appPath + destUrl;
				HttpContext.Current.Response.StatusCode = 301;
				HttpContext.Current.Response.End();
			}

      return base.ParseUrl(url);
		}

    // =====================================================================

  }
}