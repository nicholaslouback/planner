import { MapPin, Calendar, ArrowBigRight, UserRoundPlus } from 'lucide-react'
import { useState } from 'react'

export default function App() {
  const [Convitson, setConvitson ] = useState (false)

  function openConvits() {
    setConvitson(true)
  }

  function closeConvits() {
    setConvitson(false)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-pattern bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="organizing" />
          <p className="text-black text-lg">Convide seus amigos</p>
        </div>

        <div className="space-y-2">

          <div className="h-16 bg-gray-50 px-4 rounded-xl flex items-center gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-black" />
              <input disabled={Convitson} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg  placeholder-black outline-none flex-1"/>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-black"/>
              <input disabled={Convitson} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-black w-36 outline-none"/>
            </div>
            <div className="w-px h-6 bg-blue-800 " />

          {Convitson  ? (
            <button onClick={closeConvits} className="text-purple-500">Alterar Local/Data</button>
          ): (
            <button onClick={openConvits} className="px-5 py-2 flex hover:bg-purple-400
                              text-white
                              bg-purple-500 rounded-lg font-medium">
                              Continuar
              <ArrowBigRight className="size-5"/>
            </button>
          )}
          
          </div>

          {Convitson && (
          
            <div className="h-16 bg-gray-50 px-4 rounded-xl flex items-center gap-3">
            <div className="flex items-center gap-2 flex-1">
              <UserRoundPlus className="size-5 text-black" />
              <input type="text" placeholder="Quem vai com você?" className="bg-transparent text-lg  placeholder-black outline-none flex-1"/>
            </div>
            
            <div className="w-px h-6 bg-blue-800 " />
            <button className="px-5 py-2 flex hover:bg-purple-400
                              text-white
                              bg-purple-500 rounded-lg font-medium">
                              Confirmar Viagem
              <ArrowBigRight className="size-5"/>
            </button>
          </div>
          )}

        </div>

        <p className="text-sm">
          Ao planejar sua viagem com a plataforma, você altomaticamente concorda com nossos <a href="#">termos de uso</a> e <a href="#">condições</a>
        </p>
      </div>
    </div>
  )
}
