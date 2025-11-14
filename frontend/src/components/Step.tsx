import { fonts } from './fonts.js';

interface StepProps {
  stepNumber: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

function Step({ stepNumber, title, imageSrc, imageAlt, isReversed = false }: StepProps) {
  const content = (
    <>
      <div className="flex flex-col items-end text-right text-white flex-1">
        <p 
          className="text-4xl font-bold mb-2 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{ 
            fontFamily: fonts.amaticBold,
            fontWeight: 'bold',
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          step {stepNumber}
        </p>
        <p 
          className="text-6xl font-bold leading-tight max-w-md text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{ 
            fontFamily: fonts.amaticBold,
            fontWeight: 'bold',
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {title}
        </p>
      </div>
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="w-[539px] h-[299px] rounded-lg shadow-[15px_15px_0px_0px_rgba(0,0,0,0.25)] object-cover"
      />
    </>
  );

  const reversedContent = (
    <>
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="w-[509px] h-[307px] rounded-lg shadow-[-8px_16px_0px_0px_rgba(0,0,0,0.25)] object-cover"
      />
      <div className="flex flex-col items-start text-white flex-1">
        <p 
          className="text-4xl font-bold mb-2 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{ 
            fontFamily: fonts.amaticBold,
            fontWeight: 'bold',
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          step {stepNumber}
        </p>
        <p 
          className="text-6xl font-bold leading-tight text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{ 
            fontFamily: fonts.amaticBold,
            fontWeight: 'bold',
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {title}
        </p>
      </div>
    </>
  );

  return (
    <div className="flex gap-16 items-center w-full">
      {isReversed ? reversedContent : content}
    </div>
  );
}

export default Step;
