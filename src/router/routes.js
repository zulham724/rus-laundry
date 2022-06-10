import { Notify } from "quasar";
import store from "src/store";
import multiguard from "vue-router-multiguard";

// middleware auth berfungsi untuk mengecek apakah user sudah login atau belum
const auth = (to, from, next) => {
  let isLoggedIn = store().getters["Auth/isLoggedIn"];
  // console.log("ini isLog", checkRole);
  if (isLoggedIn) {
    next();
  } else {
    next("/login");
  }
};

// ditaruh di route untuk cabang
const checkIfSlave = (to, from, next) => {
  let isSlave = store().getters["Auth/auth"];
  if (isSlave.role_id == 4) {
    return next();
  }
  Notify.create({
    message: "Anda tidak memiliki akses ke halaman ini",
    color: "negative",
    icon: "warning",
  });
  return next("/login");
};

//ditaruh di route untuk owner
const checkIfOwner = (to, from, next) => {
  let isOwner = store().getters["Auth/auth"];
  if (isOwner.role_id == 3) {
    return next();
  }
  Notify.create({
    message: "Anda tidak memiliki akses ke halaman ini",
    color: "negative",
    icon: "warning",
  });
  return next("/login");
};

const checkIfOwnerFirst = (to, from, next) => {
  let isOwner = store().getters["Auth/auth"];
  if (isOwner && isOwner.role_id == 3) {
    return next("/home-owner");
  }
  next();
};

