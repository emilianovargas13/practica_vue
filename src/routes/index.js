import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    //la ruta base
    {
        path: "/",
        redirect: "/incio",
    },
    //rutas asociadas a los componentes
    {
        path: "/",
        component: {
            render(c) {
                return c("router-view");
            }
        },
        children: [
            {
                path: "/inicio",
                name: "inicio",
                component: () =>
                    import ("../components/Inicio.vue")
                
            },
            {
                path: "/main",
                name: "main",
                component: () =>
                    import ("../components/Main.vue")
            },
            {
                path: "/tercero",
                name: "tercero",
                component: () =>
                    import ("../components/Tercero.vue")
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;