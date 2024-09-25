import SignInPage from './SignInPage';
import authRoles from '../../auth/authRoles';

const SignInPageRoute = {
	path: 'sign-in',
	element: <SignInPage />,
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	auth: authRoles.onlyGuest // []
};
export default SignInPageRoute;
