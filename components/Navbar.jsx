import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai"; // shopping icon

import { Cart } from "@/components";
import { useStateContext } from "@/context/StateContext";

export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div id="SiteContainer">
  <div id="SiteNavContainer" role="banner">
  <div class="marketing-nav-wrapper headroom headroom--verytop headroom--top marketing-nav-pinned" role="navigation" aria-label="Main Navigation">
    <a class="in-page-link skip-to-main visuallyhidden focusable" data-ga-event="Main Nav" data-ga-action="Skip to content" href="#Main">
      Skip to Content
    </a>
    <nav class="marketing-nav marketing-nav__primary marketing-nav--skin-light" id="ThemePreviewNav" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
      <ul class="marketing-nav__items marketing-nav__items__wrapper">
        
  <li>
    
<a class="marketing-nav__item marketing-nav__item--primary device-preview__back-button" itemprop="name" href="/themes/local/styles/light">
  <svg class="icon device-preview__back-button-icon" aria-hidden="true" focusable="false"> <use xlink:href="#icons-polaris-mobile-chevron" /> </svg>
  <span>
    Back
  </span>
</a>
  </li>
  <li class="device-preview-controls__wrapper hide--mobile">
    
  <ul class="marketing-nav__items">
    <li>
      <span class="example-presets-selector__label">
        Theme styles
      </span>
      <div class="popover-wrapper js-popover example-presets-selector" data-position="bottom" data-align="left">
        <button type="button" class="popover__trigger example-presets-selector__button popover-trigger" aria-haspopup="listbox" style="--palette-hex-code: #e7e7e7;" selector="true">
          <span class="listbox__selected-option-label">Light</span>
          <svg class="icon marketing-nav__arrow" aria-hidden="true" focusable="false"> <use xlink:href="#modules-caret-down" /> </svg>
</button>        <div class="popover"><div class="popover__content">
          <div
            id="DevicePreviewOptions"
            class="example-presets-selector__options carousel-nav mobile-carousel-nav"
            role="listbox"
            aria-activedescendant="DevicePreviewOptions-light">
              <a style="--palette-hex-code: #e7e7e7" class="example-presets-selector__option" role="option" aria-selected="true" data-option="light" data-option-label="Light" data-example-presets-hex-code="#e7e7e7" data-id="1845" data-ga-event="Main Nav" data-ga-action="Clicked" data-ga-label="preview-light-demo" href="/themes/local/styles/light/preview">
                <span class="example-presets-selector__option-label">
                  Light
                </span>
</a>              <a style="--palette-hex-code: #F7DD98" class="example-presets-selector__option" role="option" data-option="lively" data-option-label="Lively" data-example-presets-hex-code="#F7DD98" data-id="2241" data-ga-event="Main Nav" data-ga-action="Clicked" data-ga-label="preview-lively-demo" href="/themes/local/styles/lively/preview">
                <span class="example-presets-selector__option-label">
                  Lively
                </span>
</a>              <a style="--palette-hex-code: #686B61" class="example-presets-selector__option" role="option" data-option="dark" data-option-label="Dark" data-example-presets-hex-code="#686B61" data-id="2398" data-ga-event="Main Nav" data-ga-action="Clicked" data-ga-label="preview-dark-demo" href="/themes/local/styles/dark/preview">
                <span class="example-presets-selector__option-label">
                  Dark
                </span>
</a>          </div>
</div></div></div>    </li>
  </ul>

    <ul class="marketing-nav__items">
  <li>
    <button name="button" type="submit" class="marketing-nav__item marketing-nav__item--primary device-preview-controls__toggle device-preview-controls__toggle--push-right active" itemprop="preview" id="DesktopPreview" data-ga-event="theme-demo-page" data-ga-action="clicked" data-ga-label="desktop screen size">
      <svg class="icon wrapper device-preview-controls__icon device-preview-controls__icon--desktop" aria-hidden="true" focusable="false"> <use xlink:href="#icons-polaris-desktop" /> </svg>
      <span class='visuallyhidden'>Switch to desktop preview</span>
</button>  </li>
  <li>
    <button name="button" type="submit" class="marketing-nav__item marketing-nav__item--primary device-preview-controls__toggle" itemprop="preview" id="MobilePreview" data-ga-event="theme-demo-page" data-ga-action="clicked" data-ga-label="mobile screen size">
      <svg class="icon wrapper device-preview-controls__icon device-preview-controls__icon--desktop" aria-hidden="true" focusable="false"> <use xlink:href="#icons-polaris-mobile" /> </svg>
      <span class='visuallyhidden'>Switch to mobile preview</span>
