import { Authority } from '@/shared/security/authority';

const JhiUserManagementComponent = () => import('@/admin/user-management/user-management.vue');
const JhiUserManagementViewComponent = () => import('@/admin/user-management/user-management-view.vue');
const JhiUserManagementEditComponent = () => import('@/admin/user-management/user-management-edit.vue');
const JhiDocsComponent = () => import('@/admin/docs/docs.vue');
const JhiConfigurationComponent = () => import('@/admin/configuration/configuration.vue');
const JhiHealthComponent = () => import('@/admin/health/health.vue');
const JhiLogsComponent = () => import('@/admin/logs/logs.vue');
const JhiMetricsComponent = () => import('@/admin/metrics/metrics.vue');

export default [
  {
    path: '/admin/user-management',
    name: 'JhiUser',
    component: JhiUserManagementComponent,
  },
  {
    path: '/admin/user-management/new',
    name: 'JhiUserCreate',
    component: JhiUserManagementEditComponent,
  },
  {
    path: '/admin/user-management/:userId/edit',
    name: 'JhiUserEdit',
    component: JhiUserManagementEditComponent,
  },
  {
    path: '/admin/user-management/:userId/view',
    name: 'JhiUserView',
    component: JhiUserManagementViewComponent,
  },
  {
    path: '/admin/docs',
    name: 'JhiDocsComponent',
    component: JhiDocsComponent,
  },
  {
    path: '/admin/health',
    name: 'JhiHealthComponent',
    component: JhiHealthComponent,
    meta: { authorities: [Authority.ADMIN] },
  },
  {
    path: '/admin/logs',
    name: 'JhiLogsComponent',
    component: JhiLogsComponent,
    meta: { authorities: [Authority.ADMIN] },
  },
  {
    path: '/admin/metrics',
    name: 'JhiMetricsComponent',
    component: JhiMetricsComponent,
    meta: { authorities: [Authority.ADMIN] },
  },
  {
    path: '/admin/configuration',
    name: 'JhiConfigurationComponent',
    component: JhiConfigurationComponent,
  },
];
