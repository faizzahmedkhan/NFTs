import { Button } from "@/components/ui/button"
import Image from "next/image"

const wallets = [
  {
    name: "Phantom Wallet",
    image: "/phantom.png",
    // color: "bg-blue-500",
  },
  {
    name: "Metamask",
    image: "/metamask.png",
    // color: "bg-orange-500",
  },
  {
    name: "Binance Wallet",
    image: "/binance.png",
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect Your Wallet</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>Home</span>
            <span>{">"}</span>
            <span className="text-orange-400">Wallet</span>
          </div>
        </div>

        {/* Wallet Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {wallets.map((wallet, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-32 md:h-40 flex flex-col items-center justify-center gap-4 bg-transparent border-gray-800 hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-200"
              >
                <div
                //   className={`w-12 h-12 md:w-16 md:h-16 rounded-xl ${wallet.color} flex items-center justify-center text-2xl md:text-3xl`}
                >
                  <Image src={wallet.image} alt="img" width={60} height={60}/>
                </div>
                <span className="text-white font-medium text-sm md:text-base">{wallet.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">Choose your preferred wallet to connect and start exploring</p>
        </div>
      </div>
    </div>
  )
}
