import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    glow: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: 600 }}>
          Glass Card
        </h2>
        <p style={{ margin: 0, opacity: 0.8 }}>
          A beautiful frosted glass container with soft depth shadows.
        </p>
      </div>
    ),
  },
};

export const WithGlow: Story = {
  args: {
    glow: true,
    children: (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: 600 }}>
          Glowing Card
        </h2>
        <p style={{ margin: 0, opacity: 0.8 }}>
          Same glass effect with an added glowing border.
        </p>
      </div>
    ),
  },
};

export const WithContent: Story = {
  args: {
    glow: true,
    children: (
      <div style={{ padding: '2rem', maxWidth: '400px' }}>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 600 }}>
          Feature Card
        </h2>
        <p style={{ margin: '0 0 1.5rem 0', opacity: 0.7, fontSize: '0.875rem' }}>
          Showcase your features with glassmorphism aesthetic
        </p>
        <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', opacity: 0.8 }}>
          <li>Frosted glass surface</li>
          <li>Glowing borders</li>
          <li>Soft depth shadows</li>
        </ul>
        <button style={{
          padding: '0.5rem 1rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '0.5rem',
          color: 'white',
          cursor: 'pointer',
        }}>
          Learn More
        </button>
      </div>
    ),
  },
};