</button>  </li>
</ul>

  </li>
  <li class="device-preview-controls__wrapper hide--tablet hide--desktop">
    
  <span class="color-style-selector-wrapper">
      
<a id="ExamplePresetsOption-" class="style-selector__option " style="--palette-hex-code: #e7e7e7" role="option" aria-label="Preset Light" aria-selected="true" data-ga-action="Select preset Light" data-ga-category="Preset selector" data-ga-label="Preset Light" href="/themes/local/styles/light/preview"></a>

      
<a id="ExamplePresetsOption-" class="style-selector__option " style="--palette-hex-code: #F7DD98" role="option" aria-label="Preset Lively" aria-selected="false" data-ga-action="Select preset Lively" data-ga-category="Preset selector" data-ga-label="Preset Lively" href="/themes/local/styles/lively/preview"></a>

      
<a id="ExamplePresetsOption-" class="style-selector__option " style="--palette-hex-code: #686B61" role="option" aria-label="Preset Dark" aria-selected="false" data-ga-action="Select preset Dark" data-ga-category="Preset selector" data-ga-label="Preset Dark" href="/themes/local/styles/dark/preview"></a>

  </span>

  </li>
  <li class="hide--mobile marketing-nav__items--install-theme">
    
<a class="marketing-button marketing-button--small theme-primary-cta" data-ga-action="Install theme from demo page" data-ga-label="Local - Light" data-trekkie-style-id="1845" data-trekkie-style-handle="light" data-trekkie-theme-handle="local" data-trekkie-theme-id="1651" data-ga-event="Preview theme" data-js-theme-action="login" href="https://themes.shopify.com/login">
  <span class="theme-listing-cta-mobile-label">Try theme</span>
  <span class="theme-listing-cta-desktop-label">Try theme</span>
</a>
  </li>

      </ul>
    </nav>
  </div>
</div>


  <div id="PageContainer">
    <main role="main" id="Main">
      <div class="device-preview">
        <div class="device-preview__container" id="PreviewFrameContainer">
          <iframe id="PreviewFrame" class="device-preview__iframe" src="https://local-theme-light-demo.myshopify.com?_bt=BAh7BkkiC19yYWlscwY6BkVUewhJIglkYXRhBjsAVEkiKWxvY2FsLXRoZW1lLWxpZ2h0LWRlbW8ubXlzaG9waWZ5LmNvbQY7AFRJIghleHAGOwBUSSIdMjAyNC0wOC0xN1QwNDo1NzowOS4zNjlaBjsAVEkiCHB1cgY7AFRJIh5wZXJtYW5lbnRfcGFzc3dvcmRfYnlwYXNzBjsARg%3D%3D--1d5ecca68c1f37d6e7e220ca64d1dd539099b286"></iframe>
        </div>
      </div>
    </main>
  </div>
</div>
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Ecommerce</Link>
      </p>
      <nav class="header__inline-menu">
      <ul class="menu-drawer__menu has-submenu list-menu" role="list">
        <li>
          <a
            id="HeaderDrawer-home"
            href="/"
            class="menu-drawer__menu-item list-menu__item link link--text focus-inset menu-drawer__menu-item--active"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            id="HeaderDrawer-about-us"
            href="/pages/about-us"
            class="menu-drawer__menu-item list-menu__item link link--text focus-inset"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            id="HeaderDrawer-necklace"
            href="/collections/necklace"
            class="menu-drawer__menu-item list-menu__item link link--text focus-inset"
          >
            Perfume
          </a>
        </li>
        <li>
          <a
            id="HeaderDrawer-bracelets"
            href="/collections/bracelets"
            class="menu-drawer__menu-item list-menu__item link link--text focus-inset"
          >
            Deodrants
          </a>
        </li>
        <li>
          <a
            id="HeaderDrawer-contact-us"
            href="/pages/contact"
            class="menu-drawer__menu-item list-menu__item link link--text focus-inset"
          >
            Contact Us
          </a>
        </li>
      </ul>
      </nav>
      <button
        type="button"
        className="cart-icon"
        // open the cart when the user clicks on the cart icon
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {/* only show the cart when user clicks on the cart icon above */}
      {showCart && <Cart />}
    </div>
  );
}
