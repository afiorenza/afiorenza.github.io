rm -rf dist
npm run build
git add .
git commit -m "deploy"
git push origin master
