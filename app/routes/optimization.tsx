import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Optimizaciones - Anatomía de React" },
    {
      name: "description",
      content:
        "Aprende sobre optimizaciones en React y cómo mejorar el rendimiento de tus aplicaciones",
    },
  ];
};

export default function Optimizations() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="prose prose-lg dark:prose-invert mx-auto px-24 py-8"
    >
      <h1 className="text-3xl font-bold mb-6">Optimizaciones en React</h1>
      <p>
        A medida que las aplicaciones React crecen, es crucial optimizar el
        rendimiento. Algunas estrategias de optimización incluyen:
      </p>
      <ul>
        <li>
          <strong>Memoización:</strong> Usar <code>React.memo</code> para evitar
          renderizados innecesarios de componentes.
        </li>
        <li>
          <strong>useMemo y useCallback:</strong> Hooks que ayudan a memorizar
          valores y funciones, evitando cálculos o recreaciones innecesarias.
        </li>
        <li>
          <strong>Lazy loading:</strong> Cargar componentes o datos bajo demanda
          para reducir el tiempo de carga inicial.
        </li>
        <li>
          <strong>Optimización del Virtual DOM:</strong> Claves únicas y
          estables para listas de elementos, evitando el diffing innecesario.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">React.memo</h2>
      <p>
        <code>React.memo</code> es un higher-order component que memoriza el
        resultado de renderizar un componente, evitando rerenderizados
        innecesarios cuando las props no cambian.
      </p>
      <SyntaxHighlighter language="jsx" style={solarizedlight}>
        {`const MiComponente = React.memo(function MiComponente(props) {
  // Tu componente aquí
  return <div>{props.nombre}</div>;
});`}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-bold mt-8 mb-4">useMemo</h2>
      <p>
        <code>useMemo</code> permite memorizar el resultado de una función para
        evitar cálculos costosos en cada renderizado.
      </p>
      <SyntaxHighlighter language="jsx" style={solarizedlight}>
        {`import { useMemo } from 'react';

function ComponenteConCalculoCostoso({ items, query }) {
  const itemsFiltrados = useMemo(() => {
    console.log('Calculando items filtrados...');
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }, [items, query]); // Solo recalcula si items o query cambian

  return (
    <ul>
      {itemsFiltrados.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}`}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-bold mt-8 mb-4">useCallback</h2>
      <p>
        <code>useCallback</code> memoriza una función callback para evitar que
        se recree en cada renderizado.
      </p>
      <SyntaxHighlighter language="jsx" style={solarizedlight}>
        {`import { useCallback } from 'react';

function Padre() {
  const [count, setCount] = useState(0);

  // Esta función solo se recreará si count cambia
  const handleClick = useCallback(() => {
    console.log('Botón clickeado, count:', count);
  }, [count]);

  return <Hijo onButtonClick={handleClick} />;
}

// Este componente solo se rerenderizará si onButtonClick cambia
const Hijo = React.memo(({ onButtonClick }) => {
  console.log('Renderizando Hijo');
  return <button onClick={onButtonClick}>Clickeame</button>;
});`}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-bold mt-8 mb-4">Lazy Loading</h2>
      <p>
        React.lazy y Suspense permiten cargar componentes solo cuando son
        necesarios.
      </p>
      <SyntaxHighlighter language="jsx" style={solarizedlight}>
        {`import React, { Suspense, lazy } from 'react';

// En lugar de importar normalmente
// import ComponentePesado from './ComponentePesado';

// Importamos con lazy loading
const ComponentePesado = lazy(() => import('./ComponentePesado'));

function MiApp() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      {/* Suspense muestra un fallback mientras el componente carga */}
      <Suspense fallback={<div>Cargando...</div>}>
        <ComponentePesado />
      </Suspense>
    </div>
  );
}`}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-bold mt-8 mb-4">Optimización de listas</h2>
      <p>
        Usar keys estables y únicas en listas ayuda a React a optimizar el
        proceso de reconciliación.
      </p>
      <SyntaxHighlighter language="jsx" style={solarizedlight}>
        {`// Buena práctica: usar IDs únicos como keys
<ul>
  {items.map(item => (
    <li key={item.id}>{item.text}</li>
  ))}
</ul>

// Mala práctica: usar índices como keys (evitar cuando sea posible)
<ul>
  {items.map((item, index) => (
    <li key={index}>{item.text}</li>
  ))}
</ul>`}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Herramientas de análisis de rendimiento
      </h2>
      <p>
        React DevTools incluye herramientas de profiling que pueden ayudarte a
        identificar componentes que se renderizan innecesariamente o que son
        demasiado lentos.
      </p>
      <ul>
        <li>React DevTools Profiler</li>
        <li>why-did-you-render (biblioteca)</li>
        <li>Lighthouse para análisis general</li>
      </ul>

      <p className="mt-8">
        Recuerda que la optimización prematura puede complicar tu código sin
        beneficios reales. Siempre mide el rendimiento antes y después de
        aplicar optimizaciones para asegurarte de que realmente están mejorando
        la experiencia del usuario.
      </p>
    </motion.div>
  );
}
