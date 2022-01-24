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
                component: () =>
                    import ("pages/Home.vue"),
                keepalive: true
            },
            {
                path: "/home-kosong",
                component: () =>
                    import ("pages/HomeKosong.vue")
            },
            {
                path: "/make-an-order",
                component: () =>
                    import ("pages/MakeAnOrder.vue"),
                props: true
            },

            {
                path: "/add-item",
                component: () =>
                    import ("pages/add-item.vue")
            },

            {
                path: "/income",
                component: () =>
                    import ("pages/income.vue")
            },

            {
                path: "/employee",
                component: () =>
                    import ("pages/Employee.vue")
            },
        ]
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
        props: true
    },

    {
        path: "/loading-proses",
        component: () =>
            import ("pages/LoadingProses.vue")
    },

    {
        path: "/order-code",
        component: () =>
            import ("pages/order-code.vue")
    },

    {
        path: "/success-attendance",
        component: () =>
            import ("pages/success-attendance.vue")
    },


    {
        path: "/login",
        component: () =>
            import ("pages/Login.vue")
    },
    {
        path: "/pilih-paket-awal",
        component: () =>
            import ("src/pages/PilihPaketAwal.vue")
    },

    {
        path: "/pilih-pakaian-kosong",
        component: () =>
            import ("src/pages/PilihPakaianKosong.vue")
    },

    {
        path: "/filter-search",
        component: () =>
            import ("src/pages/FilterSearch.vue")
    },

    {
        path: "/laundry-details",
        component: () =>
            import ("src/pages/LaundryDetails.vue")
    },

    {
        path: "/see-more-status-laundry",
        component: () =>
            import ("src/pages/SeeMoreStatusLaundry.vue")
    },

    {
        path: "/add-clothes",
        component: () =>
            import ("src/pages/AddClothes.vue")
    },

    {
        path: "/input-new-clothes",
        component: () =>
            import ("src/pages/InputNewClothes.vue")
    },

    {
        path: "/list-type-of-clothes",
        component: () =>
            import ("src/pages/ListTypeOfClothes.vue")
    },

    {
        path: "/basket",
        component: () =>
            import ("src/pages/Basket.vue")
    },

    {
        path: "/:categoryid/choose-package",
        component: () =>
            import ("src/pages/ChoosePackage.vue"),
        props: true
    },

    {
        path: "/add-package",
        component: () =>
            import ("src/pages/AddPackage.vue"),
        props: true
    },

    {
        path: `/package-list-first`,
        component: () =>
            import ("src/pages/PackageListFirst.vue"),
        props: true
    },

    {
        path: "/confirm-package",
        component: () =>
            import ("src/pages/ConfirmPackage.vue")
    },

    {
        path: "/empty-basket",
        component: () =>
            import ("src/pages/EmptyBasket.vue")
    },

    {
        path: "/customer",
        component: () =>
            import ("src/pages/Customer.vue")
    },

    {
        path: "/second-basket",
        component: () =>
            import ("src/pages/SecondBasket.vue")
    },

    {
        path: "/confirm-order",
        component: () =>
            import ("src/pages/ConfirmPackage2.vue")
    },

    {
        path: "/invoice-page",
        component: () =>
            import ("src/pages/InvoicePage.vue")
    },

    {
        path: "/attendance",
        component: () =>
            import ("src/pages/Attendance.vue")
    },

    {
        path: "/attendance-details/:employeeid",
        component: () =>
            import ("src/pages/AttendanceDetails.vue"),
        props: true
    },

    {
        path: "/detail-employee/:employeeid",
        component: () =>
            import ("src/pages/DetailEmployee.vue"),
        props: true
    },

    {
        path: "/detail-customer/:customerid",
        component: () =>
            import ("src/pages/CustomerDetail.vue"),
        props: true
    },

    {
        path: "/add-employee",
        component: () =>
            import ("src/pages/AddEmployee.vue")
    },

    {
        path: `/:employeeid/edit-employee`,
        component: () =>
            import ("src/pages/EditEmployee.vue"),
        props: true
    },

    {
        path: "/:employeeid/print-card",
        component: () =>
            import ("src/pages/PrintCard.vue"),
        props: true
    },

    {
        path: "/attendance",
        component: () =>
            import ("src/pages/Attendance.vue")
    },

    {
        path: "/:orderid/laundry-details-other",
        component: () =>
            import ("src/pages/LaundryDetailsOther.vue"),
        props: true
    },

    {
        path: "/empty-package",
        component: () =>
            import ("src/pages/EmptyPackage.vue")
    },

    {
        path: "/share-invoice",
        component: () =>
            import ("src/pages/ShareInvoice.vue")
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("pages/Error404.vue")
    }
];

export default routes;