import useSWR from "swr";
import axios, {AxiosResponse} from "axios";
import {useEffect} from "react";

export type TMe = {
  "detail": string // "成功",
  "data": {
    "id": number // 3699,
    "openid": string // "",
    "username": string // "cw1997",
    "avatar_url": string // "https://asktug.com/letter_avatar_proxy/v4/letter/c/e5b9ba/50.png",
    "is_staff": boolean // false
  }
}

const accountsBaseUrl = process.env.NEXT_PUBLIC_ACCOUNTS_BASE_URL;
//const homeUrl = process.env.NEXT_PUBLIC_HOME_URL;
const loginUrl = `${accountsBaseUrl}/login`;
//const logoutUrl = `${accountsBaseUrl}/logout`;

export const login = (redirectUrl?: string) => {
  const { location } = window;
  location.href = `${loginUrl}?redirect_to=${encodeURIComponent(redirectUrl ?? window.location.href)}`;
}

/*export const logout = (redirectUrl?: string) => {
  const { location } = window;
  redirectUrl = redirectUrl ?? this.isAuthRequired ? homeUrl : location.href;
  location.href = `${logoutUrl}?redirect_to=${encodeURIComponent(redirectUrl)}`;
};*/

const fetcher = async (): Promise<AxiosResponse<TMe>> => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
    withCredentials: true,
  })
  const result = await axiosInstance.get<TMe>('/api/me')
  return result
}

export const useAccount = (requireAuth = true) => {
  const swrResponse = useSWR(['account'], fetcher, {
    revalidateOnReconnect: true,
    revalidateOnFocus: true,
  })
  useEffect(() => {
    if (requireAuth && !swrResponse.isValidating) {
      if (swrResponse.data?.status !== 200 || swrResponse.error) {
        login()
      }
    }
  }, [requireAuth, swrResponse.isValidating, swrResponse.data?.status, swrResponse.error])
  return swrResponse
}

export const useIsLoggedIn = (): null|boolean => {
  const swrResponse = useSWR(['account'], fetcher, {
    revalidateOnReconnect: true,
    revalidateOnFocus: true,
  })
  if (swrResponse.isValidating) return null
  return swrResponse.data?.status === 200
}
