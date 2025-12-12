import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Chanukkiah() {
  const [litCandles, setLitCandles] = useState(new Set());
  const [errorMsg, setErrorMsg] = useState('');
  const [badAttempts, setBadAttempts] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState(null);
  const [targetNight, setTargetNight] = useState(1);
  const [isHebrew, setIsHebrew] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isNightSelectionUnlocked, setIsNightSelectionUnlocked] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [savedVolume, setSavedVolume] = useState(0.1);
  const placeholderRef = useRef(null);
  const hoverTimers = useRef({});
  const audioRef = useRef(null);

  const translations = {
    en: {
      title: '✡ Chanukkiah ✡',
      nightLabel: 'Night',
      reset: 'Reset',
      errorOrder: (n) => `Please light candles 1-${n} in order, then the Shamash.`,
      errorNight: (n) => `Tonight is Night ${n}. You only need to light candles 1-${n}.`,
      langBtn: 'עברית',
      locked: 'Light tonight\'s candles first!',
    },
    he: {
      title: '✡ חנוכייה ✡',
      nightLabel: 'לילה',
      reset: 'איפוס',
      errorOrder: (n) => `נא להדליק את הנרות 1-${n} לפי הסדר, ואז את השמש.`,
      errorNight: (n) => `הלילה הוא לילה ${n}. צריך להדליק רק את הנרות 1-${n}.`,
      langBtn: 'English',
      locked: 'יש להדליק את נרות הלילה קודם!',
    }
  };

  const t = isHebrew ? translations.he : translations.en;

  // Language detection
  useEffect(() => {
    const lang = document.documentElement.lang || 'en';
    setIsHebrew(lang.startsWith('he'));
  }, []);

  // Audio control moved to interaction handlers to ensure autoplay works
  // useEffect(() => { ... }) removed

  // Date logic
  useEffect(() => {
    const today = new Date();
    const start = new Date(today.getFullYear(), 11, 14); // Dec 14

    today.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);

    const diffTime = today - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let night = diffDays + 1;

    if (night < 1) night = 1;
    if (night > 8) night = 8;

    setTargetNight(night);
  }, []);

  useEffect(() => {
    const updateRect = () => {
      if (placeholderRef.current) {
        const r = placeholderRef.current.getBoundingClientRect();
        setRect({
          top: r.top,
          left: r.left,
          width: r.width,
          height: r.height,
        });
      }
    };

    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, []);

  // Reset candles when night changes
  useEffect(() => {
    setLitCandles(new Set());
    setErrorMsg('');
    setBadAttempts(0);
    // Note: We do NOT reset hasCelebrated or lock state here, 
    // as unlocking is a one-time achievement for the session (or per night? User said "completing the first time")
    // If we want to re-lock on night change, we would set isNightSelectionUnlocked(false) here.
    // But usually "unlocking" a feature implies it stays unlocked. 
    // However, the requirement "not allow changing days untill the first full lighting" implies
    // we just need to finish the *current* default night to unlock the selector.
  }, [targetNight]);

  const getNextExpectedCandle = (currentLit) => {
    for (let i = 1; i <= targetNight; i++) {
      if (!currentLit.has(i)) return i;
    }

    const requiredCount = targetNight;
    if (currentLit.size === requiredCount && !currentLit.has('shamash')) {
      return 'shamash';
    }

    return null;
  };

  const attemptLight = (candleId) => {
    if (!isOpen) return;

    if (litCandles.has(candleId)) return;

    if (typeof candleId === 'number' && candleId > targetNight) {
      setErrorMsg(t.errorNight(targetNight));
      return;
    }

    const next = getNextExpectedCandle(litCandles);

    if (candleId === next) {
      const newLit = new Set([...litCandles, candleId]);
      setLitCandles(newLit);
      setBadAttempts(0);
      setErrorMsg('');

      // Check for completion (Shamash is optional)
      // Confetti fires if we have all night candles (targetNight) 
      // OR all night candles + shamash (targetNight + 1)
      if (newLit.size === targetNight || newLit.size === targetNight + 1) {
        // Unlock night selection if not yet unlocked
        if (!isNightSelectionUnlocked) {
          setIsNightSelectionUnlocked(true);
        }

        // Always celebrate on completion
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffd700', '#4a90e2', '#ffffff'],
          zIndex: 10000, // Ensure it's above the modal
        });
      }

    } else {
      const newAttempts = badAttempts + 1;
      setBadAttempts(newAttempts);

      if (newAttempts > 2) {
        setErrorMsg(t.errorOrder(targetNight));
      }
    }
  };

  const handleHoverStart = (candleId) => {
    if (!isOpen) return;
    if (hoverTimers.current[candleId]) clearTimeout(hoverTimers.current[candleId]);
    hoverTimers.current[candleId] = setTimeout(() => {
      attemptLight(candleId);
    }, 500);
  };

  const handleHoverEnd = (candleId) => {
    if (hoverTimers.current[candleId]) {
      clearTimeout(hoverTimers.current[candleId]);
      delete hoverTimers.current[candleId];
    }
  };

  const handleClick = (candleId) => {
    attemptLight(candleId);
  };

  const resetCandles = () => {
    setLitCandles(new Set());
    setErrorMsg('');
    setBadAttempts(0);
    setShowGreeting(false);
  };

  const toggleOpen = () => {
    if (!isOpen) {
      const lang = document.documentElement.lang || 'en';
      setIsHebrew(lang.startsWith('he'));
      setIsOpen(true);
      // Play audio directly on user interaction
      if (audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      }
    } else {
      setIsOpen(false);
      // Pause audio
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  };

  const toggleLanguage = () => {
    setIsHebrew(!isHebrew);
  };

  const toggleMute = () => {
    if (volume > 0) {
      setSavedVolume(volume);
      setVolume(0);
      if (audioRef.current) {
        audioRef.current.volume = 0;
      }
    } else {
      setVolume(savedVolume);
      if (audioRef.current) {
        audioRef.current.volume = savedVolume;
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const Candle = ({ id, isShamash }) => {
    const isLit = !isOpen || litCandles.has(id);
    // Removed disabled visual cues as requested

    return (
      <div
        onMouseEnter={() => handleHoverStart(id)}
        onMouseLeave={() => handleHoverEnd(id)}
        onClick={(e) => {
          e.stopPropagation();
          handleClick(id);
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // Cursor handled by container, but we keep pointer for interactive feel or just inherit
          cursor: 'inherit',
          transition: 'transform 0.2s',
          position: 'relative',
          zIndex: 10,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onMouseOver={(e) => {
          if (isOpen) e.currentTarget.style.transform = 'translateY(-5px)';
        }}
        onMouseOut={(e) => {
          if (isOpen) e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div
          style={{
            width: '20px',
            height: '30px',
            background: isLit
              ? 'linear-gradient(to top, #ff6b00 0%, #ffaa00 50%, #ffeb3b 100%)'
              : 'transparent',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            opacity: isLit ? 1 : 0,
            transition: 'opacity 0.3s',
            boxShadow: isLit ? '0 0 20px #ffaa00, 0 0 40px #ff6b00' : 'none',
            animation: isLit ? 'flicker 1.5s ease-in-out infinite alternate' : 'none',
            marginBottom: '2px',
          }}
        />
        <div
          style={{
            width: '25px',
            height: isShamash ? '130px' : '100px',
            background: 'linear-gradient(to right, #4a90e2 0%, #5ba3f5 50%, #4a90e2 100%)',
            borderRadius: '3px',
            boxShadow: 'inset -2px 0 5px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>
    );
  };

  // Styles for the container
  const containerStyle = isOpen
    ? {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(15, 37, 87, 0.95)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: 0,
      direction: isHebrew ? 'rtl' : 'ltr', // RTL support
      cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="font-size: 24px;"><text y="22">🕯️</text></svg>') 16 16, auto`,
    }
    : {
      position: 'fixed',
      top: rect ? `${rect.top}px` : '0',
      left: rect ? `${rect.left}px` : '0',
      width: rect ? `${rect.width}px` : '120px',
      height: rect ? `${rect.height}px` : '80px',
      background: 'linear-gradient(to bottom, #0f2557 0%, #1a3a6e 100%)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: '12px',
      cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="font-size: 24px;"><text y="22">🕯️</text></svg>') 16 16, pointer`,
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      overflow: 'hidden',
    };

  const contentScale = isOpen ? 1 : 0.25;

  return (
    <>
      <style>
        {`
          @keyframes flicker {
            0%, 100% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.05) translateY(-2px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0% { transform: translateX(-50%) translateY(0px); }
            50% { transform: translateX(-50%) translateY(-10px); }
            100% { transform: translateX(-50%) translateY(0px); }
          }
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
        .header-text {
          font-family: "Cinzel Decorative", "Segoe UI", sans-serif;
          font-size: 5rem;
          font-weight: 900;
          margin: 0;
          background: linear-gradient(to bottom, #ffd700, #ffaa00, #ffd700);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent; /* Fallback */
          filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.6));
          letter-spacing: 4px;
          animation: celebrate 4s ease-in-out infinite;
          white-space: nowrap;
          transform-style: preserve-3d;
          padding: 10px; /* Prevent clipping */
        }
        @keyframes celebrate {
          0%, 100% { transform: translateY(0px) scale(1); filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.6)); }
          50% { transform: translateY(-15px) scale(1.05); filter: drop-shadow(0 0 35px rgba(255, 215, 0, 0.8)); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        `}
      </style>

      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="https://media.vocaroo.com/mp3/14RouJ9dzgvV"
        volume="0.75"
      />

      <div
        ref={placeholderRef}
        style={{
          width: '120px',
          height: '80px',
          margin: '20px',
          opacity: 0
        }}
      />

      <div
        style={containerStyle}
        onClick={!isOpen ? toggleOpen : undefined}
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleOpen();
          }}
          style={{
            position: 'absolute',
            top: '20px',
            right: isHebrew ? 'auto' : '20px',
            left: isHebrew ? '20px' : 'auto',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
            transition: 'opacity 0.3s',
            zIndex: 100,
          }}
        >
          ✕
        </button>

        {/* Top Controls Container */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: isHebrew ? 'auto' : '20px',
          right: isHebrew ? '20px' : 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s',
          zIndex: 100,
        }}>
          {/* Language Toggle Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleLanguage();
            }}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              fontSize: '14px',
              padding: '5px 10px',
              borderRadius: '15px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {t.langBtn}
          </button>

          {/* Audio Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            {/* Mute Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '18px',
                padding: '5px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                minWidth: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              {volume === 0 ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              )}
            </button>

            {/* Volume Slider */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '80px',
                accentColor: '#ffd700',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>

        <div
          style={{
            transform: `scale(${contentScale})`,
            transformOrigin: 'center center',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginTop: '50px', // Space for the title
          }}
        >
          {/* Happy Hanukkah Header */}
          {/* Happy Hanukkah Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px', // Increased spacing further
            marginTop: '-60px',
            zIndex: 50,
            cursor: 'default',
            userSelect: 'none',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s',
          }}>
            <h1 className="header-text">
              {isHebrew ? 'חג חנוכה שמח!' : 'HAPPY HANUKKAH!'}
            </h1>
          </div>

          {/* Night Selector */}
          <div style={{
            marginBottom: '20px',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s',
            height: isOpen ? 'auto' : 0,
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            flexWrap: 'wrap', // Allow wrapping if needed
            justifyContent: 'center',
            maxWidth: '90vw',
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <button
                key={n}
                onClick={(e) => {
                  e.stopPropagation();
                  if (isNightSelectionUnlocked) {
                    setTargetNight(n);
                  }
                }}
                title={!isNightSelectionUnlocked ? t.locked : ''}
                style={{
                  background: targetNight === n ? '#ffd700' : 'rgba(255,255,255,0.1)',
                  color: targetNight === n ? '#0f2557' : '#fff',
                  border: targetNight === n ? '1px solid #ffd700' : '1px solid rgba(255,255,255,0.3)',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  cursor: isNightSelectionUnlocked ? 'pointer' : 'not-allowed',
                  fontWeight: 'bold',
                  transition: 'all 0.2s',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  opacity: isNightSelectionUnlocked || targetNight === n ? 1 : 0.5,
                }}
              >
                {t.nightLabel} {n}
              </button>
            ))}
          </div>

          <div style={{
            height: '30px',
            marginBottom: '10px',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s',
          }}>
            {errorMsg && isOpen && (
              <div
                style={{
                  color: '#fff', // White text
                  background: 'rgba(15, 37, 87, 0.8)', // Dark blue background
                  border: '1px solid #ffd700', // Gold border
                  padding: '5px 15px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  animation: 'fadeIn 0.3s',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                }}
              >
                {errorMsg}
              </div>
            )}
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            marginTop: isOpen ? 0 : '20px',
            direction: 'ltr', // Always LTR for the menorah itself
          }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '15px',
                zIndex: 2,
                marginBottom: '-10px'
              }}
            >
              <Candle id={1} />
              <Candle id={2} />
              <Candle id={3} />
              <Candle id={4} />
              <Candle id="shamash" isShamash />
              <Candle id={5} />
              <Candle id={6} />
              <Candle id={7} />
              <Candle id={8} />
            </div>

            <div
              style={{
                width: '380px',
                height: '40px',
                background: 'linear-gradient(to bottom, #d4af37 0%, #f4d03f 50%, #d4af37 100%)',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                border: '2px solid #b8941e',
                zIndex: 1,
                position: 'relative',
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}>
                {[...Array(9)].map((_, i) => (
                  <div key={i} style={{
                    width: '10px',
                    height: '10px',
                    background: '#b8941e',
                    borderRadius: '50%',
                    opacity: 0.5
                  }} />
                ))}
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '50px',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: isOpen ? 'auto' : 'none',
          }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetCandles();
              }}
              style={{
                background: 'transparent',
                border: '1px solid #ffd700',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                color: '#ffd700',
                cursor: 'pointer',
                opacity: 0.7,
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = 0.7;
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {t.reset}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
