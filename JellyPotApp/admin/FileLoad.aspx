<%@ Page 
	Language="c#" AutoEventWireup="false" Trace="false" ValidateRequest="false"	
	CodeBehind="fileLoad.aspx.cs" 
	Inherits="Bet.JellyPot.Admin.FileLoad" 
%>

<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>
		<adm:text runat="server" textNode="Files/Title" />
	</title>
	<adm:adminStyleLink runat="server" href="/admin/assets/css/main.css" />
	<adm:adminJsTagDialog runat="server" />
</head>

<app:body runat="server" class="popup simple-upload">
	<form method="post" runat="server" class="jFileUploadForm">
		<div class="clearfix">
			<div class="imgPreview">
				<div class="outer">
					<div class="inner" id="filePreview">
						<app:span runat="server" id="lbFileIcon" />
					</div>
				</div>
			</div>
			<div class="controls">
				<app:span runat="server" tag="h1" id="lbInfo" writeId="true" />
				<p>
					<app:div runat="server" id="divAlt" tag="label">
						<adm:text runat="server" textNode="Files/Alt" />
						<app:input runat="server" class="txt" id="txAlt" />
					</app:div>
					<label>
						<span class="file">
							<input type="file" name="fileField" />
							<span class="bt"><adm:text runat="server" id="lbSelectFile" textNode="Files/SelectFile" /></span>
						</span>
					</label>
				</p>
				<div class="buttons">
					<div id="jButtons">
						<adm:adminJsButton runat="server" class="bt save jBtnUpload" textNode="Main/Upload" onclick="BetJs.Jelly.FileUpload.UploadStart();" ID="btSave" writeID="true" />
						<adm:adminJsButton runat="server" class="link cancel" textNode="Main/Cancel" onclick="BetJs.Jelly.FileUpload.Close();" />
						<app:span runat="server" id="mDelete" class="icon-trash" onclick="BetJs.Jelly.FileUpload.RemoveFile();" />
					</div>
					<p id="jUploadStatus" class="status">&nbsp;</p>
				</div>
			</div>
		</div>
	</form>
</app:body>
</html>