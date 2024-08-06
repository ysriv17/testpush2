module.exports = {
  apps: [
    {
      name: "my-nextjs-app",  // Choose a descriptive name
      script: "npm",          // We'll use npm to run the script
      args: "run dev",        // This is your Next.js dev command
      watch: true,             // Restart on file changes
      ignore_watch: ["node_modules", ".next"], // Ignore these
      env: {
        NODE_ENV: "development" // Ensure development mode
      }
    }
  ]
};