const routes = [
  //LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN
  {
    path: "/login",
    component: () => import("pages/Login.vue"),
  },

  // Register
  {
    path: "/register",
    component: () => import("pages/Register.vue"),
  },

  //PARENTSLAVE PARENTSLAVE PARENTSLAVE PARENTSLAVE PARENTSLAVE PARENTSLAVE PARENTSLAVE PARENTSLAVE PARENTSLAVE PARENTSLAVE PARENTSLAVE
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter: multiguard([checkIfOwnerFirst, auth, checkIfSlave]),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/NewHome.vue"),
        // beforeEnter: multiguard([checkIfSlave]),
        keepalive: true,
      },

      {
        path: "/home-kosong",
        component: () => import("pages/HomeKosong.vue"),
      },

      {
        path: "/make-an-order",
        name: "pesanan",
        component: () => import("pages/MakeAnOrder.vue"),
        props: true,
      },

      {
        path: "/add-item",
        component: () => import("pages/add-item.vue"),
      },

      {
        path: "/income",
        name: "penghasilan",
        component: () => import("pages/income.vue"),
      },

      {
        path: "/menu",
        name: "menu",
        component: () => import("pages/Menu.vue"),
      },

      {
        path: "/transaction",
        name: "transaksi",
        component: () => import("pages/Transaction.vue"),
      },
    ],
  },

  //OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER OWNER
  {
    path: "/marketplace-add-product-owner",
    component: () => import("pages/MarketplaceAddProductOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/report-post-owner/:post_id",
    component: () => import("src/pages/ReportPostOwner.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/description-report-post-owner/:post_id",
    component: () => import("src/pages/DescriptionReportPostOwner.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/search-owner",
    component: () => import("src/pages/SearchOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  // {
  //     path: "/riwayat-owner",
  //     component: () =>
  //         import ("pages/RiwayatOwner.vue"),
  //     beforeEnter: multiguard([auth, checkIfOwner]),
  // },

  {
    path: "/payment-history-owner",
    component: () => import("pages/PaymentHistoryOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/detail-payment-history-owner",
    component: () => import("pages/DetailPaymentHistoryOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/checking-payment-status-owner/:paymentid",
    component: () => import("pages/CheckingPaymentStatusOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/succes-payment-status-owner/:paymentid",
    component: () => import("pages/SuccesPaymentStatusOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/failed-payment-status-owner",
    component: () => import("pages/FailedPaymentStatusOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/marketplace-add-product-edit-owner/:productid",
    component: () => import("pages/MarketplaceAddProductEditOwner.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/profile-other-2-owner/:postauthorid",
    component: () => import("src/pages/ProfileOther2Owner.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/edit-post-owner/:post_id",
    component: () => import("src/pages/EditPostOwner.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: `/post/:postid/comment-of-post-owner`,
    component: () => import("pages/CommentOfPostOwner.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/my-profile-owner",
    component: () => import("pages/MyProfileOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/make-post-owner",
    component: () => import("src/pages/MakePostOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/community-owner",
    component: () => import("pages/PostOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    // beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/marketplace-product-liked-owner",
    component: () => import("pages/MarketplaceProductLikedOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/change-no-whatsapp-owner",
    component: () => import("pages/ChangeNoWhatsAppOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/change-no-whatsapp2-owner",
    component: () => import("pages/ChangeNoWhatsapp2Owner.vue"),
    // beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/marketplace-add-product-item-owner",
    component: () => import("pages/MarketplaceAddProductItemOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/marketplace-detail-user-owner",
    component: () => import("src/pages/MarketplaceDetailUserOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/home-owner",
    component: () => import("pages/HomeOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/marketplace-detail-owner/:productid",
    component: () => import("src/pages/MarketplaceDetailOwner.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/marketplace-home-input-whatsapp",
    component: () => import("pages/marketplace-input-whatsapp.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/marketplace-home-owner",
    component: () => import("pages/MarketplaceHomeOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/detail-cabang-owner/:branchid",
    component: () => import("pages/DetailCabangOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/profile-owner",
    component: () => import("pages/ProfileOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/cabang-owner",
    component: () => import("pages/CabangOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/absensi-owner",
    component: () => import("pages/AbsensiOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/affiliate-owner",
    component: () => import("pages/AffiliateOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/paket-owner",
    component: () => import("pages/PaketOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/paket-owner-2",
    component: () => import("pages/PaketOwner2.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/detail-paket-owner/:branchid",
    component: () => import("pages/DetailPaketOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/detail-karyawan-owner/:branchid",
    component: () => import("pages/DetailKaryawanOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/detail-pelanggan-owner/:branchid",
    component: () => import("pages/DetailPelangganOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/buat-paket-owner/:branchid",
    component: () => import("src/pages/BuatPaketOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/edit-paket-owner/:serviceid",
    component: () => import("src/pages/EditPaketOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/buat-cabang-owner",
    component: () => import("src/pages/BuatCabangOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/buat-karyawan-owner/:branchid",
    component: () => import("src/pages/BuatKaryawanOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/edit-karyawan-owner/:employeeid",
    component: () => import("src/pages/EditKaryawanOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/buat-pelanggan-owner/:branchid",
    component: () => import("src/pages/BuatPelangganOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/edit-pelanggan-owner/:customerid",
    component: () => import("src/pages/EditPelangganOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  {
    path: "/detail-produk-owner",
    component: () => import("src/pages/DetailProdukOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
  },

  {
    path: "/detail-transaksi-owner/:branchid",
    component: () => import("src/pages/DetailTransaksiOwner.vue"),
    beforeEnter: multiguard([auth, checkIfOwner]),
    props: true,
  },

  //SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE SLAVE
  {
    path: "/employee",
    component: () => import("pages/Employee.vue"),
  },

  // {
  //     path: "/marketplace-home",
  //     component: () =>
  //         import ("pages/marketplace-home.vue"),
  //     beforeEnter: multiguard([auth, checkIfSlave]),
  //     props: true,
  // },

  {
    path: "/marketplace-home",
    component: () => import("pages/marketplace-home.vue"),
    beforeEnter: multiguard([auth]),
    props: true,
  },

  {
    path: "/attendanceScanPage",
    component: () => import("pages/attendanceScanPage.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/OrderScanPage",
    component: () => import("pages/OrderScanPage.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/addspend",
    component: () => import("pages/AddPengeluaran.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/filter-search",
    component: () => import("src/pages/FilterSearch.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/confirm-order",
    component: () => import("src/pages/ConfirmPackage2.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/list-type-of-clothes",
    component: () => import("src/pages/ListTypeOfClothes.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/basket",
    component: () => import("src/pages/Basket.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/:categoryid/choose-package",
    component: () => import("src/pages/ChoosePackage.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
    props: true,
  },

  {
    path: "/community",
    component: () => import("pages/Post.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
    // beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/my-profile",
    component: () => import("pages/myprofile.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/my-profile-like",
    component: () => import("pages/myprofileLike.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/postorderphoto/:order_id",
    component: () => import("pages/Camera.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/postpreorderphoto/:service_id",
    component: () => import("pages/CameraPreitem.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/new-home",
    component: () => import("pages/NewHome.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/follow-marketplace",
    component: () => import("pages/FollowMarketplace.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/followers-marketplace",
    component: () => import("pages/FollowersMarketplace.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/bulk-whatsapp-content",
    component: () => import("pages/BulkWhatsAppContent.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/bulk-whatsapp",
    component: () => import("pages/BulkWhatsApp.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/change-no-whatsapp",
    component: () => import("pages/ChangeNoWhatsApp.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/change-no-whatsapp2",
    component: () => import("pages/ChangeNoWhatsApp2.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/change-no-whatsapp3",
    component: () => import("pages/ChangeNoWhatsApp3.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/tagar",
    component: () => import("pages/Tagar.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/search-detail",
    component: () => import("pages/SearchDetail.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/like-of-course",
    component: () => import("pages/LikeOfCourse.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/history-of-course",
    component: () => import("pages/HistoryOfCourse.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/course-of-home",
    component: () => import("pages/CourseOfHome.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/detail-ranking",
    component: () => import("pages/DetailRanking.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/profile-of-course",
    component: () => import("pages/ProfileOfCourse.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/search-of-course",
    component: () => import("pages/SearchOfCourse.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/comment-of-course/:contentid",
    component: () => import("pages/CommentOfCourse.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/:contentid/detail-course",
    component: () => import("pages/DetailCourse.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/:contentid/detail-course2",
    component: () => import("pages/DetailCourse2.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/:moduleid/list-of-course",
    component: () => import("pages/ListOfCourse.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/notification",
    component: () => import("pages/Notification.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: `/post/:postid/comment-of-post`,
    component: () => import("pages/CommentOfPost.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/connect-to-printer",
    component: () => import("src/pages/ConnectToPrinter.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/detail-transaksi/:orderid",
    component: () => import("pages/DetailTransaksi.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/preview-detail-transaksi/:orderid",
    component: () => import("pages/PreviewDetailTransaksi.vue"),
    props: true,
  },

  {
    path: "/preview-detail-transaksi-2/:orderid",
    component: () => import("pages/PreviewDetailTransaksi2.vue"),
    props: true,
  },

  {
    path: "/preview-detail-transaksi-3/:shopid/:orderid",
    component: () => import("pages/PreviewDetailTransaksi3.vue"),
    props: true,
  },

  {
    path: `/:orderid/status-cucian/:serviceid`,
    component: () => import("pages/StatusCucian.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/loading-proses",
    component: () => import("pages/LoadingProses.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/rekening-bank",
    component: () => import("pages/RekeningBank.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/tambah-rekening",
    component: () => import("pages/TambahRekening.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/detail-rekening/:rekeningId",
    component: () => import("pages/DetailRekening.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
    props: true,
  },

  {
    path: `/order-code/:orderid`,
    component: () => import("pages/order-code.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
    props: true,
  },

  {
    path: "/success-attendance",
    component: () => import("pages/success-attendance.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/change-no-whatsapp",
    component: () => import("pages/ChangeNoWhatsApp.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/change-no-whatsapp2",
    component: () => import("pages/ChangeNoWhatsApp2.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/change-no-whatsapp3",
    component: () => import("pages/ChangeNoWhatsApp3.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/tagar",
    component: () => import("pages/Tagar.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/search-detail",
    component: () => import("pages/SearchDetail.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/like-of-course",
    component: () => import("pages/LikeOfCourse.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/history-of-course",
    component: () => import("pages/HistoryOfCourse.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/detail-ranking",
    component: () => import("pages/DetailRanking.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/profile-of-course",
    component: () => import("pages/ProfileOfCourse.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/search-of-course",
    component: () => import("pages/SearchOfCourse.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/comment-of-course/:contentid",
    component: () => import("pages/CommentOfCourse.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/:contentid/detail-course",
    component: () => import("pages/DetailCourse.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/:contentid/detail-course2",
    component: () => import("pages/DetailCourse2.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/:moduleid/list-of-course",
    component: () => import("pages/ListOfCourse.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/notification",
    component: () => import("pages/Notification.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: `/post/:postid/comment-of-post`,
    component: () => import("pages/CommentOfPost.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/connect-to-printer",
    component: () => import("src/pages/ConnectToPrinter.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/detail-transaksi/:orderid",
    component: () => import("pages/DetailTransaksi.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/preview-detail-transaksi/:orderid",
    component: () => import("pages/PreviewDetailTransaksi.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/preview-detail-transaksi-2/:orderid",
    component: () => import("pages/PreviewDetailTransaksi2.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: `/:orderid/status-cucian/:serviceid`,
    component: () => import("pages/StatusCucian.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/loading-proses",
    component: () => import("pages/LoadingProses.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/order-code",
    component: () => import("pages/order-code.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/success-attendance",
    component: () => import("pages/success-attendance.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/pilih-paket-awal",
    component: () => import("src/pages/PilihPaketAwal.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/pilih-pakaian-kosong",
    component: () => import("src/pages/PilihPakaianKosong.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/profile-account-setting",
    component: () => import("src/pages/profile-account-setting.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/laundry-details",
    component: () => import("src/pages/LaundryDetails.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/see-more-status-laundry",
    component: () => import("src/pages/SeeMoreStatusLaundry.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/add-clothes",
    component: () => import("src/pages/AddClothes.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/input-new-clothes",
    component: () => import("src/pages/InputNewClothes.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/add-package",
    component: () => import("src/pages/AddPackage.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: `/package-list-first`,
    component: () => import("src/pages/PackageListFirst.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/confirm-package",
    component: () => import("src/pages/ConfirmPackage.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/empty-basket",
    component: () => import("src/pages/EmptyBasket.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/customer",
    component: () => import("src/pages/Customer.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/second-basket",
    component: () => import("src/pages/SecondBasket.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/invoice-page/:orderid",
    component: () => import("src/pages/InvoicePage.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/attendance",
    component: () => import("src/pages/Attendance.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/attendance-menu",
    component: () => import("src/pages/AttendanceMenu.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/attendance-details/:employeeid",
    component: () => import("src/pages/AttendanceDetails.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/attendance-details-menu/:employeeid",
    component: () => import("src/pages/AttendanceDetailsMenu.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/detail-employee/:employeeid",
    component: () => import("src/pages/DetailEmployee.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/detail-customer/:customerid",
    component: () => import("src/pages/CustomerDetail.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/add-employee",
    component: () => import("src/pages/AddEmployee.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: `/:employeeid/edit-employee`,
    component: () => import("src/pages/EditEmployee.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/:employeeid/print-card",
    component: () => import("src/pages/PrintCard.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/attendance",
    component: () => import("src/pages/Attendance.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/:orderid/laundry-details-other",
    component: () => import("src/pages/LaundryDetailsOther.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/empty-package",
    component: () => import("src/pages/EmptyPackage.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/share-invoice",
    component: () => import("src/pages/ShareInvoice.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/make-post",
    component: () => import("src/pages/make-post.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/edit-post/:post_id",
    component: () => import("src/pages/edit-post.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/shared-post/:post_id",
    component: () => import("src/pages/SinglePostCommunity.vue"),
    props: true,
    beforeEnter: multiguard([auth]),
  },

  {
    path: "/media",
    component: () => import("src/pages/Media.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/take-camera",
    component: () => import("src/pages/TakeCamera.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/take-video",
    component: () => import("src/pages/TakeVideo.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/edit",
    component: () => import("src/pages/Edit.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/edit-profile",
    component: () => import("src/pages/EditProfile.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/followers",
    component: () => import("src/pages/Followers.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/following",
    component: () => import("src/pages/Following.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/report-post/:post_id",
    component: () => import("src/pages/ReportPost.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/description-report-post/:post_id",
    component: () => import("src/pages/DescriptionReportPost.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/report-account",
    component: () => import("src/pages/ReportAccount.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/description-report-account",
    component: () => import("src/pages/DescriptionReportAccount.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/search",
    component: () => import("src/pages/Search.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/marketplace-detail/:productid",
    component: () => import("src/pages/marketplace-detail.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/marketplace-detail-photo",
    component: () => import("src/pages/marketplace-detail-photo.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/marketplace-detail-shop",
    component: () => import("src/pages/marketplace-detail-shop.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/marketplace-detail-user",
    component: () => import("src/pages/marketplace-detail-user.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/shop-location",
    component: () => import("src/pages/ShopLocation.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/marketplace-search",
    component: () => import("pages/MarketplaceSearch.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/marketplace-detail-galery",
    component: () => import("pages/marketplace-detail-galery.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/marketplace-confirm-photo",
    component: () => import("pages/marketplace-confirm-photo.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/marketplace-add-product",
    component: () => import("pages/marketplace-add-product.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/marketplace-input-whatsapp",
    component: () => import("pages/marketplace-input-whatsapp.vue"),
    beforeEnter: multiguard([auth]),
  },
  {
    path: "/marketplace-owner-input-whatsapp",
    component: () => import("pages/marketplace-owner-input-whatsapp.vue"),
    beforeEnter: multiguard([auth]),
  },
  {
    path: "/marketplace-input-whatsapp2",
    component: () => import("pages/marketplace-input-whatsapp2.vue"),
    beforeEnter: multiguard([auth]),
  },
  {
    path: "/marketplace-add-product-item",
    component: () => import("pages/marketplace-add-product-item.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/marketplace-add-product-edit/:productid",
    component: () => import("pages/marketplace-add-product-edit.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/marketplace-product-liked",
    component: () => import("pages/marketplace-product-liked.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/marketplace-history-product",
    component: () => import("pages/marketplace-history-product.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/account-change-password",
    component: () => import("pages/account-change-password.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/account-forget-password",
    component: () => import("pages/account-forget-password.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },
  {
    path: "/marketplace-search-empty",
    component: () => import("pages/marketplace-search-empty.vue"),
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/profile-other-2/:postauthorid",
    component: () => import("src/pages/ProfileOther2.vue"),
    props: true,
    beforeEnter: multiguard([auth, checkIfSlave]),
  },

  {
    path: "/test-scan-a",
    component: () => import("src/pages/testScanA.vue"),
  },
  {
    path: "/mmm",
    component: () => import("src/pages/mmm.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
