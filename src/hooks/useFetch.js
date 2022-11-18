import { useState, useEffect } from 'react'


export const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)


    const postData = (postData) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
    }

    useEffect(() => {
        const fetchData = async (fetchOptions) => {
            setIsPending(true)

            try {
                const res = await fetch(url, { ...fetchOptions })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json()
                setIsPending(false)
                setData(data)
                setError(null)

            } catch (err) {
                setIsPending(false)
                setError('Could not fetch data')
                console.log(err.message);

            }

        }

        if (method === "GET") {
            fetchData()
        }
        if (method === "POST" && options) {
            fetchData(options)
        }
    }, [url, method, options])


    return { data, isPending, error, postData }


}




