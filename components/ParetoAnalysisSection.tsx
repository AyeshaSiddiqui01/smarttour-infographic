import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Pareto data for 3D visualization
const paretoData = [
  { travelTime: 31, crowdLevel: 0.6, venues: 4, isOptimal: true },
  { travelTime: 48, crowdLevel: 0.1, venues: 5, isOptimal: true, noStar: true },
  { travelTime: 52, crowdLevel: 0.4, venues: 3, isOptimal: false },
  { travelTime: 37, crowdLevel: 0.9, venues: 3, isOptimal: false },
  { travelTime: 29, crowdLevel: 0.8, venues: 3, isOptimal: false },
  { travelTime: 42, crowdLevel: 0.5, venues: 4, isOptimal: false },
  { travelTime: 60, crowdLevel: 0.3, venues: 5, isOptimal: false },
  { travelTime: 35, crowdLevel: 0.7, venues: 4, isOptimal: false },
];

const ParetoAnalysisSection = () => {
  return (
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
                formatter={(value: any, name: string) => {
                  return [
                    name === "Crowd Level" ? `${value.toFixed(2)} (${Number(value) < 0.3 ? 'Low' : Number(value) < 0.7 ? 'Medium' : 'High'})` : value,
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
                name="Pareto-Optimal Solutions with Star" 
                data={paretoData.filter(d => d.isOptimal && !d.noStar)} 
                fill="#3b82f6" 
                shape="star"
              />
              <Scatter 
                name="Pareto-Optimal Solutions without Star" 
                data={paretoData.filter(d => d.isOptimal && d.noStar)} 
                fill="#9ca3af" 
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
  );
};

export default ParetoAnalysisSection; 