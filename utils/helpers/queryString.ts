export type QueryParams = { [key: string]: string | number };

export function encodeQueryString<T extends QueryParams>(params: T): string {
    const encodedParams = Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`)
        .join('&');
    return `?${encodedParams}`;
}

export function decodeParams(query: string): QueryParams {
    const str = query.replace(/^\?/, '');
    const decode = decodeURIComponent;
    const params: QueryParams = {};
    str.split('&').forEach(pair => {
        const [key, val] = pair.split('=');
        if (key) {
            params[decode(key)] = val ? decode(val) : '';
        }
    });
    return params;
}
