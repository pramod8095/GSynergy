import api from "./api";

export const getSku = async (skuId) => {
  try {
    const response = await api.get("/sku");
    return response.data;
  } catch (error) {
    console.error("Something went wrong", error);
    throw error;
  }
};
