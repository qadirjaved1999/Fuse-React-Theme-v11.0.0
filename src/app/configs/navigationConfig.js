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
    id: 'apps',
		title: 'Applications',
		subtitle: 'Qadir Javed here and I have create App.',
		type: 'group',
		icon: 'heroicons-outline:cube',
		// translate: 'APPLICATIONS',
    children: [
      {
				id: 'apps.academy',
				title: 'Academy',
				type: 'item',
				icon: 'heroicons-outline:academic-cap',
				url: '/apps/academy',
				// translate: 'ACADEMY'
			},
      {
				id: 'apps.calendar',
				title: 'Calendar',
				subtitle: '3 upcoming events',
				type: 'item',
				icon: 'heroicons-outline:calendar',
				url: '/apps/calendar',
				// translate: 'CALENDAR'
			},
      {
				id: 'apps.contacts',
				title: 'Contacts',
				type: 'item',
				icon: 'heroicons-outline:user-group',
				url: '/apps/contacts',
				// translate: 'CONTACTS'
			},
      {
        id: 'apps.ecommerce',
				title: 'ECommerce',
				type: 'collapse',
				icon: 'heroicons-outline:shopping-cart',
				// translate: 'ECOMMERCE',
        children: [
          {
						id: 'e-commerce-products',
						title: 'Products',
						type: 'item',
						url: '/apps/e-commerce/products',
						end: true
					},
					{
						id: 'e-commerce-product-detail',
						title: 'Product Detail',
						type: 'item',
						url: '/apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print'
					},
          {
						id: 'e-commerce-orders',
						title: 'Orders',
						type: 'item',
						url: '/apps/e-commerce/orders',
						end: true
					},
					{
						id: 'e-commerce-order-detail',
						title: 'Order Detail',
						type: 'item',
						url: '/apps/e-commerce/orders/1'
					}
        ]
      }
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
