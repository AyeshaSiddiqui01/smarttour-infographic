import React from 'react';

const ConclusionSection = () => {
  // Optimization results data (constraint programming outcomes)
  const optimizationResults = [
    { 
      label: 'Objective Function', 
      value: 'Optimal', 
      description: 'Pareto Optimal Solution',
      color: '#4ade80' // green
    },
    { 
      label: 'Constraints Satisfied', 
      value: '100%', 
      description: '4/4 Requirements Met',
      color: '#60a5fa' // blue
    },
    { 
      label: 'Decision Variables', 
      value: '3', 
      description: 'Optimal Assignments',
      color: '#f472b6' // pink
    },
  ];

  return (
    <div className="md:col-span-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-md p-3 text-white mt-4">
      <h3 className="text-base font-bold mb-1">Conclusion</h3>
      
      {/* Compact layout with results and benefits side by side */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {/* Model Results Visual Display - now takes 2 columns */}
        <div className="md:col-span-2 flex justify-around items-center">
          {optimizationResults.map((result, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-1">
                {/* Circular background */}
                <div className="absolute inset-0 rounded-full bg-white/20"></div>
                
                {/* Value circle with animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="rounded-full border-3"
                    style={{ 
                      borderColor: result.color,
                      width: '58px', 
                      height: '58px'
                    }}
                  ></div>
                  <div className="absolute font-bold text-sm">
                    {result.value}
                  </div>
                </div>
              </div>
              <div className="text-xs font-medium">{result.label}</div>
              <div className="text-xs opacity-80 hidden md:block">{result.description}</div>
            </div>
          ))}
        </div>
        
        {/* Stakeholder Benefits with Icons - now takes 3 columns */}
        <div className="md:col-span-3 grid grid-cols-3 gap-1">
          <div className="bg-white/15 rounded-md flex items-center py-1 px-1.5">
            <div className="text-base">👥</div>
            <div className="ml-1 leading-tight">
              <h4 className="font-medium text-xs text-white">For Tourists</h4>
              <p className="text-xs text-white/80 line-clamp-1">
                Personalized itineraries
              </p>
            </div>
          </div>
          <div className="bg-white/15 rounded-md flex items-center py-1 px-1.5">
            <div className="text-base">💼</div>
            <div className="ml-1 leading-tight">
              <h4 className="font-medium text-xs text-white">For Businesses</h4>
              <p className="text-xs text-white/80 line-clamp-1">
                Optimized resources
              </p>
            </div>
          </div>
          <div className="bg-white/15 rounded-md flex items-center py-1 px-1.5">
            <div className="text-base">🏙️</div>
            <div className="ml-1 leading-tight">
              <h4 className="font-medium text-xs text-white">For the City</h4>
              <p className="text-xs text-white/80 line-clamp-1">
                Reduced congestion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSection; 