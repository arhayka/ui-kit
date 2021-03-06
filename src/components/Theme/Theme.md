# Theme

## Примеры

### Использование в корневом компоненте:

```ts
// src/App.ts
import React from 'react';
import { Theme, presetGpnDefault } from '@gpn-design/uikit/Theme';

const App = () => {
  return <Theme preset={presetGpnDefault}>your code</Theme>;
};
```

### Вложенные темы

```ts
import React from 'react';
import { Theme, presetGpnDefault, presetGpnDark } from '@gpn-design/uikit/Theme';

const App = () => {
  return (
    <Theme preset={presetGpnDefault}>
      your code
      <Theme preset={presetGpnDark}>your code</Theme>
    </Theme>
  );
};
```

### Использование useTheme

`useTheme` вернет `{ theme, themeClassNames }`

`theme` - используемая тема
`themeClassNames` - классы используемой темы

```ts
import { useTheme } from '@gpn-design/uikit/Theme';
import { Text } from '@gpn-design/uikit/Text';

const App = () => {
  const { themeClassNames } = useTheme();
  <Text className={themeClassNames.color.invert}></div>;
};
```

### Переключение темы

```ts
import './RootTheme.css';

import React, { useState } from 'react';
import { cn } from '@bem-react/classname';
import { Theme, presetGpnDark, presetGpnDefault, ThemePreset } from '@gpn-design/uikit/Theme';
import { Switch } from '@gpn-design/uikit/Switch';

type ThemeName = 'gpnDefault' | 'gpnDark';

function getPreset(themeName: ThemeName): ThemePreset {
  const obj = {
    gpnDefault: presetGpnDefault,
    gpnDark: presetGpnDark,
  };
  return obj[themeName] || presetGpnDefault;
}

const cnRootTheme = cn('RootTheme');

export const RootTheme: React.FC = () => {
  const [theme, setTheme] = useState<ThemeName>('gpnDefault');
  const handleChange = ({ checked }) => setTheme(checked ? 'gpnDark' : 'gpnDefault');

  return (
    <Theme preset={getPreset(theme)} className={cnRootTheme()}>
      <Switch label="Dark Mode" onChange={handleChange} checked={theme === 'gpnDark'} />
    </Theme>
  );
};
```

{{%story::ui-kit-examples-theme--example%}}
