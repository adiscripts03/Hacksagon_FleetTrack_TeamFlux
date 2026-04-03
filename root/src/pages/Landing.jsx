import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

/* ── Asset imports ── */
import heroTruckImg from '../assets/hero-truck.png';
import driverSafetyImg from '../assets/driver-safety.png';
import fleetManagementImg from '../assets/fleet-management.png';
import equipmentMonitoringImg from '../assets/equipment-monitoring.png';
import spendManagementImg from '../assets/spend-management.png';
import workforceManagementImg from '../assets/workforce-management.png';

/* ── Data ── */
const navLinks = ['Products', 'Solutions', 'Resources', 'Company', 'Customers'];

const suiteItems = [
  {
    id: 'driver-safety',
    icon: 'videocam',
    label: 'Vehicle Safety',
    title: 'Keep every vehicle road-ready and secure.',
    description:
      'Monitor vehicle health in real time and receive proactive alerts to prevent breakdowns, reduce risks, and improve fleet safety.',
    image: driverSafetyImg,
    badge: { name: 'John Bright', status: 'In Motion', score: 89, coached: true },
  },
  {
    id: 'fleet-management',
    icon: 'local_shipping',
    label: 'Fleet Management',
    title: 'Save time and cut costs with unparalleled visibility into your fleet.',
    description:
      'Drive efficiency with deep insights into vehicle health, location, and use — all while automating fleet management workflows.',
    image: fleetManagementImg,
    badge: { name: 'John Bright', status: 'In Motion', times: ['04:59', '04:27', '05:30', '51:15'] },
  },
  {
    id: 'equipment-monitoring',
    icon: 'precision_manufacturing',
    label: 'Equipment Monitoring',
    title: 'Improve utilization and reduce costs with secure, precise monitoring.',
    description:
      'Proactively minimize equipment downtime, prevent theft, and maximize every asset with the power of AI.',
    image: equipmentMonitoringImg,
    badge: { alert: 'Geofence Alert', dormant: '2 days', utilization: '94%' },
  },
  {
    id: 'spend-management',
    icon: 'credit_card',
    label: 'Spend Management',
    title: 'Maximize savings and eliminate fraud with the FleetTrack.',
    description:
      'Uncover hidden savings and improve your profitability with FleetTrack\'s AI-powered fleet card.',
    image: spendManagementImg,
    badge: { savings: '$2,847', fraud: '0 alerts' },
  },
  {
    id: 'workforce-management',
    icon: 'groups',
    label: 'Workforce Management',
    title: 'Manage and engage your workforce at scale.',
    description:
      'Qualifications, time tracking, training, and coaching – all in one place.',
    image: workforceManagementImg,
    badge: { compliance: '98.7%', trained: '142 drivers' },
  },
];

const trustLogos = [
  'Cascade', 'TechHaul', 'PrimeFleet', 'GoTransit', 'UrbanHaul', 'SwiftCargo', 'RoadLink',
];

const resourceCards = [
  {
    type: 'On-demand webinar',
    title: 'Expert Advice: How to Maximize Fleet Safety',
    cta: 'Watch webinar',
  },
  {
    type: 'On-demand webinar',
    title: 'Bridging the Gap: Connecting Drivers, Fleet Managers, and Data',
    cta: 'Watch webinar',
  },
  {
    type: 'Industry news',
    title: 'FleetTrack named #1 in Fleet Management across every segment.',
    cta: 'Read article',
  },
];

/* ── Icon SVGs for the platform section ── */
const platformIcons = [
  { id: 'driver-safety', icon: 'videocam', label: 'Vehicle Safety', color: '#3B82F6' },
  { id: 'fleet-management', icon: 'local_shipping', label: 'Fleet Mgmt', color: '#3B82F6' },
  { id: 'equipment-monitoring', icon: 'precision_manufacturing', label: 'Equipment', color: '#3B82F6' },
  { id: 'spend-management', icon: 'credit_card', label: 'Spend Mgmt', color: '#3B82F6' },
  { id: 'workforce-management', icon: 'groups', label: 'Workforce', color: '#3B82F6' },
];

