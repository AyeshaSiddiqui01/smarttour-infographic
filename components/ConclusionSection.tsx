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
    <div className="md:col-span-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-md p-4 text-white mt-6">
      <h3 className="text-lg font-bold mb-2">Conclusion</h3>
      
      {/* Model Results Visual Display */}
      <div className="flex justify-center items-center my-4 gap-6">
        {optimizationResults.map((result, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-2">
              {/* Circular background */}
              <div className="absolute inset-0 rounded-full bg-white/20"></div>
              
              {/* Value circle with animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className={`rounded-full border-4 ${result.value === 'Optimal' ? 'w-22 h-22' : 'w-20 h-20'}`}
                  style={{ 
                    borderColor: result.color,
                    width: result.value === 'Optimal' ? '88px' : '80px', 
                    height: result.value === 'Optimal' ? '88px' : '80px'
                  }}
                ></div>
                <div className={`absolute font-bold ${result.value === 'Optimal' ? 'text-xl' : 'text-2xl'}`}>
                  {result.value}
                </div>
              </div>
            </div>
            <div className="text-sm font-medium">{result.label}</div>
            <div className="text-xs opacity-80">{result.description}</div>
          </div>
        ))}
      </div>
      
      {/* Stakeholder Benefits with Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-md flex items-start">
          <div className="text-2xl mr-2">👥</div>
          <div>
            <h4 className="font-medium text-white">For Tourists</h4>
            <p className="text-sm text-white/90 mt-1">
              Personalized itineraries with minimized wait times
            </p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-md flex items-start">
          <div className="text-2xl mr-2">💼</div>
          <div>
            <h4 className="font-medium text-white">For Businesses</h4>
            <p className="text-sm text-white/90 mt-1">
              Increased visitors and optimized resource utilization
            </p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-md flex items-start">
          <div className="text-2xl mr-2">🏙️</div>
          <div>
            <h4 className="font-medium text-white">For the City</h4>
            <p className="text-sm text-white/90 mt-1">
              Distributed tourism traffic and reduced congestion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSection; 