import axios, { AxiosError } from "axios";
import { axiosInstance } from "../../../shared/lib/axiosInstance";
import {
  UserType,
  UserTypeWithoutId,
  UserTypeWithoutIdName,
} from "../type/UserType";

class AuthApi {
  static async auth(
    formData: UserTypeWithoutIdName
  ): Promise<{ user: UserType; accessToken: string } | null> {
    try {
      const { data } = await axiosInstance.post<{
        user: UserType;
        accessToken: string;
      }>("/auth/authorization", formData);
      console.log(data);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axios.isAxiosError(axiosError)) {
        throw new Error(axiosError.message);
      }
      throw new Error("Some error");
    }
  }

  static async reg(
    formData: UserTypeWithoutId
  ): Promise<{ user: UserType; accessToken: string } | null> {
    try {
      const { data } = await axiosInstance.post<{
        user: UserType;
        accessToken: string;
      }>("/auth/registration", formData);
      console.log(data);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axios.isAxiosError(axiosError)) {
        throw new Error(axiosError.message);
      }
      throw new Error("Some error");
    }
  }

  static async refresh(): Promise<{
    user: UserType;
    accessToken: string;
  } | null> {
    try {
      const { data } = await axiosInstance.get<{
        user: UserType;
        accessToken: string;
      }>("/auth/refresh");
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axios.isAxiosError(axiosError)) {
        throw new Error(axiosError.message);
      }
      throw new Error("Some error");
    }
  }

  static async Logout(): Promise<void> {
    try {
      await axiosInstance.delete("/auth/logout");
      console.log("Выход выполнен успешно");
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axios.isAxiosError(axiosError)) {
        console.error("Ошибка при выходе:", axiosError.message);
      } else {
        console.error("Неизвестная ошибка при выходе:", error);
      }
    }
  }
}

export default AuthApi;
