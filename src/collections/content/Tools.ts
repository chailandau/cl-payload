import { CollectionConfig } from 'payload/types';

import { icon } from '../../fields/icon';
import { title, titleAsTitle } from '../../fields/title';
import { requiredField } from '../../utils/functions';

const Tools: CollectionConfig = {
    slug: 'tools',
    admin: {
        ...titleAsTitle
    },
    fields: [...requiredField(title), ...requiredField(icon)]
};

export default Tools;
