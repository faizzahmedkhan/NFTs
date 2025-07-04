"use client";

import type React from "react";
import { useState, useMemo } from "react";
import { Search, Grid3X3, List, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

const nftItems = [
  {
    id: 1,
    title: "3D Superhero",
    image: "/trend1.png",
    price: "4.20",
    creator: "@anand",
    category: "Art",
    tags: ["superhero", "3d", "art", "digital"],
  },
  {
    id: 2,
    title: "3D Wolf Painting",
    image: "/trend2.png",
    price: "4.20",
    creator: "@anypixel",
    category: "3D Art",
    tags: ["wolf", "3d", "painting", "animal"],
  },
  {
    id: 3,
    title: "Alien Watching Sun",
    image: "/trend3.png",
    price: "4.20",
    creator: "@anand",
    category: "Art",
    tags: ["alien", "sun", "art", "space"],
  },
  {
    id: 4,
    title: "Ninja Has Power",
    image: "/trend4.png",
    price: "4.20",
    creator: "@anya",
    category: "Game",
    tags: ["ninja", "power", "game", "character"],
  },
  {
    id: 5,
    title: "Digital Landscape",
    image: "/trend5.png",
    price: "3.80",
    creator: "@artist_pro",
    category: "Painting",
    tags: ["digital", "landscape", "painting", "nature"],
  },
  {
    id: 6,
    title: "Cyber Warrior",
    image: "/trend6.png",
    price: "5.50",
    creator: "@cyber_art",
    category: "3D Art",
    tags: ["cyber", "warrior", "3d", "art"],
  },
  {
    id: 7,
    title: "Fantasy Dragon",
    image: "/trend7.png",
    price: "6.20",
    creator: "@fantasy_world",
    category: "Game",
    tags: ["fantasy", "dragon", "game", "creature"],
  },
  {
    id: 8,
    title: "Abstract Colors",
    image: "/trend8.png",
    price: "2.90",
    creator: "@color_master",
    category: "Art",
    tags: ["abstract", "colors", "art", "modern"],
  },
  {
    id: 9,
    title: "Vintage Portrait",
    image: "/trend9.png",
    price: "7.10",
    creator: "@vintage_art",
    category: "Painting",
    tags: ["vintage", "portrait", "painting", "classic"],
  },
  {
    id: 10,
    title: "Holographic Cube",
    image: "/trend10.png",
    price: "4.80",
    creator: "@holo_tech",
    category: "3D Art",
    tags: ["holographic", "cube", "3d", "tech"],
  },
  {
    id: 11,
    title: "Street Art Mural",
    image: "/trend11.png",
    price: "3.30",
    creator: "@street_artist",
    category: "Wall Art",
    tags: ["street", "art", "mural", "wall"],
  },
  {
    id: 12,
    title: "Pixel Adventure",
    image: "/trend12.png",
    price: "2.50",
    creator: "@pixel_dev",
    category: "Game",
    tags: ["pixel", "adventure", "game", "retro"],
  },
  {
    id: 13,
    title: "Graffiti Design",
    image: "/trend13.png",
    price: "4.00",
    creator: "@graffiti_king",
    category: "Wall Art",
    tags: ["graffiti", "design", "wall", "urban"],
  },
  {
    id: 14,
    title: "Music Visualization",
    image: "/trend2.png",
    price: "5.20",
    creator: "@sound_visual",
    category: "Others",
    tags: ["music", "visualization", "sound", "digital"],
  },
  {
    id: 15,
    title: "Digital Sculpture",
    image: "/trend15.png",
    price: "8.90",
    creator: "@sculptor_3d",
    category: "Others",
    tags: ["digital", "sculpture", "3d", "art"],
  },
  {
    id: 16,
    title: "Watercolor Dreams",
    image: "/trend16.png",
    price: "3.70",
    creator: "@watercolor_art",
    category: "Painting",
    tags: ["watercolor", "dreams", "painting", "art"],
  },
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(8);
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Filter and search logic
  const filteredItems = useMemo(() => {
    let filtered = nftItems;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.creator.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (selectedFilter !== "all") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === selectedFilter.toLowerCase()
      );
    }

    return filtered;
  }, [searchQuery, selectedFilter]);

  // Items to display based on displayCount
  const displayedItems = filteredItems.slice(0, displayCount);
  const hasMoreItems = displayCount < filteredItems.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 8);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setDisplayCount(8); // Reset display count when searching
  };

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
    setDisplayCount(8); // Reset display count when filtering
  };

  return (
    <main className="text-white min-h-screen py-16">
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <span className="text-orange-500 text-sm font-medium">Explore</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome To Explore
          </h1>
          <div className="text-gray-400 text-sm">
            <span>Home</span>
            <span className="mx-2">{">"}</span>
            <span className="text-orange-500">Explore</span>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Select value={selectedFilter} onValueChange={handleFilterChange}>
                <SelectTrigger className="w-32 bg-gray-900 border-gray-700">
                  <SelectValue placeholder="Filters" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="digital">Digital</SelectItem>
                  <SelectItem value="abstract">Abstract</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search Name, Collections, Users, Tags..."
                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {/* <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-gray-700 bg-gray-900">
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-gray-700 bg-gray-900">
                <List className="w-4 h-4" />
              </Button>
            </div> */}
          </div>

          <div className="text-gray-400 text-sm mb-8">
            {filteredItems.length} results found
            {searchQuery && <span className="ml-2">for "{searchQuery}"</span>}
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {displayedItems.map((item) => (
              <Link href="/explore/detail"key={item.id}>
                <div
                  
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
                      <span className="text-xs bg-orange-500/20 text-orange-500 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-lg font-bold text-white">
                          {item.price} ETH
                          <span className="text-xs text-gray-400 ml-1">
                            ($40,205.8)
                          </span>
                        </div>
                        <Link href='/create_profile/profile'>
                          <div className="text-sm text-gray-400">
                            Creator:{" "}
                            <span className="text-white">{item.creator}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <Link href='/wallet'>Buy Now</Link>
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreItems && (
            <div className="text-center">
              <Button
                onClick={handleLoadMore}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-2 bg-transparent"
              >
                Load More NFTs
              </Button>
            </div>
          )}

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">No NFTs found</div>
              <div className="text-gray-500 text-sm">
                Try adjusting your search terms or filters
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Explore;
