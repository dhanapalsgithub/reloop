import React, { useState } from 'react';
import airConditionerImg from '../../assets/Air-Conditioner.webp';
import bigBatteryImg from '../../assets/BigBattery.webp';
import cartonBoxesImg from '../../assets/Carton-boxes.webp';
import clothesImg from '../../assets/Clothes.webp';
import newspaperImg from '../../assets/Newspaper.webp';
import plasticImg from '../../assets/Plastic.webp';
import refrigeratorImg from '../../assets/Refrigerator.webp';
import stackedPhoneBatteriesImg from '../../assets/Stacked-Phone Batteries.webp';
import washingMachineImg from '../../assets/Washing-Machine.webp';

const LandingPage = ({ session, onNavigateToLogin, onNavigateToSignup, onNavigateToDashboard }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const scrapRates = [
    { title: "FRIDGE", subtitle: "Single Door", rate: "₹850 / Pc", category: "Appliances", image: refrigeratorImg },
    { title: "AIR CONDITIONER", subtitle: "Copper Split 1 Ton", rate: "₹3850 / Pc", category: "Appliances", image: airConditionerImg },
    { title: "WASHING MACHINE", subtitle: "Semi Automatic", rate: "₹700 / Pc", category: "Appliances", image: washingMachineImg },
    { title: "PAPER", subtitle: "Newspaper", rate: "₹15 / Kg", category: "Paper", image: newspaperImg },
    { title: "PAPER", subtitle: "Cartons", rate: "₹5 / Kg", category: "Paper", image: cartonBoxesImg },
    { title: "PLASTIC", subtitle: "PET Bottles & Containers", rate: "₹14 / Kg", category: "Plastic", image: plasticImg },
    { title: "CLOTHES", subtitle: "Old Fabrics & Textiles", rate: "₹10 / Kg", category: "Textiles", image: clothesImg },
    { title: "E-WASTE", subtitle: "Inverters & UPS Units", rate: "₹45 / Kg", category: "Electronics", image: bigBatteryImg },
    { title: "BATTERIES", subtitle: "Lead-Acid Scrap Batteries", rate: "₹75 / Kg", category: "Metals & E-Waste", image: stackedPhoneBatteriesImg }
  ];

  const faqs = [
    {
      question: "How does Reloop work?",
      answer: "Reloop makes scrap and e-waste recycling simple in 3 steps: 1) Schedule a pickup or find a drop-off point through our app, 2) Our verified partners collect your items and perform secure data wiping where applicable, 3) You get paid based on item value while we ensure proper recycling or refurbishment."
    },
    {
      question: "What types of electronic devices and scrap do you accept?",
      answer: "We accept a wide range of items including old appliances (fridges, ACs, washing machines), paper, plastics, old textiles, batteries, and all kinds of e-waste such as phones, laptops, inverters, and UPS units."
    },
    {
      question: "How is my personal data protected?",
      answer: "For all electronic storage devices and smart gadgets collected, our verified collection partners follow strict compliance standards to perform certified data wiping and destruction before recycling."
    },
    {
      question: "How much money can I earn from recycling?",
      answer: "Payouts depend on the weight, category, and current market rates of your materials (as listed in our rate table). You receive immediate digital settlement upon verification at pickup."
    },
    {
      question: "Is pickup really free?",
      answer: "Yes! Doorstep pickup is completely free for all scheduled scrap and recycling requests meeting our minimum volume criteria."
    },
    {
      question: "What happens to devices that can't be refurbished?",
      answer: "Items that cannot be refurbished are safely disassembled and processed through certified recycling channels to recover raw metals and minimize environmental impact."
    },
    {
      question: "Which cities do you currently serve?",
      answer: "We currently operate across major metropolitan areas and urban collection hubs, with rapid expansion into new districts continually underway."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-slate-900 flex flex-col justify-between">
      {/* Navigation Header */}
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-emerald-600">ReLoop</span>
          <span className="text-xs uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">Scrap Management</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#ratelist" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition">Rate-List</a>
          <a href="#process" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition">Process</a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition">FAQ</a>
          <a href="#tools" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition">Tools</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition">About</a>
          
          {session ? (
            <button
              onClick={onNavigateToDashboard}
              className="text-sm font-medium px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm"
            >
              Go to Dashboard
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={onNavigateToLogin}
                className="text-sm font-medium px-4 py-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              >
                Sign In
              </button>
              <button
                onClick={onNavigateToSignup}
                className="text-sm font-medium px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm"
              >
                Sell Scrap
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero / Welcome Section */}
      <main className="flex-1 px-6 py-12 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 mb-6">
            🌱 Sustainable & Transparent Recycling Ecosystem
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Smart Scrap Management for a Greener Future
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Welcome to ReLoop. Check our current scrap rates below or schedule a doorstep pickup for households, corporate partners, and collection hubs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {session ? (
              <button
                onClick={onNavigateToDashboard}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition shadow-md"
              >
                Go to Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={onNavigateToSignup}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition shadow-md"
                >
                  Create Account
                </button>
                <button
                  onClick={onNavigateToLogin}
                  className="px-6 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium hover:bg-slate-50 transition"
                >
                  Sign In to Dashboard
                </button>
              </>
            )}
          </div>
        </div>

        {/* Rate List Section */}
        <section id="ratelist" className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Scrap Rate-List</h2>
            <p className="text-slate-600 text-sm">The items our customers sell the most — tap any card to check market pricing per unit.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {scrapRates.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200/80 hover:border-emerald-500 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-32 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center p-2 overflow-hidden border border-slate-100">
                    <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain drop-shadow-sm" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-slate-800 text-sm mt-3 tracking-wide">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-base font-extrabold text-emerald-600">{item.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 Simple Steps Section */}
        <section id="process" className="mb-20 bg-white text-slate-900 rounded-3xl p-8 md:p-14 shadow-sm border border-slate-200/80">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
              3 Simple Steps and <span className="text-emerald-600">Kickstart</span> the Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Streamline your scrap collection and recycling workflow with zero friction. Automate scheduling, pickup assignments, and instant digital payouts.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Step Selection Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div 
                onClick={() => setActiveStep(1)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all ${
                  activeStep === 1 
                    ? 'bg-emerald-50/60 border-emerald-500 shadow-md shadow-emerald-100' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${activeStep === 1 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                    1
                  </div>
                  <h3 className={`font-bold text-lg ${activeStep === 1 ? 'text-emerald-700' : 'text-slate-900'}`}>
                    Smart Pickup Request
                  </h3>
                </div>
                <p className="text-slate-600 text-sm pl-11">
                  List your scrap materials, select preferred time slots, and dispatch pickup notifications to agents instantly.
                </p>
              </div>

              <div 
                onClick={() => setActiveStep(2)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all ${
                  activeStep === 2 
                    ? 'bg-emerald-50/60 border-emerald-500 shadow-md shadow-emerald-100' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${activeStep === 2 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                    2
                  </div>
                  <h3 className={`font-bold text-lg ${activeStep === 2 ? 'text-emerald-700' : 'text-slate-900'}`}>
                    Detailed Run Analytics
                  </h3>
                </div>
                <p className="text-slate-600 text-sm pl-11">
                  Monitor collection runs, transit weights, and hub performance metrics with real-time logs and dashboards.
                </p>
              </div>

              <div 
                onClick={() => setActiveStep(3)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all ${
                  activeStep === 3 
                    ? 'bg-emerald-50/60 border-emerald-500 shadow-md shadow-emerald-100' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${activeStep === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                    3
                  </div>
                  <h3 className={`font-bold text-lg ${activeStep === 3 ? 'text-emerald-700' : 'text-slate-900'}`}>
                    Instant Payouts & Settlement
                  </h3>
                </div>
                <p className="text-slate-600 text-sm pl-11">
                  Complete transactions with automated receipt generation, scale verifications, and secure digital settlements.
                </p>
              </div>
            </div>

            {/* Interactive Preview Mockup Column */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 relative overflow-hidden min-h-[380px] flex flex-col justify-center shadow-inner">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="text-xs text-slate-400 ml-2 font-mono">reloop-workflow-engine.internal</span>
              </div>

              <div className="mt-8">
                {activeStep === 1 && (
                  <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm animate-fadeIn">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded font-medium">Step 1: Pickup Dispatch</span>
                      <span className="text-xs text-emerald-600 font-medium">● Active Node</span>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <label className="text-xs text-slate-500 block mb-1">Customer Location / Hub</label>
                        <div className="text-slate-800 font-mono text-xs font-semibold">Zone A - Central Collection Hub #402</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <label className="text-xs text-slate-500 block mb-1">Assigned Partner</label>
                        <div className="text-emerald-600 font-mono text-xs font-semibold">Delivery Agent ID: #DA-8821</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm animate-fadeIn">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded font-medium">Step 2: Analytics & Scale</span>
                      <span className="text-xs text-emerald-600 font-medium">● Live Tracking</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="text-xs text-slate-500">Total Weight Verified</div>
                        <div className="text-lg font-bold text-slate-900 mt-1">450.5 Kg</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="text-xs text-slate-500">Transit Efficiency</div>
                        <div className="text-lg font-bold text-emerald-600 mt-1">98.4%</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm animate-fadeIn">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded font-medium">Step 3: Settlement</span>
                      <span className="text-xs text-emerald-600 font-medium">● Completed</span>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex justify-between items-center">
                        <div>
                          <div className="text-xs text-slate-500">Total Payout Disbursed</div>
                          <div className="text-slate-900 font-mono text-sm font-bold">₹12,450.00</div>
                        </div>
                        <span className="bg-emerald-100 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-semibold">Success</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section id="faq" className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 mb-4">
              ❓ Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              Got Questions? <span className="text-emerald-600">We've Got Answers</span>
            </h2>
            <p className="text-slate-600 text-sm">
              Find answers to common questions about our recycling process, rewards system, and environmental impact.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`font-bold text-base sm:text-lg ${isOpen ? 'text-emerald-700' : 'text-slate-900'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition font-bold text-sm ${
                      isOpen ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base border-t border-slate-100 pt-4 relative">
                      <div className="absolute top-4 left-0 w-1 h-12 bg-emerald-500 rounded-r"></div>
                      <p className="pl-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* External Tracking & Conversion Tools Section */}
        <section id="tools" className="mb-20 pt-12 border-t border-slate-200 text-left">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Logistics & Calculation Tools</h2>
          <p className="text-slate-600 text-sm mb-6">Quick utilities for global cargo tracking, marine routing, and precise unit conversions.</p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <a 
              href="https://www.track-trace.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 transition group"
            >
              <h3 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-emerald-600 transition">Shipment Tracking ↗</h3>
              <p className="text-slate-600">Track multi-carrier global shipments, waybills, and cargo movement efficiently.</p>
            </a>
            <a 
              href="https://shipfinder.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 transition group"
            >
              <h3 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-emerald-600 transition">Ship Finder ↗</h3>
              <p className="text-slate-600">Monitor live vessel traffic, maritime positions, and global sea routes in real time.</p>
            </a>
            <a 
              href="https://www.unitconverters.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 transition group"
            >
              <h3 className="font-semibold text-slate-900 text-base mb-2 group-hover:text-emerald-600 transition">Unit Converter ↗</h3>
              <p className="text-slate-600">Convert weight, volume, and metric measurements accurately for scrap processing.</p>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="pt-12 border-t border-slate-200 text-left">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">About ReLoop</h2>
          <div className="grid md:grid-cols-3 gap-6 text-slate-600 text-sm">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-base mb-2">Role-Based Access</h3>
              <p>Tailored portals for Admins, Corporates, Hub Managers, and Delivery Partners to manage operations smoothly.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-base mb-2">Live Tracking</h3>
              <p>Real-time updates on scrap collection volumes, transit statuses, and district-wise distribution hubs.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-base mb-2">Instant Payouts</h3>
              <p>Automated financial summaries, transaction logs, and secure payment processing with T+1 settlements.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ReLoop Scrap Management Platform. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;