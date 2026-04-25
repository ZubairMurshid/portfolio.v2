import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const size = {
  width: 256,
  height: 256,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  const logoData = readFileSync(join(process.cwd(), 'public', 'logo.png'));
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
      >
        <img
          src={logoSrc}
          alt="ZM"
          style={{ width: '60%', height: '60%', objectFit: 'contain' }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
