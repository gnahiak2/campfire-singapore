import { fonts } from './fonts.js';

interface GameCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  author: string;
  href: string;
}

function GameCard({ imageSrc, imageAlt, title, author, href }: GameCardProps) {
  return (
    <div className="flex flex-col gap-9 items-center w-[400px]">
      <a 
        href={href}
        className="block"
      >
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-[391px] h-[263px] rounded-[20px] shadow-[12px_12px_0px_0px_rgba(0,0,0,0.25)] object-cover hover:scale-105 transition-transform"
        />
      </a>
      <div className="text-center text-[#d7cfeb]">
        <p 
          className="text-7xl font-bold mb-2 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{ 
            fontFamily: fonts.amaticBold,
            fontWeight: 'bold',
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {title}
        </p>
        <p 
          className="text-4xl font-bold text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{ 
            fontFamily: fonts.amaticBold,
            fontWeight: 'bold',
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {author}
        </p>
      </div>
    </div>
  );
}

export default GameCard;
