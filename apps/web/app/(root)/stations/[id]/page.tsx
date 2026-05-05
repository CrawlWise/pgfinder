import { notFound } from "next/navigation";
import { retailStoreData } from "@/site-content/home";
import GasSellerUI from "@/components/stations/gasSellerUI";
import FillingStationUI from "@/components/stations/fillingStationUI";

type Params = Promise<{ id: string }>;

export default async function StationDetailsPage({ params }: { params: Params }) {
  const { id } = await params;
  const stationId = parseInt(id, 10);
  const station = retailStoreData.find((s) => s.id === stationId);

  if (!station) {
    notFound();
  }

  // Mock property for gas availability
  const isGasAvailable = true;

  // Extract price value and unit for Filling Station UI
  const priceParts = station.price.split('/');
  const priceValue = priceParts[0] || station.price;
  const priceUnit = priceParts.length > 1 ? `/${priceParts[1]}` : '';

  // Use filling station UI if explicitly set as filling_station without gas_seller
  const isFillingStation = station.storeType === 'filling_station' ||
    (station.storeType.includes('filling_station') && !station.storeType.includes('gas_seller'));

  if (isFillingStation) {
    return <FillingStationUI station={station} isGasAvailable={isGasAvailable} priceValue={priceValue} priceUnit={priceUnit} />;
  }

  // Default to Gas Seller UI
  return <GasSellerUI station={station} isGasAvailable={isGasAvailable} />;
}
