<%@ Control language="C#" %>
<je:a runat="server" href="/cs/home" class="header__logo">
  <je:img runat="server" src="/assets/img/logo-header.svg" class="header__logo-img" />
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
    <div class="header__collapse-info">
      <div class="header__collapse-info--contact">
        <je:img runat="server" src="/assets/img/phone-header.svg" class="header__collapse-contact--icon" />
        <je:item runat="server" field="common.phone" class="header__collapse-contact--number" />
      </div>
      
      <div class="blbla">
        <je:item runat="server" field="common.language" class="phine" />
      </div>
    </div>
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