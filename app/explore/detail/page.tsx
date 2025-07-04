"use client";
import { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Share2,
  MoreHorizontal,
  Eye,
  Tag,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

// Static NFT data for the detail page
const nftDetail = {
  id: 1,
  title: "3D Superhero",
  image: "/trend1.png",
  price: "4.20",
  usdPrice: "40,205.8",
  creator: {
    name: "@anand",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
  },
  owner: {
    name: "@anypixel",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
  },
  category: "Art",
  tags: ["superhero", "3d", "art", "digital"],
  description:
    "A stunning 3D superhero artwork that showcases incredible detail and artistic vision. This piece represents the perfect blend of modern digital art techniques with classic superhero aesthetics.",
  properties: [
    { trait: "Background", value: "Cosmic", rarity: "12%" },
    { trait: "Character", value: "Superhero", rarity: "8%" },
    { trait: "Style", value: "3D Render", rarity: "15%" },
    { trait: "Color Scheme", value: "Vibrant", rarity: "20%" },
  ],
  stats: {
    views: "2.4K",
    favorites: "156",
    owners: "1",
  },
  history: [
    { event: "Listed", price: "4.20 ETH", from: "@anand", date: "2 hours ago" },
    { event: "Minted", price: "-", from: "@anand", date: "1 day ago" },
  ],
};

const relatedNFTs = [
  {
    id: 2,
    title: "3D Wolf Painting",
    image: "/trend2.png",
    price: "4.20",
    creator: "@anypixel",
  },
  {
    id: 3,
    title: "Alien Watching Sun",
    image: "/trend3.png",
    price: "4.20",
    creator: "@anand",
  },
  {
    id: 4,
    title: "Ninja Has Power",
    image: "/trend4.png",
    price: "4.20",
    creator: "@anya",
  },
  {
    id: 5,
    title: "Digital Landscape",
    image: "/trend5.png",
    price: "3.80",
    creator: "@artist_pro",
  },
];

export default function NFTDetailPage() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <main className="text-white min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Explore
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* NFT Image */}
          <div className="space-y-4">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={nftDetail.image || "/placeholder.svg"}
                alt={nftDetail.title}
                width={600}
                height={600}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-black/50 border-gray-700 backdrop-blur-sm"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isLiked ? "fill-red-500 text-red-500" : "text-white"
                    }`}
                  />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-black/50 border-gray-700 backdrop-blur-sm"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-black/50 border-gray-700 backdrop-blur-sm"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {nftDetail.stats.views} views
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {nftDetail.stats.favorites} favorites
                </div>
              </div>
              <Badge
                variant="outline"
                className="border-orange-500 text-orange-500"
              >
                {nftDetail.category}
              </Badge>
            </div>
          </div>

          {/* NFT Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{nftDetail.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {nftDetail.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-gray-800 text-gray-300"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Creator and Owner */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">Creator</div>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{nftDetail.creator.name}</div>
                    {nftDetail.creator.verified && (
                      <div className="text-xs text-orange-500">Verified</div>
                    )}
                  </div>
                </div>
              </div>

              {/* <div className="bg-gray-900 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">Owner</div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={nftDetail.owner.avatar || "/placeholder.svg"} />
                    <AvatarFallback>OW</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{nftDetail.owner.name}</div>
                    {nftDetail.owner.verified && <div className="text-xs text-orange-500">Verified</div>}
                  </div>
                </div>
              </div> */}
            </div>

            {/* Price and Purchase */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">Current Price</div>
                <div className="text-3xl font-bold">
                  {nftDetail.price} ETH
                  <span className="text-lg text-gray-400 ml-2">
                    (${nftDetail.usdPrice})
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className=" w-1/2 bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="../wallet" className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 " />
                    <Link href='../wallet'>Buy Now</Link>
                  </Link>
                </Button>
                {/* <Button
                  variant="outline"
                  className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  Make Offer
                </Button> */}
              </div>
            </div>

            {/* Additional Info Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-900">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="properties">Properties</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-4">
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300 leading-relaxed">
                    {nftDetail.description}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="properties" className="mt-4">
                <div className="grid grid-cols-2 gap-3">
                  {nftDetail.properties.map((property, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-lg p-4 text-center"
                    >
                      <div className="text-sm text-gray-400 mb-1">
                        {property.trait}
                      </div>
                      <div className="font-medium mb-1">{property.value}</div>
                      <div className="text-xs text-orange-500">
                        {property.rarity} rarity
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-4">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="space-y-4">
                    {nftDetail.history.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-gray-800 last:border-b-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                            {item.event === "Listed" ? (
                              <Tag className="w-4 h-4 text-orange-500" />
                            ) : (
                              <TrendingUp className="w-4 h-4 text-orange-500" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{item.event}</div>
                            <div className="text-sm text-gray-400">
                              by {item.from}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{item.price}</div>
                          <div className="text-sm text-gray-400">
                            {item.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related NFTs */}
        {/* <section>
          <h2 className="text-2xl font-bold mb-6">More from this creator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedNFTs.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 rounded-lg overflow-hidden group hover:bg-gray-800 transition-colors"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-white">{item.price} ETH</div>
                    <div className="text-sm text-gray-400">{item.creator}</div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </main>
  );
}
