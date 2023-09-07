import { Field } from 'payload/types';
/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - String to be capitalized.
 * @return {string} Capitalized string.
 */
export const capitalizeWord = (str: string): string => {
    if (!str) {
        return str;
    }

    const firstLetter = str.charAt(0).toUpperCase();
    const restOfWord = str.slice(1);

    return firstLetter + restOfWord;
};

/**
 * Duplicates field configuration with `required` set to true.
 *
 * @param {Field[]} fieldConfig - Field configuration to duplicate.
 * @return {Field[]} A duplicate field configuration with the "required" property set to true.
 */
export const requiredField = (fieldConfig: Field[]): Field[] => {
    if (!fieldConfig) {
        return [];
    }

    return fieldConfig.map((config) => ({
        ...config,
        required: true
    }));
};

/**
 * Validates if string is a valid http or https URL with a TLD.
 * Accepts options object with `allowEmail` option
 *
 * @param {string} str - String to be validated as a URL.
 * @param [options.allowEmail] - Allow email addresses.
 * @returns true if the string is a valid URL, otherwise returns false.
 */
export const isValidUrl = (
    str: string,
    options?: { allowEmail: boolean }
): boolean => {
    const { allowEmail } = options;

    try {
        const url = new URL(str);

        const checkSplit = () => {
            const originSplit = url.origin.split('.');
            if (originSplit.length === 1 || originSplit[1] === '') {
                return false;
            }
        };
        if (allowEmail) {
            if (url.protocol !== 'mailto:') {
                checkSplit();
            }

            return (
                url.protocol === 'http:' ||
                url.protocol === 'https:' ||
                url.protocol === 'mailto:'
            );
        } else {
            checkSplit();

            return url.protocol === 'http:' || url.protocol === 'https:';
        }
    } catch (err) {
        console.error(err);

        return false;
    }
};
