import { useEffect, useRef, useState } from 'react';

export const useFetchMovies = (url, page = 1) => {

    const isMounted = useRef(true);
    
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        
        setState({data: null, loading: true, error: null});
        let data = {results: []};
        while(page <= 60) {
            fetch(`${url}&page=${page++}`)
            .then(res => res.json())
            .then(resData => {
                data.results = [...data.results, ...resData.results];
                if(isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: {
                            ...resData,
                            results: data.results
                        },
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                setState({
                    data: null,
                    loading:  false,
                    error: 'No se pudo cargar la info'
                });
            });
        }
    }, [url]);

    return [state, setState];
};