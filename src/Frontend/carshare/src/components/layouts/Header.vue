<template>
  <header id="header">
    <nav role="navigation">
      <a href="javascript:void(0);" class="ic menu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </a>
      <a href="javascript:void(0);" class="ic close"></a>
      <ul class="main-nav">
        <li class="top-level-link">
          <a href="/">
            <span>Home</span>
          </a>
        </li>

        <li class="top-level-link">
          <a class="mega-menu">
            <span>Cars</span>
          </a>
          <div class="sub-menu-block">
            <div class="row">
              <div class="col-md-4 col-lg-4 col-sm-4">
                <h2 class="sub-menu-head">Brands</h2>
                <ul class="sub-menu-lists">
                  <li>
                    <a>Mercedes-Benz</a>
                  </li>
                  <li>
                    <a>Nissan</a>
                  </li>
                  <li>
                    <a>Toyota</a>
                  </li>
                  <li>
                    <a>BMW</a>
                  </li>
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-4">
                <h2 class="sub-menu-head">Models</h2>
                <ul class="sub-menu-lists">
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="top-level-link">
          <a>
            <span>
              Services
              <span></span>
            </span>
          </a>
        </li>

        <li class="top-level-link">
          <a>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>