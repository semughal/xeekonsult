# XEE KONSULT AB website

A responsive Swedish company website served by a dependency-free Node.js HTTP server.

## Requirements

- Node.js 18 or newer

## Run locally

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000). Set `PORT` to use another port, for example `PORT=8080 npm start`.

The site assets are in `public/`; the Node server only serves those files. No third-party Node packages are required.

## Deploy to Render

This repository includes a Render Blueprint in `render.yaml`. In Render, create a new **Blueprint Instance** and select this repository. Render will create the web service, install the Node.js app, start it with `npm start`, and check the `/` route for health. Pushes to the connected branch will trigger deployments. The free instance may spin down after inactivity.
