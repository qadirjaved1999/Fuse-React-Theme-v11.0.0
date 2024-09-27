import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'example-component', //existing
    title: 'Example',
    translate: 'EXAMPLE',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: '/example',
  },
  {
    id: 'qadir-javed-component',
    title: 'Qadir Javed Team',
    type: 'collapse',
    icon: 'heroicons-outline:star',
    children: [
      {
        id: 'salman',
        title: 'Salman Khan',
        type: 'item',
        icon: 'heroicons-outline:star',
        url: '/salman'
      },
      {
        id: 'syed-shehroz',
        title: 'Syed Shehroz sohail',
        type: 'item',
        icon: 'heroicons-outline:star',
        url: '/syedshehroz'
      },
      {
        id: 'mubashir-javed',
        title: 'Mubashir Javed',
        type: 'item',
        icon: 'heroicons-outline:star',
        url: '/mubashir'
      },
    ]
  },
  {
    id: 'Potential-Projects', // new
    title: 'Potential Projects',
    type: 'item',
    icon: 'heroicons-outline:briefcase',
    url: '/potential',
  },
  {
    id: 'working-project',
    title: 'Working Project Tabs',
    type: 'collapse',
    icon: 'heroicons-outline:chart-bar',
    children: [
      {
        id: 'pql_1',
        title: 'PQL One',
        type: 'item',
        icon: 'heroicons-outline:document',
        url: '/working-project/pql1',
      },
      {
        id: 'pql_2',
        title: 'PQL Two',
        type: 'item',
        icon: 'heroicons-outline:user',
        url: '/working-project/pql2',
      },
      {
        id: 'pql_3',
        title: 'PQL Three',
        type: 'item',
        icon: 'heroicons-outline:chart-pie',
        url: '/working-project/pql3',
      },
    ]
  },
  {
    id: 'users-management',
    title: 'Users Management',
    type: 'collapse',
    icon: 'heroicons-outline:users',
    children: [
      {
        id: 'users-profile',
        title: 'Users Profile',
        type: 'item',
        icon: 'heroicons-outline:user',
        url: '/'
      },
      {
        id: 'user-roles',
        title: 'Users Roles',
        type: 'item',
        icon: 'heroicons-outline:briefcase',
        url: '/'
      }
    ]
  }
];

export default navigationConfig;
