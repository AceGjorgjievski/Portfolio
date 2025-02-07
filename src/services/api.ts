const API_ENDPOINT = "http://localhost:3000/api";

export const post = async <D = any, R = any>(
  path: string,
  data?: D,
  config?: RequestInit
): Promise<R> => {
  const response = await fetch(`${API_ENDPOINT}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(config?.headers || {}),
    },
    body: data ? JSON.stringify(data) : undefined,
    ...config,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
