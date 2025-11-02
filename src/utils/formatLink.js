/**
 * Reformat a URL to start with 'https://'
 * @param {string} url - The URL to be formatted
 * @returns {string} - The original URL with 'https://' prepended to it.
 * @example - 'www.helloworld.com' will return 'https://www.helloworld.com' 
 */
export default function formatLink(url) {
    return !/^https?:\/\//i.test(url) ? `https://${url}` : url;
};

