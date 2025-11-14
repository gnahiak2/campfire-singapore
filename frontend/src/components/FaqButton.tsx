import { fonts } from './fonts.js';

interface FaqButtonProps {
  className?: string;
  content?: string;
}

function FaqButton({ className = "", content = "Check out the parent guide" }: FaqButtonProps) {
  return (
    <div className={className}>
      <div className="flex gap-1 items-center">
        <div className="relative w-12 h-12 overflow-hidden">
          <img 
            alt="" 
            className="absolute -inset-1 w-full h-full object-cover" 
            src="/icons/plus.svg" 
          />
        </div>
        <p 
          className="text-white text-5xl font-bold leading-none whitespace-nowrap"
          style={{ fontFamily: fonts.amaticBold, fontWeight: 'bold' }}
        >
          {content}
        </p>
      </div>
    </div>
  );
}

export default FaqButton;
