<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <div class="sidebar_arrow">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="sidebar-top_line line"></div>
    </div>
    <div class="sidebar-center">
      <router-link to="/lc-profile" class="sidebar-center_item sidebar_text">
        <i class="fas fa-address-book"></i>
        <div>Мій профіль</div>
      </router-link>
      <!-- <div class="sidebar-center_item sidebar_text">
            <i class="fab fa-redhat"></i>
            Мої курси
        </div> -->
      <router-link to="/lc-mysertificate" class="sidebar-center_item sidebar_text">
        <i class="fas fa-trophy"></i>
        <div>Мої сертифікати</div>
      </router-link>
    </div>

    <!-- <div class="block_sidebar_bottom sidebar_text">
        <div class="left_sidebar">
            <i class="fab fa-redhat"></i>
            <i class="fas fa-tv"></i>
        </div>
        <div class="right_sidebar">
            <a href="mycabinet.html">Мій кабінет</a>
            <a href="mysertificate.html">Мої сертифікати</a>
        </div>
    </div> -->



    <div class="sidebar-center_line line"></div>
    <div class="sidebar-bottom">
      <p class="sidebar-bottom_title">Керування</p>
      <!-- <a href="update_course.html" class="sidebar-center_item sidebar_text">
      <i class="fab fa-redhat"></i>
      <div>Курс</div>
    </a> -->
      <router-link to="/lc-events" class="sidebar-center_item sidebar_text">
        <i class="fas fa-calendar-day"></i>
        <div>Події</div>
      </router-link>
      <router-link to="/lc-users" class="sidebar-center_item sidebar_text">
        <i class="fas fa-user-friends"></i>
        <div>Користувачі</div>
      </router-link>
      <router-link to="/lc-static" class="sidebar-center_item sidebar_text">
        <i class="fas fa-signal"></i>
        <div>Статистика</div>
      </router-link>
    </div>

    <!-- <div class="sidebar-bottom">
        <p class="sidebar-bottom_title">Керування</p>
        <div class="block_sidebar_bottom sidebar_text">
            <div class="left_sidebar">
                <i class="fas fa-calendar-day"></i>
                <i class="fas fa-user-friends"></i>
                <i class="fas fa-signal"></i>
            </div>
            <div class="right_sidebar">
                <a href="events.html">Події</a>
                <a href="users.html">Користувачі</a>
                <a href="static.html">Статистика</a>
            </div>
        </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data: () => ({
    links: [
      { title: 'Счет', url: '/', exact: true },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      { title: 'Новая запись', url: '/record' },
      { title: 'Категории', url: '/categories' }
    ]
  })
}
</script>
<style scoped src="@/assets/lc/css/style.min.css">
</style>
