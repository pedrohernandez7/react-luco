import type { MetaFunction } from "@remix-run/node";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { motion } from "framer-motion";

import { Section } from "~/components/Section";

export const meta: MetaFunction = () => {
  return [
    { title: "Anatomía de React" },
    {
      name: "description",
      content: "Aprende los fundamentos y la anatomía de React desde cero",
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <header className="px-6 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Anatomía de{" "}
              <span className="text-blue-600 dark:text-blue-400">React</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Descubre los orígenes, filosofía y fundamentos de React
            </p>
          </motion.div>
        </div>
      </header>
      <main className="px-6 pb-16">
        <div className="mx-auto max-w-7xl space-y-24">
          <section className="prose prose-lg dark:prose-invert mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Los Orígenes de React</h2>
              <p>
                React fue creado por Jordan Walke, un ingeniero de software en
                Facebook (ahora Meta), y fue implementado por primera vez en el
                News Feed de Facebook en 2011. La necesidad surgió cuando el
                equipo enfrentaba desafíos con el mantenimiento del código para
                su feed de noticias en constante crecimiento.
              </p>
              <p>
                En 2012, React se implementó en Instagram.com, y en mayo de
                2013, React fue lanzado al público en la JSConf US, marcando el
                comienzo de su viaje como una biblioteca de código abierto.
              </p>
            </motion.div>
          </section>

          <section className="prose prose-lg dark:prose-invert mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                El Problema que Resuelve
              </h2>
              <p>
                Antes de React, los desarrolladores luchaban con la complejidad
                de mantener interfaces de usuario que cambiaban constantemente.
                La actualización manual del DOM era propensa a errores y difícil
                de mantener, especialmente en aplicaciones grandes.
              </p>
              <p>
                React introdujo un nuevo paradigma: la programación declarativa
                para interfaces de usuario. En lugar de manipular directamente
                el DOM, los desarrolladores describen cómo debería verse la
                interfaz en cada estado, y React se encarga eficientemente de
                actualizar el DOM cuando es necesario.
              </p>
            </motion.div>
          </section>

          <section className="prose prose-lg dark:prose-invert mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">La Filosofía de React</h2>
              <p>React se basa en varios principios fundamentales:</p>
              <ul>
                <li>
                  <strong>Composición:</strong> Las interfaces se construyen
                  componiendo pequeñas piezas reutilizables.
                </li>
                <li>
                  <strong>Unidireccionalidad:</strong> Los datos fluyen en una
                  sola dirección, haciendo las aplicaciones más predecibles y
                  fáciles de depurar.
                </li>
                <li>
                  <strong>Declarativo vs Imperativo:</strong> Describes qué
                  quieres que suceda, no cómo debe suceder.
                </li>
              </ul>
            </motion.div>
          </section>

          <section className="prose prose-lg dark:prose-invert mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">El Virtual DOM</h2>
              <p>
                El Virtual DOM es una de las innovaciones más importantes de
                React. Es una representación ligera en memoria del DOM real.
                Cuando el estado de tu aplicación cambia, React:
              </p>
              <ol>
                <li>Crea una nueva representación virtual del DOM</li>
                <li>Compara esta nueva versión con la anterior (diffing)</li>
                <li>
                  Calcula la manera más eficiente de actualizar el DOM real
                </li>
                <li>Aplica solo los cambios necesarios al DOM real</li>
              </ol>
              <p>
                Este proceso, conocido como <strong>reconciliación</strong>, es
                lo que hace que React sea tan eficiente en el manejo de
                actualizaciones de la interfaz de usuario.
              </p>
            </motion.div>
          </section>

          <section className="prose prose-lg dark:prose-invert mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                El Virtual DOM VS Shadow DOM
              </h2>
              <h3 className="mt-8 text-2xl font-semibold">
                ¿Qué es el Shadow DOM?
              </h3>
              <p>
                El <strong>Shadow DOM</strong> es una tecnología nativa del
                navegador que permite encapsular una parte del DOM y su estilo,
                de modo que no se vea afectado por el resto de la página. Es
                fundamental en el desarrollo de <em>Web Components</em>, ya que
                permite crear componentes reutilizables y aislados.
              </p>
              <ul>
                <li>
                  <strong>Encapsulamiento:</strong> El Shadow DOM aísla el HTML,
                  CSS y JavaScript de un componente, evitando conflictos de
                  estilos o scripts con el resto del documento.
                </li>
                <li>
                  <strong>Soporte nativo:</strong> Es una especificación
                  estándar soportada por la mayoría de los navegadores modernos.
                </li>
              </ul>
              <h3 className="mt-8 text-2xl font-semibold">Diferencias clave</h3>
              <ul>
                <li>
                  <strong>Propósito:</strong> El Virtual DOM optimiza el
                  rendimiento de las actualizaciones de la UI, mientras que el
                  Shadow DOM proporciona encapsulamiento y aislamiento de
                  componentes.
                </li>
                <li>
                  <strong>Implementación:</strong> El Virtual DOM es una
                  abstracción implementada por React (y otras bibliotecas),
                  mientras que el Shadow DOM es una característica nativa del
                  navegador.
                </li>
                <li>
                  <strong>Uso:</strong> El Virtual DOM se usa para renderizar y
                  actualizar eficientemente la UI; el Shadow DOM se usa para
                  crear componentes web encapsulados.
                </li>
                <li>
                  <strong>Compatibilidad:</strong> El Virtual DOM depende de la
                  biblioteca; el Shadow DOM depende del soporte del navegador.
                </li>
              </ul>
              <p>
                Aunque ambos conceptos ayudan a gestionar la complejidad de las
                interfaces, resuelven problemas diferentes y pueden incluso
                complementarse en ciertos escenarios.
              </p>
            </motion.div>
          </section>
          <Section title="JSX y la Sintaxis de React">
            <p>
              JSX es una extensión de sintaxis para JavaScript que se asemeja a
              HTML. Permite escribir estructuras de UI de manera más intuitiva y
              legible.
            </p>

            <SyntaxHighlighter language="jsx" style={solarizedlight}>
              {`const element = <h1>Hola, mundo!</h1>;
                const componente = (props) => {
                  return <div>{props.mensaje}</div>;
                };`}
            </SyntaxHighlighter>
            <p>
              JSX se transpila a llamadas de funciones de React, lo que permite
              crear elementos de React de manera declarativa. Por ejemplo, el
              código JSX anterior se convierte en:
            </p>
            <SyntaxHighlighter language="jsx" style={solarizedlight}>
              {`const element = React.createElement('h1', null, 'Hola, mundo!');
                const componente = (props) => {
                  return React.createElement('div', null, props.mensaje);
                };`}
            </SyntaxHighlighter>
          </Section>
          <section
            id="props"
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Props en React</h2>
              <p>
                Las <strong>props</strong> (abreviatura de "properties") son un
                mecanismo fundamental en React que permite pasar datos de un
                componente a otro. Las props son esenciales para la
                <strong>composición</strong>.
              </p>
              <p>
                Las props son de solo lectura y no pueden ser modificadas por el
                componente que las recibe. Esto asegura que el flujo de datos
                sea predecible y facilita la depuración.
              </p>
              <p>
                Ejemplo de uso de props:
                <SyntaxHighlighter language="jsx" style={solarizedlight}>
                  {`const saludo = (props)=> {
                      return <h1>Hola, {props.nombre}!</h1>;
                    }`}
                </SyntaxHighlighter>
              </p>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}
