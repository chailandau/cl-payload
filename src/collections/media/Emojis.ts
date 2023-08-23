import { CollectionConfig } from 'payload/types';

import { setMaxFileSize } from '../../utils/setMaxFileSize';

export const Emojis: CollectionConfig = {
    slug: 'emojis',
    admin: {
        defaultColumns: [
            'filename',
            'alt',
            'width',
            'height',
            'filesize',
            'updatedAt'
        ]
    },
    upload: {
        staticURL: '/emojis',
        staticDir: 'emojis',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 175,
                height: 175,
                position: 'center'
            }
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*']
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true
        },
        ...setMaxFileSize(2621440)
    ]
};
