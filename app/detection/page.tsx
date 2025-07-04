// "use client";
// import React, { useRef, useState } from "react";
// import { Layers } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

// export default function Component() {
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const multiFileInputRef = useRef<HTMLInputElement>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [multiPreviews, setMultiPreviews] = useState<string[]>([]);

//   const handleSingleUploadClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleMultiUploadClick = () => {
//     multiFileInputRef.current?.click();
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setPreview(event.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleMultiFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
//     const readers = files.map(
//       (file) =>
//         new Promise<string>((resolve) => {
//           const reader = new FileReader();
//           reader.onload = (event) => resolve(event.target?.result as string);
//           reader.readAsDataURL(file);
//         })
//     );
//     Promise.all(readers).then(setMultiPreviews);
//   };

//   return (
//     <div className="min-h-screen text-white">
//       {/* Background pattern */}
//       {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
//             backgroundSize: "20px 20px",
//           }}
//         />
//       </div> */}

//       <div className="relative z-10">
//         {/* Header */}
//         <div className="text-center pt-16 pb-8">
//           <p className="text-orange-500 text-sm font-medium mb-4">Explore</p>
//           <h1 className="text-4xl font-bold mb-6">Upload Your Item</h1>

//           {/* Breadcrumb */}
//           <div className="text-sm text-gray-400">
//             <span>Home</span>
//             <span className="mx-2">{">"}</span>
//             <span className="text-orange-500">Upload Item</span>
//           </div>
//         </div>

//         {/* Upload Options */}
//         <div className="flex justify-center items-center min-h-[400px] px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
//             {/* Upload Single Item */}
//             <Card className="bg-gray-900/50 border-gray-800 p-8 text-center hover:border-orange-500/50 transition-colors group">
//               <div className="mb-6">
//                 <div className="inline-flex items-center justify-center w-20 h-20 mb-4">
//                   <Layers className="w-12 h-12 text-gray-400 group-hover:text-orange-500 transition-colors" />
//                 </div>
//                 {preview && (
//                   <img
//                     src={preview}
//                     alt="Preview"
//                     className="mx-auto mt-4 rounded shadow max-h-32"
//                   />
//                 )}
//               </div>
//               <Button
//                 variant="outline"
//                 className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors w-full bg-transparent"
//                 onClick={handleSingleUploadClick}
//               >
//                 Upload Single Item
//               </Button>
//               <input
//                 type="file"
//                 accept="image/*"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//             </Card>

//             {/* Upload Multiple Items */}
//             <Card className="bg-gray-900/50 border-gray-800 p-8 text-center hover:border-orange-500/50 transition-colors group">
//               <div className="mb-6">
//                 <div className="inline-flex items-center justify-center w-20 h-20 mb-4">
//                   <div className="relative">
//                     <Layers className="w-12 h-12 text-gray-400 group-hover:text-orange-500 transition-colors" />
//                     <Layers className="w-12 h-12 text-gray-400 group-hover:text-orange-500 transition-colors absolute -top-2 -right-6 opacity-60" />
//                   </div>
//                 </div>
//                 {multiPreviews.length > 0 && (
//                   <div className="flex flex-wrap gap-2 justify-center mt-4">
//                     {multiPreviews.map((src, idx) => (
//                       <img
//                         key={idx}
//                         src={src}
//                         alt={`Preview ${idx + 1}`}
//                         className="rounded shadow max-h-20"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <Button
//                 variant="outline"
//                 className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors w-full bg-transparent"
//                 onClick={handleMultiUploadClick}
//               >
//                 Upload Multiple Items
//               </Button>
//               <input
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 ref={multiFileInputRef}
//                 onChange={handleMultiFileChange}
//                 className="hidden"
//               />
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Layers, CheckCircle, AlertTriangle, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

interface DetectionResult {
  filename: string
  preview: string
  isDeepfake: boolean
  confidence: number
  aiModels: {
    name: string
    percentage: number
    color: string
  }[]
  processingTime: number
}

export default function Component() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const multiFileInputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)
  // const [multiPreviews, setMultiPreviews] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingProgress, setProcessingProgress] = useState(0)
  const [results, setResults] = useState<DetectionResult[]>([])
  const [currentFile, setCurrentFile] = useState<string>("")

  const handleSingleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleMultiUploadClick = () => {
    multiFileInputRef.current?.click()
  }

  const simulateProcessing = async (files: File[]): Promise<DetectionResult[]> => {
    const results: DetectionResult[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      setCurrentFile(file.name)

      // Simulate processing each file
      for (let progress = 0; progress <= 100; progress += 10) {
        setProcessingProgress(progress)
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      // Generate mock results
      const isDeepfake = Math.random() > 0.6
      const confidence = Math.floor(Math.random() * 30) + 70

      const aiModels = [
        { name: "StyleGAN", percentage: Math.floor(Math.random() * 40) + 10, color: "bg-red-500" },
        { name: "FaceSwap", percentage: Math.floor(Math.random() * 30) + 5, color: "bg-orange-500" },
        { name: "DeepFaceLab", percentage: Math.floor(Math.random() * 25) + 5, color: "bg-yellow-500" },
        { name: "First Order", percentage: Math.floor(Math.random() * 20) + 5, color: "bg-blue-500" },
      ].sort((a, b) => b.percentage - a.percentage)

      const reader = new FileReader()
      const preview = await new Promise<string>((resolve) => {
        reader.onload = (event) => resolve(event.target?.result as string)
        reader.readAsDataURL(file)
      })

      results.push({
        filename: file.name,
        preview,
        isDeepfake,
        confidence,
        aiModels,
        processingTime: Math.floor(Math.random() * 3000) + 1000,
      })
    }

    return results
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)

      // Start processing
      setIsProcessing(true)
      setResults([])
      const detectionResults = await simulateProcessing([file])
      setResults(detectionResults)
      setIsProcessing(false)
      setProcessingProgress(0)
    }
  }

  // const handleMultiFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = Array.from(e.target.files || [])

  //   // Set previews
  //   const readers = files.map(
  //     (file) =>
  //       new Promise<string>((resolve) => {
  //         const reader = new FileReader()
  //         reader.onload = (event) => resolve(event.target?.result as string)
  //         reader.readAsDataURL(file)
  //       }),
  //   )
  //   const previews = await Promise.all(readers)
  //   setMultiPreviews(previews)

  //   // Start processing
  //   setIsProcessing(true)
  //   setResults([])
  //   const detectionResults = await simulateProcessing(files)
  //   setResults(detectionResults)
  //   setIsProcessing(false)
  //   setProcessingProgress(0)
  // }

  const resetUpload = () => {
    setPreview(null)
    // setMultiPreviews([])
    setResults([])
    setIsProcessing(false)
    setProcessingProgress(0)
  }

  return (
    <section className="min-h-screen text-white">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center pt-16 pb-8">
          <p className="text-orange-500 text-sm font-medium mb-4">AI Detection</p>
          <h1 className="text-4xl font-bold mb-6">Deepfake Detector</h1>
          <div className="text-sm text-gray-400">
            <span>Home</span>
            <span className="mx-2">{">"}</span>
            <span className="text-orange-500">Upload & Analyze</span>
          </div>
        </div>

        {/* Processing Section */}
        {isProcessing && (
          <div className="max-w-md mx-auto mb-8 px-4">
            <Card className="bg-gray-900/50 border-gray-800 p-6">
              <div className="text-center mb-4">
                <Upload className="w-8 h-8 text-orange-500 mx-auto mb-2 animate-pulse" />
                <h3 className="text-lg font-semibold">Processing Image</h3>
                <p className="text-sm text-gray-400 mt-1">{currentFile}</p>
              </div>
              <Progress value={processingProgress} className="mb-2" />
              <p className="text-xs text-gray-400 text-center">{processingProgress}% Complete</p>
            </Card>
          </div>
        )}

        {/* Results Section */}
        {results.length > 0 && !isProcessing && (
          <div className="max-w-4xl mx-auto mb-8 px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Detection Results</h2>
              <Button className="text-black cursor-pointer" onClick={resetUpload} variant="outline" size="sm">
                Upload New Images
              </Button>
            </div>

            <div className="grid gap-6">
              {results.map((result, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image Preview */}
                    <div>
                      <Image
                        src={result.preview || "/placeholder.svg"}
                        alt={result.filename}
                        className="w-full rounded-lg shadow-lg max-h-64 object-cover"
                      />
                      <p className="text-sm text-gray-400 mt-2">{result.filename}</p>
                    </div>

                    {/* Detection Results */}
                    <div className="space-y-4">
                      {/* Main Result */}
                      <div className="flex items-center gap-3">
                        {result.isDeepfake ? (
                          <AlertTriangle className="w-6 h-6 text-red-500" />
                        ) : (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        )}
                        <div>
                          <Badge
                            variant={result.isDeepfake ? "destructive" : "default"}
                            className={result.isDeepfake ? "bg-red-500" : "bg-green-500"}
                          >
                            {result.isDeepfake ? "DEEPFAKE DETECTED" : "AUTHENTIC"}
                          </Badge>
                          <p className="text-sm text-gray-400 mt-1">Confidence: {result.confidence}%</p>
                        </div>
                      </div>

                      {/* AI Models Detection */}
                      <div className="text-white">
                        <h4 className="font-semibold mb-3">AI Model Analysis</h4>
                        <div className="space-y-3">
                          {result.aiModels.map((model, idx) => (
                            <div key={idx}>
                              <div className="flex justify-between text-sm mb-1">
                                <span>{model.name}</span>
                                <span>{model.percentage}%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${model.color}`}
                                  style={{ width: `${model.percentage}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Processing Info */}
                      <div className="text-xs text-gray-500 pt-2 border-t border-gray-700">
                        Processing time: {result.processingTime}ms
                      </div>
                    </div>
                  </div>
                  {result.confidence > 70 && (
                    <div className="text-center">
                      <Link href='/create' className="underline text-white">
                        Do you want to sell it?
                      </Link>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Upload Options - Only show if not processing and no results */}
        {!isProcessing && results.length === 0 && (
          <div className="flex justify-center items-center min-h-[400px] px-4">
            <div className="max-w-2xl  w-full">
              {/* Upload Single Item */}
              <Card className="bg-gray-900/50 w-1/2 mx-auto border-gray-800 p-8 text-center hover:border-orange-500/50 transition-colors group">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-4">
                    <Layers className="w-12 h-12 text-gray-400 group-hover:text-orange-500 transition-colors" />
                  </div>
                  {preview && (
                    <Image
                      src={preview || "/placeholder.svg"}
                      alt="Preview"
                      className="mx-auto mt-4 rounded shadow max-h-32"
                    />
                  )}
                </div>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors w-full bg-transparent"
                  onClick={handleSingleUploadClick}
                >
                  Upload Single Image
                </Button>
                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
              </Card>

              {/* Upload Multiple Items */}
              {/* <Card className="bg-gray-900/50 border-gray-800 p-8 text-center hover:border-orange-500/50 transition-colors group">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-4">
                    <div className="relative">
                      <Layers className="w-12 h-12 text-gray-400 group-hover:text-orange-500 transition-colors" />
                      <Layers className="w-12 h-12 text-gray-400 group-hover:text-orange-500 transition-colors absolute -top-2 -right-6 opacity-60" />
                    </div>
                  </div>
                  {multiPreviews.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {multiPreviews.map((src, idx) => (
                        <img
                          key={idx}
                          src={src || "/placeholder.svg"}
                          alt={`Preview ${idx + 1}`}
                          className="rounded shadow max-h-20"
                        />
                      ))}
                    </div>
                  )}
                </div>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors w-full bg-transparent"
                  onClick={handleMultiUploadClick}
                >
                  Upload Multiple Images
                </Button>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  ref={multiFileInputRef}
                  onChange={handleMultiFileChange}
                  className="hidden"
                />
              </Card> */}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
