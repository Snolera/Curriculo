import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  // Protótipo do design e saídas de build não são código do projeto
  globalIgnores(['.next/**', 'out/**', 'design_handoff_portfolio/**']),
]);
