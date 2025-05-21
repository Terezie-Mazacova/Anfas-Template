<%@ Page Language="c#" CodeBehind="exi.aspx.cs" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.Exi" Trace="false" ValidateRequest="false" %>

<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<cms:master runat="server" href="main.master" />

<cms:content runat="server" forRegion="htmlHeader">
<script>
	$(function () {
		$('input[type="file"]').change(function () {
			$(this).closest('.file').find('.file-name').html($(this).val());
		});
	});
</script>
</cms:content>

<cms:content runat="server" forRegion="main">
	<div class="head">
		<h1><adm:text runat="server" textNode="Exi/Title" /></h1>
	</div>

	<div class="item admin">
		<h2><adm:text runat="server" textNode="Exi/Export/Title" /></h2>
		<p><adm:text runat="server" textNode="Exi/Export/Desc" /></p>
		<div><adm:text runat="server" textNode="Exi/Export/Notes" /></div>
		<app:div runat="server" id="divExplicitMode" tag="div"><adm:text runat="server" textNode="Exi/Export/ExportExplicit" /></app:div>
		<div class="controls">
			<adm:adminButton runat="server" id="btExport11" textNode="Exi/Export/Export11" class="bt" />
			<adm:adminButton runat="server" id="btExport21" textNode="Exi/Export/Export21" class="bt" />
			<adm:adminButton runat="server" id="btExport22" textNode="Exi/Export/Export22" class="bt" />
		</div>
		<app:span runat="server" id="lbExportVysledek" tag="p" />
	</div>

	<div class="item admin">
		<h2><adm:text runat="server" textNode="Exi/Import/Title" /></h2>
		<p><adm:text runat="server" textNode="Exi/Import/Desc" /></p>
		<div><adm:text runat="server" textNode="Exi/Import/Notes" /></div>
		<app:div runat="server" id="divImportForm">
			<div class="controls">
				<label><adm:text runat="server" textNode="Exi/Import/BrowseLabel" />
					<span class="file">
						<span class="bt"><adm:text runat="server" textNode="Exi/Import/Browse" /></span>
						<input type="file" name="soub" />
						<span class="file-name"><adm:text runat="server" textNode="Exi/Import/NoFile" /></span>
					</span>
				</label>
				<adm:adminButton runat="server" id="btImport" textNode="Exi/Import/Import" class="bt" />
			</div>
		</app:div>

		<app:div runat="server" id="divImportVysledek">
			<p><a href="exi.aspx"><adm:text runat="server" textNode="Exi/Import/Repeat" /></a></p>
			<p>&nbsp;</p>

			<app:span runat="server" id="lbImportVysledek" tag="p" />

			<div class="protocol">
				<app:simplerepeater runat="server" id="rpCheckImport">
					<headertemplate><ul></headertemplate>
					<item>
						<li>
							<app:rpItem runat="server" manipulatemethod="SetErrCssClass" tag="i" />
							<app:rpItem runat="server" method="GetHead" class="heading" />
							<app:rpitem runat="server" method="GetDetails" class="detail"/>
						</li>
					</item>
					<footertemplate></ul></footertemplate>
				</app:simplerepeater>
			</div>

		</app:div>
	</div>

</cms:content>