import {RefObject, useEffect} from 'react';

const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, callback: (event: MouseEvent) => void): void => {
    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback(event);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

export default useClickOutside;