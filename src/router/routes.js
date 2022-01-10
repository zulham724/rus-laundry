
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },

  {
    path: '/home',
    component: () => import('pages/Home.vue')
  },

  {
    path: '/home-kosong',
    component: () => import('pages/HomeKosong.vue')
  },

  {
    path: '/detail-transaksi',
    component: () => import('pages/DetailTransaksi.vue')
  },

  {
    path: '/status-cucian',
    component: () => import('pages/StatusCucian.vue')
  },

  {
    path: '/loading-proses',
    component: () => import('pages/LoadingProses.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
