import Vue from 'vue';
import Router from 'vue-router';
import ga from 'vue-ga';
import Home from 'components/Home';
import Location from 'components/Location';
import Accommodation from 'components/Accommodation';
import Gifts from 'components/Gifts';
import RSVP from 'components/RSVP';

Vue.use(Router);

const router = new Router({
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

// track routes only in production build
if (process.env.NODE_ENV === 'production') {
  ga(router, process.env.googleAnalyticsTrackingID);
}

export default router;
