import { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Acerca de - Anatomía de React" },
    {
      name: "description",
      content: "Información sobre el proyecto de Anatomía de React",
    },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <main className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 text-center">
              Acerca de este proyecto
            </h1>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Objetivos del taller
            </h2>
            <p>
              Este taller tiene como objetivo principal proporcionar una
              comprensión profunda de los fundamentos de React a través de una
              exploración detallada de la anatomía de sus componentes y las
              mejores prácticas de desarrollo.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Audiencia</h2>
            <p>
              Este material está diseñado para desarrolladores con conocimientos
              básicos de JavaScript que desean profundizar en React o que están
              comenzando a trabajar con esta biblioteca y quieren entender sus
              fundamentos.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Tecnologías utilizadas
            </h2>
            <ul>
              <li>
                <strong>React</strong>: Biblioteca principal para construir
                interfaces de usuario
              </li>
              <li>
                <strong>Remix</strong>: Framework para desarrollo web full-stack
              </li>
              <li>
                <strong>TypeScript</strong>: Superconjunto tipado de JavaScript
              </li>
              <li>
                <strong>Tailwind CSS</strong>: Framework CSS utilitario
              </li>
              <li>
                <strong>Framer Motion</strong>: Biblioteca para animaciones en
                React
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contacto</h2>
            <p>
              Si tienes alguna pregunta o sugerencia sobre este material, no
              dudes en contactar al autor en{" "}
              <a
                href="mailto:ptomas@iriusrisk.com"
                className="text-blue-600 dark:text-blue-400"
              >
                ptomas@iriusrisk.com
              </a>
              .
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
