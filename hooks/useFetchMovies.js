import { useEffect, useRef, useState } from 'react';

export const useFetchMovies = (url) => {

    const isMounted = useRef(true);
    
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        
        setState({data: null, loading: true, error: null});

        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(isMounted.current) {
                setState({
                    loading: false,
                    error: null,
                    data,
                });
            }
        })
        .catch(() => {
            setState({
                data: null,
                loading:  false,
                error: 'No se pudo cargar la info'
            });
        });
    }, [url]);

    return state;
};