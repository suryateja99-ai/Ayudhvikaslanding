import React, { useState } from 'react';
import { 
  Search, Check, Shield, Sparkles, Filter, Package,
  Zap, ArrowRight, Building2, Home
} from 'lucide-react';
import { motion } from 'motion/react';
import { AyudhKlinLogo } from './AyudhKlinLogo';
import brandPosterImg from '../assets/images/brand_official_poster_1784802712788.jpg';
import brandTeamworkImg from '../assets/images/brand_teamwork_quote_1784802669697.jpg';

interface S4SmartProductsProps {
  onOpenQuoteModal: (serviceOrProductName?: string) => void;
  onSelectTab: (tab: string) => void;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Cleaning Solutions' | 'Hygiene Products' | 'Air Care' | 'Equipment' | 'Supplies';
  type: 'Domestic' | 'Industrial' | 'Both';
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Bathroom Cleaner',
    category: 'Cleaning Solutions',
    type: 'Domestic',
    description: 'Professional-grade bathroom cleaning solution formulated for heavy lime-scale and tile stain removal.',
    features: ['Deep Cleaning', 'Anti-bacterial', 'Fresh Scent'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-2',
    name: 'Hard Surface Disinfectant',
    category: 'Cleaning Solutions',
    type: 'Both',
    description: 'Hospital-grade disinfection for all hard surfaces, counter tops, and heavy foot-traffic floors.',
    features: ['Kills 99.9% Germs', 'Quick Action', 'Safe on Surfaces'],
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=600&q=80',
    badge: 'Best Seller',
  },
  {
    id: 'prod-3',
    name: 'Glass & Surface Cleaner',
    category: 'Cleaning Solutions',
    type: 'Domestic',
    description: 'Streak-free shine for all glass, window panes, and mirror surfaces with anti-dust formulation.',
    features: ['Streak-Free Formula', 'Quick Drying', 'Anti-Static'],
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-4',
    name: 'Multi Purpose Polish',
    category: 'Cleaning Solutions',
    type: 'Both',
    description: 'Professional polish for multiple furniture, stainless steel, and composite surface shine.',
    features: ['Long-lasting Shine', 'Protective Layer', 'Multi-Surface Use'],
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-5',
    name: 'Heavy Duty Floor Degreaser',
    category: 'Cleaning Solutions',
    type: 'Industrial',
    description: 'Industrial-strength concentrated floor degreaser formulated for factories, automotive bays & warehouses.',
    features: ['Removes Oil & Grease', 'Low Foaming Formula', 'Concentrated Liquid'],
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-6',
    name: 'Automatic Hand Sanitizer Dispenser',
    category: 'Hygiene Products',
    type: 'Both',
    description: 'Touchless infrared wall-mounted & stand dispenser for high-traffic entryways and lobbies.',
    features: ['Touchless Sensor', '1000ml Refill Tank', 'Battery / Adapter Powered'],
    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80',
    badge: 'Corporate Standard',
  },
  {
    id: 'prod-7',
    name: 'Foaming Anti-Bacterial Hand Wash',
    category: 'Hygiene Products',
    type: 'Domestic',
    description: 'Gentle skin-safe antibacterial foaming hand wash with soothing moisturizers.',
    features: ['Moisturizing Formula', 'pH Balanced', 'Skin Protective'],
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-8',
    name: 'Automated Aerosol Air Freshener',
    category: 'Air Care',
    type: 'Both',
    description: 'Programmable wall-mounted fragrance dispenser unit for continuous ambient freshness.',
    features: ['24/7 Odor Control', 'Adjustable Timer Intervals', '3000 Spray Capacity'],
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-9',
    name: 'Heavy Duty Single Disc Floor Scrubber',
    category: 'Equipment',
    type: 'Industrial',
    description: 'High performance 17-inch commercial floor scrubbing and polishing machine with gear drive.',
    features: ['Heavy Duty Motor', 'Ergonomic Handle', 'Multi-Surface Pad'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-10',
    name: 'Industrial Wet & Dry Vacuum Cleaner',
    category: 'Equipment',
    type: 'Industrial',
    description: 'High suction 30L stainless steel commercial wet and dry extractor with heavy duty accessories.',
    features: ['Dual Turbine Motor', 'Blower Function', 'HEPA Filtration'],
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-11',
    name: 'Microfiber Mop & Bucket System',
    category: 'Supplies',
    type: 'Both',
    description: 'Professional dual-chamber spin mop bucket set with lint-free microfiber heads.',
    features: ['Dual Chamber Wringer', '360 Spin Mop Head', 'Lint-Free Microfiber'],
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-12',
    name: 'Nitrile Safety Gloves & PPE Supplies',
    category: 'Supplies',
    type: 'Industrial',
    description: 'Chemical resistant powder-free heavy duty nitrile safety gloves for sanitation teams.',
    features: ['Chemical Resistant', 'Textured Grip', 'Tear Resistant'],
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=600&q=80',
  },
];

const CATEGORIES = [
  'All Products',
  'Cleaning Solutions',
  'Hygiene Products',
  'Air Care',
  'Equipment',
  'Supplies',
] as const;

export const S4SmartProducts: React.FC<S4SmartProductsProps> = ({ onOpenQuoteModal, onSelectTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [selectedType, setSelectedType] = useState<'All' | 'Domestic' | 'Industrial'>('All');

  // Filter products
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    // Search query filter
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category filter
    const matchesCategory = 
      selectedCategory === 'All Products' || product.category === selectedCategory;

    // Type filter
    const matchesType = 
      selectedType === 'All' || 
      product.type === selectedType || 
      product.type === 'Both';

    return matchesSearch && matchesCategory && matchesType;
  });

