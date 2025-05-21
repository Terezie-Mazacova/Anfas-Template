<%@ Page  %>
<%@ Register TagPrefix="app" Namespace="Bet.AppBase.UI" Assembly="BetAppBaseUI" %>
<%@ Register TagPrefix="cms" Namespace="Bet.JellyPot.UI" Assembly="JellyPot" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   SYSTEM "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />

		<title>JellyPot - help - rest</title>
		<link href="../admin.css" type="text/css" rel="stylesheet" media="all" />
		<app:jsTag runat="server" />
		<!-- TODO: aktualizovat text podle dokumentace -->
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
				<p class="nadpis">JellyPot - Help</p>
				<h1>Structured text</h1>
			</div>
			<div id="helpObsah">
<p>Structured text allows to edit the final form of a displayed text by inserting simple marks into the text.</p>

<h2>Paragraph</h2>
<p>Single text paragraphs can be detached with one empty line.</p>
<h3>Example</h3>
<div class="example">
This is the first paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.<br />
<br />
This is the second paragraph. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>

<p>Forced word wrap (text, line wrap?) onto a new line within one paragraph can be made by inserting | ("or", can be written by pressing AltGr+w).</p>
<h3>Example</h3>
<div class="example">
This will be on one line | and this will be on another line already
</div>

<h2>Hard spaces</h2>
<p>Unsuitable word wrap can be avoided by using a so called indivisible space. Words will be divided with a space, but there will occur no line brake. A hard space can be made by writing and underscore _.
<h3>Example</h3>
<div class="example">Our competitor reached 1st_place.</div>
<p>Hard spaces behind one-symbol prepositions and conjunctions will be completed by the system itself.</p>

<h2>Highlighting parts of a text</h2>
<p>A text that needs to be highlighted can be hightlighted by enclosing it inbetween star marks. Stronger highlighting can be made by using two star marks.</p>
<h3>Example</h3>
<div class="example">This will be *highlighted text* and this will be not. For stronger highlighting use **two star marks* behind each other.</div>
<h3>Will be displayed as</h3>
<div class="renderedExample">This will be <em>highlighted text</em> and this not. For stronger highlighting use <strong>two star marks</strong> behind each other.</div>
<p>As the example above shows, the *highlighted text* is usually depicted in italics and the **more strongly highlighted text** is depicted in bold. However, this is not a rule.</p>

<h2>First level title</h2>
<p>A first level title can be made by underlining an appropriate text with four or more equal sign. An empty line follows thereafter.</p>
<h3>Example</h3>
<div class="example">
First level title<br />
====<br />
<br />
Text continues here...
</div>

<h2>Second level title</h2>
<p>A second level title can be made by underlining an appropriate text with four or more hyphens (dashes). An empty line follows thereafter.</p>
<h3>Example</h3>
<div class="example">
Second level title<br />
----<br />
<br />
Text continues here...
</div>

<h2>Third level title</h2>
<p>A third level title can be made by underlining an appropriate text with four or more dots. An empty line follows thereafter.</p>
<h3>Example</h3>
<div class="example">
Third level title<br />
......<br />
<br />
Text continues here...
</div>

<h2>Bullets</h2>
<p>A block of bullets can be entered by using a hyphen mark in the beginning of each line. And again - it is necesarry to leave one empty line at the end of a block.</p>
<h3>Example</h3>
<div class="example">
- first bullet<br />
- second bullet<br />
- another bullet<br />
- last bullet<br />
<br />
Text continues here...
</div>

<h2>Links</h2>
<p>Links to other webpages can be inserted into the text. A link is written into square brackets. If an absolute link is used, it must be entered including a http://.
<h3>Example</h3>
<div class="example">
More detailed information can be found at [http://www.teamin.cz].
</div>
<h3>Will be displayed as</h3>
<div class="renderedExample">
More detailed information can be found at <a href="http://www.teamin.cz">http://www.teamin.cz</a>.
</div>
<p>If the text of the link and the link address differ, there must be put the link address first into the square brackets, then a "or" mark must follow, and finally the text of the link follows (still within the square brackets).</p>
<h3>Example</h3>
<div class="example">
More detailed information can be found at [http://www.teamin.cz|our site].
</div>
<h3>Will be displayed as</h3>
<div class="renderedExample">
More detailed information can be found at <a href="http://www.teamin.cz">our site</a>.
</div>
<p>An e-mail address can be written down using a prefix mailto:</p>
<h3>Example</h3>
<div class="example">
For more detailed information please write to [mailto:name@domain.com|name@domain.com].
</div>
<h3>Will be displayed as</h3>
<div class="renderedExample">
For more detailed information please write to <a href="mailto:jmeno@domena.cz">name@domain.com</a>.
</div>
			</div>
			
	</body>
</html>
