import type { RetailStoreData } from "@/types/home";

export const retailStoreData: RetailStoreData[] = [
    {
        id: 1,
        name: "Bovas Filling Station",
        storeId: 1234567890,
        storeImg: "/retailStore/gas_seller_1.jpg",
        storeType: "filling_station",
        verified: true,
        price: "₦1,150/kg",
        rating: 4.8,
        reviews: "500+",
        latOffset: 0.01,
        lngOffset: 0.01
    },
    {
        id: 2,
        name: "TotalEnergies Gas",
        storeType: "gas_seller",
        storeId: 1244679190,
        storeImg: "/retailStore/gas_seller_2.jpg",
        verified: false,
        price: "₦1,200/kg",
        rating: 4.5,
        reviews: "200+",
        latOffset: -0.015,
        lngOffset: -0.02
    },
    {
        id: 3,
        name: "NNPC Retail",
        storeType: "filling_station",
        storeId: 1244679330,
        storeImg: "/retailStore/gas_seller_3.jpg",
        verified: true,
        price: "₦1,100/kg",
        rating: 4.2,
        reviews: "150+",
        latOffset: 0.02,
        lngOffset: -0.01
    },
    {
        id: 4,
        name: "Oando Filling Station",
        storeType: "gas_seller",
        storeId: 1244679330,
        storeImg: "/retailStore/gas_seller_4.jpg",
        verified: false,
        price: "₦1,100/kg",
        rating: 4.2,
        reviews: "150+",
        latOffset: 0.02,
        lngOffset: -0.01
    }
]

