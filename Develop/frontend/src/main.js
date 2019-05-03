import Vue from 'vue'
import VueRouter from 'vue-router'


import './plugins/vuetify'
import './plugins/axios'
import './plugins/session'

import getIp from './components/modules/direccion.js';

Vue.use(VueRouter)
Vue.config.productionTip = false

/*
------------------------------------
  Componentes
------------------------------------
*/
import master from './App.vue'

import login from './components/login/cuerpo.vue'
import registro from './components/registro/registro.vue'
 
import masterUsuario from './components/master/master.vue' 
import saldo from './components/saldo/saldo.vue'
import acreditar from './components/acreditar/acreditar.vue'
import debitar from './components/debitar/acreditar.vue'
import asociar from './components/asociar/asociar.vue'
import transferencia from './components/transferencia/transferencia.vue'
import eliminar from './components/eliminar/eliminar.vue'
/*
------------------------------------
  Las rutas
------------------------------------
*/

const routes = [{
  name: 'master',
  path: '/',
  component: master,
  props: {
    ip: getIp()
  },
  children: [


    {
      name: 'login',
      path: 'login',
      component: login,
      props: {
        ip: getIp()
      },
    }, {
      name: 'registro',
      path: 'registro',
      component: registro,
      props: {
        ip: getIp()
      },
    }, {
      name: 'masterUsuario',
      path: 'masterUsuario',
      component: masterUsuario,
      props: {
        ip: getIp()
      },
      children: [
        {
          name: 'saldo',
          path: 'saldo',
          component: saldo,
          props: {
            ip: getIp()
          },
        },{
          name: 'acreditar',
          path: 'acreditar',
          component: acreditar,
          props: {
            ip: getIp()
          },
        },{
          name: 'debitar',
          path: 'debitar',
          component: debitar,
          props: {
            ip: getIp()
          },
        },{
          name: 'asociar',
          path: 'asociar',
          component: asociar,
          props: {
            ip: getIp()
          },
        },{
          name: 'transferencia',
          path: 'transferencia',
          component: transferencia,
          props: {
            ip: getIp()
          },
        },{
          name: 'eliminar',
          path: 'eliminar',
          component: eliminar,
          props: {
            ip: getIp()
          },
        }
      ]
    }

  ]
}];
/*
------------------------------------
  Las rutas
------------------------------------
*/
const router = new VueRouter({
  mode: 'history',
  routes: routes
});


new Vue(Vue.util.extend({
  router
}, master)).$mount('#app');