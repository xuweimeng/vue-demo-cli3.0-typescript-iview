import Home from '@/views/Home.vue';

export const routeList = [
  {
    path: '/',
    name: 'home',
    component: Home,
    hide: true,
  },
  {
    path: '/',
    name: '微信文件',
    component: Home,
    icon: '',
    hide: false,
    childPath: 'wechatFile',
    children: [
      {
        path: '/wechatFile',
        name: '微信文件管理',
        icon: '',
        hide: false,
        component: () => import('../views/WechatFile.vue'),
      },
    ],
  },
  {
    path: '/',
    name: '项目文件管理',
    component: Home,
    icon: '',
    hide: false,
    children: [
      {
        path: '/project-file',
        name: '项目文件',
        icon: '',
        hide: false,
        component: () => import('../views/ProjectManage/ProjectFile.vue'),
      },
      {
        path: '/project-permission',
        name: '项目权限',
        icon: '',
        hide: false,
        component: () => import('../views/ProjectManage/ProjectPermission.vue'),
      },
    ],
  },
];
