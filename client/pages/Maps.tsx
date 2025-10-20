import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Filter } from "lucide-react";

export default function Maps() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const locations = [
    {
      id: "1",
      name: "Taman Bungkul",
      district: "Surabaya Pusat",
      lat: -7.2575,
      lng: 112.7521,
      type: "garden",
    },
    {
      id: "2",
      name: "Taman Harmoni",
      district: "Surabaya Timur",
      lat: -7.2504,
      lng: 112.7741,
      type: "garden",
    },
    {
      id: "3",
      name: "Sumber Air Utama",
      district: "Surabaya Pusat",
      lat: -7.2615,
      lng: 112.7381,
      type: "water_source",
    },
    {
      id: "4",
      name: "Taman Prestasi",
      district: "Surabaya Barat",
      lat: -7.2459,
      lng: 112.7201,
      type: "garden",
    },
    {
      id: "5",
      name: "Sumber Air Sekunder",
      district: "Surabaya Barat",
      lat: -7.2486,
      lng: 112.7089,
      type: "water_source",
    },
  ];

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.district.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-4 md:p-6 lg:p-9 xl:p-[37px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8">
          <h1 className="text-[32px] xl:text-[40px] font-bold text-[#0F172A]">
            Peta Lokasi
          </h1>
          <p className="text-gray-600 mt-2">
            Lihat lokasi taman dan sumber air di seluruh Surabaya
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-lg border border-[#E5E7EB] bg-white shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] overflow-hidden">
            <div className="relative w-full h-[400px] md:h-[500px] xl:h-[600px] bg-gray-100">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/714cb23c6319470d5f129aaac54a4c3d31b6b2e2?width=1900"
                alt="Map of Surabaya showing garden locations"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-gray-900">
                Peta Interaktif
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-4">
            <div className="rounded-lg border border-[#E5E7EB] bg-white dark:bg-white p-4 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari lokasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-[#E5E7EB] bg-white dark:bg-white text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-colors"
                />
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-[#E5E7EB] bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-4">
                <Filter className="w-4 h-4" />
                Filter
              </button>

              <div className="max-h-[500px] overflow-y-auto">
                <div className="space-y-2">
                  <h3 className="text-xs uppercase font-bold text-gray-500 px-2">
                    Taman (
                    {
                      filteredLocations.filter((l) => l.type === "garden")
                        .length
                    }
                    )
                  </h3>
                  {filteredLocations
                    .filter((l) => l.type === "garden")
                    .map((location) => (
                      <button
                        key={location.id}
                        onClick={() => setSelectedLocation(location.id)}
                        className={`w-full text-left px-4 py-3 rounded-md transition-colors flex items-start gap-3 ${
                          selectedLocation === location.id
                            ? "bg-[#0F172A] text-white"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="font-medium text-sm truncate">
                            {location.name}
                          </p>
                          <p
                            className={`text-xs truncate ${
                              selectedLocation === location.id
                                ? "text-white/70"
                                : "text-gray-500"
                            }`}
                          >
                            {location.district}
                          </p>
                        </div>
                      </button>
                    ))}

                  <h3 className="text-xs uppercase font-bold text-gray-500 px-2 mt-4">
                    Sumber Air (
                    {
                      filteredLocations.filter((l) => l.type === "water_source")
                        .length
                    }
                    )
                  </h3>
                  {filteredLocations
                    .filter((l) => l.type === "water_source")
                    .map((location) => (
                      <button
                        key={location.id}
                        onClick={() => setSelectedLocation(location.id)}
                        className={`w-full text-left px-4 py-3 rounded-md transition-colors flex items-start gap-3 ${
                          selectedLocation === location.id
                            ? "bg-[#0F172A] text-white"
                            : "bg-blue-50 hover:bg-blue-100"
                        }`}
                      >
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="font-medium text-sm truncate">
                            {location.name}
                          </p>
                          <p
                            className={`text-xs truncate ${
                              selectedLocation === location.id
                                ? "text-white/70"
                                : "text-gray-500"
                            }`}
                          >
                            {location.district}
                          </p>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>

            {selectedLocation && (
              <div className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
                <h3 className="font-bold text-gray-900 mb-3">Detail Lokasi</h3>
                {(() => {
                  const location = locations.find(
                    (l) => l.id === selectedLocation,
                  );
                  return location ? (
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="text-gray-600">Nama</p>
                        <p className="font-medium text-gray-900">
                          {location.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Wilayah</p>
                        <p className="font-medium text-gray-900">
                          {location.district}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Koordinat</p>
                        <p className="font-medium text-gray-900">
                          {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                        </p>
                      </div>
                      <Button className="w-full h-9 mt-4 rounded-md bg-[#0F172A] text-white font-medium hover:bg-[#0F172A]/90 text-sm">
                        Pilih Lokasi
                      </Button>
                    </div>
                  ) : null;
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
