import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
     {/* Footer */}
      <footer className="text-white ">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Marketplace */}
            {/* <div>
              <h4 className="font-semibold text-lg mb-4">Marketplace</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Explore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Create
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Creators
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Collectors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Influencers
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Categories</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/explore" className="hover:text-white transition-colors">
                    3D Art
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-white transition-colors">
                    Music
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-white transition-colors">
                    Games
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-white transition-colors">
                    Virtual
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-white transition-colors">
                    Entertainment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            {/* <div>
              <h4 className="font-semibold text-lg mb-4">Community</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Suggestions
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Be Updated With Us</h4>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <p className="text-center text-gray-400 text-sm">© Copyright NFT Marketplace 2022. All Right Reserved.</p>
          </div>
        </div>
      </footer> 
    </>
  )
}

export default Footer
