import { type AppTheme as Theme, createAppTheme } from '@arwes/react';

const theme = createAppTheme({
  settings: {
    hues: {
      primary: 180,
      secondary: 60
    },
    fontFamilies: {
      title: '"oli-regular","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
      body: '"oli-regular","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
      cta: '"oli-regular","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
      input: '"oli-regular","Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
      code: 'JetBrains Mono,Menlo,Monaco,Consolas,Courier New,monospace'
    }
  }
});

export type { Theme };
export { theme };
