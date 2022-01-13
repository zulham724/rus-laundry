
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

  {
    path: '/make-an-order',
    component: () => import('pages/MakeAnOrder.vue')
  },

  {
    path: '/pilih-paket-awal',
    component: () => import('src/pages/PilihPaketAwal.vue')
  },

  {
    path: '/pilih-pakaian-kosong',
    component: () => import('src/pages/PilihPakaianKosong.vue')
  },

  {
    path: '/filter-search',
    component: () => import('src/pages/FilterSearch.vue')
  },

  {
    path: '/laundry-details',
    component: () => import('src/pages/LaundryDetails.vue')
  },

  {
    path: '/see-more-status-laundry',
    component: () => import('src/pages/SeeMoreStatusLaundry.vue')
  },

  {
    path: '/add-clothes',
    component: () => import('src/pages/AddClothes.vue')
  },

  {
    path: '/input-new-clothes',
    component: () => import('src/pages/InputNewClothes.vue')
  },

  {
    path: '/list-type-of-clothes',
    component: () => import('src/pages/ListTypeOfClothes.vue')
  },

  {
    path: '/basket',
    component: () => import('src/pages/Basket.vue')
  },

  {
    path: '/choose-package',
    component: () => import('src/pages/ChoosePackage.vue')
  },

  {
    path: '/add-package',
    component: () => import('src/pages/AddPackage.vue')
  },

  {
    path: '/package-list-first',
    component: () => import('src/pages/PackageListFirst.vue')
  },

  {
    path: '/confirm-package',
    component: () => import('src/pages/ConfirmPackage.vue')
  },

  {
    path: '/empty-basket',
    component: () => import('src/pages/EmptyBasket.vue')
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
