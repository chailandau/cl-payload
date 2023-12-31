import axios from 'axios';
import { useConfig } from 'payload/components/utilities';
import { Cta } from 'payload/generated-types';
import { useEffect, useState } from 'react';

/**
 * Retrieves `link` destination based on provided `rowData`.
 *
 * @param linkRowData - Data object representing a row.
 * @returns Link destination.
 */
export const getLinkDestination = (linkRowData: Partial<Cta>): string => {
    const [linkDestination, setLinkDestination] = useState('');

    const { serverURL } = useConfig();

    useEffect(() => {
        linkRowData?.linkType === 'internal' && linkRowData?.internalLink
            ? axios
                  .get(`${serverURL}/api/pages/${linkRowData.internalLink}`)
                  .then((res) => {
                      setLinkDestination(`${res.data.title} Page`);
                  })
            : setLinkDestination(linkRowData?.externalLink || '');
    }, [linkRowData]);

    return linkDestination;
};
