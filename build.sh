rm -rf dist
npm run build
git add .
git commit -m "DEPLOY"
git push origin master
