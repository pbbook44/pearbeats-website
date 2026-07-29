#!/bin/bash
echo "🍐 Pearbeats Update"
npm run build
git add dist/
git commit -m "Build $(date '+%Y-%m-%d %H:%M')"
git push origin main
echo "✅ Done!"
