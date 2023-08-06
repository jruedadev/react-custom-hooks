import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const resp = await fetch(url, requestOptions);

        const data = await resp.json();
        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
} 