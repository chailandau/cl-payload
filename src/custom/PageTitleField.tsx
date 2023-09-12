import React from 'react';

import { generateSlug } from '../utils/generateSlug';
import { getLinkDestination } from '../utils/getLinkDestination';

export const PageTitleField = () => {
    const titesttle = generateSlug({ category: 'projects', parent: 'project' });

    return (
        <div className='text'>
            <span>Slug</span>
            <span>{titesttle}</span>
        </div>
    );
};
