import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

// 引入登录组件
import Login from "../views/Login"
import ForgetPassword from "../views/ForgetPassword"
import StudentIndex from "../views/StudentIndex"
import Menus from "../views/Menus"
import AdminIndex from "../views/AdminIndex"
import UserManage from "../views/UserManage"


export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "Login",
            component: Login
        },
        {
            path: "/forgetpassword",
            name: "ForgetPassword",
            component: ForgetPassword
        },
        {
            path: "/student",
            name: "StudentIndex",
            component: StudentIndex
        },
        {
            path: "/admin",
            name: "AdminIndex",
            component: AdminIndex
        },
        {
            path:"/menus",
            name: "Menus",
            component: Menus,
            children:[
                {
                    path:"usermanage",
                    name: "UserManage",
                    component: UserManage
                }
            ]
        },
    ]

})
