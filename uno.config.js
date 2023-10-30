// uno.config.ts
import { defineConfig, presetUno, presetIcons } from 'unocss'
import myPreset from './UnoPresets/my-preset'

export default defineConfig({
    // presets: [
    //     presetUno(),
    //     // myPreset(),
    //     // presetIcons({ /* options */ }),
    // ],
    rules: [
        [/^abc-(.*)$/,  ([_, c], { theme }) => {

         




            console.log(c)
            const color = c.split('-')[0]
            const number = c.split('-')[1]
            console.log(theme.colors)
            if (theme.colors[color]) {
                const bgColor = number ? theme.colors[color][number] : theme.colors[color]['DEFAULT'];
                return { 'background-color': bgColor };
            }
        }],
    ],
    shortcuts: [


        [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
    ],
    theme: {
        // ...
        colors: {
            'veryCool': '#0000ff', // class="text-very-cool"
            'brand': {
                'primary': '#FFCCDD', //class="bg-brand-primary"
            },
            'app-js': {
                '900': '#111111',
                // ...
            },
        },
    },
    variants: [
        // hover:
        (matcher) => {
            if (!matcher.startsWith('hv:'))
                return matcher
            return {
                // slice `hover:` prefix and passed to the next variants and rules
                matcher: matcher.slice(3),
                selector: s => `${s}:hover`,
            }
        }
    ],

    preflights: [
        {
            getCSS: ({ theme }) => `
            * {
              color: ${theme.colors.red?.[700] ?? '#333'};
              padding: 0;
              margin: 0;
            }
          `
        }
    ]

})