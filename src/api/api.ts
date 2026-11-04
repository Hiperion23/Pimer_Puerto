const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL no está configurada");
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const base = API_URL.replace(/\/+$/, "");
  const path = endpoint.startsWith("/")
    ? endpoint
    : `/${endpoint}`;

  const response = await fetch(`${base}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  let resultado: {
    success: boolean;
    data?: T;
    message?: string;
  };

  try {
    resultado = await response.json();
  } catch {
    throw new Error(
      "El servidor devolvió una respuesta inválida"
    );
  }

  if (!response.ok || !resultado.success) {
    throw new Error(
      resultado.message || "Error en la petición"
    );
  }

  return resultado.data as T;
}

export const api = {
  get<T>(endpoint: string) {
    return request<T>(endpoint, {
      method: "GET",
    });
  },
};