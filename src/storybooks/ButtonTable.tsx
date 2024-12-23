import React from 'react';
import { Add } from '../components/atoms/Icons';
import { Button } from '../components/atoms/Buttons';
import {
  ButtonSize,
  ButtonVariant,
} from '../components/atoms/Buttons/MainButton/MainButton.types';

const variants: ButtonVariant[] = ['standard', 'light', 'destructive'];
const sizes: ButtonSize[] = ['small', 'medium'];

export const ButtonTable = () => (
    <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center'}}>Button Table</h2>
    <p style={{ textAlign: 'center', marginBottom: '2rem' }}>All button combinations</p>
  <table
    style={{
      borderCollapse: 'collapse',
      width: '100%',
      textAlign: 'center',
    }}
  >
    <thead>
      <tr>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Variant</th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Size</th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>
          Without Icon
        </th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>
          With Prefix Icon
        </th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>
          With Suffix Icon
        </th>
      </tr>
    </thead>
    <tbody>
      {variants.map((variant) =>
        sizes.map((size) => (
          <tr key={`${variant}-${size}`}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              {variant}
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{size}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <Button label="Button" variant={variant} size={size} />
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <Button
                label="Prefix"
                variant={variant}
                size={size}
                prefix={<Add />}
              />
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <Button
                label="Suffix"
                variant={variant}
                size={size}
                sufix={<Add />}
              />
            </td>
          </tr>
        )),
      )}
    </tbody>
  </table>
  </div>
);
