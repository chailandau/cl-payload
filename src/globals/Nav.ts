import { GlobalConfig } from 'payload/types';

import { menuItem } from '../fields/menuItem';

const Nav: GlobalConfig = {
    slug: 'nav',
    fields: [
        ...menuItem,
        {
            name: 'footerCopyrightText',
            type: 'text',
            admin: {
                description:
                    'Use variable "%CURRENT_YEAR%" to signify current year.'
            }
        }
    ],
    admin: {
        description: 'Navigation that displays in header and footer.'
    }
};

export default Nav;
