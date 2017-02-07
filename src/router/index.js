import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/Home';
import Location from 'components/Location';
import Accommodation from 'components/Accommodation';
import Gifts from 'components/Gifts';
import RSVP from 'components/RSVP';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/location',
      name: 'Location',
      component: Location,
    },
    {
      path: '/accommodation',
      name: 'Accommodation',
      component: Accommodation,
    },
    {
      path: '/gifts',
      name: 'Gifts',
      component: Gifts,
    },
    {
      path: '/rsvp',
      name: 'RSVP',
      component: RSVP,
    },
  ],
});
