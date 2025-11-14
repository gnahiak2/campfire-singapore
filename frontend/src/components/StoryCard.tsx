import { fonts } from './fonts.js';

interface StoryCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

function StoryCard({ imageSrc, imageAlt, title, description }: StoryCardProps) {
  return (
    <div className="bg-[#d9d9d9] rounded-2xl p-6 flex flex-col gap-2 w-[347px] h-[557px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="w-[297px] h-[257px] object-cover mb-2"
      />
      <div className="p-2">
        <p 
          className="text-black text-5xl font-bold mb-2 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{ 
            fontFamily: fonts.amaticBold,
            fontWeight: 'bold',
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {title}
        </p>
        <p 
          className="text-black text-3xl text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{ 
            fontFamily: fonts.amaticBold,
            fontWeight: 'bold',
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default StoryCard;
