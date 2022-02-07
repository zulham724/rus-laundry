import store from "src/store";
import multiguard from "vue-router-multiguard";

const auth = (to, from, next) => {
    let isLoggedIn = store().getters["Auth/isLoggedIn"];
    // console.log(isLoggedIn);
    if (isLoggedIn) {
        next();
    } else {
        next("/login");
    }
};

const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        beforeEnter: multiguard([auth]),
        children: [{
                path: "",
                name: "home",
                component: () =>
                    import ("pages/Home.vue"),
                keepalive: true,
            },
            {
                path: "/home-kosong",
                component: () =>
                    import ("pages/HomeKosong.vue"),
            },
            {
                path: "/make-an-order",
                name: "pesanan",
                component: () =>
                    import ("pages/MakeAnOrder.vue"),
                props: true,
            },

            {
                path: "/add-item",
                component: () =>
                    import ("pages/add-item.vue"),
            },

            {
                path: "/income",
                name: "penghasilan",
                component: () =>
                    import ("pages/income.vue"),
            },

            {
                path: "/employee",
                component: () =>
                    import ("pages/Employee.vue"),
            },

            {
                path: "/menu",
                name: "menu",
                component: () =>
                    import ("pages/Menu.vue"),
            },
        ],
    },
    {
        path: "/community",
        component: () =>
            import ("layouts/SubLayout.vue"),
        children: [{
                path: "",
                component: import ('pages/Post.vue')
            },

            {
                path: "/course-of-home",
                component: () =>
                    import ("pages/CourseOfHome.vue"),
            },

            {
                path: "/marketplace-home",
                component: () =>
                    import ("pages/marketplace-home.vue"),
            },
        ]
    },

    {
        path: "/my-profile",
        component: () =>
            import ("layouts/MyProfileLayout.vue"),
        children: [{
                path: "",
                component: () =>
                    import ("pages/myprofile.vue"),
            },
            {
                path: "/my-profile-like",
                component: import ('pages/MyProfileLike.vue')
            },
        ]
    },

    {
        path: "/profile-other",
        component: () =>
            import ("layouts/ProfileOtherLayout.vue"),
        children: [{
                path: "",
                component: () =>
                    import ("pages/ProfileOther.vue"),
            },
            {
                path: "/profile-other-like",
                component: () =>
                    import ('pages/ProfileOtherLike.vue')
            }
        ]
    },

    {
        path: "/search-of-course",
        component: () =>
            import ("pages/SearchOfCourse.vue")
    },

    {
        path: "/comment-of-course",
        component: () =>
            import ("pages/CommentOfCourse.vue")
    },

    {
        path: "/detail-course",
        component: () =>
            import ("pages/DetailCourse.vue")
    },

    {
        path: "/list-of-course",
        component: () =>
            import ("pages/ListOfCourse.vue")
    },

    {
        path: "/notification",
        component: () =>
            import ("pages/Notification.vue")
    },

    {
        path: `/post/:postid/comment-of-post`,
        component: () =>
            import ("pages/CommentOfPost.vue"),
        props: true
    },

    {
        path: "/connect-to-printer",
        component: () =>
            import ("src/pages/ConnectToPrinter.vue"),
    },

    {
        path: "/detail-transaksi/:orderid",
        component: () =>
            import ("pages/DetailTransaksi.vue"),
        props: true,
    },

    {
        path: `/:orderid/status-cucian/:serviceid`,
        component: () =>
            import ("pages/StatusCucian.vue"),
        props: true,
    },

    {
        path: "/loading-proses",
        component: () =>
            import ("pages/LoadingProses.vue"),
    },

    {
        path: "/order-code",
        component: () =>
            import ("pages/order-code.vue"),
    },

    {
        path: "/success-attendance",
        component: () =>
            import ("pages/success-attendance.vue"),
    },

    {
        path: "/login",
        component: () =>
            import ("pages/Login.vue"),
    },
    {
        path: "/pilih-paket-awal",
        component: () =>
            import ("src/pages/PilihPaketAwal.vue"),
    },

    {
        path: "/pilih-pakaian-kosong",
        component: () =>
            import ("src/pages/PilihPakaianKosong.vue"),
    },

    {
        path: "/filter-search",
        component: () =>
            import ("src/pages/FilterSearch.vue"),
    },

    {
        path: "/laundry-details",
        component: () =>
            import ("src/pages/LaundryDetails.vue"),
    },

    {
        path: "/see-more-status-laundry",
        component: () =>
            import ("src/pages/SeeMoreStatusLaundry.vue"),
    },

    {
        path: "/add-clothes",
        component: () =>
            import ("src/pages/AddClothes.vue"),
    },

    {
        path: "/input-new-clothes",
        component: () =>
            import ("src/pages/InputNewClothes.vue"),
    },

    {
        path: "/list-type-of-clothes",
        component: () =>
            import ("src/pages/ListTypeOfClothes.vue"),
    },

    {
        path: "/basket",
        component: () =>
            import ("src/pages/Basket.vue"),
    },

    {
        path: "/:categoryid/choose-package",
        component: () =>
            import ("src/pages/ChoosePackage.vue"),
        props: true,
    },

    {
        path: "/add-package",
        component: () =>
            import ("src/pages/AddPackage.vue"),
        props: true,
    },

    {
        path: `/package-list-first`,
        component: () =>
            import ("src/pages/PackageListFirst.vue"),
        props: true,
    },

    {
        path: "/confirm-package",
        component: () =>
            import ("src/pages/ConfirmPackage.vue"),
    },

    {
        path: "/empty-basket",
        component: () =>
            import ("src/pages/EmptyBasket.vue"),
    },

    {
        path: "/customer",
        component: () =>
            import ("src/pages/Customer.vue"),
    },

    {
        path: "/second-basket",
        component: () =>
            import ("src/pages/SecondBasket.vue"),
    },

    {
        path: "/confirm-order",
        component: () =>
            import ("src/pages/ConfirmPackage2.vue"),
    },

    {
        path: "/invoice-page/:orderid",
        component: () =>
            import ("src/pages/InvoicePage.vue"),
        props: true
    },

    {
        path: "/attendance",
        component: () =>
            import ("src/pages/Attendance.vue"),
    },

    {
        path: "/attendance-details/:employeeid",
        component: () =>
            import ("src/pages/AttendanceDetails.vue"),
        props: true,
    },

    {
        path: "/detail-employee/:employeeid",
        component: () =>
            import ("src/pages/DetailEmployee.vue"),
        props: true,
    },

    {
        path: "/detail-customer/:customerid",
        component: () =>
            import ("src/pages/CustomerDetail.vue"),
        props: true,
    },

    {
        path: "/add-employee",
        component: () =>
            import ("src/pages/AddEmployee.vue"),
    },

    {
        path: `/:employeeid/edit-employee`,
        component: () =>
            import ("src/pages/EditEmployee.vue"),
        props: true,
    },

    {
        path: "/:employeeid/print-card",
        component: () =>
            import ("src/pages/PrintCard.vue"),
        props: true,
    },

    {
        path: "/attendance",
        component: () =>
            import ("src/pages/Attendance.vue"),
    },

    {
        path: "/:orderid/laundry-details-other",
        component: () =>
            import ("src/pages/LaundryDetailsOther.vue"),
        props: true,
    },

    {
        path: "/empty-package",
        component: () =>
            import ("src/pages/EmptyPackage.vue"),
    },

    {
        path: "/share-invoice",
        component: () =>
            import ("src/pages/ShareInvoice.vue"),
    },

    {
        path: "/make-post",
        component: () =>
            import ("src/pages/make-post.vue"),
    },

    {
        path: "/media",
        component: () =>
            import ("src/pages/Media.vue"),
    },

    {
        path: "/take-camera",
        component: () =>
            import ("src/pages/TakeCamera.vue"),
    },

    {
        path: "/take-video",
        component: () =>
            import ("src/pages/TakeVideo.vue"),
    },

    {
        path: "/edit",
        component: () =>
            import ("src/pages/Edit.vue"),
    },

    {
        path: "/edit-profile",
        component: () =>
            import ("src/pages/EditProfile.vue"),
    },

    {
        path: "/followers",
        component: () =>
            import ("src/pages/Followers.vue"),
    },

    {
        path: "/following",
        component: () =>
            import ("src/pages/Following.vue"),
    },

    {
        path: "/search-detail-person",
        component: () =>
            import ("src/pages/SearchDetailPerson.vue"),
    },

    {
        path: "/search-detail-tagar",
        component: () =>
            import ("src/pages/SearchDetailTagar.vue"),
    },

    {
        path: "/report-post",
        component: () =>
            import ("src/pages/ReportPost.vue"),
    },

    {
        path: "/description-report-post",
        component: () =>
            import ("src/pages/DescriptionReportPost.vue"),
    },

    {
        path: "/report-account",
        component: () =>
            import ("src/pages/ReportAccount.vue"),
    },

    {
        path: "/description-report-account",
        component: () =>
            import ("src/pages/DescriptionReportAccount.vue"),
    },

    {
        path: "/search",
        component: () =>
            import ("src/pages/Search.vue"),
    },

    {
        path: "/marketplace-detail",
        component: () =>
            import ("src/pages/marketplace-detail.vue"),
    },

    {
        path: "/marketplace-detail-photo",
        component: () =>
            import ("src/pages/marketplace-detail-photo.vue"),
    },
    {
        path: "/marketplace-detail-user",
        component: () =>
            import ("src/pages/marketplace-detail-user.vue"),
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("pages/Error404.vue"),
    },
];

export default routes;