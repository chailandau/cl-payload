import { GlobalConfig } from 'payload/types';

import { icon } from '../../fields/icon';
import { title } from '../../fields/title';

const ToolboxListing: GlobalConfig = {
    slug: 'toolbox-listing',
    fields: [
        ...title,
        ...icon,
        {
            name: 'description',
            type: 'textarea'
        },
        {
            name: 'tools',
            type: 'relationship',
            relationTo: 'tools',
            hasMany: true
        }
    ]
};

export default ToolboxListing;
