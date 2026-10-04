<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Hosting: Netlify builds use the root netlify.toml Nitro preset; Lovable preview configuration remains unchanged.
- bun.lock must only reference https://registry.npmjs.org/ tarball URLs (never the internal sandbox npm cache), because the site is built on Netlify from GitHub.
