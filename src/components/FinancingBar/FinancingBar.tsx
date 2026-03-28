export const FinancingBar = (): JSX.Element => {
  return (
    <div 
      className="fixed right-0 top-1/2 -translate-y-1/2 w-10 md:w-12 bg-[#F5EFE6] border-y border-l border-stone-200 z-[60] flex flex-col items-center py-8 gap-10 rounded-l-2xl shadow-[-10px_0_30px_-10px_rgba(0,0,0,0.1)]"
    >
      <div className="[writing-mode:vertical-lr] text-[10px] text-stone-400 font-medium tracking-[0.15em] uppercase whitespace-nowrap">
        Finanziamento Disponibile
      </div>
      
      <div className="flex flex-col items-center gap-8 whitespace-nowrap text-[10px] font-bold">
        <span className="[writing-mode:vertical-lr] tracking-[0.1em] text-[#2C2219]">
          ALMA
        </span>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-1 h-1 bg-stone-300 rounded-full" />
          <span className="[writing-mode:vertical-lr] tracking-[0.1em] text-[#FFB3C7] bg-[#17120E] px-2 py-3 rounded-full leading-none">
            KLARNA
          </span>
          <div className="w-1 h-1 bg-stone-300 rounded-full" />
        </div>
        
        <span className="[writing-mode:vertical-lr] tracking-[0.1em] text-[#FF6B6B]">
          SCALAPAY
        </span>
      </div>
    </div>
  );
};
