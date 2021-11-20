import { createStore } from 'vuex'

import home from './home'
import calendarEvent from './calendarEvent'
import presidium from './presidium'
import experts from './experts'

export default createStore({
   modules: {
      home,
      calendarEvent,
      presidium,
      experts

   }
})
