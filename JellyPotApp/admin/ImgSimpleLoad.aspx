<%@ Page Language="c#" CodeBehind="imgSimpleLoad.aspx.cs" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.ImgSimpleLoad" Trace="false" ValidateRequest="false" %>

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
    <adm:AdminJsTagDialog runat="server" />
</head>

<app:body runat="server" class="popup simple-upload">
    <form method="post" runat="server" class="jImgSimpleUploadForm">
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
                    <app:div runat="server" id="divLink" tag="label">
                        <adm:text runat="server" textNode="Imgs/Url" />
                        <span class="note"><adm:text runat="server" textNode="Imgs/UrlHelp" /></span>
                        <app:input runat="server" id="txLink" class="txt" />
                    </app:div>
										<app:div runat="server" id="divSize" tag="p" style="display: none;">
											<label>
												<adm:text runat="server" textNode="Imgs/Size" />
                        <span class="note"><adm:text runat="server" textNode="Imgs/SizeHelp" /></span><br />
												<app:input runat="server" id="txWidth" class="txt txSize" /><span class="sizeSeparator">x</span><app:input runat="server" id="txHeight" class="txt txSize" /><span class="sizeSeparator">px</span>
											</label>
										</app:div>
                    <label>
                        <span class="file">
                            <input type="file" name="imgSimpleField" id="imgSimpleField" />
                            <span class="bt"><adm:text runat="server" id="lbSelectImg" textNode="Imgs/SelectImg" /></span>
                            <span class="filename"></span>
                        </span>
                    </label>
                </p>

                <div class="buttons">
                    <div id="jButtons">
                        <adm:adminJsButton runat="server" class="bt save jBtnUpload" textNode="Main/Upload" onclick="BetJs.Jelly.ImgSimpleUpload.UploadStart();" />
                        <adm:adminJsButton runat="server" class="link cancel" textNode="Main/Cancel" onclick="BetJs.Jelly.ImgSimpleUpload.Close();" />
                        <app:span runat="server" id="mDelete" class="icon-trash" onclick="BetJs.Jelly.ImgSimpleUpload.RemoveImg();" />
                    </div>
										<p id="jUploadStatus" class="status">&nbsp;</p>
                </div>
            </div>
        </div>
    </form>
</app:body>
</html>
