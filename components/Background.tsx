export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020408]">
      {/* Static Premium Gradient */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] aspect-square rounded-full bg-blue-900/30 blur-[140px]" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] aspect-square rounded-full bg-indigo-900/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[80%] aspect-square rounded-full bg-blue-800/15 blur-[160px]" />
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}
