import { basename } from 'node:path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const isGitHubPages = true
const folderName = basename(process.cwd()) + '/'
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const base = mode === 'production' && isGitHubPages ? '/' + folderName : '/'

export default defineConfig({
  base,
  mode,
  root: 'src',
  build: {
    outDir: '../dist',
    assetsDir: './'
  },
  publicDir: '../public',
  plugins: [svelte()]
})
