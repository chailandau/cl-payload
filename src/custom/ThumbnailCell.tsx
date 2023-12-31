import { useListRelationships } from 'payload/dist/admin/components/views/collections/List/RelationshipProvider';
import React, { useEffect } from 'react';

export const ThumbnailCell = (props) => {
    const { field, cellData } = props;
    const relationTo = field.relationTo;
    const { getRelationships, documents } = useListRelationships();

    useEffect(() => {
        getRelationships([
            {
                value: cellData,
                relationTo: field.relationTo
            }
        ]);
    }, [getRelationships]);

    const thumbnail =
        documents?.[relationTo]?.[cellData]?.['sizes']?.['thumbnail']?.[
            'url'
        ] || documents?.[relationTo]?.[cellData]?.['url'];

    return (
        <>
            {thumbnail && (
                <div className='file__thumbnail'>
                    <img src={thumbnail}></img>
                </div>
            )}
        </>
    );
};
