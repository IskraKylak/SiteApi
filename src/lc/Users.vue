<template>
  <main class="main">
    <div class="container">
      <div class="import-excel">
        <h2 class="main_title">Користувачі</h2>
        <button class="import_btn">ЕКСПОРТ В EXCEL</button>
      </div>
      <table id="table_id1" class="display table_events">
        <thead>
        <tr>
          <th>ID</th>
          <th>ПІБ</th>
          <th>Спеціальність</th>
          <th>Дата реєстрації</th>
          <th>Номер телефона</th>
          <th>E-mail</th>
          <th>Дії</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>12</td>
          <td class="pib">Гармаш Юлія Юліївна</td>
          <td>Невролог</td>
          <td></td>
          <td>(050) 354-1672</td>
          <td>garm@ukr.net</td>
          <td class="dii">
            <div class="events_item-block">
              <a class="events_item" href="">
                <i class="fas fa-trash-restore-alt"></i>
              </a>
              <a class="events_item" href="update_user.html">
                <i class="fas fa-pencil-alt"></i>
              </a>
            </div>
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td class="pib">Гармаш Юлія Юліївна</td>
          <td>Невролог</td>
          <td></td>
          <td>(050) 354-1672</td>
          <td>garm@ukr.net</td>
          <td class="dii">
            <div class="events_item-block">
              <a class="events_item" href="">
                <i class="fas fa-trash-restore-alt"></i>
              </a>
              <a class="events_item" href="update_user.html">
                <i class="fas fa-pencil-alt"></i>
              </a>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<style scoped src="@/assets/lc/css/style.min.css">
</style>
