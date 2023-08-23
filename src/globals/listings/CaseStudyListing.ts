import { GlobalConfig } from 'payload/types';

import { icon } from '../../fields/icon';
import { title } from '../../fields/title';

const CaseStudyListing: GlobalConfig = {
    slug: 'case-study-listing',
    fields: [...title, ...icon]
};

export default CaseStudyListing;
