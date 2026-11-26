// @ts-check
import { defineConfig } from 'astro/config';

// Dominio público: necesario para que la imagen de Open Graph tenga URL absoluta
// (WhatsApp, Facebook, etc. no aceptan rutas relativas). Se toma de SITE_URL o,
// si no, de la variable que pone el hosting (Netlify: URL, Vercel, Cloudflare Pages).
const site =
  process.env.SITE_URL ||
  process.env.URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  process.env.CF_PAGES_URL ||
  undefined;

// https://astro.build/config
export default defineConfig({ site });
