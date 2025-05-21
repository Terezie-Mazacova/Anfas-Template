<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.VariableForm" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="head">
    <app:span runat="server" id="lbVarTitle" tag="h1" />
    <app:span runat="server" id="lbVarDesc" tag="p" class="desc" />
</div>

<div class="items">
    <app:divn runat="server" id="divPlace" tag="" />
</div>

<div class="taskbar">
    <app:hiddenint runat="server" id="hButtonAction" />
    <adm:adminspanbutton runat="server" id="btSaveStay" class="btIcon" action="3">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA0CAMAAAAjQe+pAAAAh1BMVEUAAAC0tLRKpABKpAC0tLS0tLS0tLS0tLS0tLRKpAC0tLS0tLS0tLS0tLRKpAC0tLS0tLRKpAC0tLS0tLRKpABKpAC0tLS0tLS0tLS0tLS0tLS0tLSisZi0tLRKpAC0tLS0tLS0tLS0tLRKpABKpAC0tLS0tLRKpABKpAC0tLRKpAC0tLRKpADV/qILAAAAK3RSTlMA8ICRYawI9/znvtA4JR5OLfm0oD0tEw7s5Nt5Ax3xlYZXcdROQHbcr2xQutJJzwAAAopJREFUWMPtldt2qjAQhoMNBEkQChLkYEFbe4L3f749k5QNbqVBpGvf9L9wLQL5nEz+mSH/Vcl6nSwOXbXt6iegD7/QReQcPB4OoWkcHZy7kCXNmqaJh1AKCxkt5zMFb0AsGEJDC9e4mMssXIzqVZ7nVBYYvVvMy6aNURbO5UU5BYNXtjOD6cFGz79++7566cxiVuWYpcpqDjWGTcV3Pi2ULW4SGqf+3vw1fEJvYe7BN7apouAirf10Jn6fpSZomuE/T1YIJwvMtR/AZ+EtgXpTGkp0Q6h7qCQxBSqgsqZm9Qi1Pa31QW84mgwfBodASAK+f50GPWKepIBt4dVCkB8ea5RyF/I/DerD+XO9i3kfkpwrrYHYa9dV4+phcwndPKy6+t0Nd7H6zIanDBddbsexh/0yIlqfbbve/AvdrNv2s7//xvLi2OYuErJTz6S4wmmqoxOV3Z0+eQRqcg5NgPmYdI62K6GjTinHuOiw0K3rZfyiqT1UM1+uNwyrbwcC4uRjdtsC9WnbQ7dPwNyOGZxDrEIZKYcLl2RMSEEqQvunEUlkOboxMp+MS8emoF3c4/KZasPODq0+pj6LCO0yPC4MceeQQP2aqe9t+25k6hgDnBsVMQidiVKuNajCKcORbKS+aeabkYkn5wQyuydm6jMyn81MbAeMgF+xkswZUGc3KwUgQpVJzbFinGZJhO6wzy2oEHuch+W6oCj27Rob3XLCZlir4eUvx/T10ORT5uwt051rtzaHpZgHgAVfWWCnZZgn1t2QzIC6iAMoMDP5ZS2cibZ/9x3ZOIfDv49qdkfUL+cCS59GyMgHoaVxo+RaM+Xq/fF5GxFRc7cicTkKj3bO5vJYbh/35Ef1B7y/blhRRtxSAAAAAElFTkSuQmCC" />
        <span class="caption"><adm:text runat="server" textNode="EditButtons/SaveStay" /></span>
        <span class="tip"><adm:text runat="server" textNode="EditButtons/SaveStayTip" /></span>
    </adm:adminspanbutton>
    <adm:adminspanbutton runat="server" id="btSave" class="btIcon" action="2">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA0CAMAAAAjQe+pAAAA0lBMVEUAAAC0tLRKpABKpAC0tLS0tLS0tLS0tLS0tLS0tLS5rrK0tLS0tLS0tLS0tLS0tLS0tLS0tLRKpAC0tLT/NYa0tLS0tLS0tLRKpAD/NYa0tLS0tLS0tLT/NYZKpABKpABKpAC0tLTFmqr/NYZKpAD/NYZKpABKpAC0tLS0tLS0tLRKpAD/NYb/NYZKpAD/NYb/NYb/NYa0tLT/NYb/NYb/NYb/NYZKpAC0tLT/NYZKpAD/NYZKpAC0tLRKpAD/NYb/NYb/NYZKpAC0tLRKpAD/NYZedGayAAAAQ3RSTlMA8JCACfxw5Bd6Bezdglo2Ixz79vDHuZZH/OGuTxDOWxgRA+KiX/Xd0ItjYEg3Dvbr1iokHPHCvp+QdXRmZS4tKQ6PNs4iSwAAAolJREFUWMO9lIlyokAQhsfsAKKoIAEPTBS8zxjNfWcH3v+VtscJOQraCJnNV0kVsfBLd8/fQ/4Tt9EnWrdypNEX1hKlZ8eC/r1E6fkJkUokrBeypffw299Klp4MW2B9liwl3LpeSpaSxVkUXS7lSsF6CcFaSJaS5TEs1EKylDyvwTokCM1mRumreNr2cWs3DLsZpFfRVfx4AdbohaTxJwz/ZpAGLyXybj2PWltMekRy8jpcElwqj9qNZ8VSOr2pyVA6jLFpLK3CH85PtbTBAKUTS2sKAxr0J05rAgq7sfmYqdmw4aOJld9paiBwza8HZbrwoWbmdRYN6FxNnr4KM2gX8zkDV0wzGakOWN18UhXarKblVIRAzeP0C3DMWPghFAU/h3QKx0ExKdV4eDNTKjM2w9d0xli5lE3oB6QD36K4lML/7JDAP0xMZx5PZ9vgE8WkYqpGmyfWm9HvatQLTBAf/dP1YPVZuhpcP4kAvFPQ99ZrOYyjaDYDdvkehOHp6kO6Og3DwW4zGGBrCuM41h4n78dQTb6MqvdIOPMQrL1Y2gNnOCecR+/tRYNPC7XSCRSZaOVOWLlUOO8SI4NyJ9hgK7u1TPAAonGPS3tjeHwgCfjaVpD7AwapkxTm3HoEsxyL3pPoMN4ituvt9Ca69TAc7X7q3fTBtbG7wEUKBZpg5dSbyAs6dm3BjtQIZh1x5whzkhrsH0lDJBOvFa9TpDa7FOYq5olL8fbzgbfv8rDlpIIdlCpu5TxQDYuUb0OpuQu1fTRsSjWPs6rg5VAHrBWaufcKOB30a5bBr3J9UzrcWNroGr8vrT1xc97u8oMR7ztFsodALbPMlNXguwlVPUM5XKgYXpWS3+AfwZKd1Eb47OEAAAAASUVORK5CYII=" />
        <span class="caption"><adm:text runat="server" textNode="EditButtons/Save" /></span>
        <span class="tip"><adm:text runat="server" textNode="EditButtons/Save" /></span>
    </adm:adminspanbutton>
    <adm:adminspanbutton runat="server" id="btAdd" class="btIcon save" action="1">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA0BAMAAADmsQKoAAAAGFBMVEUAAABLowBLowBLowBLowBLowBLowBLowB+nmm5AAAAB3RSTlMAgJDmK8gtGyJvRgAAAEpJREFUSMdjwAacTRiIBeKFxCstGlU6qnRU6eBW6iiIAOGlSBwRDKXm5ThAMSVKE5UQILwUiSMy+AJrVOmo0lGlqEopbDqQ0CABAPtoN/NC3t/bAAAAAElFTkSuQmCC" />
        <span class="caption"><adm:text runat="server" textNode="EditButtons/Add" /></span>
        <span class="tip"><adm:text runat="server" textNode="EditButtons/AddTip" /></span>
    </adm:adminspanbutton>
    <adm:adminspanbutton runat="server" id="btSaveAdd" class="btIcon" action="11">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA0CAMAAAAjQe+pAAAAtFBMVEUAAAC0tLS0tLRKpABKpAC0tLT/NYa0tLT/NYa0tLT/NYa4r7L/NYa0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLRKpAC0tLRKpAC0tLRKpAC0tLRKpAC0tLRKpAC0tLRKpAC0tLT/NYb/NYZKpABKpAC0tLS0tLRKpABKpABKpAC0tLT/NYb/NYb/NYZKpABKpAD/NYb/NYb/NYZKpAD/NYb/NYa0tLRKpAD/NYah2mtUAAAAOXRSTlMA8AiQgPy/49BwMARA3he2HXom68aXgTb79kdazmRbThkRoopj9/Xd0ahvYRBVJwzJvi7Zn5ePOzFXyQV1AAACU0lEQVRYw+2UiXKbMBCGsVJCqIs5zGFMfODb8dEkPSXe/726kqBuDeuATDqdSf7xjEGIjz3+lfa6WiwfP7cOfcyyH61D77Ls0zv0jUG7x49SX7JskV9e7dfbrKzlzyuhy6xCi2un8zYX0O/yy69V+Q+H7TdqzNi4degHxr6/BvTmf4dG261TQMk8iFqARj6ldF5AE7jxoyuhJKAg/VBAI52CAtJgtI7na84GEHHgnWrqBTEsbZya0OO30hx5BgBs5+9GOTYsGp6mqJ4FmZvl7ptQA6uneH75wJxUWWoCVFsNakKaSZVPpQlMFWbagTZj5gdTdFIF6BzaQTAoMcC8ChXtUzrCx3REab/bDJh2tQkkSHAogW9OxMY6IiPb4Ea0eEUxqKyqJTbaI/JSjG6H/taBrzw/zfZ/Qvezp2f+fzjt67gX43V8yqUbMQUJf88Yu9+foPt7xmZiMigoNnTK5TsXmDwfy/T4hJq2bNOOAXVaQKfAZDvZKjvfaPEioFSygSDd8wo9CKqASubD+WsuhLvBChsWY1mmrqccOl2XmXJsUdf2oJBu1YMdp95ALdcy97JcKG8Pm3WrOonxgLGV+A3G1YWzsLPARgIFDYHKNRgiG1zs2IIZiTSMuuLMFcbUIpjaygfSmXiseJzStc2hUFdZTxyKp68mPH1oVKgKDbFGmeJUVhIxMEulMYSqHGic4mOaqDATHQ+H+EANSePcQ2D66GuOOMVcr1uf2PVccV46F+zm52d5bVEhv3fxw2afNlbffCk1kmwtvT5Qt7YJ0f6FfgF7U4L957IKCgAAAABJRU5ErkJggg==" />
        <span class="caption"><adm:text runat="server" textNode="EditButtons/SaveAdd" /></span>
        <span class="tip"><adm:text runat="server" textNode="EditButtons/SaveAddTip" /></span>
    </adm:adminspanbutton>
    <adm:adminspanbutton runat="server" id="btSavePrev" class="btIcon" action="13">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA0CAMAAAAjQe+pAAAAyVBMVEUAAAC0tLS0tLRKpABKpAD/NYa0tLT/NYa0tLS7qrC0tLRKpAC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLRKpAC0tLS0tLRKpAC0tLS0tLRKpABKpAD/NYa0tLS0tLT/NYa0tLS0tLT/NYb/NYa0tLRKpAD/NYb/NYZKpABKpAD/NYa0tLRKpAD/NYb/NYa0tLRKpAD/NYZKpAC0tLRKpAD/NYb/NYZKpAD/NYb/NYb/NYb/NYb/NYa0tLRKpAD/NYZ9iksMAAAAQHRSTlMA8AiQgOH8D94E5Pkdeibsl4FxWjb2x0cYT9q7ZFsZFhGwqopuB/nRzLt3b2FJFhDRy6aeh760qGlcLiLTl5Flidu+lQAAAm5JREFUWMO9lmd7okAUhXGyS5AAohRj19jixra6KZstmfH//6iccSQNBmEkOY9fhPHllnMvap+qp8n6vGjmj91ut/gE5s9xscxfnFlw9v/BnBXLLP/jzHGxzCswr4pljjlz1jt/q5OhYMb0/c+J0MkuQQ+nuwmhvdes91UerdfzTtP6aGwdxjp5qX+PUb8xdqbl0QMva69QKPRb+KhQKKgTeaz+ZmBFUDJ0/ezUBaiLRGRIKR1GUA9fQj87dZ00/8SlkN6IoL5OIZdoJ8iaAhG4zmtNHTfApamlznRMAO6s942y7nDRdFSZlwYyr8W7P0INjEvFRdsS1YxbqgFqSw1aQ5pekk+FCWoqzH4JbZaZH6Yo9RWgQ7SDyKDEhHkVKlqhtC0f0zallXI+YL+sNZAgkUMJntnAwWxg0h5wdxoGKpq2UFxxhpqDNjkWo12iQlHrH2+3q7fQ1fb2URjgRSU7NV4rpFy6GVBo7+97xq5Xr9DVNWP3+8mgUGDqlCu0UpgGT7zm8AmtDUSb5gzUbgTtgsnmolWDw8F9EaRUMkWQ9scK3QDT7Apot4kvNx9/ZiPcqayw1Wgsk6gcGmdGYyt17RKFtJNuzDn1jLFtU+Qel43yLmWzbiQn0blg7PDpJBfOkO2CliRQqA4e14XsD4UtW1uYEV+TU+VMyMfUJt4QzpRT5Uzh2vxQ1BX1zA0V6atJnj4aVVWFVmWNGomtrCK+s0fJ748AoSoHGvTlY+qpMD1dHg4JQa2S3LlXwQxJ6uozbaecnVh27P2LImWhLsPDLs8scT5cpj54VKG5VRkdS414G0PPDtSNjUe0r9AzGWyVhDzVdmYAAAAASUVORK5CYII=" />
        <span class="caption"><adm:text runat="server" textNode="EditButtons/SavePrev" /></span>
        <span class="tip"><adm:text runat="server" textNode="EditButtons/SavePrevTip" /></span>
    </adm:adminspanbutton>
    <adm:adminspanbutton runat="server" id="btSaveNext" class="btIcon" action="12">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA0CAMAAAAjQe+pAAAA1VBMVEUAAAC0tLS0tLRKpABKpAC0tLT/NYb/NYa0tLS0tLS0tLS0tLS0tLS0tLRKpAC0tLS0tLS0tLS0tLS0tLS0tLTIl6lKpAC0tLS0tLS0tLS0tLS0tLT/NYa0tLRKpABKpAD/NYb/NYa0tLT/NYa0tLRKpAD/NYa0tLS0tLT/NYb/NYZKpABKpAD/NYa0tLRKpAD/NYa0tLS0tLT/NYZKpABKpABKpABKpABKpAD/NYZKpABKpAC0tLRKpAD/NYb/NYb/NYb/NYb/NYb/NYa0tLRKpAD/NYZN7LQ9AAAARHRSTlMA8AeQgPwP4OQX7N6WgF0j93FZNxwC+855ELHhrGNFGBfRw8K6ooyHbgf59d13UA7npk5H087JvnVpaU4wLiXcZV5aTn+p1nQAAAJ7SURBVFjDzZbpdqJAEIWxMyQqKIhgAEXUxNFoRseYfZut2/d/pLmNcpIcqAioc+YefwjiZy23qlX+ax33Jz/3Dl2uVqtv+4Ze9A9BPT4D9ethqM6+K3AYagfUzu5U5/i9ehH1Ykfm6/dVUp0doQ+rFE12hPbOTj4IgefyVbe7f6/WhahvjTvvVB0J8SU3c3do7weYD8peoa8nYP7KimsufDuGspHeJOJE4ye/syIHnHM9hlq4GKRil2D+yYZkOofUWQxtqhzSWdrc95fZmPYpEKZuvNXU0E3cOrWVwjLKAPjGx0YZPm6WjaLMiobMG8nuj1EDrVJwqw3AvEqz1BWo58WgDaRppftUmqBRhOmV0GbK/DBFySsAHaEdjIIytHCUn8mqnAf0mAacV1k+oOcoM/ktGip/c6Y4XjawF/jSnW1NVpSGyqpqbelYP/C2xeiW+Fpx61/uhvP30Pnw7mVjgFgll20bS8gsmxyK/D0U4nb+Bp3fCjGMJmP9IBy7ZWxtmY/WMOQwNvwgPkbETRhDwxsRHyuBv3lQk9UiqQxxqolU7oG5DtfQ8BoX94mSqYiV0c7EWCb0CNBlKKHhJd4+Jp+YqaRrKyikm36QgoraHoGZfqS6KG+FmvV2ehL1lhDT6NWqpxeuTe2Cc85rSrqeQJVqPREP1Ki1hRlpkn9PpgKadsmTDPOnpClyJkltIU6KuXZtfijqinrmgJLp06LTpxtFK2+jxvFWzi+5s8fpS89EqIUDNT3yI9UqwrRUhPPZQqmx3LnX6IUC2Zpc5e4zy0F8dstyX9qf2G2w2eWZxSMNYHBazrjKc6s6drblYy00NTtQ1RYWU/6F/gI8Mp6YUmK3/QAAAABJRU5ErkJggg==" />
        <span class="caption"><adm:text runat="server" textNode="EditButtons/SaveNext" /></span>
        <span class="tip"><adm:text runat="server" textNode="EditButtons/SaveNextTip" /></span>
    </adm:adminspanbutton>
    <adm:adminspanbutton runat="server" id="btCancel" class="link" action="99">
        <adm:text runat="server" textNode="EditButtons/Cancel" />
    </adm:adminspanbutton>
    <adm:adminspanbutton runat="server" id="btDelete" class="btIcon trash" action="9" onclick="BetJs.Jelly.Admin.ConfirmDeleteVar()">
        <i class="icon-trash"></i>
        <span class="caption"><adm:text runat="server" textNode="EditButtons/Delete" /></span>
        <span class="tip"><adm:text runat="server" textNode="EditButtons/Delete" /></span>
    </adm:adminspanbutton>
</div>
