<template>
  <div id="app" class="main_page">
    <header class="main-header">
      <div class="container">
        <span class="burger"><span>☰</span></span>
        <div class="box_top">
          <router-link class="logo" to="/">
            <div class="strong">
              <img
                loading="lazy"
                width="210"
                height="51"
                src="@/assets/images/logo_white.png"
                alt=""
              />
            </div>
          </router-link>
          <div class="box_callback">
            <div class="box_enter">
              <a class="link" href="#">Вхід</a>
              <a class="link" href="#">Реєстрація</a>
            </div>
            <div class="box_messendger">
              <a class="link_facebook" href="https://www.facebook.com/"
                >facebook</a
              >
            </div>
            <div class="box_lang">
              <ul>
                <li>
                  <a href="#" class="lang-ua active">ua</a>
                </li>
                <li>
                  <a href="#" class="lang-en">en</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="box_bottom">
          <nav class="top-menu" id="navigation">
            <ul>
              <li>
                <router-link class="link link-2" to="/"
                  >Про асоціацію</router-link
                >
              </li>
              <li>
                <router-link class="link link-2" to="/presidium"
                  >Президіум</router-link
                >
              </li>
              <li>
                <router-link class="link link-2" to="/calendarevent"
                  >Календарь <br />заходів</router-link
                >
                <!-- <a class="link link-2" href="#">Календарь <br />заходів</a> -->
              </li>
              <li>
                <a class="link link-3" href="#">Галерея</a>
              </li>
              <li>
                <a class="link link-3" href="#">Журнали</a>
              </li>
              <li>
                <router-link class="link link-2" to="/bmo">БМО-БПР</router-link>
                <!-- <a class="link link-2" href="#">БМО-БПР</a> -->
              </li>
              <li class="link link-2">
                <router-link class="link link-2" to="/experts"
                  >Експерты</router-link
                >
              </li>
              <li>
                <router-link class="link link-2" to="/contact"
                  >Контакти</router-link
                >
              </li>
            </ul>
            <div class="box_enter">
              <a class="link" href="#">Реєстрація</a>
              <a class="link" href="#">Вхід</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <router-view />
    <footer class="footer">
      <div class="box_content container">
        <div class="box_left">
          <div class="box_adress">
            <h5>Адреса:</h5>
            <p>04053, м.Київ, Шевченківський,</p>
            <p>вул. Бульварно-Кудрявська,</p>
            <p>буд. 7-Б, кв. 90.</p>
          </div>
          <div class="box_mail">
            <h5>Email:</h5>
            <a href="mailto:asprofosvit@gmail.com">asprofosvit@gmail.com</a>
          </div>
          <div class="box_tel">
            <a class="tel" href="tel:+380443604550">+38 (044) 360-45-50</a>
            <a class="tel" href="tel:+380672337591">+38 (067) 233-75-91</a>
          </div>
        </div>
        <div class="box_right">
          <div class="box_top">
            <h4>Підпишіться на новини та залишайтесь в курсі!</h4>
            <div class="box_find">
              <form>
                <input type="text" class="input_email" placeholder="e-mail" />
                <input type="submit" class="input_submit" value="підписатись" />
              </form>
              <div class="box_messendger">
                <a class="link_facebook" href="https://www.facebook.com/"
                  >facebook</a
                >
              </div>
            </div>
          </div>
          <div class="box_bottom">
            <div class="box box-1">
              <ul>
                <li>
                  <a href="/">Про асоціацію</a>
                </li>
                <li>
                  <router-link class="link link-2" to="/presidium"
                    >Президіум</router-link
                  >
                </li>
                <li>
                  <router-link class="link link-2" to="/calendarevent"
                    >Календарь <br />заходів</router-link
                  >
                </li>
                <li>
                  <a href="#">Галерея</a>
                </li>
              </ul>
            </div>
            <div class="box box-2">
              <ul>
                <li>
                  <a href="#">Журнали</a>
                </li>
                <li>
                  <router-link class="link link-2" to="/bmo"
                    >БМО-БПР</router-link
                  >
                </li>
                <li>
                  <a href="#">ГЕО співпраці</a>
                </li>
              </ul>
            </div>
            <div class="box box-3">
              <ul>
                <li>
                  <a href="#">Реєстрація</a>
                </li>
                <li>
                  <a href="#">Вхід</a>
                </li>
                <li>
                  <a href="#">Особистий кабінет</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
</script>

<style lang="scss">
</style>
