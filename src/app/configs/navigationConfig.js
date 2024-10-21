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
    id:"dashboards",
    title:"Dashboards",
    subtitle:"Qadir Javed Unique dashboard designs",
    type:"group",
    icon:"heroicons-outline:clipboard-document-check", 
    children: [
      {
        id: "salechart",
        title: "Sales Chart",
        type: "item",
        icon: "heroicons-outline:chart-pie",
        url: 'dashboards/sale-chart'
      },
      {
        id: "team",
        title: "Team",
        type: "item",
        icon: "heroicons-outline:clipboard-document-check",
        url: 'dashboards/team'
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
        id: 'example-component',
        title: 'Example',
        translate: 'EXAMPLE',
        type: 'item',
        icon: 'heroicons-outline:star',
        url: '/example',
      },

    ]
  },
  {
		id: 'apps',
		title: 'Applications',
		subtitle: 'This is my Custom application designs',
		type: 'group',
		icon: 'heroicons-outline:cube',
		translate: 'APPLICATIONS',
		children: [
      {
        id: 'application-form',
        title: 'Application Form',
        type: 'item',
        icon: 'heroicons-outline:briefcase',
        url: '/application-form',
      },
      {
        id: 'pds',
        title: 'Project Data Sheet',
        type: 'item',
        icon: 'heroicons-outline:chart-pie',
        url: '/project-data-sheet',
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
    ]
  },
  {
    id: 'pages',
		title: 'Pages',
		subtitle: 'Custom made page designs',
		type: 'group',
		icon: 'heroicons-outline:document',
		children: [
      {
        id: 'green-data-sheet',
            title: 'GDS',
            type: 'item',
            icon: 'heroicons-outline:document',
            url: '/gds',
      },
      {
        id: 'internal-evaluation-form',
            title: 'Internal Evaluation Form',
            type: 'item',
            icon: 'heroicons-outline:star',
            url: '/internal-evaluation-form',
      },
      {
        id: 'qcm',
            title: 'QCM',
            type: 'item',
            icon: 'heroicons-outline:star',
            url: '/qcm',
      }
    ]
  }
];

export default navigationConfig;
