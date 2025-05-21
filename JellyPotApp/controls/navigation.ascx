<%@ Control language="C#" %>
<je:a runat="server" href="/cs/uvod" class="header__logo">
  <%@ Register tagPrefix="uc" tagName="logo" src="~/controls/logo.ascx" %>
  <uc:logo runat="server" />
</je:a>

<div class="header__collapse" id="headerCollapse" aria-hidden="true">
  <div class="header__collapse-helper">
    <je:repeater runat="server" source="navigation">
      <header>
        <nav class="nav">
          <ul class="nav__list">
      </header>
          <item>
            <li class="nav__item">
              <je:a runat="server" href="{.navLink}" class="nav__link">
                <je:item runat="server" field=".navItem" />
              </je:a>
            </li>
          </item>
      <footer>
          </ul>
        </nav>
      </footer>
    </je:repeater>
  </div>
</div>

<a id="toggleMenu" class="hamburger-wrapper">
  <span class="hamburger hamburger--3dx">
    <span class="hamburger-text">Menu</span>
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </span>
</a>