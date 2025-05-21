<%@ Page Language="c#" CodeBehind="imgColLoad.aspx.cs" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.ImgColLoad" Trace="false" ValidateRequest="false" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title><adm:text runat="server" textNode="Imgs/Title" /></title>
	<adm:adminStyleLink runat="server" href="/admin/assets/css/main.css" />
	<adm:AdminJsTagDialog runat="server" />
</head>

<app:body runat="server" class="popup bulk-upload">
	<form id="Form1" method="post" runat="server" class="jImgColUploadForm">
		<div class="dropArea">
			<div class="items iconArea">
				<div class="iconAreaContent jIconAreaContent">
				</div>
			</div>
			<p class="overlay" id="jBrowse">
				<strong><adm:text runat="server" textNode="Imgs/Bulk/DragImgs" /></strong>
				<adm:text runat="server" textNode="Imgs/Bulk/Or" />
				<label>
					<span class="file">
						<input type="file" multiple="true" name="file" size="72" />
						<span class="bt"><adm:text runat="server" textNode="Imgs/Bulk/Browse" /></span>
					</span>
				</label>
			</p>
		</div>
			<div class="controls">
				<div id="jButtons">
					<div class="buttons">
						<div id="butA">
							<adm:adminJsButton runat="server" class="bt save" textNode="Main/Upload" onclick="BetJs.Jelly.ImgColUpload.UploadStart();" id="btSave" writeid="true" />
							<adm:adminJsButton runat="server" class="link" textNode="Main/Cancel" onclick="BetJs.Jelly.ImgColUpload.Close();" />
						</div>
					</div>
					<div class="extras">
						<span onclick="BetJs.Jelly.ImgColUpload.ClearSelected();" class="link"><adm:text runat="server" textNode="Imgs/Bulk/DeleteSelected" /></span>
						<span onclick="BetJs.Jelly.ImgColUpload.ClearAll();" class="link"><adm:text runat="server" textNode="Imgs/Bulk/DeleteAll" /></span>
					</div>
				</div>
				<p id="jUploadStatus"></p>
			</div>
	</form>
</app:body>
</html>
