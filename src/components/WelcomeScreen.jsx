// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6 h-screen min-h-screen m-0 p-0 relative">
      <img
        src="./Group 7.png"
        alt="Illustration"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex justify-center pt-40 items-start h-full">
        <button
          onClick={onStart}
          className="text-lg text-[#FEF4E5] px-8 py-3 bg-[#B98746] rounded-lg border-4 border-[#71002D] "
        > 
          Commencer
        </button>
      </div>
    </div>
   );
}


