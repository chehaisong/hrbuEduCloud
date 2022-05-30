import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

// 引入登录组件
import Login from "../views/Login"
// 引入忘记密码组件
import ForgetPassword from "../views/ForgetPassword"
//引入管理员(系统管理)菜单
import SystemMenus from "../views/SystemMenus"
//引入管理员(系统管理->用户管理)组件
import UserManage from "../views/UserManage"
//引入管理员(教务管理)菜单
import EduMenus from "../views/EduMenus"
//引入管理员(教务管理->学生管理)组件
import StudentManage from "../views/StudentManage"
//引入管理员(教务管理->教师管理)组件
import TeacherManage from "../views/TeacherManage"
//引入管理员(教务管理->班级管理)组件
import ClassManage from "../views/ClassManage"


//引入管理员首页组件
import AdminIndex from "../views/AdminIndex"
//引入职位管理组件
import PositionManage from "../views/PositionManage"
//引入学生首页组件
import StudentIndex from "../views/StudentIndex"
//引入学生上方菜单
import StudentMenus from "../views/StudentMenus"
//引入学生课程组件
import StudentCourse from "../views/StudentCourse"
//引入学生考试测试组件
import StudentTest from "../views/StudentTest"
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
            component: StudentIndex,
        },
        {
            path: "/admin",
            name: "AdminIndex",
            component: AdminIndex
        },
        {
            path:"/systemmenus",
            name: "SystemMenus",
            component: SystemMenus,
            children:[
                {
                    path:"usermanage",
                    name: "UserManage",
                    component: UserManage
                },
                {
                    path:"positionmanage",
                    name: "PositionManage",
                    component: PositionManage
                },
            ]
        },
        {
            path:"/edumenus",
            name: "edumenus",
            component: EduMenus,
            children:[
                {
                    path:"studentmanage",
                    name: "StudentManage",
                    component: StudentManage
                },
                {
                    path:"teachermanage",
                    name: "TeacherManage",
                    component: TeacherManage
                },
                {
                    path:"classmanage",
                    name: "ClassManage",
                    component: ClassManage
                }
            ]
        },

        {
            path:"/studentmenus",
            name: "StudentMenus",
            component: StudentMenus,
            children:[
                {
                    path:"studentcourse",
                    name: "StudentCourse",
                    component: StudentCourse
                },
                {
                    path:"studenttest",
                    name: "StudentTest",
                    component: StudentTest
                },

            ]
        },
        
    ]

})
