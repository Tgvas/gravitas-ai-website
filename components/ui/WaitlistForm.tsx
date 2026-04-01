'use client';

import { useState } from 'react';

interface WaitlistFormProps {
  /** Button label */
  label?: string;
  /** Layout variant: 'inline' for side-by-side input+button, 'stacked' for full-width */
  layout?: 'inline' | 'stacked';
  /** Color theme: 'gold-on-navy' | 'gold-on-beige' */
  theme?: 'gold-on-navy' | 'gold-on-beige';
}

export function WaitlistForm({
  label = 'Request Early Access',
  layout = 'inline',
  theme = 'gold-on-navy',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const isNavy = theme === 'gold-on-navy';
  const inputBorder = isNavy ? 'rgba(240,237,230,0.2)' : 'rgba(26,37,53,0.2)';
  const inputBorderFocus = isNavy ? 'rgba(196,154,42,0.6)' : 'rgba(26,37,53,0.5)';
  const inputBg = isNavy ? 'rgba(240,237,230,0.05)' : 'rgba(255,255,255,0.6)';
  const inputColor = isNavy ? '#F0EDE6' : '#1A2535';
  const placeholderColor = isNavy ? '#8A8070' : '#8A8070';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg((data as { error?: string }).error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '16px 24px',
          border: '1px solid rgba(196,154,42,0.4)',
          background: 'rgba(196,154,42,0.08)',
        }}
      >
        <p
          style={{
            color: '#C49A2A',
            fontWeight: 600,
            fontSize: '14px',
            margin: 0,
          }}
        >
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  if (layout === 'stacked') {
    return (
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '480px' }}>
        <div style={{ marginBottom: '12px' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            disabled={status === 'loading'}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '14px 16px',
              border: `1px solid ${inputBorder}`,
              background: inputBg,
              color: inputColor,
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'var(--font-dm-sans)',
            }}
            onFocus={(e) => (e.target.style.borderColor = inputBorderFocus)}
            onBlur={(e) => (e.target.style.borderColor = inputBorder)}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            width: '100%',
            padding: '14px 24px',
            background: status === 'loading' ? '#A07820' : '#C49A2A',
            color: '#0D1B2A',
            fontWeight: 600,
            fontSize: '14px',
            letterSpacing: '0.05em',
            border: 'none',
            cursor: status === 'loading' ? 'wait' : 'pointer',
            fontFamily: 'var(--font-dm-sans)',
            transition: 'background 200ms',
          }}
        >
          {status === 'loading' ? 'Submitting...' : label}
        </button>
        {status === 'error' && (
          <p style={{ color: '#E05A5A', fontSize: '13px', marginTop: '8px', margin: '8px 0 0' }}>
            {errorMsg}
          </p>
        )}
      </form>
    );
  }

  // inline layout
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '480px' }}
    >
      <div style={{ display: 'flex', gap: '0' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
          disabled={status === 'loading'}
          style={{
            flex: 1,
            minWidth: 0,
            padding: '14px 16px',
            border: `1px solid ${inputBorder}`,
            borderRight: 'none',
            background: inputBg,
            color: inputColor,
            fontSize: '14px',
            outline: 'none',
            fontFamily: 'var(--font-dm-sans)',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = inputBorderFocus;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = inputBorder;
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            flexShrink: 0,
            padding: '14px 24px',
            background: status === 'loading' ? '#A07820' : '#C49A2A',
            color: '#0D1B2A',
            fontWeight: 600,
            fontSize: '14px',
            letterSpacing: '0.05em',
            border: 'none',
            cursor: status === 'loading' ? 'wait' : 'pointer',
            fontFamily: 'var(--font-dm-sans)',
            whiteSpace: 'nowrap',
            transition: 'background 200ms',
          }}
        >
          {status === 'loading' ? 'Submitting...' : label}
        </button>
      </div>
      {status === 'error' && (
        <p style={{ color: '#E05A5A', fontSize: '13px', margin: 0 }}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
