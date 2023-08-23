import { GlobalConfig } from 'payload/types';

import { icon } from '../../fields/icon';
import { title } from '../../fields/title';

const TestimonialListing: GlobalConfig = {
    slug: 'testimonial-listing',
    fields: [...title, ...icon]
};

export default TestimonialListing;
