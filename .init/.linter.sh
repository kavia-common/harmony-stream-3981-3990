#!/bin/bash
cd /home/kavia/workspace/code-generation/harmony-stream-3981-3990/spotify_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

