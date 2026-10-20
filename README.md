# @team581/starlight-theme

Team 581's Starlight theme, with maroon light and dark palettes and Source Sans 3 headings.

## Installation

```sh
pnpm add @team581/starlight-theme
```

Add the plugin to `astro.config.mjs`:

```js
import starlight from '@astrojs/starlight';
import team581Theme from '@team581/starlight-theme';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [
		starlight({
			title: 'My docs',
			plugins: [team581Theme()],
		}),
	],
});
```

Use Starlight's `customCss` to override the theme's colors or `--team581-font-heading`.

If you override Starlight's `Head`, wrap `@team581/starlight-theme/Head.astro` to keep the font preload.
