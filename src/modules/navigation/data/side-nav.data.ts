import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [{
        text: 'ACCOUNTS',
        items: ['dashboard', 'accountsummary', 'ministatement', 'accountstatement'],
    }, {    
        text: 'Funds Transfer',
        //items: ['layouts', 'pages', 'managebenificiary', 'transferfunds'],
        items: ['managebenificiary', 'transferfunds'],
    }, {
        text: 'Requests',
        //items: ['charts', 'tables', 'issueatm', 'issuecheque'],
        items: ['issueatm', 'issuecheque'],
    }, {
        text: 'Profile',
        items: ['details', 'changepassword', 'logout'],
    }
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    accountsummary: {
        icon: 'tachometer-alt',
        text: 'Accounts Summary',
        link: '/dashboard',
    },
    ministatement: {
        icon: 'tachometer-alt',
        text: 'Mini Statement',
        link: '/tables',
    },
    accountstatement: {
        icon: 'tachometer-alt',
        text: 'Account Statement',
        link: '/tables',
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },{
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    managebenificiary: {
        icon: 'tachometer-alt',
        text: 'Manage Benificiary',
        link: '/dashboard',
    },
    transferfunds: {
        icon: 'tachometer-alt',
        text: 'Transfer Funds',
        link: '/dashboard',
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
    issueatm: {
        icon: 'tachometer-alt',
        text: 'Issue ATM Card',
        link: '/dashboard',
    },
    issuecheque: {
        icon: 'tachometer-alt',
        text: 'Issue Cheque Book',
        link: '/dashboard',
    },
    details: {
        icon: 'tachometer-alt',
        text: 'Personal Details',
        link: '/dashboard',
    },
    changepassword: {
        icon: 'tachometer-alt',
        text: 'Change Password',
        link: '/dashboard',
    },
    logout: {
        icon: 'tachometer-alt',
        text: 'Logout',
        link: '/auth/login',
    }
};
