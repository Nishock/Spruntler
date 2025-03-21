export default function MarketingSection() {
  return (
    <div className="w-full text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading with gradient text */}
        <h2 className="text-center text-2xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Winning for Our Clients
        </h2>

        {/* Subheading */}
        <p className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          We&apos; ve helped businesses scale, brands shine, and marketing budgets
          actually work. Don&apos; t just take our word for it—here&apos; s proof:
        </p>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 mb-6 relative">
              {/* Placeholder for the magnet image - you can replace this with your own image */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="https://2t3690zz96.ufs.sh/f/LisFD3Cqijuv1eAzH0slrdm8NJOSMhnqLugye5aXkRp4jFQx?height=50&width=50"
                  alt="Magnet attracting coins"
                  className="w-full object-contain"
                  style={{
                    height: 200,
                  }}
                />
              </div>
            </div>
            <p className="text-center font-bold text-lg md:text-xl mb-2">
              95% increase in online engagement
            </p>
            <p className="text-center">for a local coffee shop ☕</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 mb-6 relative">
              {/* Placeholder for the funnel image - you can replace this with your own image */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="https://2t3690zz96.ufs.sh/f/LisFD3CqijuvHNxdwMccYh5RDJOwzB09C1aMoNH3AlrZWtUn?height=50&width=50"
                  alt="Hand pouring coins into funnel"
                  className="w-full  object-contain"
                  style={{
                    height: 200,
                  }}
                />
              </div>
            </div>
            <p className="text-center font-bold text-lg md:text-xl mb-2">
              54% jump in conversions
            </p>
            <p className="text-center">for an e-commerce brand 🛍️</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
            <div className="h-24 w-24 mt-20 mb-6 relative">
              {/* Placeholder for the funnel image - you can replace this with your own image */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="https://2t3690zz96.ufs.sh/f/LisFD3CqijuvHms6UnAccYh5RDJOwzB09C1aMoNH3AlrZWtU?height=50&width=50"
                  alt="Hand pouring coins into funnel"
                  className="w-full  object-contain"
                  style={{
                    height: 200,
                  }}
                />
              </div>
            </div>
            <p className="text-center font-bold text-lg md:text-xl mb-2">
            63% boost in client satisfaction 
            </p>
            <p className="text-center">through content strategy 🎥</p>
          </div>
      </div>
    </div>
  );
}
