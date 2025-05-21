<%@ Control Language="c#" AutoEventWireup="false" Inherits="Bet.JellyPot.Admin.SpammerAdmin.MessageControl" %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="adm" Namespace="Bet.JellyPot.Admin" Assembly="JellyPot" %>

<div class="varArea">
  <app:span runat="server" id="lbVarTitle" tag="h1" class="varName" />
  <app:span runat="server" id="lbVarDesc" tag="p" class="varDesc" />

  <div class="varEditArea email">
	<div class="varAreaSection">
	    <span onclick="BetJs.Jelly.Admin.OpenSpammer(spamName);" class="linkBack">Zpět na seznam</span>&nbsp;
      <p class="emailHeader">
        <span class="item"><span class="caption">Předmět:</span> <strong><app:span runat="server" id="lbSubject" /></strong></span>
        <span class="item"><span class="caption">Stav:</span> <app:span runat="server" id="lbStatus" /></span>
	    <span onclick="BetJs.Jelly.Admin.OpenSpammerAkce('edit', spamID);" class="linkM">Editovat</span>&nbsp;
  	    <span onclick="BetJs.Jelly.Admin.OpenSpammerAkce('rcplist', spamID);" class="linkM">Příjemci a výsledky</span>
      </p>
    </div>
    <div class="varAreaSection">
      <h2>Testovací odeslání</h2>
      <p>
        <label>Kam poslat testovací náhled hromadného mailu <app:input runat="server" id="txMail" /></label>
        <adm:adminButton runat="server" class="bt" id="btSent" textNode="Spammer/Send" />
      </p>
      <app:span runat="server" id="lbSentResult" tag="p" />
    </div>

  	<app:div runat="server" id="divPlan" class="varAreaSection">
      <h2>Datum a čas plánovaného odeslání:</h2>
      <p>
        <label>Datum <small>(dd/mm/yyyy)</small> <app:input runat="server" id="txDatum" style="width: 7em; text-align: right;" /></label>
        <label>Čas <small>(hh:mm)</small> <app:input runat="server" id="txCas" style="width: 5em; text-align: right;" /></label>
        <adm:adminButton runat="server" class="bt" id="btPlan" textNode="Spammer/Set" />
      </p>
      <div class="pozn warn">
        Při odesílání postupujte uvážlivě. Rozeslání hromadné zprávy je poměrně náročné z hlediska výkonu serveru:
        <ol>
          <li>Nepřidávejte proto zbytečné nebo zbytečně velké přílohy.</li>
          <li>Pro odeslání volte dobu v pozdních nočních nebo brzkých ranních hodinách.</li>
        </ol>
      </div>
      <app:span runat="server" id="lbPlanWarn" tag="p" class="warn" />
    </app:div>

    <app:div runat="server" id="divSent">
      <h2>Detaily</h2>
      <p>
        <span class="caption">čas plánovaného odeslání:</span> <app:span runat="server" style="width: 8em;" id="lbPlan" />
        <span class="caption">čas skutečného počátku odesílání:</span> <app:span runat="server" id="lbBegin" />
        <span class="caption">čas skutečného ukončení odesílání:</span> <app:span runat="server" id="lbEnd" />
      </p>
    </app:div>
    <div class="cleaner"></div>
  </div>
</div>
