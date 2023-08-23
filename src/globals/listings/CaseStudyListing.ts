import { GlobalConfig } from 'payload/types';

import { emoji } from '../../fields/emoji';
import { title } from '../../fields/title';

const CaseStudyListing: GlobalConfig = {
    slug: 'case-study-listing',
    fields: [...title, ...emoji]
};

export default CaseStudyListing;
