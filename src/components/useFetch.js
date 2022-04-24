import { useState, useEffect } from "react";

const useFetch = url => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const controller = new AbortController();
		fetch(url, { signal: controller.signal })
			.then(response => {
				if (!response.ok) {
					throw Error(`makech Data ro7 t9awed chof fe url li rak 7ateh w corrigih`);
				}
				return response.json();
			})
			.then(json => {
				setError(false);
				setIsPending(false);
				setData(json);
			})
			.catch(err => {
				if (err.name !== `AbortError`) {
					setIsPending(false);
					setError(err.message);
				}
			});
		return () => controller.abort();
	}, [url]);
	return { data, setData, isPending, error };
};

export default useFetch;
