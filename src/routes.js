import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const Jobseekers = React.lazy(() => import('./views/pages/jobseeker/listJobseeker/ListJobseeker'));
const Jobseeker = React.lazy(() => import('./views/pages/jobseeker/detailJobseeker/DetailJobseeker'));
const CreateJobseeker = React.lazy(() => import('./views/pages/jobseeker/createJobseeker/CreateJobseeker'));
const UpdateJobseeker = React.lazy(() => import('./views/pages/jobseeker/updateJobseeker/UpdateJobseeker'));

const Majors = React.lazy(() => import('./views/pages/major/listMajor/ListMajor'));
const Major = React.lazy(() => import('./views/pages/major/detailMajor/DetailMajor'));
const CreateMajor = React.lazy(() => import('./views/pages/major/createMajor/CreateMajor'));
const UpdateMajor = React.lazy(() => import('./views/pages/major/updateMajor/UpdateMajor'));

const Organizations = React.lazy(() => import('./views/pages/organization/listOrganization/ListOrganization'));
const Organization = React.lazy(() => import('./views/pages/organization/detailOrganization/DetailOrganization'));
const CreateOrganization = React.lazy(() => import('./views/pages/organization/createOrganization/CreateOrganization'));
const UpdateOrganization = React.lazy(() => import('./views/pages/organization/updateOrganization/UpdateOrganization'));

const RecruitmentNewsList = React.lazy(() => import('./views/pages/recruitmentNews/listRecruitmentNews/ListRecruitmentNews'));
const RecruitmentNews = React.lazy(() => import('./views/pages/recruitmentNews/detailRecruitmentNews/DetailRecruitmentNews'));
const CreateRecruitmentNews = React.lazy(() => import('./views/pages/recruitmentNews/createRecruitmentNews/CreateRecruitmentNews'));
const UpdateRecruitmentNews = React.lazy(() => import('./views/pages/recruitmentNews/updateRecruitmentNews/UpdateRecruitmentNews'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/manage/jobseekers', exact: true, name: 'Jobseekers', component: Jobseekers},
  { path: '/manage/jobseekers/detail/:id', exact: true, name: 'Jobseeker Details', component: Jobseeker},
  { path: '/manage/jobseekers/create', exact: true, name: 'Jobseeker Create', component: CreateJobseeker},
  { path: '/manage/jobseekers/update/:id', exact: true, name: 'Jobseeker Update', component: UpdateJobseeker},
  { path: '/manage/majors', exact: true, name: 'Majors', component: Majors},
  { path: '/manage/majors/detail/:id', exact: true, name: 'Major Details', component: Major},
  { path: '/manage/majors/create', exact: true, name: 'Major Create', component: CreateMajor},
  { path: '/manage/majors/update/:id', exact: true, name: 'Major Update', component: UpdateMajor},
  { path: '/manage/organizations', exact: true, name: 'Organizations', component: Organizations},
  { path: '/manage/organizations/detail/:id', exact: true, name: 'Organization Details', component: Organization},
  { path: '/manage/organizations/create', exact: true, name: 'Organization Create', component: CreateOrganization},
  { path: '/manage/organizations/update/:id', exact: true, name: 'Organization Update', component: UpdateOrganization},
  { path: '/manage/recruitment-news', exact: true, name: 'Recruitment News', component: RecruitmentNewsList},
  { path: '/manage/recruitment-news/detail/:id', exact: true, name: 'Recruitment News Details', component: RecruitmentNews},
  { path: '/manage/recruitment-news/create', exact: true, name: 'Recruitment News Create', component: CreateRecruitmentNews},
  { path: '/manage/recruitment-news/update/:id', exact: true, name: 'Recruitment News Update', component: UpdateRecruitmentNews},
];

export default routes;
