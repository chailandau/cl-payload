import { CollectionConfig } from 'payload/types';

import { coloredSubhead } from '../../fields/coloredSubhead';
import { heading, headingAsTitle } from '../../fields/heading';
import { icon } from '../../fields/icon';
import { requiredField } from '../../utils/functions';

const Heroes: CollectionConfig = {
    slug: 'heroes',
    labels: {
        singular: 'Hero',
        plural: 'Heroes'
    },
    admin: {
        ...headingAsTitle,
        defaultColumns: ['icon', 'heading', 'updatedAt']
    },
    fields: [...icon, ...requiredField(heading('h1')), ...coloredSubhead]
};

export default Heroes;
