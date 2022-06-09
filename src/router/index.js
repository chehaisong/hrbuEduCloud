import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

// 引入登录组件
import Login from "../views/Login"
// 引入忘记密码组件
import ForgetPassword from "../views/ForgetPassword"
//引入管理员首页组件
import AdminIndex from "../views/AdminIndex"
//引入管理员系统管理菜单
import SystemMenus from "../views/SystemMenus"
//引入管理员(系统管理->用户管理)组件
import UserManage from "../views/UserManage"
//引入管理员(系统管理->用户管理->查看用户信息)组件
import UserCheck from "../views/UserCheck"
//引入管理员(系统管理->用户管理->编辑用户信息)组件
import UserEdit from "../views/UserEdit"

//引入管理员(系统管理->职位管理)组件
import PositionManage from "../views/PositionManage"

//引入管理员教务管理菜单
import EduMenus from "../views/EduMenus"
//引入管理员(教务管理->学生管理)组件
import StudentManage from "../views/StudentManage"
//引入管理员(教务管理->学生管理->新增学生)组件
import AddStudent from "../views/AddStudent"
//引入管理员(教务管理->学生管理->学生信息)组件
import StudentCheck from "../views/StudentCheck"
//引入管理员(教务管理->学生管理->新增学生->编辑学生信息)组件
import StudentEdit from "../views/StudentEdit"
//引入管理员(教务管理->教师管理)组件
import TeacherManage from "../views/TeacherManage"
//引入管理员(教务管理->教师管理->新增教师)组件
import AddTeacher from "../views/AddTeacher"
//引入管理员(教务管理->教师管理->教师信息)组件
import TeacherCheck from "../views/TeacherCheck"
//引入管理员(教务管理->教师管理->教师信息->编辑教师信息)组件
import TeacherEdit from "../views/TeacherEdit"
//引入管理员(教务管理->班级管理)组件
import ClassManage from "../views/ClassManage"
//引入管理员(教务管理->班级管理->新增班级)组件
import AddClass from "../views/AddClass"
//引入管理员(教务管理->班级管理->班级信息)组件
import ClassCheck from "../views/ClassCheck"
//引入管理员(教务管理->班级管理->班级信息->编辑班级信息)组件
import ClassEdit from "../views/ClassEdit"

//引入管理员教学管理菜单
import TeachMenus from "../views/TeachMenus"
//引入管理员(教学管理->课程发布)组件
import CourseRelease from "../views/CourseRelease"

//引入管理员个人中心菜单
import AdmincenterMenus from "../views/AdmincenterMenus"
//引入管理员(个人中心->资料设置)组件
import AdminCenter from "../views/AdminCenter"
//引入管理员(个人中心->修改密码)组件
import AdmincenterChangepassword from "../views/AdmincenterChangepassword"


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
            //登录
            path: "/",
            name: "Login",
            component: Login
        },
        {
            // 忘记密码
            path: "/forgetpassword",
            name: "ForgetPassword",
            component: ForgetPassword
        },
        {
            // 学生首页
            path: "/student",
            name: "StudentIndex",
            component: StudentIndex,
        },
        {
            // 管理员首页
            path: "/admin",
            name: "AdminIndex",
            component: AdminIndex
        },
        {
            // 管理员系统管理菜单
            path: "/systemmenus",
            name: "SystemMenus",
            component: SystemMenus,
            children: [
                {
                    // 管理员(系统管理->用户管理)
                    path: "usermanage",
                    name: "UserManage",
                    component: UserManage
                },
                {
                    // 管理员(系统管理->用户管理->查看用户信息)
                    path: "usercheck",
                    name: "UserCheck",
                    component: UserCheck
                },
                {
                    // 管理员(系统管理->用户管理->编辑用户信息)
                    path: "useredit",
                    name: "UserEdit",
                    component: UserEdit
                },
                {
                    // 管理员(系统管理->职位管理)
                    path: "positionmanage",
                    name: "PositionManage",
                    component: PositionManage
                },
                // {
                //     path: "admincenter",
                //     name: "AdminCenter",
                //     component: AdminCenter
                // }
            ]
        },
        {
            // 管理员教务管理菜单
            path: "/edumenus",
            name: "edumenus",
            component: EduMenus,
            children: [
                {
                    // 管理员(教务管理->学生管理)
                    path: "studentmanage",
                    name: "StudentManage",
                    component: StudentManage,
                    // children: [
                    //     {
                    //         path: "addstudent",
                    //         name: "Addstudent",
                    //         component: AddStudent,
                    //     }              
                    // ],
                },
                {
                    // 管理员(教务管理->教师管理)
                    path: "teachermanage",
                    name: "TeacherManage",
                    component: TeacherManage
                },
                {
                    // 管理员(教务管理->班级管理)
                    path: "classmanage",
                    name: "ClassManage",
                    component: ClassManage
                },
                {
                    // 管理员(教务管理->学生管理->新增学生)
                    path: "addstudent",
                    name: "Addstudent",
                    component: AddStudent,
                },
                {
                    // 管理员(教务管理->学生管理->学生信息)组件
                    path: "studentcheck",
                    name: "StudentCheck",
                    component: StudentCheck,
                },
                {
                    // 管理员(教务管理->学生管理->新增学生->编辑学生信息)组件
                    path: "studentedit",
                    name: "StudentEdit",
                    component: StudentEdit,
                },
                {
                    // 管理员(教务管理->班级管理->新增班级)
                    path: "addclass",
                    name: "AddClass",
                    component: AddClass,
                },
                {   //(教务管理->班级管理->查看班级信息)组件
                    path: "classcheck",
                    name: "ClassCheck",
                    component: ClassCheck,
                  },
                  {   //(教务管理->班级管理->班级信息->编辑班级信息)组件
                    path: "classedit",
                    name: "ClassEdit",
                    component: ClassEdit,
                  },
                {
                    // 管理员(教务管理->教师管理->新增教师)
                    path: "addteacher",
                    name: "AddTeacher",
                    component: AddTeacher,
                },
                {
                    // 管理员(教务管理->教师管理->查看教师信息)
                    path: "teachercheck",
                    name: "TeacherCheck",
                    component: TeacherCheck,
                },
                {
                    // 管理员(教务管理->教师管理->编辑教师信息)
                    path: "teacheredit",
                    name: "TeacherEdit",
                    component: TeacherEdit,
                },
            ]
        },
        {
            // 管理员教学管理菜单
            path: "/teachmenus",
            name: "teachmenus",
            component: TeachMenus,
            children: [
                {
                    // 管理员(教学管理->课程发布)
                    path: "courserelease",
                    name: "courserelease",
                    component: CourseRelease,
                },
            ]
            
        },
        {
            // 管理员个人中心菜单
            path: "/admincentermenus",
            name: "AdmincenterMenus",
            component: AdmincenterMenus,
            children:[
                {
                    // 管理员(个人中心->资料设置)
                    path: "admincenter",
                    name: "AdminCenter",
                    component: AdminCenter
                },
                {
                    // 管理员(个人中心->修改密码)
                    path: "admincenterchangepassword",
                    name: "AdmincenterChangepassword",
                    component: AdmincenterChangepassword
                }
            ]
        },




        {
            // 学生上方菜单
            path: "/studentmenus",
            name: "StudentMenus",
            component: StudentMenus,
            children: [
                {
                    // 学生课程
                    path: "studentcourse",
                    name: "StudentCourse",
                    component: StudentCourse
                },
                {
                    // 学生考试测试 
                    path: "studenttest",
                    name: "StudentTest",
                    component: StudentTest
                },

            ]
        },

    ]

})
