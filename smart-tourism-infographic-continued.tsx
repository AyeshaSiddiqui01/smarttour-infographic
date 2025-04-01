import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SmartTourismInfographicContinued = () => {
  // Pareto data for 3D visualization
  const paretoData = [
    { travelTime: 31, crowdLevel: 0.6, venues: 4, isOptimal: true },
    { travelTime: 25, crowdLevel: 0.28, venues: 4, isOptimal: true },
    { travelTime: 48, crowdLevel: 0.1, venues: 5, isOptimal: true },
    { travelTime: 52, crowdLevel: 0.4, venues: 3, isOptimal: false },
    { travelTime: 37, crowdLevel: 0.9, venues: 3, isOptimal: false },
    { travelTime: 29, crowdLevel: 0.8, venues: 3, isOptimal: false },
    { travelTime: 42, crowdLevel: 0.5, venues: 4, isOptimal: false },
    { travelTime: 60, crowdLevel: 0.3, venues: 5, isOptimal: false },
    { travelTime: 35, crowdLevel: 0.7, venues: 4, isOptimal: false },
  ];

  return (
    <div>
      {/* Limitations Row */}
      <div className="md:col-span-3 bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Limitations & Future Enhancements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
            <div className="flex items-center mb-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-amber-500 mr-2">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4 className="font-medium">Seasonal Variations</h4>
            </div>
            <p className="text-sm text-gray-600">
              The model does not account for seasonal weather variations, which significantly affect travel efficiency and visitor traffic patterns in Toronto. In colder months, indoor attractions see increased popularity while outdoor venues experience decreased footfall.
            </p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
            <div className="flex items-center mb-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-amber-500 mr-2">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4 className="font-medium">Herding Problem</h4>
            </div>
            <p className="text-sm text-gray-600">
              When large numbers of tourists follow similar optimized itineraries, this can create congestion at specific venues and times—a "herding problem." Future enhancements would include real-time crowd dispersion algorithms that continuously adjust recommendations.
            </p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
            <div className="flex items-center mb-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-amber-500 mr-2">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4 className="font-medium">Model Refinement</h4>
            </div>
            <p className="text-sm text-gray-600">
              The constraint programming model would benefit from callbacks for constraint generation and solution iteration to improve performance. Additional optimization for handling larger venue sets and more complex time-dependent constraints would enhance scalability.
            </p>
          </div>
        </div>
      </div>
      
      {/* Pareto Front Analysis Row */}
      <div className="md:col-span-3 bg-white rounded-lg shadow-md p-4 mt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Pareto Optimality Analysis</h3>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="w-full md:w-1/2">
            <h4 className="text-sm font-medium mb-2">Multi-Objective Trade-offs</h4>
            <ResponsiveContainer width="100%" height={220}>
              <ScatterChart
                margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
              >
                <CartesianGrid opacity={0.3} />
                <XAxis 
                  type="number" 
                  dataKey="travelTime" 
                  name="Travel Time" 
                  unit=" min" 
                  domain={[20, 65]} 
                  label={{ value: 'Travel Time (min)', position: 'bottom', offset: 0 }}
                />
                <YAxis 
                  type="number" 
                  dataKey="crowdLevel" 
                  name="Crowd Level" 
                  domain={[0, 1.0]} 
                  label={{ value: 'Crowd Level', angle: -90, position: 'left' }}
                />
                <ZAxis 
                  type="number" 
                  dataKey="venues" 
                  name="Venues" 
                  range={[60, 300]} 
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(value, name) => {
                    return [
                      name === "Crowd Level" ? `${value.toFixed(2)} (${value < 0.3 ? 'Low' : value < 0.7 ? 'Medium' : 'High'})` : value,
                      name
                    ];
                  }}
                />
                <Scatter 
                  name="Non-Optimal Solutions" 
                  data={paretoData.filter(d => !d.isOptimal)} 
                  fill="#9ca3af" 
                />
                <Scatter 
                  name="Pareto-Optimal Solutions" 
                  data={paretoData.filter(d => d.isOptimal)} 
                  fill="#3b82f6" 
                  shape="star"
                />
              </ScatterChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 text-xs mt-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                <span>Pareto-Optimal</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-400 mr-1"></div>
                <span>Other Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full opacity-25 border border-gray-400 mr-1"></div>
                <span>Circle Size = # Venues</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h4 className="text-sm font-medium mb-2">Key Findings</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-3 rounded-md">
                <h5 className="font-medium text-sm text-blue-800">Saturday's Optimal Tour</h5>
                <p className="text-sm text-gray-600 mt-1">
                  The Saturday four-venue tour (St. Lawrence Market → Hockey Hall of Fame → Distillery District → CN Tower) represents an optimal balance between travel efficiency and crowd avoidance with only 31 minutes of total travel time.
                </p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-md">
                <h5 className="font-medium text-sm text-blue-800">Time-Based Scheduling Importance</h5>
                <p className="text-sm text-gray-600 mt-1">
                  The model effectively utilizes venue operating hours, scheduling early-closing venues (St. Lawrence Market - 5:00 PM) first and late-closing venues (CN Tower - 9:00 PM) last to maximize total visitation opportunity.
                </p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-md">
                <h5 className="font-medium text-sm text-blue-800">Pareto Efficiency</h5>
                <p className="text-sm text-gray-600 mt-1">
                  Pareto-optimal solutions reveal that adding a fifth venue requires accepting at least a 55% increase in travel time, demonstrating clear trade-offs between maximizing venues visited and minimizing travel time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conclusion Row */}
      <div className="md:col-span-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-md p-4 text-white mt-6">
        <h3 className="text-lg font-bold mb-2">Conclusion</h3>
        <p className="mb-4">
          The constraint programming model demonstrates significant potential for optimizing tourist experiences in Toronto, balancing multiple competing objectives while respecting real-world constraints. The data-driven approach creates practical schedules that minimize time spent in crowds and traffic.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-md">
            <h4 className="font-medium text-white">For Tourists</h4>
            <p className="text-sm text-white/90 mt-1">
              Enhanced experiences with personalized itineraries that maximize venue visits while minimizing wait times and traffic delays.
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-md">
            <h4 className="font-medium text-white">For Businesses</h4>
            <p className="text-sm text-white/90 mt-1">
              Increased visitor numbers, improved resource utilization, and new revenue opportunities through optimized multi-venue packages.
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-md">
            <h4 className="font-medium text-white">For the City</h4>
            <p className="text-sm text-white/90 mt-1">
              More evenly distributed tourism traffic, reduced congestion, and enhanced reputation as a smart destination with improved visitor satisfaction.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-6 text-center text-xs text-gray-500">
        <p>Smart Tourism in Toronto: Data-Driven Travel Experience Optimization</p>
        <p className="mt-1">Awad, Kathuria, Narciso-Orejola, Rara, Siddiqui - 2025</p>
      </footer>
    </div>
  );
};

export default SmartTourismInfographicContinued;
