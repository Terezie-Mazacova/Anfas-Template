<%@ Page language="c#" Codebehind="langExi.aspx.cs" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.LangExi" trace="false" validateRequest="false" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<cms:master runat="server" href="main.master" />

<cms:content runat="server" forRegion="htmlHeader">
	<script>
		$(function () {
			$('input[type="file"]').change(function (e) {
				$(this).closest('.file').find('.file-name').html($(this).val());
			});
		});
	</script>
</cms:content>

<cms:content runat="server" forRegion="main">
	<div class="head">
		<h1>Export a import obsahu jazykových polí</h1>
	</div>
	
	<app:div runat="server" id="divNormal">
		<%-- normalni stav, export import povolen --%>
		<div class="item admin">
			<h2>Export</h2>
			<p>
				Obsahem výsledného XML souboru jsou pole všech proměnných nebo kolekcí, která jsou
				označena v rámci <span class="code">site.config</span> označena jako jazykově závislá.
				Potlačit import některých kolekcí, proměnných nebo polí lze nastavením atributu
				<span class="code">exiOptions="noExport"</span>. Obsahy polí budou exportovány
				v aktuálně nastaveném jazyce. Při odesílání k překladateli je nutno přibalit také
				textový soubor!
			</p>
			<div class="controls">
				<adm:adminButton runat="server" id="btExport" textNode="LangExi/Export/Export" class="bt" />
			</div>
			<app:span runat="server" id="lbExportVysledek" tag="p" />
		</div>
		
		<div class="item admin">
			<h2>Import</h2>
			<app:div runat="server" id="divImportForm">
				<p><label>Importovat obsah pro jazyk: <app:StringSelect runat="server" id="selImportLanguage" /></label></p>
				<p><label>
						XML soubor s přeloženými texty:
						<span class="file">
								<span class="bt">Procházet</span>
								<input type="file" name="soub" />
								<span class="file-name">Žádný vybraný soubor</span>
						</span>
				</label></p>
				<p>&nbsp;</p>
				<div class="controls">
					<adm:adminButton runat="server" id="btImport" class="bt" textNode="LangExi/Import/Import" />
				</div>
			</app:div>
			<app:div runat="server" id="divImportVysledek">
				<p><a href="langExi.aspx">zopakovat import</a></p>
				<app:span runat="server" id="lbImportVysledek" tag="p" />
			</app:div>
		</div>
	</app:div>

	<app:div runat="server" id="divNoLangs">
		<div class="item admin">
			<%-- nejsou definovany zadne jazyky --%>
			<p>Export nebo import nelze provést, nejsou definovány žádné jazyky.</p>
		</div>
	</app:div>

</cms:content>
