import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	project: ['src/**/*.{ts,astro,mdx,css}', '*.ts'],
	compilers: {
		css: (text: string) =>
			[...text.matchAll(/@import\s+['"]([^'"]+)['"]/g)]
				.map(([, specifier]) => `import ${JSON.stringify(specifier)};`)
				.join('\n'),
	},
};

export default config;
