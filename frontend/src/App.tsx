import { fonts } from './components/fonts.js';
import FaqQuestion from './components/FaqQuestion.js';
import FaqButton from './components/FaqButton.js';
import Step from './components/Step.js';
import StoryCard from './components/StoryCard.js';
import GameCard from './components/GameCard.js';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <div className="absolute top-0 left-0 w-1/3 z-10">
        <img 
          src="/backgrounds/corner-cloud.png" 
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-screen">
        <header className="relative h-[115px] bg-[#45b4f5] flex justify-end items-center pr-16">
          <nav className="flex gap-12 items-center text-white text-5xl font-bold" style={{ fontFamily: fonts.amaticBold, fontWeight: 'bold' }}>
            <button className="hover:opacity-80 transition-opacity">Steps</button>
            <button className="hover:opacity-80 transition-opacity">Map</button>
            <button className="hover:opacity-80 transition-opacity">Previous events</button>
            <button className="hover:opacity-80 transition-opacity">FAQ</button>
          </nav>
        </header>

        <section className="relative h-full flex items-end pb-32 2xl:pb-48 px-6 md:px-16 lg:px-24 2xl:px-32 bg-[url(/backgrounds/blue-sky.png)] bg-center bg-cover">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src="/backgrounds/sky-shine.png" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-[32px] right-[140px] w-full h-full">
            {/* fishy on the right. His name is frederick. */}
            <div className="absolute top-[64px] right-[140px] w-1/6 animate-fish-swim-2">
              <img src="/characters/fish-2.png" alt="Fish named Frederick" className="w-full h-full object-cover" />
            </div>

            {/* fishy on the left. His name is gubson */}
            <div className="absolute top-[32px] right-[300px] w-1/6 animate-fish-swim-1">
              <img src="/characters/fish-1.png" alt="Fish named Gubson" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="absolute bottom-[160px] left-0 w-full h-full animate-cloud-float-right">
            <img src="/backgrounds/bottom-cloud.png" alt="" />
          </div>
 
          <div className="absolute -bottom-[50px] left-0 w-full h-[120px]">
            <img src="/decorative/vines.png" alt="" className="w-full h-full object-cover object-top" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 pb-24 z-10">
            <div className="flex flex-col gap-4 w-full lg:w-[648px]">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <img 
                    src="/decorative/hack-club-flag.png" 
                    alt="Hack Club" 
                    className="w-[151px] h-[53px] object-cover transform rotate-[-4.8deg]"
                  />
                </div>
                
                <div className="transform rotate-[-2.97deg]">
                  <h1 
                    className="text-[#fcf5ed] text-[80px] md:text-[120px] lg:text-[150px] font-normal leading-none mb-4"
                    style={{ 
                      fontFamily: fonts.dreamPlanner,
                      textShadow: "5px 8px 0px rgba(0,0,0,0.25)"
                    }}
                  >
                    CAMPFIRE
                  </h1>
                </div>

                <div className="pl-4">
                  <p 
                    className="text-white text-4xl font-bold mb-2"
                    style={{ 
                      fontFamily: fonts.amaticBold,
                      fontWeight: 'bold',
                      textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
                    }}
                  >
                    Game jam for high schoolers in 200+ cities
                  </p>
                  <p 
                    className="text-white text-4xl font-bold"
                    style={{ 
                      fontFamily: fonts.amaticBold,
                      fontWeight: 'bold',
                      textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
                    }}
                  >
                    Jan 23-24, 2026
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-2">
                <div 
                  className="bg-[#f9e2ca] border-4 border-[#d5a16c] rounded-[20px] px-4 md:px-8 py-4 flex items-center gap-3 md:gap-6 w-full transform rotate-[-1.2deg] shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                >
                  <img src="/icons/email.svg" alt="" className="w-6 h-5 flex-shrink-0" />
                  <input 
                    type="email"
                    className="text-[#854d16] text-2xl md:text-4xl font-bold truncate bg-transparent border-none outline-none flex-1 cursor-text"
                    style={{ fontFamily: fonts.amaticBold, fontWeight: 'bold' }}
                    placeholder="you@hackclub.com"
                    defaultValue="you@hackclub.com"
                  />
                </div>
                <button 
                  className="bg-[#fca147] border-[5px] border-[rgba(0,0,0,0.2)] rounded-[20px] px-8 md:px-14 py-4 hover:scale-105 transition-transform w-full md:w-auto transform rotate-[1.5deg] shadow-[0_8px_20px_rgba(0,0,0,0.25)] cursor-pointer"
                  type="button"
                  onClick={() => {
                    console.log('RSVP clicked');
                  }}
                >
                  <p 
                    className="text-[#8d3f34] text-3xl md:text-5xl font-normal"
                    style={{ fontFamily: fonts.dreamPlanner }}
                  >
                    RSVP!
                  </p>
                </button>
              </div>
            </div>

            <div className="relative w-full lg:w-auto">
              <div className="flex items-center justify-center gap-3 mb-4 2xl:mb-8">
                <p 
                  className="text-white text-2xl 2xl:text-6xl md:text-4xl font-bold"
                  style={{ 
                    fontFamily: fonts.amaticBold,
                    fontWeight: 'bold',
                    textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
                  }}
                >
                  watch the video
                </p>

                <img 
                  src="/ui/arrow.png" 
                  alt="" 
                  className="w-[45px] md:w-[55px] h-[33px] md:h-[41px] translate-y-6 rotate-[6.2deg] z-50"
                />
              </div>

              <div className="relative transform rotate-[1.7deg]">
                <img 
                  src="/ui/video-placeholder.png" 
                  alt="Campfire video" 
                  className="w-full max-w-[442px] h-[200px] md:h-[259px] rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,0.25)] object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-0 left-0 w-full">
          <img src="/backgrounds/landing-grass.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <section className="relative pt-[13vw] pb-96 bg-[url(/backgrounds/underwater-gradient.png)] bg-cover">
        <div className="absolute top-0 left-0 w-screen h-[200px] bg-gradient-to-b from-[#004b2a] to-transparent"></div>
        <div className="absolute top-[30px] left-0 w-full scale-125">
          <img src="/decorative/vines.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute bottom-[500px] left-0 w-full h-[800px] -z-10">
          <img src="/decorative/clouds-3.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-[613px] -z-10">
          <img src="/backgrounds/seafloor.png" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="absolute bottom-[400px] left-32 w-[569px] h-[676px]">
          <img 
            src="/characters/astronaut.png" 
            alt="" 
            className="w-full h-full object-cover transform rotate-[172deg] scale-y-[-1]"
          />
        </div>
        
        <div className="absolute top-[500px] right-32 w-[352px] h-[354px]">
          <img src="/decorative/cog.png" alt="" className="w-full h-full object-cover rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col gap-24 items-center px-12 max-w-7xl mx-auto">
          <Step 
            stepNumber={1}
            title="Sign up for a Campfire near you"
            imageSrc="/ui/step-signup.png"
            imageAlt="Step 1"
          />

          <Step 
            stepNumber={2}
            title="Grab friends (or make new friends!) and form a team of 2-3"
            imageSrc="/ui/step-team.png"
            imageAlt="Step 2"
            isReversed={true}
          />

          <Step 
            stepNumber={3}
            title="Learn from workshops, enjoy free food and merch!"
            imageSrc="/ui/step-workshops.png"
            imageAlt="Step 3"
          />

          <Step 
            stepNumber={4}
            title="Build your game & publish it online!"
            imageSrc="/ui/step-team.png"
            imageAlt="Step 4"
            isReversed={true}
          />
        </div>
      </section>

      <section className="relative h-[900px] px-8">
        <div className="absolute top-0 left-0 w-full h-full -translate-y-96 from-transparent to-[#022994] bg-gradient-to-b">
          <img src="/decorative/clouds-3.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative w-full h-full z-50 -translate-y-32 bg-no-repeat bg-center bg-contain bg-[url(/backgrounds/world-map.png)]">
          
        </div>
      </section>

      <section className="relative py-24 bg-[#384fbc] -translate-y-100 bg-cover bg-center -z-10 pt-130 pb-60 bg-[url(/backgrounds/blue-gradient.png)]">
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="/decorative/clouds-1.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-[80vw]">
          <img 
            src="/decorative/moon-composite.png" 
            alt="" 
            className="w-full h-full object-contain transform rotate-[346deg]"
          />
        </div>

        <div className="absolute bottom-[64px] translate-y-full scale-105 left-0 w-full">
          <img
            src="/decorative/puzzle-composite.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-12 items-center px-32 max-w-7xl mx-auto -translate-y-56">
          <h2 
            className="text-[#d7cfeb] text-6xl font-bold text-center mb-8"
            style={{ 
              fontFamily: fonts.amaticBold,
              fontWeight: 'bold',
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
            }}
          >
            Stories from past events
          </h2>
          
          <div className="flex gap-12 justify-between w-full">
            <StoryCard 
              imageSrc="/stories/ascpixi.png"
              imageAlt=""
              title="Counterspell"
              description="Game jam in 50 cities including Toronto, Boston, & Singapore"
            />

            <StoryCard 
              imageSrc="/stories/manitej.png"
              imageAlt=""
              title="Scrapyard"
              description="In-person hackathon in 70 cities worldwide"
            />

            <StoryCard 
              imageSrc="/stories/sebastian.png"
              imageAlt=""
              title="Daydream"
              description="Game jam in 100 cities worldwide"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#384fbc] pb-[20vw] pt-[20vw] -translate-y-96 -z-20">
        <div className="flex flex-col gap-8 items-center px-8 max-w-7xl mx-auto">
          <h2 
            className="text-[#f1ebff] text-6xl font-bold text-center mb-8"
            style={{ 
              fontFamily: fonts.amaticBold,
              fontWeight: 'bold',
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
            }}
          >
            Favorite games from past events
          </h2>
          
          <div className="flex gap-5 w-full justify-between">
            <GameCard 
              imageSrc="/games/office-click-clack.png"
              imageAlt="Office Click Clack"
              title="Office Click Clack"
              author="bunnyguy - Daydream dfw"
              href="https://theavgeekbee.itch.io/office-click-clack"
            />

            <GameCard 
              imageSrc="/games/zero-sum.png"
              imageAlt="Zero Sum"
              title="Zero Sum"
              author="ARandomPsi - Daydream SV"
              href="https://arandompsi.itch.io/zero-sum"
            />

            <GameCard 
              imageSrc="/games/macuahuitl.png"
              imageAlt="Macuahuitl"
              title="Macuahuitl"
              author="scoopish - Daydream Global"
              href="https://scoopish.itch.io/macuahuitl"
            />
          </div>
        </div>

        <div className="absolute bottom-[-250px] scale-105 left-0 w-full">
          <img
            src="/decorative/puzzle-cloud-bottom.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="relative bg-[#384fbc] pb-32 pt-64 -translate-y-96 -z-30">
        <div className="absolute w-full h-full -z-10">
          <img 
            src="/decorative/speech-bubble-bg.png" 
            alt="" 
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 px-32">
          <h2 
            className="text-[#d7cfeb] text-[128px] font-normal text-center mb-16"
            style={{ 
              fontFamily: fonts.amaticBold,
              fontWeight: 'bold',
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
            }}
          >
            FAQ
          </h2>

          <div className="flex gap-10 justify-center items-end">
            <div className="relative">
              <div className="absolute inset-0 w-[608px] h-[1491px]">
                <img src="/ui/faq-participant-bg.svg" alt="" className="w-full h-full object-cover" />
              </div>
              
              <div className="relative z-10 flex flex-col gap-10 items-center px-16 pt-8 w-[608px]">
                <p 
                  className="text-[#d7cfeb] text-6xl font-normal text-center mb-4"
                  style={{ 
                    fontFamily: fonts.amaticBold,
                    fontWeight: 'bold',
                    textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
                  }}
                >
                  Participant
                </p>
                
                <FaqQuestion className="bg-[#8d3f34] shadow-[8px_8px_0px_0px_#733a32] flex flex-col items-center justify-center px-12 py-0 h-[168px] w-[467px]" />
                <FaqQuestion question="Am I Eligible?" className="bg-[#8d3f34] shadow-[8px_8px_0px_0px_#733a32] flex flex-col items-center justify-center px-12 py-0 h-[168px] w-[467px]" />
                <FaqQuestion question="But I've never hacked before!" className="bg-[#8d3f34] shadow-[8px_8px_0px_0px_#733a32] flex flex-col items-center justify-center px-12 py-0 h-[168px] w-[467px]" />
                <FaqQuestion question="All this, for free?" className="bg-[#8d3f34] shadow-[8px_8px_0px_0px_#733a32] flex flex-col items-center justify-center px-12 py-0 h-[168px] w-[467px]" />
                <FaqQuestion question="What do I need to bring?" className="bg-[#8d3f34] shadow-[8px_8px_0px_0px_#733a32] flex flex-col items-center justify-center px-12 py-0 h-[168px] w-[467px]" />
                <FaqButton className="bg-[#091e8b] shadow-[8px_8px_0px_0px_#0a1861] flex items-start px-5 py-12 h-[168px] w-[467px]" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 w-[608px] h-[1505px]">
                <img src="/ui/faq-organizer-bg.svg" alt="" className="w-full h-full object-cover" />
              </div>
              
              <div className="relative z-10 flex flex-col gap-10 items-center px-16 pt-9 w-[608px]">
                <p 
                  className="text-[#d7cfeb] text-6xl font-normal text-center mb-4"
                  style={{ 
                    fontFamily: fonts.amaticBold,
                    fontWeight: 'bold',
                    textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
                  }}
                >
                  Organizer
                </p>
                
                <FaqQuestion question="Can I organize a Campfire in my city?" className="bg-[#8d3f34] shadow-[8px_8px_0px_0px_#733a32] flex flex-col items-center justify-center px-12 py-0 h-[168px] w-[467px]" />
                <FaqQuestion question="What are the steps to organizing?" className="bg-[#8d3f34] shadow-[8px_8px_0px_0px_#733a32] flex flex-col items-center justify-center px-12 py-0 h-[168px] w-[467px]" />
                <FaqQuestion question="Do we get funding?" className="bg-[#8d3f34] shadow-[8px_8px_0px_0px_#733a32] flex flex-col items-center justify-center px-12 py-0 h-[168px] w-[467px]" />
                <FaqQuestion question="Do we get volunteer hours?" className="bg-[#8d3f34] shadow-[8px_8px_0px_0px_#733a32] flex flex-col items-center justify-center px-12 py-0 h-[168px] w-[467px]" />
                <FaqQuestion question="Can I join an organizing team?" className="bg-[#8d3f34] shadow-[8px_8px_0px_0px_#733a32] flex flex-col items-center justify-center px-12 py-0 h-[168px] w-[467px]" />
                <FaqButton content="Apply to be an organizer" className="bg-[#091e8b] shadow-[8px_8px_0px_0px_#0a1861] flex items-start px-5 py-12 h-[168px] w-[467px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative -translate-y-96 -z-40">
        <img
          src="/backgrounds/footer-background.png"
          alt=""
          className="w-full"
        />

        <div className="absolute bottom-0 left-0 w-full h-[190px] bg-[#0f371d] flex items-center justify-center">
          <p 
            className="text-white text-6xl text-center font-bold"
            style={{ 
              fontFamily: fonts.amaticBold,
              fontWeight: 'bold',
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
            }}
          >
            made with ♥ by Hack Club teens
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
