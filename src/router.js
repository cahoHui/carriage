import Vue from 'vue'
import Router from 'vue-router'

import Login from './login.vue'
import Device from './device.vue'
import RealTime from './realtime.vue'
import WarnSearch from './warnsearch.vue'
import WarnSet from './warnset.vue'
import DataSearch from './datasearch.vue'
import Systems from './system.vue'
import App from './App.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: '',
            path: '/',
            redirect: Login,
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        {
            name: 'app',
            path: '/carriage',
            component: App,
            children: [
                {
                    name: 'device',
                    path: '/device',
                    component: Device,
                },
                {
                    name: 'realtime',
                    path: '/realtime',
                    component: RealTime,
                },
                {
                    name: 'warnsearch',
                    path: '/warnsearch',
                    component: WarnSearch,
                },
                {
                    name: 'warnset',
                    path: '/warnset',
                    component: WarnSet,
                },
                {
                    name: 'datasearch',
                    path: '/datasearch',
                    component: DataSearch,
                },
                {
                    name: 'system',
                    path: '/system',
                    component: Systems,
                }
            ]
        },
    ]
})