import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PaymentModal from './PaymentModal.jsx';

const meta = {
  title: 'Components/PaymentModal',
  component: PaymentModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    amount: { control: 'text' },
    title: { control: 'text' },
  },
} satisfies Meta<typeof PaymentModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    amount: '199',
    title: '订单支付',
  },
};

export const Success: Story = {
  args: {
    isOpen: true,
    amount: '2999',
    title: '定制服务支付',
  },
};
