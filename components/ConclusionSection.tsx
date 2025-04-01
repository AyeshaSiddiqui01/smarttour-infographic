import React from 'react';

const ConclusionSection = () => {
  return (
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
  );
};

export default ConclusionSection; 