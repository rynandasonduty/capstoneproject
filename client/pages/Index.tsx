import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [selectedGardens, setSelectedGardens] = useState<string[]>([]);
  const [vehicleCount, setVehicleCount] = useState(2);

  const gardens = [
    { id: "1", name: "Titik 1" },
    { id: "2", name: "Titik 2" },
    { id: "3", name: "Titik 3" },
    { id: "4", name: "Titik 4" },
  ];

  const historyData = [
    {
      date: "Jumat, 17 Oktober 2025",
      points: "24 Titik",
      fleet: "3 Armada",
    },
    {
      date: "Senin, 13 Oktober 2025",
      points: "20 Titik",
      fleet: "3 Armada",
    },
  ];

  const toggleGarden = (gardenId: string) => {
    setSelectedGardens((prev) =>
      prev.includes(gardenId)
        ? prev.filter((id) => id !== gardenId)
        : [...prev, gardenId],
    );
  };

  const incrementVehicles = () => setVehicleCount((prev) => prev + 1);
  const decrementVehicles = () =>
    setVehicleCount((prev) => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-4 md:p-6 lg:p-9 xl:p-[37px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(350px,399px)_1fr] gap-5 xl:gap-6 mb-5 xl:mb-6">
          <div className="space-y-5 xl:space-y-6">
            <div className="rounded-md border border-[#E5E7EB] bg-white dark:bg-white p-6 xl:p-[38px_37px] shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
              <h1 className="text-[32px] xl:text-[40px] font-bold leading-[1.25] mb-6 xl:mb-8 text-gray-900">
                Watering
                <br />
                Route Planner
              </h1>

              <div className="space-y-5 xl:space-y-6">
                <div>
                  <h2 className="text-xl xl:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Checklist Taman
                  </h2>
                  <div className="space-y-[17px] pr-4 max-h-[114px] overflow-y-auto relative">
                    {gardens.map((garden) => (
                      <div key={garden.id} className="flex items-center gap-2">
                        <Checkbox
                          id={garden.id}
                          checked={selectedGardens.includes(garden.id)}
                          onCheckedChange={() => toggleGarden(garden.id)}
                          className="h-3.5 w-3.5 rounded-sm border-[#E5E7EB] data-[state=checked]:bg-black data-[state=checked]:border-black"
                        />
                        <label
                          htmlFor={garden.id}
                          className="text-sm font-medium font-inter leading-[14px] cursor-pointer select-none text-gray-900"
                        >
                          {garden.name}
                        </label>
                      </div>
                    ))}
                    <div className="absolute right-0 top-0 w-1.5 h-[51px] bg-[#9C9C9C] rounded-full"></div>
                    <div className="absolute right-0 top-0 w-1.5 h-[114px] bg-[#D8D9D8] rounded-full -z-10"></div>
                  </div>
                </div>

                <div className="rounded-md border border-[#E5E7EB] bg-white p-4 xl:p-5 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
                  <h2 className="text-xl xl:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Jumlah Armada
                  </h2>
                  <div className="flex items-center gap-3 xl:gap-4 rounded-md border border-[#E5E7EB] bg-white px-3 xl:px-4 py-2 xl:py-2.5 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] w-fit">
                    <button
                      onClick={decrementVehicles}
                      className="text-base font-bold hover:opacity-70 transition-opacity"
                      aria-label="Decrease vehicle count"
                    >
                      -
                    </button>
                    <div className="w-px h-5 bg-[#E2E8F0]"></div>
                    <span className="text-xl font-bold min-w-[12px] text-center">
                      {vehicleCount}
                    </span>
                    <div className="w-px h-5 bg-[#E2E8F0]"></div>
                    <button
                      onClick={incrementVehicles}
                      className="text-base font-bold hover:opacity-70 transition-opacity"
                      aria-label="Increase vehicle count"
                    >
                      +
                    </button>
                    <span className="text-base font-bold ml-2">Kendaraan</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setSelectedGardens([]);
                      setVehicleCount(2);
                    }}
                    className="w-full text-center text-[15px] font-bold hover:opacity-70 transition-opacity text-gray-900"
                  >
                    Reset
                  </button>
                  <Button
                    className="w-full h-12 rounded-md bg-[#0F172A] text-white font-inter text-sm font-medium hover:bg-[#0F172A]/90"
                    onClick={() => console.log("Start optimization")}
                  >
                    Mulai Optimasi
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 xl:space-y-6">
            <div className="rounded-md border border-[#E5E7EB] bg-white shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] overflow-hidden">
              <div className="relative w-full h-[300px] md:h-[400px] xl:h-[475px] bg-gray-100">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/714cb23c6319470d5f129aaac54a4c3d31b6b2e2?width=1900"
                  alt="Map showing Surabaya garden locations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded shadow text-sm text-blue-600 underline cursor-pointer hover:text-blue-700">
                  View larger map
                </div>
              </div>
            </div>

            <div className="rounded-md border border-[#E5E7EB] bg-white dark:bg-white p-5 xl:p-[30px] shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
              <h2 className="text-xl xl:text-2xl font-bold mb-3 xl:mb-4 text-gray-900">
                Tinjau Pilihan
              </h2>
              <p className="text-lg xl:text-2xl font-bold text-gray-900">
                → {selectedGardens.length} titik dipilih • {vehicleCount}{" "}
                kendaraan
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-[#E5E7EB] bg-white dark:bg-white p-6 xl:p-[50px_87px_50px_73px] shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
          <h2 className="text-[32px] xl:text-[40px] font-bold mb-6 xl:mb-8 text-gray-900">
            Riwayat Optimasi
          </h2>

          <div className="space-y-0">
            {historyData.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 xl:py-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 xl:gap-6 flex-1">
                    <div className="text-lg xl:text-2xl font-bold xl:min-w-[272px]">
                      {item.date}
                    </div>
                    <div className="text-lg xl:text-2xl font-bold xl:min-w-[82px]">
                      {item.points}
                    </div>
                    <div className="text-lg xl:text-2xl font-bold xl:min-w-[111px]">
                      {item.fleet}
                    </div>
                  </div>
                  <Button
                    className="h-10 px-4 rounded-md bg-[#0F172A] text-white font-inter text-sm font-medium hover:bg-[#0F172A]/90 w-fit"
                    onClick={() => console.log("Export", item.date)}
                  >
                    Ekspor
                  </Button>
                </div>
                {index < historyData.length - 1 && (
                  <div className="h-px bg-[#E2E8F0]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
