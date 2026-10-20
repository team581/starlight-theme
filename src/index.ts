import type { StarlightPlugin } from '@astrojs/starlight/types';

export default function team581Theme(): StarlightPlugin {
	return {
		name: '@team581/starlight-theme',
		hooks: {
			'config:setup'({ config, updateConfig }) {
				updateConfig({
					customCss: ['@team581/starlight-theme/styles.css', ...(config.customCss ?? [])],
					components: {
						Head: '@team581/starlight-theme/Head.astro',
						...config.components,
					},
				});
			},
		},
	};
}
