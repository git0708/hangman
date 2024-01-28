import React, { useState, useEffect } from 'react';
import Service from 'Service/service';
import { promiseHandler } from 'utils/utils'


function useGetUUIDHooks() {
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [uuid, setUUID] = useState<string>('')
    useEffect(() => {
        async function getUUID() {
            try {
                let sessionId = sessionStorage.getItem('sessionId');
                if (sessionId) { setIsloading(false); setUUID(sessionId); return }
                let generateUUID = await promiseHandler(Service.getUUID.bind(Service));
                setIsloading(false);
                sessionStorage.setItem('sessionId', generateUUID)
                setUUID(generateUUID);

            } catch (error) { setIsloading(false); throw Error('Something went wrong.') }

        }
        setIsloading(true)
        getUUID()
    }, [])
    return { uuid, isLoading }
}
export default useGetUUIDHooks
