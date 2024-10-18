import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import NavItem from '../nav-item/NavItem';

export default {
    title: 'Components/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    args: {},
    render: () => (
        <Navbar brand={
            <h2><a href="#">Logo</a></h2>
        }>
            <NavItem><a href='#'>Docs</a></NavItem>
            <NavItem active={true}><a href="#">Guide</a></NavItem>
        </Navbar>
    )
};

export const NavbarWithSearch: Story = {
    args: {},
    render: () => (
        <Navbar brand={<h2><a href="#">Logo</a></h2>}
            hideSearch={false}>
            <NavItem><a href='#'>Docs</a></NavItem>
            <NavItem><a href="#">Guide</a></NavItem>
        </Navbar>
    )
};