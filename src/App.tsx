/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Map, 
  Info, 
  ExternalLink, 
  ChevronDown, 
  Sparkles, 
  X, 
  Compass, 
  Building, 
  ExternalLink as LinkIcon 
} from "lucide-react";
import { HERITAGE_PLACES, BASE_STORYMAP_URL } from "./data";
import { HeritagePlace } from "./types";

export default function App() {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>("");
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [redirectingMessage, setRedirectingMessage] = useState<string | null>(null);

  // Handle immediate dropdown selection redirection
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedPlaceId(value);

    if (value) {
      const place = HERITAGE_PLACES.find((p) => p.id === parseInt(value));
      if (place) {
        const targetUrl = `${BASE_STORYMAP_URL}#${place.slide}`;
        setRedirectingMessage(`ရန်ကုန်အမွေအနှစ်ပြခန်း - "${place.name}" သို့ ကူးပြောင်းနေပါသည်...`);
        
        // Short delay for high-craft micro-interaction animation
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 1500);
      }
    }
  };

  // Redirect to start/overview of the StoryMap
  const handleViewMap = () => {
    setRedirectingMessage("မြေပုံပြခန်း အစပျိုးစာမျက်နှာသို့ ကူးပြောင်းနေပါသည်...");
    setTimeout(() => {
      window.location.href = BASE_STORYMAP_URL;
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-heritage-cream text-heritage-charcoal flex flex-col justify-between p-4 sm:p-6 md:p-8 font-sans selection:bg-heritage-gold selection:text-heritage-charcoal relative overflow-hidden">
      {/* Decorative Traditional Burmese Arc Grid Lines / Flourish shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Ornate Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-heritage-red via-heritage-gold to-heritage-red" />

      {/* Main Centered Content Container */}
      <main className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full py-8 relative z-10">
        
        {/* Cultural Logo Header / Emblem */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12"
        >
          {/* Ornate Gold Royal Crest Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-heritage-red border-2 border-heritage-gold shadow-lg shadow-heritage-red/20 mb-4 sm:mb-5 relative group">
            <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-heritage-gold animate-spin-slow" />
            <div className="absolute inset-0 rounded-full border border-heritage-gold scale-110 opacity-60 group-hover:scale-125 transition-transform duration-500" />
          </div>

          <h1 className="font-burmese text-3xl sm:text-4xl md:text-5xl font-extrabold text-heritage-red tracking-tight leading-normal drop-shadow-sm mb-2 sm:mb-3">
            ရန်ကုန်အမွေအနှစ်
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-medium text-heritage-charcoal/70 tracking-wide font-sans uppercase">
            Yangon Heritage
          </p>
          
          {/* Ornate divider line */}
          <div className="flex items-center justify-center mt-4 space-x-3">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-heritage-gold" />
            <Sparkles className="w-4.5 h-4.5 text-heritage-gold" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-heritage-gold" />
          </div>
        </motion.div>

        {/* The Centralized Three-Button Controller Board */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-xl bg-white border border-heritage-gold/20 rounded-2xl shadow-xl shadow-heritage-charcoal/5 p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Outer Gold Filigree Accent Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-heritage-gold/60 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-heritage-gold/60 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-heritage-gold/60 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-heritage-gold/60 rounded-br-lg" />

          {/* Subtitles inside container */}
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-heritage-gold uppercase bg-heritage-red/5 px-3 py-1 rounded-full border border-heritage-gold/25">
              စူးစမ်းလေ့လာရန် ရွေးချယ်ပါ
            </span>
            <p className="text-sm text-heritage-charcoal/65 mt-2.5 max-w-xs mx-auto">
              Please choose a major heritage landmark below or view the complete interactive travel map.
            </p>
          </div>

          {/* EXACTLY THREE CORE INTERACTIVE ELEMENTS */}
          <div className="space-y-6">

            {/* BUTTON 1: Dropdown Menu (Places List) */}
            <div className="space-y-2">
              <label htmlFor="heritage-selector" className="block text-xs sm:text-sm font-semibold text-heritage-charcoal/80 flex items-center space-x-1.5 px-0.5">
                <MapPin className="w-4 h-4 text-heritage-red shrink-0" />
                <span>၁။ ရှေးဟောင်းအမွေအနှစ်နေရာများ စာရင်း</span>
              </label>
              
              <div className="relative">
                <select
                  id="heritage-selector"
                  value={selectedPlaceId}
                  onChange={handleDropdownChange}
                  disabled={redirectingMessage !== null}
                  className="w-full bg-heritage-cream border border-heritage-gold/40 hover:border-heritage-red/60 focus:border-heritage-red focus:ring-1 focus:ring-heritage-red/50 rounded-xl px-4 py-3.5 pr-10 text-sm font-burmese text-heritage-charcoal font-medium cursor-pointer transition-all duration-300 appearance-none shadow-sm focus:outline-none"
                >
                  <option value="" className="text-heritage-charcoal/60">
                    -- အမွေအနှစ်နေရာတစ်ခုရွေးချယ်ပါ --
                  </option>
                  {HERITAGE_PLACES.map((place) => (
                    <option key={place.id} value={place.id} className="py-2">
                      Slide {place.id}: {place.name} ({place.englishName})
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-heritage-gold">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* BUTTON 2: "မြေပုံဖြင့်ကြည့်ရန်" (View on Map) */}
            <div className="pt-2">
              <button
                id="view-on-map-btn"
                onClick={handleViewMap}
                disabled={redirectingMessage !== null}
                className="w-full group bg-gradient-to-r from-heritage-red to-[#A00000] text-white hover:brightness-110 active:scale-[0.98] py-4 px-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-heritage-red/10 border border-heritage-gold/35 flex items-center justify-center space-x-2.5 transition-all duration-300 cursor-pointer text-base font-bold tracking-wide"
              >
                <Map className="w-5.25 h-5.25 text-heritage-gold group-hover:rotate-6 transition-transform duration-300" />
                <span className="font-burmese">၂။ မြေပုံဖြင့်ကြည့်ရန်</span>
                <ExternalLink className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center py-2">
              <span className="h-[1px] w-full bg-heritage-gold/15" />
              <span className="text-[10px] font-bold text-heritage-gold mx-3 uppercase tracking-widest">Or</span>
              <span className="h-[1px] w-full bg-heritage-gold/15" />
            </div>

            {/* BUTTON 3: "About Us" */}
            <div>
              <button
                id="about-us-btn"
                onClick={() => setIsAboutOpen(true)}
                disabled={redirectingMessage !== null}
                className="w-full bg-white hover:bg-heritage-cream text-heritage-red hover:text-[#700000] border-2 border-heritage-gold/40 hover:border-heritage-gold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2.5 transition-all duration-300 cursor-pointer text-sm font-semibold shadow-sm active:scale-[0.98]"
              >
                <Info className="w-4.5 h-4.5 text-heritage-gold" />
                <span>၃။ About Project (စီမံကိန်းအကြောင်း)</span>
              </button>
            </div>

          </div>
        </motion.div>

        {/* Selected Highlight / Quick Tip Card */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-center max-w-sm"
        >
          <p className="text-xs text-heritage-charcoal/50 leading-relaxed">
            This system links seamlessly with Knight Lab's interactive StoryMapJS architecture using spatial slide coordinate indexing hashes.
          </p>
        </motion.div>
      </main>

      {/* Cultural Map Credit Footer */}
      <footer className="relative z-10 text-center py-4 border-t border-heritage-gold/10 mt-8">
        <p className="text-xs text-heritage-charcoal/70 flex items-center justify-center space-x-1.5">
          <span>ရန်ကုန်မြို့ပြသမိုင်းအမွေအနှစ်ထိန်းသိမ်းစောင့်ရှောက်ရေး</span>
          <span className="text-heritage-gold">•</span>
          <span>© 2026 Yangon Heritage Trust Portal</span>
        </p>
      </footer>

      {/* FULL SCREEN RE-DIRECTING MODAL OVERLAY */}
      <AnimatePresence>
        {redirectingMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-heritage-charcoal/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25 }}
              className="space-y-6"
            >
              {/* Spinning Golden Compass */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-heritage-red border border-heritage-gold rounded-full">
                <Compass className="w-10 h-10 text-heritage-gold animate-spin" />
                <div className="absolute inset-0 rounded-full border border-heritage-gold animate-ping opacity-20" />
              </div>

              <div className="space-y-2">
                <p className="font-burmese text-xl md:text-2xl font-bold text-heritage-gold leading-relaxed">
                  {redirectingMessage}
                </p>
                <p className="text-sm text-heritage-cream/60">
                  Please hold on while we redirect you to the historical atlas...
                </p>
              </div>

              <div className="pt-2">
                <div className="h-1 w-48 bg-heritage-cream/10 rounded-full mx-auto overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                    className="h-full w-1/2 bg-heritage-gold rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* "ABOUT US" SLIDE-UP MODAL PANEL */}
      <AnimatePresence>
        {isAboutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutOpen(false)}
              className="absolute inset-0 bg-heritage-charcoal/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 22 }}
              className="bg-white border-2 border-heritage-gold rounded-2xl shadow-2xl max-w-xl w-full p-6 sm:p-8 relative z-10 m-auto overflow-hidden animate-fade-in"
            >
              {/* Gold Ornamental Line Details */}
              <div className="absolute top-2 left-2 right-2 h-[1px] bg-heritage-gold/20" />
              <div className="absolute bottom-2 left-2 right-2 h-[1px] bg-heritage-gold/20" />

              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-4 right-4 p-2 text-heritage-charcoal/50 hover:text-heritage-red hover:bg-heritage-cream rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                
                {/* Modal Title */}
                <div className="flex items-center space-x-3 pb-3 border-b border-heritage-gold/20 mr-6">
                  <div className="p-2.25 bg-heritage-cream border border-heritage-gold rounded-lg">
                    <Building className="w-5 h-5 text-heritage-red" />
                  </div>
                  <div>
                    <h3 className="font-burmese text-xl font-bold text-heritage-red">
                      စီမံကိန်းအကြောင်း (About Project)
                    </h3>
                    <p className="text-xs text-heritage-charcoal/50 tracking-wider uppercase">
                      Yangon Heritage StoryMap Guide
                    </p>
                  </div>
                </div>

                {/* Modal Contents */}
                <div className="space-y-4 text-sm leading-relaxed text-heritage-charcoal/85 max-h-[60vh] overflow-y-auto pr-1">
                  
                  <p className="font-burmese font-medium">
                    ရန်ကုန်မြို့တော်သည် အရှေ့တောင်အာရှတွင် ကိုလိုနီခေတ် လူနေအဆောက်အအုံများနှင့် ရှေးဟောင်းဗိသုကာလက်ရာများ အများဆုံး စုစည်းရာ မြို့တစ်မြို့ ဖြစ်ပါသည်။ ဤစီမံကိန်းသည် ရန်ကုန်မြို့တွင်းရှိ ထင်ရှားလှသော သမိုင်းဝင် အဆောက်အအုံများ၏ ယဉ်ကျေးမှုပတ်ဝန်းကျင်နှင့် ဗိသုကာအလက်ရာများကို မြေပုံပေါ်တွင် အပြန်အလှန် လေ့လာရှာဖွေနိုင်ရန် ရည်ရွယ်ဖန်တီးထားခြင်း ဖြစ်ပါသည်။
                  </p>

                  <div className="bg-heritage-cream/60 border border-heritage-gold/20 p-3.5 rounded-lg space-y-2">
                    <h4 className="font-bold text-xs text-heritage-red tracking-wider uppercase flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5 text-heritage-gold" />
                      <span>ဘယ်လိုအသုံးပြုရမလဲ?</span>
                    </h4>
                    <ul className="text-xs space-y-1 myanmar-list list-disc list-inside">
                      <li><strong>ရှေးဟောင်းအမွေအနှစ်နေရာများစဥ်း:</strong> ရွေးချယ်လိုက်သည်နှင့် သက်ဆိုင်ရာပြကွက်ဆီသို့ တိုက်ရိုက်ရောက်ရှိသွားမည်။</li>
                      <li><strong>မြေပုံဖြင့်ကြည့်ရန်:</strong> StoryMapJS ၏ အစပျိုးမြေပုံ စာမျက်နှာကို စတင်လေ့လာနိုင်မည်။</li>
                    </ul>
                  </div>

                  <p className="text-xs text-heritage-charcoal/60">
                    This interactive guide functions as an optimized responsive companion dashboard (Avatar) for the underlying Knightlab StoryMap database. It translates coordinate data seamlessly so conservationists and travelers can target specific local architectural history profiles instantly.
                  </p>

                </div>

                {/* Back Button inside Content */}
                <div className="pt-4 border-t border-heritage-gold/20 flex items-center justify-end">
                  <button
                    onClick={() => setIsAboutOpen(false)}
                    className="bg-heritage-red hover:bg-[#600000] text-white px-5 py-2 rounded-lg text-xs font-bold border border-heritage-gold/30 transition-colors cursor-pointer"
                  >
                    ပြီးပါပြီ (Back to Menu)
                  </button>
                </div>

              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