  const handleSelectDomesticCard = () => {
    setSelectedType('Domestic');
    const catalogEl = document.getElementById('product-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectIndustrialCard = () => {
    setSelectedType('Industrial');
    const catalogEl = document.getElementById('product-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20 text-slate-900 font-sans">
      
      {/* Pristine Green & White Top Banner / Brand Header */}
      <div className="bg-gradient-to-b from-emerald-50/80 via-emerald-100/40 to-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-100 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-300/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-5">
          {/* Brand Logo & Tagline Component backgroundless */}
          <div className="flex justify-center mb-2">
            <AyudhKlinLogo size="xl" showTagline={true} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>EXCLUSIVELY GREEN & CLEAN SOLUTIONS</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-emerald-950 tracking-tight">
            AyudhKlin Professional Products
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Discover our complete lineup of eco-friendly, hospital-grade cleaning and hygiene products specially formulated for domestic homes and heavy industrial complexes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">

        {/* SECTION 1: 2 Main Cards (Domestic & Industrial) - Green & White Style */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Domestic Products Card */}
          <div 
            onClick={handleSelectDomesticCard}
            className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200 cursor-pointer flex flex-col ${
              selectedType === 'Domestic' ? 'ring-2 ring-emerald-600 bg-emerald-50/20' : ''
            }`}
          >
            <div className="relative h-56 sm:h-64 overflow-hidden bg-emerald-50">
              <img 
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80" 
                alt="Domestic Products" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-emerald-900 border border-emerald-200 shadow-sm">
                <Home className="w-3.5 h-3.5 text-emerald-600" />
                <span>Home & Office</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex flex-col">
                  <span>Domestic Products</span>
                  <span className="w-12 h-1 bg-emerald-500 rounded-full mt-1.5" />
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Professional eco-safe cleaning solutions for homes, residential units, and small business offices.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Browse Domestic Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Industrial Products Card */}
          <div 
            onClick={handleSelectIndustrialCard}
            className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200 cursor-pointer flex flex-col ${
              selectedType === 'Industrial' ? 'ring-2 ring-emerald-600 bg-emerald-50/20' : ''
            }`}
          >
            <div className="relative h-56 sm:h-64 overflow-hidden bg-emerald-50">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" 
                alt="Industrial Products" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-emerald-900 border border-emerald-200 shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Heavy Duty Commercial</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex flex-col">
                  <span>Industrial Products</span>
                  <span className="w-12 h-1 bg-emerald-500 rounded-full mt-1.5" />
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Heavy-duty industrial floor scrubbers, degreasers, and automated hygiene systems.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>Browse Industrial Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </section>


        {/* SECTION 2: Search Bar & Filter Pills - Green & White Style */}
        <section id="product-catalog" className="pt-6 space-y-6">
          
          {/* Green-focused Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AyudhKlin products..."
                className="w-full h-14 pl-6 pr-14 rounded-full bg-white border border-emerald-300 text-slate-800 text-sm sm:text-base font-medium shadow-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-slate-400"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-emerald-600 pointer-events-none">
                <Search className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Sub-Filter: Type Tabs */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold">
            <span className="text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-emerald-600" /> Type:
            </span>
            {(['All', 'Domestic', 'Industrial'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                  selectedType === t
                    ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-sm'
                    : 'bg-white text-emerald-800 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50'
                }`}
              >
                {t} {t !== 'All' ? 'Only' : ''}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md border border-emerald-600'
                      : 'bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </section>


        {/* SECTION 3: Product Cards Grid - Green & White Style */}
        <section className="pt-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-emerald-200 p-8">
              <Package className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching AyudhKlin products found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Try adjusting your search terms or select a different category pill.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Products');
                  setSelectedType('All');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-emerald-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top Product Display Header */}
                  <div className="relative bg-emerald-50/60 border-b border-emerald-100 p-6 flex flex-col items-center justify-center text-center min-h-[170px]">
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    <span className="absolute top-3 right-3 text-[10px] font-semibold text-emerald-800 bg-white px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {product.type}
                    </span>

                    {/* Styled Product Name Header */}
                    <h3 className="text-xl font-bold text-emerald-950 tracking-tight leading-tight px-2">
                      {product.name}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Category Badge Pill */}
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                          {product.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        {product.name}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-slate-500 leading-relaxed min-h-[36px]">
                        {product.description}
                      </p>

                      {/* Features with Green Checkmarks */}
                      <div className="space-y-1.5 pt-2 border-t border-emerald-100">
                        {product.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                            <div className="flex items-center text-emerald-600 font-bold shrink-0">
                              <Check className="w-3.5 h-3.5 -mr-1" />
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-medium text-[11px]">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Green Action Button */}
                    <div className="pt-3">
                      <button
                        onClick={() => onOpenQuoteModal(`AyudhKlin Product: ${product.name}`)}
                        className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <Zap className="w-3.5 h-3.5 text-emerald-200" />
                        <span>Request Bulk Quote</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </section>

        {/* Brand Artwork & Poster Showcase */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-emerald-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>AYUDHKLIN BRAND IDENTITY</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Official AyudhKlin Product & Cleaning Posters</h3>
            </div>
            <button
              onClick={() => onSelectTab('services')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <span>View Cleaning Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-emerald-200 overflow-hidden bg-slate-50 flex flex-col sm:flex-row items-center group">
              <div className="w-full sm:w-1/2 h-52 overflow-hidden">
                <img
                  src={brandPosterImg}
                  alt="Official AyudhKlin Deep Cleaning & Civil Cleaning Poster"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full sm:w-1/2 p-4 space-y-2">
                <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-100 px-2 py-0.5 rounded">AyudhKlin Division</span>
                <h4 className="text-sm font-bold text-slate-900">Clean. Care. Protect.</h4>
                <p className="text-xs text-slate-600">
                  Housekeeping, Deep Cleaning, Civil Cleaning & Chemical Hygiene Supplies under AyudhKlin brand.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200 overflow-hidden bg-slate-50 flex flex-col sm:flex-row items-center group">
              <div className="w-full sm:w-1/2 h-52 overflow-hidden">
                <img
                  src={brandTeamworkImg}
                  alt="AyudhKlin Teamwork and Leadership Philosophy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full sm:w-1/2 p-4 space-y-2">
                <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-100 px-2 py-0.5 rounded">Team Culture</span>
                <h4 className="text-sm font-bold text-slate-900">Productivity & Care</h4>
                <p className="text-xs text-slate-600">
                  "Do everything in love." Our janitorial teams operate with discipline, thoroughness, and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Card - Green & White */}
        <section className="bg-emerald-600 text-white rounded-3xl p-8 sm:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-500">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-emerald-100 tracking-wider uppercase">Custom Commercial Formulation</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Need Custom Bulk Chemical Supplies or OEM Branding?</h3>
            <p className="text-emerald-50 text-xs sm:text-sm max-w-xl">
              We manufacture and supply custom eco-friendly industrial cleaning formulations and bulk hygiene kits with guaranteed safety certificates.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal('AyudhKlin Bulk & OEM Solutions')}
            className="px-6 py-3.5 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs sm:text-sm cursor-pointer shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Contact Product Supply Division</span>
          </button>
        </section>

      </div>
    </div>
  );
};
