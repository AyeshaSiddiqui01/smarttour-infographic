import React from 'react';

const LimitationsSection = () => {
  return (
    <div className="md:col-span-3 bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-3">Limitations & Future Enhancements</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {/* Left side: Limitations */}
        <div className="col-span-2 md:col-span-3 bg-red-50 rounded-lg p-4 relative overflow-hidden">
          <h4 className="font-bold text-red-800 mb-3 flex items-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mr-2 text-red-600">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Current Limitations
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Limitation 1 */}
            <div className="bg-white rounded-md p-3 shadow-sm flex flex-col items-center text-center">
              <div className="bg-red-100 rounded-full p-2 mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-red-500">
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h5 className="font-medium text-sm mb-1">Seasonal Variations</h5>
              <p className="text-xs text-gray-600">Weather impacts not fully modeled</p>
            </div>
            
            {/* Limitation 2 */}
            <div className="bg-white rounded-md p-3 shadow-sm flex flex-col items-center text-center">
              <div className="bg-red-100 rounded-full p-2 mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-red-500">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h5 className="font-medium text-sm mb-1">Herding Problem</h5>
              <p className="text-xs text-gray-600">Similar itineraries create congestion</p>
            </div>
            
            {/* Limitation 3 */}
            <div className="bg-white rounded-md p-3 shadow-sm flex flex-col items-center text-center">
              <div className="bg-red-100 rounded-full p-2 mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-red-500">
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h5 className="font-medium text-sm mb-1">Limited Dataset</h5>
              <p className="text-xs text-gray-600">10 attractions may not represent all options</p>
            </div>
          </div>
        </div>
        
        {/* Right side: Future Enhancements */}
        <div className="col-span-2 md:col-span-3 bg-indigo-50 rounded-lg p-4 relative overflow-hidden">
          <h4 className="font-bold text-indigo-800 mb-3 flex items-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mr-2 text-indigo-600">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Future Enhancements
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Enhancement 1 */}
            <div className="bg-white rounded-md p-3 shadow-sm flex flex-col items-center text-center">
              <div className="bg-indigo-100 rounded-full p-2 mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-indigo-500">
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h5 className="font-medium text-sm mb-1">Real-time Adjustment</h5>
              <p className="text-xs text-gray-600">Live crowd dispersion algorithms</p>
            </div>
            
            {/* Enhancement 2 */}
            <div className="bg-white rounded-md p-3 shadow-sm flex flex-col items-center text-center">
              <div className="bg-indigo-100 rounded-full p-2 mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-indigo-500">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h5 className="font-medium text-sm mb-1">Expanded Coverage</h5>
              <p className="text-xs text-gray-600">More venues and global cities</p>
            </div>
            
            {/* Enhancement 3 */}
            <div className="bg-white rounded-md p-3 shadow-sm flex flex-col items-center text-center">
              <div className="bg-indigo-100 rounded-full p-2 mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-indigo-500">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h5 className="font-medium text-sm mb-1">Model Refinement</h5>
              <p className="text-xs text-gray-600">Advanced constraints & personalization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitationsSection; 