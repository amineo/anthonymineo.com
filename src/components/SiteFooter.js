import React from 'react'
import PortfolioLinks from '@/components/PortfolioLinks'

export default function SiteFooter() {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center md:order-2">
        <PortfolioLinks />
      </div>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-base leading-6 text-gray-400">
          &copy; 2021 AnthonyMineo.com
        </p>
      </div>
    </div>
  )
}
