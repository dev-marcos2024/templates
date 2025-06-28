import { useEffect, useRef, useState, useCallback } from "react";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
  Method,
} from "axios";

type RequestMethod = Method; // 'GET' | 'POST' | 'PUT' | 'DELETE' | etc.

interface UseAxiosReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
  request: (method: RequestMethod, body?: any) => Promise<void>;
}

function useAxios<T = unknown>(
  url: string,
  method: RequestMethod = "GET",
  config?: AxiosRequestConfig,
  immediate: boolean = true
): UseAxiosReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const configRef = useRef(config);
  configRef.current = config;

  const cancelSourceRef = useRef<CancelTokenSource | null>(null);

  const fetchData = useCallback(
    async (customMethod?: RequestMethod, body?: any) => {
      setLoading(true);
      setError(null);

      const source = axios.CancelToken.source();
      cancelSourceRef.current = source;

      try {
        const response: AxiosResponse<T> = await axios({
          url,
          method: customMethod || method,
          data: body,
          cancelToken: source.token,
          ...configRef.current,
        });

        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled");
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    },
    [url, method]
  );

  useEffect(() => {
    if (immediate) fetchData();
    return () => {
      cancelSourceRef.current?.cancel("Cleanup cancel");
    };
  }, [fetchData]);

  const refetch = () => fetchData();

  const request = async (customMethod: RequestMethod, body?: any) => {
    await fetchData(customMethod, body);
  };

  return { data, loading, error, refetch, request };
}

export default useAxios;

/**
 * Exemplo de uso ***************************************************************
 *
 * GET ============
 *
 * const { data, loading, error, refetch } = useAxios<User[]>("/api/users");
 * useEffect(() => {
 *    refetch(); // Opcional, pois immediate = true
 * }, []);
 *
 * POST ou PUT =============
 * 
 * const { request, loading, error } = useAxios("/api/users", "POST", {}, false);
 * const handleCreateUser = () => {
 *    request("POST", { name: "João", email: "joao@email.com" });
 * };
 * 
 * 
 */
