# Hanukkiah Widget

A beautiful, interactive Hanukkiah (Menorah) widget for React applications.

## Features

- **Interactive Lighting:** Click candles to light them. Enforces proper lighting order (Right-to-Left).
- **Date Awareness:** Automatically highlights the correct number of candles for the current night of Hanukkah (defaults to Night 1 or current night).
- **Celebration Effect:** Confetti and unlocking of night selection upon completing the lighting for the day.
- **Audio:** Plays a "Maoz Tzur" melody upon opening.
- **Bilingual:** Supports English and Hebrew interfaces.

## Installation

```bash
npm install hanukkiah-widget
```

## Usage

Import the component and use it in your React application. Note that this package uses a **named export**.

```jsx
import React from 'react';
import { Chanukkiah } from 'hanukkiah-widget';

function App() {
  return (
    <div style={{ height: '100vh', background: '#333' }}>
      <Chanukkiah />
    </div>
  );
}

export default App;
```

## Requirements

- React 16.8+ (uses Hooks)
