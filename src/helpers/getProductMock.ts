import { productsDetailsMocks } from "@/mocks/producstsDetails";

interface getProductMockProps {
    id: number
}

export default function getProductMock({ id }: getProductMockProps){
    return productsDetailsMocks.find((product) => product.id === id)
}