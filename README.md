# Lien Wabvers Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/590f963f-10df-466f-b991-554d0b1736df/deploy-status)](https://app.netlify.com/sites/flexbase-landing/deploys)

## Purpose

- To convince new users to sign up for demos and Flexbase accounts
- To impress current and prospective investors
- (once launched): to provide a clear link for current users to the app.

## Develop

To develop this codebase locally, you need a recent version of `node`/`npm` installed. Instructions:

```bash
# Install eleventy, a lightweight templating solution.
npm install

# Run the local development server, usually at port 8080.
npm run serve
```

This will start a local development server that reloads each time the code in `/src/` is changed.

### Structure

The original codebase was delivered as HTML/CSS/JS. We added [Eleventy](https://11ty.dev) as a
lightweight way to deduplicate and template common sections. When eleventy is run, the served site
will look almost exactly like the `/src/` directory, with a few differences:

- the `/src/_includes` directory will not be present in the output.
- any `{% include <filename> %}` blocks in source files will be replaced with the contents of `/src/_includes/<filename>`.
- the `/src/_redirects` will not be present in production deployments; it is a configuration file
  that tells Netlify of any redirects we wish the production web server to perform.

By convention, we name include files starting with an underscore, e.g. `_meta.html`. This makes it
easier to distinguish them while editing/browsing. Eleventy has many more features, such as a
cascading data merge to fill into templated variables. We will not use them unless their usefulness
significantly outweighs the additional cognitive load of considering them while working on the site.

Note that if you add a new filetype/file extension, you may need to add it to the Eleventy config
file at the root of the repository, `/.eleventy.js`.

## Deploy

To deploy the site, please follow four steps:

1. Compile and test locally (`npm run build`, then use
   <https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer> [configuration
   included in this repo] or `npx serve ./build`).
1. Push branch to GitHub and submit a Pull Request.
1. Test in Netlify Pull Request preview (this will automatically be added to the PR by Netlify)
1. Make a note on the Pull Request that you have successfully tested the new features

A Flexbase teammate will also review the changes, and will either ask for changes or merge the PR.
If the PR is large or otherwise risky, we may ask the contributor instead to merge it during
convenient hours for them, so that you can be present in case of need to quickly triage or roll
back. In general though, please ensure a teammate at Flexbase has reviewed code/site changes before
merging.

Once the PR is merged into `master`, the site is automatically deployed. **Please test new features one final time at <https://lien-waivers-page.netlify.app>**.
