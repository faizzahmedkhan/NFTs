"use client"
import React from 'react'

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"



const page = () => {
    const [profileImage, setProfileImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDeleteImage = () => {
    setProfileImage(null)
  }

  return (
    <section className='text-white'>
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile Image Upload */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-full aspect-square bg-gray-900 rounded-lg border-2 border-dashed border-gray-700 flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img src={profileImage || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <Plus className="w-12 h-12 text-gray-500" />
                )}
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="image-upload">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Upload from Computer</Button>
              </label>
              <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

              <Button
                variant="outline"
                className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent mt-4"
                onClick={handleDeleteImage}
              >
                Delete This Image
              </Button>
            </div>
          </div>

          {/* Form Sections */}
          <div className="space-y-8">
            {/* Account Information */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Account Information</h2>
                <Button variant="ghost" size="sm" className="text-gray-400">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm text-gray-300">
                    First Name
                  </Label>
                  <Input id="firstName" defaultValue="Angelina" className="bg-gray-900 border-gray-700 text-white" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm text-gray-300">
                    Last Name
                  </Label>
                  <Input id="lastName" defaultValue="Ali" className="bg-gray-900 border-gray-700 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-gray-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="dummyemail@gmail.com"
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-sm text-gray-300">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Enter Your Full Bio Here..."
                  className="bg-gray-900 border-gray-700 text-white min-h-[100px]"
                />
              </div>
            </div>

            {/* Social Information */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Social Information</h2>
                <Button variant="ghost" size="sm" className="text-gray-400">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-sm text-gray-300">
                    Your Website
                  </Label>
                  <Input id="website" placeholder="Enter URL" className="bg-gray-900 border-gray-700 text-white" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="facebook" className="text-sm text-gray-300">
                    Facebook
                  </Label>
                  <Input
                    id="facebook"
                    placeholder="Connect With Facebook"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter" className="text-sm text-gray-300">
                    Twitter
                  </Label>
                  <Input
                    id="twitter"
                    placeholder="Connect With Twitter"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram" className="text-sm text-gray-300">
                    Instagram
                  </Label>
                  <Input
                    id="instagram"
                    placeholder="Connect With Instagram"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Update Button */}
            <div className="flex justify-end">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">Update Your Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