/* ═══════════════════════════════════════════════════════════════════ */
/*  LANDING PAGE                                                      */
/* ═══════════════════════════════════════════════════════════════════ */
export default function Landing() {
  const { hasHydrated, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [footerModal, setFooterModal] = useState({ isOpen: false, item: '' });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!hasHydrated) return null;
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06]" style={{ background: 'rgba(10,14,26,0.92)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <span className="italic text-white">FleetTrack</span>
            </Link>

          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden text-[15px] font-medium text-[#a0a8b8] transition-colors duration-200 hover:text-white sm:inline-flex">
              Login
            </Link>
            <Link to="/register" className="inline-flex h-10 items-center justify-center rounded-full bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3B82F6] hover:shadow-blue-500/30">
              Get started
            </Link>
            {/* Mobile menu button */}
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#a0a8b8] transition hover:bg-white/[0.06] hover:text-white lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-[22px]">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/[0.06] px-6 pb-6 lg:hidden">
            <nav className="flex flex-col gap-3 pt-4">

              <Link to="/login" className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#a0a8b8] transition hover:bg-white/[0.04] hover:text-white">
                Login
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* ══════════════════════════════════════════════════════════ */}
        {/* HERO SECTION                                              */}
        {/* ══════════════════════════════════════════════════════════ */}
        <section className="relative flex min-h-[calc(100vh-73px)] flex-col justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #04070d 0%, #0b1121 50%, #111a32 100%)' }}>
          {/* Background glow orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
            <div className="absolute -bottom-32 left-1/4 h-[400px] w-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }} />
          </div>

          <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-28">
            {/* Left content */}
            <div>
              <h1 className="max-w-[580px] text-[40px] font-extrabold leading-[1.12] tracking-tight sm:text-[52px] lg:text-[56px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                App that makes your operations safer and more efficient.
              </h1>
              <p className="mt-6 max-w-[500px] text-[17px] leading-[1.7] text-[#8892a6]">
                One platform to help improve the{' '}
                <span className="font-semibold text-white underline decoration-white/30 underline-offset-4">Safety</span>,{' '}
                <span className="font-semibold text-white underline decoration-white/30 underline-offset-4">Productivity</span>, and{' '}
                <span className="font-semibold text-white underline decoration-white/30 underline-offset-4">Profitability</span>{' '}
                of your operations.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/register" className="inline-flex h-12 items-center justify-center rounded-full bg-[#2563EB] px-7 text-[15px] font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3B82F6] hover:shadow-blue-500/30">
                  Get started
                </Link>
              </div>
            </div>

            {/* Right — Hero image card */}
            <div className="relative">
              <div className="overflow-hidden rounded-[20px] border border-[#1e2a42] shadow-2xl shadow-black/40" style={{ background: 'linear-gradient(135deg, #111a2e 0%, #0d1424 100%)' }}>
                <div className="relative">
                  <img src={heroTruckImg} alt="Fleet operations" className="h-auto w-full object-cover" style={{ maxHeight: '420px' }} />
                  {/* Overlay info cards on the image */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-2.5 backdrop-blur-md" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                    <span className="material-symbols-outlined text-[18px] text-[#a0a8b8]">person</span>
                    <span className="text-sm font-semibold text-white">Mike Haysman</span>
                  </div>
                  <div className="absolute left-4 top-16 flex flex-col gap-1.5 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-2.5 backdrop-blur-md" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#a0a8b8]">location_on</span>
                      <span className="text-sm text-[#a0a8b8]">Love's</span>
                      <span className="ml-2 text-xs text-[#64748B]">Feb 08, 2024</span>
                    </div>
                    <div className="mt-1 rounded-lg border border-green-500/20 bg-green-500/10 px-3 py-1 text-center">
                      <span className="text-sm font-semibold text-green-400">Discount on fuel: $98.61</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative dashed border around image */}
              <div className="pointer-events-none absolute -inset-3 rounded-[28px] border-2 border-dashed border-[#2563EB]/30" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* INTEGRATED OPERATIONS PLATFORM                            */}
        {/* ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Integrated Operations Platform
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-[42px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
              A fully integrated suite of products.
            </h2>

            {/* Platform hierarchy diagram */}
            <div className="mx-auto mt-14 max-w-4xl">
              <div className="relative overflow-hidden rounded-[24px] border border-[#1e2a42] p-8 lg:p-12" style={{ background: 'linear-gradient(180deg, #111a2e 0%, #0c1220 100%)' }}>
                {/* Central FleetTrack logo */}
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2563EB]/40 shadow-lg shadow-blue-500/20" style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2140 100%)' }}>
                    <span className="text-2xl font-extrabold italic text-white" style={{ fontFamily: "'Manrope', sans-serif" }}>F</span>
                  </div>

                  {/* Connecting line */}
                  <div className="h-10 w-px bg-gradient-to-b from-[#2563EB]/60 to-[#2563EB]/10" />

                  {/* Horizontal connector */}
                  <div className="relative h-px w-full max-w-[700px]" style={{ background: 'linear-gradient(90deg, transparent 0%, #2563EB40 20%, #2563EB40 80%, transparent 100%)' }}>
                    {/* Vertical drops from horizontal line */}
                    <div className="absolute left-[10%] top-0 h-6 w-px bg-[#2563EB]/30 sm:left-[10%]" />
                    <div className="absolute left-[30%] top-0 h-6 w-px bg-[#2563EB]/30" />
                    <div className="absolute left-[50%] top-0 h-6 w-px bg-[#2563EB]/30" />
                    <div className="absolute left-[70%] top-0 h-6 w-px bg-[#2563EB]/30" />
                    <div className="absolute left-[90%] top-0 h-6 w-px bg-[#2563EB]/30" />
                  </div>

                  {/* Product icons row */}
                  <div className="mt-8 grid w-full grid-cols-3 gap-4 sm:grid-cols-5">
                    {platformIcons.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="group flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 hover:shadow-lg hover:shadow-blue-500/10"
                      >
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-all duration-300 group-hover:border-[#2563EB]/40 group-hover:bg-gradient-to-br group-hover:from-[#2563EB]/20 group-hover:to-[#1E40AF]/10 group-hover:shadow-md group-hover:shadow-blue-500/20 ${item.color === '#06B6D4' ? 'group-hover:border-cyan-400/40 group-hover:from-cyan-500/20 group-hover:to-cyan-600/10 group-hover:shadow-cyan-500/20' : ''
                            }`}
                        >
                          <span className={`material-symbols-outlined text-[22px] text-[#6B7280] transition-colors duration-300 group-hover:text-[#60A5FA] ${item.color === '#06B6D4' ? 'group-hover:text-cyan-400' : ''
                            }`}>
                            {item.icon}
                          </span>
                        </div>
                        <span className="text-center text-xs font-semibold text-[#6B7280] transition-colors duration-300 group-hover:text-white">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* PRODUCT FEATURES — FULL-HEIGHT CARDS                       */}
        {/* ══════════════════════════════════════════════════════════ */}

        {/* ── CARD 1: Driver Safety (text left, image right) ── */}
        <section
          id="driver-safety"
          className="relative flex min-h-screen items-center border-b border-gray-200 bg-white"
        >
          <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
                  <span className="material-symbols-outlined text-[20px] text-blue-600">videocam</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Vehicle Safety</span>
              </div>
              <h3 className="mt-6 max-w-lg text-[32px] font-bold leading-[1.15] text-gray-900 sm:text-[40px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Keep every vehicle road-ready and secure.
              </h3>
              <p className="mt-5 max-w-lg text-[17px] leading-[1.75] text-gray-600">
                Monitor vehicle health in real time and receive proactive alerts to prevent breakdowns, reduce risks, and improve fleet safety.
              </p>

            </div>
            <div className="relative">
              <div className="rounded-[32px] p-4 sm:p-6 lg:p-10 shadow-2xl shadow-gray-200/50" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1424 100%)' }}>
                <div className="relative overflow-hidden rounded-[20px] border border-white/10 shadow-xl">
                  <img src={driverSafetyImg} alt="Vehicle Safety" className="h-auto w-full object-cover" style={{ maxHeight: '480px' }} />
                  <div className="absolute right-4 top-4 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-3 backdrop-blur-md">
                    <span className="text-sm font-semibold text-white">John Bright</span>
                    <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-400" /><span className="text-xs text-green-400">In Motion</span></span>
                  </div>
                  <div className="absolute bottom-20 right-4 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-3 backdrop-blur-md">
                    <span className="text-2xl font-bold text-green-400">89</span>
                    <span className="text-sm font-semibold text-white">Safety Score</span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 backdrop-blur-md">
                    <span className="material-symbols-outlined text-[16px] text-green-400">check_circle</span>
                    <span className="text-xs font-semibold text-green-400">Coached</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CARD 2: Fleet Management (image left, text right) ── */}
        <section
          id="fleet-management"
          className="relative flex min-h-screen items-center border-b border-gray-100 bg-white"
        >
          <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-[32px] p-4 sm:p-6 lg:p-10 shadow-2xl shadow-gray-200/50" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1424 100%)' }}>
                <div className="relative overflow-hidden rounded-[20px] border border-white/10 shadow-xl">
                  <img src={fleetManagementImg} alt="Fleet Management" className="h-auto w-full object-cover" style={{ maxHeight: '480px' }} />
                  <div className="absolute right-4 top-4 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-3 backdrop-blur-md">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563EB]/20">
                      <span className="material-symbols-outlined text-[16px] text-[#60A5FA]">person</span>
                    </div>
                    <span className="text-sm font-semibold text-white">John Bright</span>
                    <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-400" /><span className="text-xs text-green-400">In Motion</span></span>
                  </div>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-3 backdrop-blur-md">
                    {['04:59|Break', '04:27|Drive', '05:30|Shift', '51:15|Cycle'].map((t) => {
                      const [time, label] = t.split('|');
                      return (
                        <div key={label} className="flex flex-col items-center">
                          <span className="text-sm font-bold text-white">{time}</span>
                          <span className="text-[10px] text-[#6B7280]">{label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
                  <span className="material-symbols-outlined text-[20px] text-blue-600">local_shipping</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Fleet Management</span>
              </div>
              <h3 className="mt-6 max-w-lg text-[32px] font-bold leading-[1.15] text-gray-900 sm:text-[40px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Save time and cut costs with unparalleled visibility into your fleet.
              </h3>
              <p className="mt-5 max-w-lg text-[17px] leading-[1.75] text-gray-600">
                Drive efficiency with deep insights into vehicle health, location, and use — all while automating fleet management workflows.
              </p>

            </div>
          </div>
        </section>

        {/* ── CARD 3: Equipment Monitoring (text left, image right) ── */}
        <section
          id="equipment-monitoring"
          className="relative flex min-h-screen items-center border-b border-gray-100 bg-white"
        >
          <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
                  <span className="material-symbols-outlined text-[20px] text-blue-600">precision_manufacturing</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Equipment Monitoring</span>
              </div>
              <h3 className="mt-6 max-w-lg text-[32px] font-bold leading-[1.15] text-gray-900 sm:text-[40px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Improve utilization and reduce costs with secure, precise monitoring.
              </h3>
              <p className="mt-5 max-w-lg text-[17px] leading-[1.75] text-gray-600">
                Proactively minimize equipment downtime, prevent theft, and maximize every asset.
              </p>

            </div>
            <div className="relative">
              <div className="rounded-[32px] p-4 sm:p-6 lg:p-10 shadow-2xl shadow-gray-200/50" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1424 100%)' }}>
                <div className="relative overflow-hidden rounded-[20px] border border-white/10 shadow-xl">
                  <img src={equipmentMonitoringImg} alt="Equipment Monitoring" className="h-auto w-full object-cover" style={{ maxHeight: '480px' }} />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-2.5 backdrop-blur-md">
                    <span className="material-symbols-outlined text-[16px] text-[#60A5FA]">notifications</span>
                    <span className="text-sm font-semibold text-white">Geofence Alert</span>
                  </div>
                  <div className="absolute right-4 top-16 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-2.5 backdrop-blur-md">
                    <span className="text-sm text-[#a0a8b8]">Dormant: <strong className="text-white">2 days</strong></span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-2.5 backdrop-blur-md">
                    <span className="text-sm text-[#a0a8b8]">Utilization</span>
                    <span className="text-lg font-bold text-green-400">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CARD 4: Spend Management (image left, text right) ── */}
        <section
          id="spend-management"
          className="relative flex min-h-screen items-center border-b border-gray-100 bg-white"
        >
          <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-[32px] p-4 sm:p-6 lg:p-10 shadow-2xl shadow-gray-200/50" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1424 100%)' }}>
                <div className="relative overflow-hidden rounded-[20px] border border-white/10 shadow-xl">
                  <img src={spendManagementImg} alt="Spend Management" className="h-auto w-full object-cover" style={{ maxHeight: '480px' }} />
                  <div className="absolute right-4 top-4 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs text-[#6B7280]">Savings this month</p>
                    <p className="mt-1 text-xl font-bold text-green-400">$2,847</p>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 backdrop-blur-md">
                    <span className="material-symbols-outlined text-[16px] text-green-400">verified_user</span>
                    <span className="text-xs font-semibold text-green-400">0 fraud alerts</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
                  <span className="material-symbols-outlined text-[20px] text-blue-600">credit_card</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Spend Management</span>
              </div>
              <h3 className="mt-6 max-w-lg text-[32px] font-bold leading-[1.15] text-gray-900 sm:text-[40px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Maximize savings and eliminate fraud with the FleetTrack.
              </h3>
              <p className="mt-5 max-w-lg text-[17px] leading-[1.75] text-gray-600">
                Uncover hidden savings and improve your profitability with FleetTrack.
              </p>

            </div>
          </div>
        </section>

        {/* ── CARD 5: Workforce Management (text left, image right) ── */}
        <section
          id="workforce-management"
          className="relative flex min-h-screen items-center border-b border-gray-100 bg-white"
        >
          <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">
                  <span className="material-symbols-outlined text-[20px] text-blue-600">groups</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Workforce Management</span>
              </div>
              <h3 className="mt-6 max-w-lg text-[32px] font-bold leading-[1.15] text-gray-900 sm:text-[40px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Manage and engage your workforce at scale.
              </h3>
              <p className="mt-5 max-w-lg text-[17px] leading-[1.75] text-gray-600">
                Qualifications, time tracking, training, and coaching – all in one place.
              </p>

            </div>
            <div className="relative">
              <div className="rounded-[32px] p-4 sm:p-6 lg:p-10 shadow-2xl shadow-gray-200/50" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1424 100%)' }}>
                <div className="relative overflow-hidden rounded-[20px] border border-white/10 shadow-xl">
                  <img src={workforceManagementImg} alt="Workforce Management" className="h-auto w-full object-cover" style={{ maxHeight: '480px' }} />
                  <div className="absolute right-4 top-4 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs text-[#6B7280]">Compliance Rate</p>
                    <p className="mt-1 text-xl font-bold text-[#60A5FA]">98.7%</p>
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-[#0e1628]/90 px-4 py-2.5 backdrop-blur-md">
                    <span className="text-sm text-[#a0a8b8]">Trained: <strong className="text-white">142 drivers</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>






      </main>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* FOOTER                                                    */}
      {/* ══════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.06]" style={{ background: 'linear-gradient(180deg, #0c1220 0%, #080c16 100%)' }}>
        <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <p className="text-2xl font-extrabold italic tracking-tight" style={{ fontFamily: "'Manrope', sans-serif" }}>FleetTrack</p>
              <p className="mt-4 text-sm max-w-[280px] leading-relaxed text-[#6B7280]">
                Modernizing moving operations with smart, automated, and safe technology solutions.
              </p>
            </div>

            {/* Link columns */}
            {[
              ['Platform', ['Vehicle Safety', 'Fleet Management', 'Equipment Monitoring', 'Spend Management']],
              ['Who We Serve', ['Construction', 'Oil & Gas', 'Field Service', 'Food & Beverage', 'Trucking & Logistics', 'Delivery', 'Utilities']],
            ].map(([title, items]) => (
              <div key={title}>
                <p className="text-sm font-semibold text-white">{title}</p>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" onClick={(e) => { e.preventDefault(); setFooterModal({ isOpen: true, item }); }} className="text-[15px] text-[#6B7280] transition hover:text-[#a0a8b8]">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Us column with information */}
            <div>
              <p className="text-sm font-semibold text-white">Contact Us</p>
              <div className="mt-4 space-y-3">
                <a href="#" onClick={(e) => { e.preventDefault(); setFooterModal({ isOpen: true, item: 'Email Support' }); }} className="block text-[14px] text-[#6B7280] transition hover:text-white">support@fleettrack.io</a>
                <a href="#" className="block text-[14px] text-[#6B7280] transition hover:text-white">+91 8000 000 000</a>
                
                <div className="flex items-center gap-3 py-1">
                  <a href="#" onClick={(e) => { e.preventDefault(); setFooterModal({ isOpen: true, item: 'Share' }); }} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-[#6B7280] transition hover:border-white/[0.12] hover:text-white">
                    <span className="material-symbols-outlined text-[16px]">share</span>
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setFooterModal({ isOpen: true, item: 'Instagram' }); }} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-[#6B7280] transition hover:border-white/[0.12] hover:text-white">
                    <span className="material-symbols-outlined text-[16px]">camera_alt</span>
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setFooterModal({ isOpen: true, item: 'Email Support' }); }} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-[#6B7280] transition hover:border-white/[0.12] hover:text-white">
                    <span className="material-symbols-outlined text-[16px]">email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
            <p className="text-xs text-[#4B5563]">© {new Date().getFullYear()} FleetTrack Technologies, Inc.</p>
            <div className="flex items-center gap-5 text-xs text-[#4B5563]">
              <a href="#" onClick={(e) => { e.preventDefault(); setFooterModal({ isOpen: true, item: 'Terms of Service' }); }} className="transition hover:text-[#a0a8b8]">Terms of Service</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setFooterModal({ isOpen: true, item: 'Privacy Policy' }); }} className="transition hover:text-[#a0a8b8]">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer action overlay modal */}
      {footerModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setFooterModal({ isOpen: false, item: '' })}>
          <div className={`relative flex flex-col w-full ${footerModal.item === 'Terms of Service' || footerModal.item === 'Privacy Policy' ? 'max-w-xl' : 'max-w-sm'} max-h-[85vh] rounded-[24px] border border-white/10 bg-[#0e1628] shadow-2xl`} onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6 pb-4">
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Manrope', sans-serif" }}>{footerModal.item}</h3>
              <button
                onClick={() => setFooterModal({ isOpen: false, item: '' })}
                className="text-[#a0a8b8] transition hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 pt-4 text-[15px] leading-relaxed text-[#8892a6]">
              {(() => {
                switch (footerModal.item) {
                  case 'Vehicle Safety': return 'Enhance road safety with real-time AI-powered monitoring and collision prevention systems designed for modern fleets.';
                  case 'Fleet Management': return 'Streamline your operations with total visibility into vehicle health, location, and utilization on a single platform.';
                  case 'Equipment Monitoring': return 'Protect your off-road assets with geofencing, theft prevention, and utilization tracking for maximum productivity.';
                  case 'Spend Management': return 'Control your fleet costs with integrated fuel cards and automated expense tracking to eliminate waste.';
                  case 'Construction': return 'Rugged, built-to-last solutions for heavy machinery and complex project site management in any environment.';
                  case 'Oil & Gas': return 'Specialized monitoring for hazardous environments and remote logistics to ensure site safety and compliance.';
                  case 'Field Service': return 'Empower your mobile workforce with optimized routing and real-time dispatching to serve more clients.';
                  case 'Food & Beverage': return 'Ensure quality with temperature-controlled tracking and strict compliance reporting for perishable goods.';
                  case 'Trucking & Logistics': return 'High-performance tools for long-haul carriers and complex supply chains to keep things moving efficiently.';
                  case 'Delivery': return 'Optimize last-mile delivery with precise tracking and driver productivity enhancements for faster routes.';
                  case 'Utilities': return 'Reliable fleet oversight for critical infrastructure maintenance and rapid emergency response teams.';
                  case 'About Us': return 'Discover FleetTrack’s mission to transform the world’s moving operations through innovative technology.';
                  case 'Careers': return 'Join our world-class team and help us build the future of fleet technology and operations management.';
                  case 'Newsroom': return 'The latest updates, press releases, and industry insights from the team here at FleetTrack.';
                  case 'Contact': return 'Get in touch with our dedicated support and sales teams for any inquiries or partnership opportunities.';
                  case 'Share': return 'Help us spread the word! Share FleetTrack with your professional network and industry colleagues.';
                  case 'Instagram': return 'Follow us for a behind-the-scenes look at our company culture and our latest product innovations.';
                  case 'Email Support': return 'Reach out to our support team anytime; we are here to help you solve your toughest fleet challenges.';
                  case 'Terms of Service': return (
                    <div className="space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#60A5FA]">Updated: April 2026</p>
                      <p>By using this website, you agree to these terms:</p>
                      
                      <div>
                        <h4 className="font-bold text-white italic">1. Prohibited Use</h4>
                        <p className="mt-1">Do not use this site for illegal acts, unauthorized system access, damaging functionality, or uploading malware.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-white italic">2. Your Responsibilities</h4>
                        <p className="mt-1">You must provide accurate data and maintain your account security at all times.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-white italic">3. Property Rights</h4>
                        <p className="mt-1">All content (text, graphics, software) is our property. Unauthorized copying or distribution is strictly prohibited.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-white italic">4. Liability & Changes</h4>
                        <p className="mt-1">We are not liable for data loss or site interruptions. Terms may be updated at any time; continued use signifies your acceptance.</p>
                      </div>
                    </div>
                  );
                  case 'Privacy Policy': return (
                    <div className="space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#60A5FA]">Updated: April 2026</p>
                      <p>Your privacy is important to us. This policy explains how we collect and protect your data.</p>
                      
                      <div>
                        <h4 className="font-bold text-white italic">1. Data Collection</h4>
                        <p className="mt-1">We collect basic info like your name or email (if provided), plus usage data (pages visited, time spent) and device/browser details.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-white italic">2. Usage & Cookies</h4>
                        <p className="mt-1">We use your data to improve site performance and functionality. Cookies help us understand visitor behavior; you can disable these in your settings.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-white italic">3. Security & Third-Parties</h4>
                        <p className="mt-1">We use reasonable measures to protect your data. Some third-party analytics tools may collect limited, non-identifying information.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-white italic">4. Updates</h4>
                        <p className="mt-1">This policy may be updated occasionally. Changes will always be posted here for your review.</p>
                      </div>
                    </div>
                  );
                  default: return `Explore more details about ${footerModal.item} and how it can benefit your business operations.`;
                }
              })()}
            </div>

            {/* Footer Action */}
            <div className="border-t border-white/10 p-6 pt-4">
              <button
                onClick={() => setFooterModal({ isOpen: false, item: '' })}
                className="w-full rounded-xl border border-[#2563EB]/50 bg-[#2563EB]/10 py-2.5 text-sm font-semibold text-[#60A5FA] transition-colors hover:bg-[#2563EB]/20"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
