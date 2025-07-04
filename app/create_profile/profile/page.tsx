import Image from "next/image";
import { Copy, Edit, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Clock, Grid3X3, List } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Component() {
  const nftData = [
    {
      id: 11,
      title: "3D Superhero",
      image: "/trend11.png",
      price: "4.20",
      usdPrice: "USD 20.81",
      category: "Art",
    },
    {
      id: 2,
      title: "3D Wall Painting",
      image: "/trend2.png",
      price: "4.20",
      usdPrice: "USD 20.81",
      category: "Art",
    },
    {
      id: 6,
      title: "Big Eye Vector",
      image: "/trend6.png",
      price: "4.20",
      usdPrice: "USD 20.81",
      category: "Art",
    },
    {
      id: 8,
      title: "Virtual View Hall",
      image: "/trend8.png",
      price: "4.20",
      usdPrice: "USD 20.81",
      category: "Art",
    },
  ];

  return (
    <main>
      <div className="relative w-full h-80 bg-gradient-to-tl from gray-900 via-black to-purple-900 ">
        {/* Action buttons */}
        <div className="absolute top-6 right-6 flex gap-3">
          {/* <Button variant="outline" size="sm" className="bg-black/20 border-white/20 text-white hover:bg-black/30">
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </Button> */}
          <Button
            variant="outline"
            size="sm"
            className="bg-black/20 border-white/20 text-white hover:bg-black/30"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        {/* Profile section */}
        <div className="absolute bottom-8 left-8 flex flex-col items-start ">
          {/* Profile image */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-pink-500 flex items-center justify-center">
                <Image
                  src="/trend1.png"
                  alt="Profile picture"
                  width={88}
                  height={88}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* User info */}
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-1">Angelina AK</h1>
            <p className="text-white/80 text-sm">@org_al</p>
          </div>
        </div>
      </div>

      <section className="px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {nftData.map((nft) => (
            <div
              key={nft.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-400 transition-colors group"
            >
              
              <Link href='../explore/detail'>
              {/* Image */}
              <div className="relative aspect-square">
                <Image
                  src={nft.image || "/placeholder.svg"}
                  alt={nft.title}
                  fill
                  className="object-cover"
                />
                {/* Timer Overlay */}
                {/* <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm rounded px-2 py-1 flex items-center space-x-1">
                </div> */}
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Title and Category */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {nft.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20"
                  >
                    {nft.category}
                  </Badge>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-bold text-white">
                      {nft.price} ETH
                    </span>
                    <span className="text-xs text-gray-400">
                      {nft.usdPrice}
                    </span>
                  </div>
                </div>

                
              </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
