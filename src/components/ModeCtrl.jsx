import { Moon, SunMedium } from 'lucide-react';
import React, { useState } from 'react';

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <SunMedium /> : <Moon />}
    </button>
  );
};

export default ModeCtrl;
