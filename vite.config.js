
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import leetcodeHandler from './api/leetcode.js';
import githubHandler from './api/github.js';

function devApiPlugin() {
  return {
    name: 'dev-api-middleware',
    configureServer(server) {
      const wrapHandler = (handler) => async (req, res) => {
        const customRes = {
          setHeader: (name, val) => res.setHeader(name, val),
          status: (code) => {
            res.statusCode = code;
            return {
              json: (data) => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
              },
            };
          },
        };
        try {
          await handler(req, customRes);
        } catch (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: err.message }));
        }
      };

      server.middlewares.use('/api/leetcode', wrapHandler(leetcodeHandler));
      server.middlewares.use('/api/github', wrapHandler(githubHandler));
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), devApiPlugin()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three/')) {
            return 'three';
          }

          if (id.includes('node_modules/@react-three/')) {
            return 'react-three';
          }

          if (id.includes('node_modules/framer-motion/')) {
            return 'motion';
          }
        },
      },
    },
  },
});

