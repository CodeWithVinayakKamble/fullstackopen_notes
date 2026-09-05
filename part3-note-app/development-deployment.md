# Development - Deployment

## ⏱️ When Should You Generate the dist Folder?

1. While Coding Features / Daily Work (DO NOT generate dist):

    * Run npm run dev in React (Port 5173).

    * Run npm run dev in Backend (Port 3001).

    * Enjoy instant hot-reloading on every save without building anything.

---

2. When You Are Ready to Ship / Deploy to Production (GENERATE dist!)

    * Whenever you are done building your features and want to update your live website on Render:

        * Run npm run build in React.

        * Copy the fresh dist into your backend.

        * Commit and push to GitHub ==> Render automatically deploys your new updates live to the world!


---


* React :- 

    * Things to do before hit the : **npm run build**.

        1. Add the proxy to vite.config.js

            ```js
            import { defineConfig } from 'vite'
            import react from '@vitejs/plugin-react'

            // https://vitejs.dev/config/
            export default defineConfig({
            plugins: [react()],

            // Just add this proxy code to enable CORS
            server: {
                proxy: {
                '/api': {
                    target: 'http://localhost:3001',
                    changeOrigin: true,
                },
                },
            },
            })
            ```
        ---
        2. Change _src/services/notes.js_ to const baseUrl = **'/api/notes**'
        ---
        3. Then hit/run **npm run build** to generate the new **`dist`** folder!
        ---
        4. Copy the new dist folder into your backend!

---
