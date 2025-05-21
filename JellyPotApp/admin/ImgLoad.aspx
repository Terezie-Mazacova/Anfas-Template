<%@ Page Language="c#" CodeBehind="imgLoad.aspx.cs" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.ImgLoad" Trace="false" ValidateRequest="false" %>

<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>
		<adm:text runat="server" textNode="Imgs/Title" />
	</title>
	<adm:adminStyleLink runat="server" href="/admin/assets/css/main.css" />
	<adm:adminJsTagDialog runat="server" />
</head>

<app:body runat="server" class="popup simple-upload">
	<form method="post" runat="server" class="jImgUploadForm">
		<div class="clearfix">
			<div class="imgPreview">
				<div class="outer">
					<div class="inner" id="imgPreview">
						<app:span runat="server" id="lbImgTag" />
					</div>
				</div>
			</div>
			<div class="controls">
				<app:span runat="server" id="lbInfo" tag="h1" writeID="true" />
				<p>
					<app:div runat="server" id="divAlt" tag="label">
						<adm:text runat="server" textNode="Imgs/Alt" />
						<span class="note"><adm:text runat="server" textNode="Imgs/AltHelp" /></span>
						<app:input runat="server" id="txAlt" class="txt" />
					</app:div>
					<label>
						<span class="file">
							<input type="file" name="imgField" id="imgField" class="jImgBrowse" />
							<span class="bt"><adm:text runat="server" id="lbSelectImg" textNode="Imgs/SelectImg" /></span>
							<span class="filename"></span>
						</span>
					</label>
				</p>

				<div class="buttons">
					<div id="jButtons">
						<adm:adminJsButton runat="server" class="bt save jBtnUpload" textNode="Main/Upload" onclick="BetJs.Jelly.ImgUpload.UploadStart();" />
						<adm:adminJsButton runat="server" class="link cancel" textNode="Main/Cancel" onclick="BetJs.Jelly.ImgUpload.Close();" />
						<app:span runat="server" id="mDelete" class="icon-trash" onclick="BetJs.Jelly.ImgUpload.RemoveImg();" />
					</div>
					<p id="jUploadStatus" class="status">&nbsp;</p>
				</div>
			</div>
		</div>
	</form>
</app:body>
</html>