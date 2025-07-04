"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Search, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Wallet, ImageIcon, Plus, TrendingUp, Verified } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link";

const nftItems = [
  {
    id: 1,
    title: "3D Superhero",
    image: "/trend1.png",
    price: "4.20",
    creator: "@anand",
    category: "Art",
  },
  {
    id: 2,
    title: "3D Wolf Painting",
    image: "/trend2.png",
    price: "4.20",
    creator: "@anypixel",
    category: "3D Art",
  },
  {
    id: 3,
    title: "Alien Watching Sun",
    image: "/trend3.png",
    price: "4.20",
    creator: "@anand",
    category: "Art",
  },
  {
    id: 4,
    title: "Ninja Has Power",
    image: "/trend4.png",
    price: "4.20",
    creator: "@anya",
    category: "Game",
  },
  {
    id: 5,
    title: "Digital Landscape",
    image: "/trend5.png",
    price: "3.80",
    creator: "@artist_pro",
    category: "Painting",
  },
  {
    id: 6,
    title: "Cyber Warrior",
    image: "/trend6.png",
    price: "5.50",
    creator: "@cyber_art",
    category: "3D Art",
  },
  {
    id: 7,
    title: "Fantasy Dragon",
    image: "/trend7.png",
    price: "6.20",
    creator: "@fantasy_world",
    category: "Game",
  },
  {
    id: 8,
    title: "Abstract Colors",
    image: "/trend8.png",
    price: "2.90",
    creator: "@color_master",
    category: "Art",
  },
  {
    id: 9,
    title: "Vintage Portrait",
    image: "/trend9.png",
    price: "7.10",
    creator: "@vintage_art",
    category: "Painting",
  },
  {
    id: 10,
    title: "Holographic Cube",
    image: "/trend10.png",
    price: "4.80",
    creator: "@holo_tech",
    category: "3D Art",
  },
  {
    id: 11,
    title: "Street Art Mural",
    image: "/trend11.png",
    price: "3.30",
    creator: "@street_artist",
    category: "Wall Art",
  },
  {
    id: 12,
    title: "Pixel Adventure",
    image: "/trend12.png",
    price: "2.50",
    creator: "@pixel_dev",
    category: "Game",
  },
  {
    id: 13,
    title: "Graffiti Design",
    image: "/trend13.png",
    price: "4.00",
    creator: "@graffiti_king",
    category: "Wall Art",
  },
  {
    id: 14,
    title: "Music Visualization",
    image: "/trend2.png",
    price: "5.20",
    creator: "@sound_visual",
    category: "Others",
  },
  {
    id: 15,
    title: "Digital Sculpture",
    image: "/trend15.png",
    price: "8.90",
    creator: "@sculptor_3d",
    category: "Others",
  },
  {
    id: 16,
    title: "Watercolor Dreams",
    image: "/trend16.png",
    price: "3.70",
    creator: "@watercolor_art",
    category: "Painting",
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Art",
    "3D Art",
    "Game",
    "Painting",
    "Wall Art",
    "Others",
  ];

  const steps = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Setup Your Wallet",
      description:
        "Once You've Set Up Your Wallet of Choice, Connect It to OpenSea by Clicking the Wallet Icon in the Top Right Corner.",
    },
    {
      icon: <Plus className="w-8 h-8" />,
      title: "Create Your Collection",
      description:
        "Set Up Your Collection. Add Social Links, a Description, Profile & Banner Images, and Set a Secondary Sales Fee.",
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: "Add Your NFT's",
      description:
        "Upload Your Work, Add a Title and Description, and Customize Your NFTs With Properties, Stats, and Unlockable Content.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "List Them For Sale",
      description:
        "Choose Between Auctions, Fixed-Price Listings, and Declining-Price Listings. You Choose How You Want to Sell Your NFTs, & We Help You!",
    },
  ];

  // const creators = [
  //   {
  //     name: "@Lara Jain",
  //     amount: "ETH 300.65",
  //     avatar: "/placeholder.svg?height=60&width=60",
  //     featured: true,
  //   },
  //   {
  //     name: "@Milli Ak",
  //     amount: "ETH 298.71",
  //     avatar: "/placeholder.svg?height=60&width=60",
  //   },
  //   {
  //     name: "@Laura",
  //     amount: "ETH 296.20",
  //     avatar: "/placeholder.svg?height=60&width=60",
  //   },
  //   {
  //     name: "@Vicky",
  //     amount: "ETH 288.32",
  //     avatar: "/placeholder.svg?height=60&width=60",
  //   },
  //   {
  //     name: "@Adward",
  //     amount: "ETH 279.24",
  //     avatar: "/placeholder.svg?height=60&width=60",
  //   },
  //   {
  //     name: "@Albert Ph",
  //     amount: "ETH 268.95",
  //     avatar: "/placeholder.svg?height=60&width=60",
  //   },
  //   {
  //     name: "@Akshya",
  //     amount: "ETH 258.84",
  //     avatar: "/placeholder.svg?height=60&width=60",
  //   },
  //   {
  //     name: "@Jennie",
  //     amount: "ETH 241.40",
  //     avatar: "/placeholder.svg?height=60&width=60",
  //   },
  // ];
  const collections = [
    {
      title: "Art Collection",
      creator: "@vicky_m",
      artworks: [
        "/trend1.png",
        "/trend2.png",
        "/trend3.png",
        "/trend4.png",
        "/trend3.png",
        "/trend1.png",
      ],
    },
    {
      title: "3D Art Collection",
      creator: "@vicky_m",
      artworks: [
        "/trend1.png",
        "/trend2.png",
        "/trend3.png",
        "/trend4.png",
        "/trend3.png",
        "/trend1.png",
      ],
    },
    {
      title: "Digital 3D Art Collection",
      creator: "@vicky_m",
      artworks: [
        "/trend1.png",
        "/trend2.png",
        "/trend3.png",
        "/trend4.png",
        "/trend3.png",
        "/trend1.png",
      ],
    },
  ]

  return (
    <main className="px-8 ">
      <section className="flex items-center justify-between px-6 py-12 lg:px-12 lg:py-20">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Explore The Best
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 stroke-orange-500"
              style={{ WebkitTextStroke: "2px #f97316" }}
            >
              NFT World
            </span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Collect And Sell Your Extraordinary NFT Work
          </p>

          <div className="flex gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg">
              <Link href='/explore'>Explore</Link>
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-lg text-lg bg-transparent"
            >
              <Link href='/create'>Create</Link>
            </Button>
          </div>
        </div>

        {/* Character Illustration */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            <Image
              src="/nft-character.png"
              alt="3D Character with VR goggles"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      {/* Trending NFTs Section */}
      <section className="min-h-screen  text-white p-6 max-w-7xl mx-auto space-y-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-orange-500 text-sm font-medium">Trending</span>
        </div>
        <h2 className="text-3xl font-bold mb-8">Trending NFT's</h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nftItems
            .filter((item) => activeTab === "All" || item.category === activeTab)
            .map((item) => (
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
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <span className="text-xs bg-orange-500/20 text-orange-500 px-2 py-1 rounded">{item.category}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-lg font-bold text-white">
                        {item.price} ETH
                        <span className="text-xs text-gray-400 ml-1">($40,205.8)</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Creator: <span className="text-white"><Link href='/create_profile/profile'>{item.creator}</Link></span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Buy Now</Button>
                </div>
              </div>
            ))}
        </div>

        {/* Show message when no items found */}
        {nftItems.filter((item) => activeTab === "All" || item.category === activeTab).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No NFTs found in this category.</p>
          </div>
        )}

        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
          >
            <Link href='/explore'>Explore More</Link>
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto text-white">
        <div className="mb-12">
          <p className="text-orange-500 text-sm font-medium mb-2">— Steps For Sell & Buy</p>
          <h2 className="text-4xl md:text-5xl font-bold">Easy Steps To Create And Sell Your NFT</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4 rounded-2xl border-0 p-4 shadow shadow-purple-950">
              <div className="text-orange-500">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

     {/* NFT Detection Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto text-white"> 
        <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-orange-500/20 p-4 rounded-full">
                <Search className="w-12 h-12 text-orange-500" />
              </div>
            </div>

            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-orange-500 text-sm font-medium">— NFT Detection</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Discover & Verify Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                NFT Collection
              </span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Use our advanced AI-powered detection system to identify, verify, and analyze NFTs across multiple
              blockchains. Get detailed insights about authenticity, rarity, and market value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Blockchain Verified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <ImageIcon className="w-5 h-5 text-purple-500" />
                <span>Multi-format Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                <Link href='/detection'>Start NFT Detection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
