"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Upload, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  const categories = [
    "3D Art",
    "Game",
    "Painting",
    "Wall Art",
    "Virtual",
    "Gif Art",
    "Entertainment",
    "Others",
  ];

  // Form state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [form, setForm] = useState({
    itemName: "",
    title: "",
    royalty: "",
    copies: "",
    description: "",
    fixedPrice:"",
    category: [] as string[],
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Handle file upload
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setErrors((prev) => ({ ...prev, file: "" }));
    }
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  

  // Handle category select
  const handleCategorySelect = (category: string) => {
    setForm((prev) => {
      const alreadySelected = prev.category.includes(category);
      return {
        ...prev,
        category: alreadySelected
          ? prev.category.filter((c) => c !== category)
          : [...prev.category, category],
      };
    });
    setErrors((prev) => ({ ...prev, category: "" }));
  };

  // Validation logic
  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!selectedFile) newErrors.file = "File is required."
    if (!form.itemName.trim()) newErrors.itemName = "Item Name is required."
    if (!form.title.trim()) newErrors.title = "Title is required."
    if (!form.royalty.trim()) newErrors.royalty = "Royalty is required."
    else if (isNaN(Number(form.royalty)) || Number(form.royalty) < 0 || Number(form.royalty) > 100)
      newErrors.royalty = "Royalty must be a number between 0 and 100."
    if (!form.copies.trim()) newErrors.copies = "Copies is required."
    else if (!/^\d+$/.test(form.copies) || Number(form.copies) < 1)
      newErrors.copies = "Copies must be a positive integer."
    if (!form.description.trim()) newErrors.description = "Description is required."
    if (!form.fixedPrice.trim()) newErrors.fixedPrice = "Fixed price is required."
    else if (isNaN(Number(form.fixedPrice)) || Number(form.fixedPrice) < 0)
      newErrors.fixedPrice = "Fixed price must be a non-negative number."
    if (!form.category.length) newErrors.category = "At least one category is required."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Submit logic here
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto  px-6 py-16">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Your Item</h1>
          <div className="text-gray-400 text-sm">
            <span>Home</span> <span className="mx-2">{">"}</span>{" "}
            <span className="text-orange-500">Upload Item</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {/* Upload Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* File Upload */}
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 text-center">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".png,.gif,.webp,.mp4,.mp3"
                  onChange={handleFileSelect}
                />
                <div className="space-y-4">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-gray-300 mb-4 ">
                      PNG, GIF, WEBP, MP4 or MP3. Max 100mb
                    </p>
                    <Button
                      type="button"
                      onClick={() =>
                        document.getElementById("file-upload")?.click()
                      }
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      Browse File
                    </Button>
                  </div>
                  {errors.file && (
                    <p className="text-red-500 text-sm mt-2">{errors.file}</p>
                  )}
                </div>
              </div>

              {/* Item Details */}
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl text-orange-600 font-semibold">
                      Item
                    </h3>
                    <Button variant="ghost" size="sm" className="text-gray-400">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="itemName" className="text-gray-300 mb-4">
                        Item Name
                      </Label>
                      <Input
                        id="itemName"
                        value={form.itemName}
                        onChange={handleChange}
                        placeholder="3D Superhero"
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                      {errors.itemName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.itemName}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="title" className="text-gray-300 mb-4">
                        Title
                      </Label>
                      <Input
                        id="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Enter title"
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                      {errors.title && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.title}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-gray-300 mb-4">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Enter description"
                      className="bg-gray-800 border-gray-600 text-white min-h-[100px]"
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Fixed Price */}
              <div>
                <Label htmlFor="fixedPrice" className="text-gray-300 mb-4">
                  Fixed Price (ETH)
                </Label>
                <Input
                  id="fixedPrice"
                  value={form.fixedPrice}
                  onChange={handleChange}
                  placeholder="e.g. 1.00"
                  className="bg-gray-800 border-gray-600 text-white"
                />
                {errors.fixedPrice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fixedPrice}
                  </p>
                )}
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Choose a Category
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      type="button"
                      variant={
                        form.category.includes(category) ? "default" : "outline"
                      }
                      className={`mb-4 bg-transparent border-gray-600 text-gray-300 hover:bg-orange-600 hover:border-orange-600 hover:text-white
                        ${
                          form.category.includes(category)
                            ? "bg-orange-600 border-orange-600 text-white"
                            : ""
                        }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                )}
              </div>

              {/* Upload Button */}
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3"
              >
                Upload Your Item
              </Button>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-xl font-semibold mb-4">Item Preview</h3>
                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-4">
                    <div className="relative aspect-square mb-4 bg-gradient-to-br from-black to-purple-900 rounded-lg overflow-hidden">
                      {previewUrl ? (
                        <Image src={previewUrl || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center"></div>
                      )}
                    </div>
                    <div className="space-y-3 text-white">
                      {/* Show Item Name and Title */}
                      <div>
                        <div className="text-lg font-bold">
                          {form.itemName || <span className="text-gray-500">Item Name Example</span>}
                        </div>
                        <div className="text-sm text-gray-400">
                          {form.title || <span className="text-gray-600">Item Title Example</span>}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-bold">
                            {form.fixedPrice ? `${form.fixedPrice} ETH` : "1.00 ETH"}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Fixed Price</div>
                        </div>
                      </div>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700"><Link href='/wallet'>Buy Now</Link></Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
