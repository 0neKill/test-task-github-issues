import { $api } from './configuration.ts';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { AxiosResponse } from 'axios';


type Method = 'get';

const methods: Record<Method, (url: string, data: unknown) => Promise<AxiosResponse<unknown, unknown>>> = {
   'get': async (url, data) => await $api.get(url, { data }),
};

export const useApiFetch = <T, >({ url, method, data, hasFirstReq = true }: {
   url: string,
   method: Method,
   hasFirstReq?: boolean,
   data?: unknown
}) => {
   const [dataResponse, setDataResponse] = useState<T>(null as T);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [errors, setErrors] = useState<string>('');

   const handlerOnFetch = useCallback((data?: unknown) => {
      setIsLoading(true);
      methods[method](url, data)
         .then(({ data }) => setDataResponse(data as never))
         .catch(() => setErrors('What is wrong?'))
         .finally(() => setIsLoading(false));
   }, [method, url]);

   useEffect(() => {
      if (hasFirstReq) {
         handlerOnFetch(data);
      }
   }, [handlerOnFetch, hasFirstReq, data]);


   return useMemo(() => ({
      data: dataResponse, isLoading, errors, handlerOnFetch, setDataResponse,
   }), [dataResponse, isLoading, errors, handlerOnFetch]);

};
