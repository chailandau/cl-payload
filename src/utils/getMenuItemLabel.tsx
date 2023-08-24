import axios from 'axios';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';

export const getMenuItemLabel = (defaultTitle: string) => ({
    RowLabel: ({ data, index }) => {
        const [title, setTitle] = useState(null);

        const fallbackTitle = `${defaultTitle} ${String(index).padStart(
            2,
            '0'
        )}`;

        const titleWithType = (itemTitle: string) => (
            <strong>{itemTitle}</strong>
        );

        const { serverURL } = useConfig();

        useEffect(() => {
            if (data?.page) {
                data?.overridePageName
                    ? setTitle(
                          titleWithType(data?.customLabel || fallbackTitle)
                      )
                    : axios
                          .get(`${serverURL}/api/pages/${data.page}`)
                          .then((res) => {
                              setTitle(titleWithType(res?.data?.title));
                          });
            } else {
                return setTitle(titleWithType(fallbackTitle));
            }
        }, [data?.page, data?.overridePageName, data?.customLabel]);

        return title;
    }
});
