# Git & Vercel Workflow

## Branch setup
- **main** – stable, production (what visitors see on your live link)
- **new / feature branch** – your current work

## Avoid merge conflicts when opening a PR

1. **Before creating a pull request**, update your branch with main:
   ```bash
   git checkout main
   git pull origin main
   git checkout <your-branch-name>
   git merge main
   ```
2. **Fix any conflicts** in your editor, then:
   ```bash
   git add .
   git commit -m "Resolve merge conflicts with main"
   git push origin <your-branch-name>
   ```
3. **Then open the PR** from your branch → main. Fewer conflicts, and Vercel will build from your branch for the preview.

## Vercel behavior
- **Preview deployments**: Each branch gets its own preview URL (e.g. `your-app-xxx.vercel.app`).
- **Production**: Deploys from **main** when you merge the PR. That’s the link you share.

## If images/icons don’t show
- All images must be **imported** from `src/assets` (see `src/assets/index.ts`). Do not use raw paths like `/assets/img/...` – they won’t be in the build and will 404 on Vercel.
