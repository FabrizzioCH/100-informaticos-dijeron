import { useState } from 'preact/hooks';

export default function MostrarX({ inciso, respuesta, esCorrecta }) {
    const [mostrarX, setMostrarX] = useState(false); // Estado para mostrar la "X"

    const handleClick = () => {
        if (!esCorrecta) {
            setMostrarX(true); // Muestra la "X" si la respuesta es incorrecta
            setTimeout(() => setMostrarX(false), 2000); // Oculta la "X" después de 2 segundos
        }
    };

    return (
        <>
            <button
                class="bg-blue-700 text-white text-2xl py-3 px-6 rounded-lg m-2 hover:bg-blue-500 cursor-pointer shadow-md transition"
                onClick={handleClick} // Maneja el evento de clic
            >
                <span class="font-extrabold text-3xl text-yellow-400 px-2 py-1 rounded">{inciso}{')'}</span>
                {respuesta}
            </button>

            {/* Mostrar la "X" roja si mostrarX es true */}
            {mostrarX && (
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-red-600 text-9xl font-bold">X</div>
                </div>
            )}
        </>
    );
}