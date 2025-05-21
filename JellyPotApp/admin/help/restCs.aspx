<%@ Page  %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   SYSTEM "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />

		<title>JellyPot - nápověda - rest</title>
		<link href="../admin.css" type="text/css" rel="stylesheet" media="all" />
		<app:jsTag runat="server" />
<style type="text/css">
.renderedExample {
	border: 1px solid #aaa;
	padding: 10px;
	width: 400px; 
	margin-top: 0.5em;
	margin-left: 2em;
	margin-bottom: 1em;
}
.example {
	font-family: "Courier New", Courier, monospace;
	border: 1px solid #aaa;
	padding: 10px;
	width: 400px; 
	margin-top: 0.5em;
	margin-left: 2em;
	margin-bottom: 1em;
}
#helpObsah h2	{
	font-size: 100%;
	margin-top: 2em; 
	margin-bottom: .5em;
}
h3	{
	font-size: 80%;
	margin-bottom: 0; padding-bottom: 0;
	margin-left: 2em;
}
</style>

	</head>	
	<body class="helpBody">
			<div id="helpHead">
				<p class="nadpis">JellyPot - nápověda</p>
				<h1>Strukturovaný text</h1>
			</div>
			<div id="helpObsah">
<p>Strukturovaný text umožňuje jednoduchými značkami vkládanými do textu upravovat výslednou podobu zobrazovaného textu.</p>

<h2>Odstavec</h2>
<p>Jednotlivé odstavce textu oddělujte jedním prázdným řádkem.</p>
<h3>Příklad</h3>
<div class="example">
Toto je první odstavec. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.<br />
<br />
Toto je druhý odstavec. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>

<p>Nucené zalomení textu na nový řádek v rámci jednoho odstavce uděláte vložením znaku | (svislítko, lze napsat jako AltGr+w).</p>
<h3>Příklad</h3>
<div class="example">
Toto bude na jednom řádku |a tohle už bude na dalším
</div>

<h2>Tvrdé mezery</h2>
<p>Nevhodného zalomení textu na konci řádku se můžete vyvarovat použitím tzv. nedělitelné mezery. Slova budou oddělena mezerou, ale nedojde zde k zlomení řádku. Tvrdou mezeru napište pomocí podtržítka _.
<h3>Příklad</h3>
<div class="example">Náš závodník obsadil 1._místo.</div>
<p>Tvrdé mezery za jednoznakovými předložkami a spojkami doplňuje systém sám.</p>

<h2>Zvýraznění části textu</h2>
<p>Text, který chcete zvýraznit uzavřete mezi znaky hvězdiček. Většího zvýraznění dosáhnete použitím dvou hvězdiček.</p>
<h3>Příklad</h3>
<div class="example">Toto bude *zvýrazněný text* a toto nikoliv. Pro větší zvýraznění použijte **dvě hvězdičky** za sebou.</div>
<h3>Zobrazí se jako</h3>
<div class="renderedExample">Toto bude <em>zvýrazněný text</em> a toto nikoliv. Pro větší zvýraznění použijte <strong>dvě hvězdičky</strong> za sebou.</div>
<p>Obvykle se, jak ukazuje příklad výše, zobrazuje *zvýrazněný text* kurzívou a **více zvýrazněný** tučně. Není to však pravidlo.</p>

<h2>Nadpis první úrovně</h2>
<p>Nadpisu první úrovně vytvoříte podtržením příslušného textu čtyřmi nebo více rovnítky. Po podtržení následuje prázdný řádek.</p>
<h3>Příklad</h3>
<div class="example">
Nadpis první úrovně<br />
====<br />
<br />
Zde pokračuje text...
</div>

<h2>Nadpis druhé úrovně</h2>
<p>Nadpisu druhé úrovně vytvoříte podtržením příslušného textu čtyřmi nebo více spojovníky (pomlčkami). Po podtržení následuje prázdný řádek.</p>
<h3>Příklad</h3>
<div class="example">
Nadpis druhé úrovně<br />
----<br />
<br />
Zde pokračuje text...
</div>

<h2>Nadpis třetí úrovně</h2>
<p>Nadpisu třetí úrovně vytvoříte podtržením příslušného textu čtyřmi nebo více tečkami. Po podtržení následuje prázdný řádek.</p>
<h3>Příklad</h3>
<div class="example">
Nadpis druhé úrovně<br />
......<br />
<br />
Zde pokračuje text...
</div>

<h2>Odrážky</h2>
<p>Blok odrážek se zaznamená pomocí znaku spojovníku na začátku každého řádku. Na konci bloku je pak opět nutné vynechat jeden prázdný řádek.
Lze použít i zanořený seznam. Položky nižší úrovně se mají spojovník odsazený.
</p>
<h3>Příklad</h3>
<div class="example">
- první odrážka<br />
- druhá odrážka<br />
&nbsp;&nbsp;- první zanořená odrázka<br />
&nbsp;&nbsp;- druhá zanořená odrázka<br />
- další odrážka<br />
- poslední odrážka<br />
<br />
Zde pokračuje text...
</div>

<h2>Odkazy</h2>
<p>Do textu můžete vkládat odkazy na jiné stránky. Odkaz se zapisuje do hranatých závorek. Pokud používáte absolutní odkaz, vložte ho včetně http://.
<h3>Příklad</h3>
<div class="example">
Podrobnější informace najdete na [http://www.teamin.cz].
</div>
<h3>Zobrazí se jako</h3>
<div class="renderedExample">
Podrobnější informace najdete na <a href="http://www.teamin.cz">http://www.teamin.cz</a>.
</div>
<p>Pokud se text odkazu a adresa odkazu liší, uvede se do hranatých závorek nejprve adresa a za znakem svislé čáry se doplní text odkazu.</p>
<h3>Příklad</h3>
<div class="example">
Podrobnější informace najdete na [http://www.teamin.cz|našich stránkách].
</div>
<h3>Zobrazí se jako</h3>
<div class="renderedExample">
Podrobnější informace najdete na <a href="http://www.teamin.cz">našich stránkách</a>.
</div>
<p>Mailovou adresu zapíšte pomocí předpony mailto:</p>
<h3>Příklad</h3>
<div class="example">
Pro podrobnější informace pište na [mailto:jmeno@domena.cz|jmeno@domena.cz].
</div>
<h3>Zobrazí se jako</h3>
<div class="renderedExample">
Pro podrobnější informace piště na <a href="mailto:jmeno@domena.cz">jmeno@domena.cz</a>.
</div>
			</div>
			
	</body>
</html>
