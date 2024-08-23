import ApiService from "./ApiService";
export const getProducts = () => {
    const url = "/products";
    return ApiService.get(url);
};
