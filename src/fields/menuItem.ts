import { Field } from 'payload/types';

import { getMenuItemLabel } from '../utils/getMenuItemLabel';

export const menuItem = [
    {
        name: 'menuItems',
        type: 'array',
        admin: {
            components: getMenuItemLabel('Menu item')
        },
        fields: [
            {
                name: 'page',
                type: 'relationship',
                relationTo: 'pages',
                hasMany: false,
                admin: {
                    allowCreate: false,
                    description: 'Choose a page to link to.'
                }
            },
            {
                name: 'overridePageName',
                type: 'checkbox',
                admin: {
                    description: 'Override the page name with a custom label.'
                }
            },
            {
                name: 'customLabel',
                type: 'text',
                admin: {
                    condition: (
                        data,
                        siblingData: {
                            overridePageName: boolean;
                            linkType: string;
                        }
                    ) => (siblingData?.overridePageName === true ? true : false)
                }
            }
        ]
    }
] as Field[];
