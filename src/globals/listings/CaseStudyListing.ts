import { GlobalConfig } from 'payload/types';

import { icon } from '../../fields/icon';
import { title } from '../../fields/title';

const ProjectListing: GlobalConfig = {
    slug: 'project-listing',
    fields: [
        ...title,
        ...icon,
        {
            name: 'projects',
            type: 'relationship',
            relationTo: 'projects',
            hasMany: true
        }
    ]
};

export default ProjectListing;
