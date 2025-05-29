import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Hooks - Anatomía de React" },
    {
      name: "description",
      content: "Información sobre el proyecto de Anatomía de React",
    },
  ];
};

export default function Hooks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="px-24 py-8">
        <h1 className="text-3xl font-bold mb-6">Hooks en React</h1>
        <p>
          Los <strong>hooks</strong> son funciones especiales en React que
          permiten a los desarrolladores "conectar" el estado y otras
          características de React a componentes funcionales. Antes de los
          hooks, solo los componentes de clase podían tener estado y métodos de
          ciclo de vida.
        </p>
        <p>
          Algunos hooks comunes son:
          <ul>
            <li>
              <code>useState</code>: Permite agregar estado local a un
              componente funcional.
            </li>
            <li>
              <code>useEffect</code>: Permite realizar efectos secundarios (como
              fetch de datos) en componentes funcionales.
            </li>
            <li>
              <code>useContext</code>: Permite acceder al contexto de React,
              útil para el manejo de temas o idiomas.
            </li>
          </ul>
        </p>
        <p>
          Ejemplo de uso de hooks:
          <SyntaxHighlighter language="tsx" style={solarizedlight}>
            {`import { useState } from 'react';

                    function Contador() {
                      const [count, setCount] = useState(0);

                      return (
                        <div>
                          <p>Has hecho clic {count} veces</p>
                          <button onClick={() => setCount(count + 1)}>
                            Haz clic aquí
                          </button>
                        </div>
                      );
                    }`}
          </SyntaxHighlighter>
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Buenas prácticas y reglas
        </h2>
        <p>
          Para usar los hooks de manera efectiva, es importante seguir algunas
          reglas y buenas prácticas que te ayudarán a evitar problemas comunes.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Side effects</h3>
        <p className="mb-4">
          Una función tiene un efecto secundario cada vez que hace algo más que
          tomar una entrada (argumento) y calcular una salida (valor de
          retorno). Las llamadas API, la manipulación manual del DOM, el uso de
          API del navegador como <code>localStorage</code> o{" "}
          <code>setTimeout</code>, o cualquier otra cosa que quede fuera del
          simple cálculo de una Vista basada en propiedades y estado es un
          efecto secundario.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">
          Regla 0: Cuando se renderiza un componente, debería hacerlo sin sufrir
          efectos secundarios
        </h3>
        <p className="mb-2">
          Un componente no debería ejecutar efectos secundarios durante su
          renderizado:
        </p>
        <SyntaxHighlighter language="tsx" style={solarizedlight}>
          {`function Greeting ({ name }) {
          const [index, setIndex] = React.useState(0)

          const greetings = ['Hello', "Hola", "Bonjour"]

          const handleClick = () => {
            const nextIndex = index === greetings.length - 1
              ? 0
              : index + 1
            setIndex(nextIndex)
          }

        //esto viola la regla 0
          localStorage.setItem("index", index)

          return (
            <main>
              <h1>{greetings[index]}, {name}</h1>
              <button onClick={handleClick}>Next Greeting</button>
            </main>
          )
        }`}
        </SyntaxHighlighter>

        <h3 className="text-xl font-bold mt-6 mb-2">
          Regla 1: Si un evento desencadena un efecto secundario, coloque ese
          efecto secundario en un controlador de eventos
        </h3>
        <p className="mb-2">
          El objetivo de un controlador de eventos es encapsular la lógica de un
          evento. Al hacerlo, en React, se desacopla naturalmente esa lógica del
          flujo de renderizado de React.
        </p>
        <SyntaxHighlighter language="tsx" style={solarizedlight}>
          {`const handleClick = () => {
  const nextIndex = index === greetings.length - 1
    ? 0
    : index + 1
  setIndex(nextIndex)

  localStorage.setItem("index", nextIndex)
}`}
        </SyntaxHighlighter>

        <p className="mt-4 mb-2">
          Ahora que hemos almacenado en caché nuestro <code>index</code> en
          localStorage, debemos descubrir cómo recuperarlo cuando configuramos
          el <code>index</code> inicial de nuestra aplicación.
        </p>

        <p className="mb-2">
          Esta parece una solución razonable, pero viola la regla n.° 0 en{" "}
          <strong>cada</strong> render:
        </p>
        <SyntaxHighlighter language="tsx" style={solarizedlight}>
          {`const [index, setIndex] = React.useState(
  Number(localStorage.getItem("index"))
)`}
        </SyntaxHighlighter>

        <p className="mt-4 mb-2">
          La inicialización de estado diferido es mejor, pero aún viola la Regla
          #0:
        </p>
        <SyntaxHighlighter language="tsx" style={solarizedlight}>
          {`const [index, setIndex] = React.useState(() => {
  return Number(localStorage.getItem("index"))
})`}
        </SyntaxHighlighter>

        <p className="mt-4 mb-2">
          Si renderizamos nuestra aplicación en el servidor, obtendríamos un
          error porque
          <code>localStorage</code> no está disponible:
        </p>
        <SyntaxHighlighter language="tsx" style={solarizedlight}>
          {`const [index, setIndex] = React.useState(() => {
  if (typeof window === "undefined") {
    return 0
  }
  return Number(localStorage.getItem("index"))
})`}
        </SyntaxHighlighter>

        <p className="mt-4 mb-2">
          La solución correcta es usar <code>useEffect</code>:
        </p>
        <SyntaxHighlighter language="tsx" style={solarizedlight}>
          {`React.useEffect(() => {
  try {
    const savedIndex = Number(localStorage.getItem("index"));
    if (!isNaN(savedIndex)) {
      setIndex(savedIndex);
    }
  } catch {
    // Silenciar errores de localStorage (SSR o permisos bloqueados)
  }
}, []); // Se ejecuta solo en el montaje inicial`}
        </SyntaxHighlighter>

        <h3 className="text-xl font-bold mt-6 mb-2">
          Regla #2: Si un efecto secundario es sincronizar su componente con
          algún sistema externo, coloque ese efecto secundario dentro de
          useEffect
        </h3>
        <p className="mb-2">
          El objetivo de <code>useEffect</code> es sincronizar tu componente con
          algún sistema externo.
        </p>
        <SyntaxHighlighter language="tsx" style={solarizedlight}>
          {`export default function BatteryLevel() {
  const [level, setLevel] = React.useState(0)

  React.useEffect(() => {
    console.log("Getting battery level...")
    navigator.getBattery().then(battery => {
      const newLevel = Math.round(battery.level * 100)

      if (newLevel !== level) {
        setLevel(newLevel)
      }
    })
  })

  console.log("Rendering")
  return (
    <p>{level}%</p>
  )
}`}
        </SyntaxHighlighter>

        <p className="mt-4 mb-2">
          En la renderización inicial, establecemos el estado <code>level</code>{" "}
          en <code>0</code> y registramos <code>Rendering</code>. Luego,{" "}
          <strong>después de</strong> la renderización, React llama a nuestro
          efecto que registra <code>Getting battery level...</code> antes de
          obtener de forma asincrónica el nivel de batería del dispositivo.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Errores comunes</h3>
        <p className="mb-2">
          Usar el <code>useEffect</code> para establecer otros estados puede
          generar rerenderizados innecesarios:
        </p>
        <SyntaxHighlighter language="tsx" style={solarizedlight}>
          {`
const items = [
  "Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Honeydew",
  "Lemon", "Mango", "Nectarine", "Orange", "Papaya", "Raspberry",
  "Strawberry", "Watermelon"
];

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(items);

  // Este useEffect causa un rerenderizado innecesario
  React.useEffect(() => {
    const result = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(result);
  }, [searchTerm]);

  // Solución: eliminar useEffect y usar el manejador de eventos directamente
  const handleChangeSearch = (e) => {
    setSearchTerm(e.target.value);
    const result = items.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredItems(result);
  }

  return (
    <div>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`}
        </SyntaxHighlighter>

        <h3 className="text-xl font-bold mt-6 mb-2">Más artículos</h3>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://react.dev/learn/synchronizing-with-effects"
              className="text-blue-500 hover:underline"
            >
              Sincronizando con efectos
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/learn/you-might-not-need-an-effect"
              className="text-blue-500 hover:underline"
            >
              Puede que no necesites un efecto
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/learn/lifecycle-of-reactive-effects"
              className="text-blue-500 hover:underline"
            >
              Ciclo de vida de los efectos reactivos
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/learn/separating-events-from-effects"
              className="text-blue-500 hover:underline"
            >
              Separando eventos de efectos
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/learn/removing-effect-dependencies"
              className="text-blue-500 hover:underline"
            >
              Eliminando dependencias de efectos
            </a>
          </li>
        </ul>
      </main>
    </motion.div>
  );
}
