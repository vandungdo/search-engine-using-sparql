import DashboardLayout from '@/pages/Layout/DashboardLayout.vue';

import Search from '@/pages/Search.vue';
import Visualization from '@/pages/Visualization.vue';
import TableList from '@/pages/TableList.vue';
import Typography from '@/pages/Typography.vue';
import Icons from '@/pages/Icons.vue';
import Notifications from '@/pages/Notifications.vue';

const routes = [
	{
		path: '/',
		component: DashboardLayout,
		redirect: '/search',
		children: [
			{
				path: 'search',
				name: 'Search',
				component: Search
			},
			{
				path: 'visualization',
				name: 'Visualization',
				component: Visualization
			},
			{
				path: 'table',
				name: 'Table List',
				component: TableList
			},
			{
				path: 'typography',
				name: 'Typography',
				component: Typography
			},
			{
				path: 'icons',
				name: 'Icons',
				component: Icons
			},
			{
				path: 'notifications',
				name: 'Notifications',
				component: Notifications
			}
		]
	}
];

export default routes;
