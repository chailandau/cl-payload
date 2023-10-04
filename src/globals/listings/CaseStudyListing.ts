import { GlobalConfig } from 'payload/types';

import { icon } from '../../fields/icon';
import { title } from '../../fields/title';

const CaseStudyListing: GlobalConfig = {
    slug: 'case-study-listing',
    fields: [
        ...title,
        ...icon,
        {
            name: 'caseStudies',
            type: 'relationship',
            relationTo: 'case-studies',
            hasMany: true
        }
    ]
};

export default CaseStudyListing;
