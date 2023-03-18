import $api from "../utils/http";
import {LanguagesKeys} from "../utils/types/ILanguagesKeys";
import {IProduct, IProductResponse} from "../utils/types/IProduct";

export const getRecommended = async (status: "rent" | "sale", lang: keyof typeof LanguagesKeys): Promise<IProduct[]> => {
    const {data} = await $api.get(`/get-recommended/${lang}/${status}`);

    return data;
}

export const getAll = async (lang: keyof typeof LanguagesKeys, page: number = 1, options = {}): Promise<IProductResponse> => {
    const {data} = await $api.post(`/get-all/${lang}/${page}`, options);

    return data;
}

export const getOne = async (prdId: string): Promise<IProduct> => {
  const {data} = await $api.get(`/get-one/${prdId}`);

  return data;
}