import React from 'react';
import classes from '../NavigationItems/NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItemes = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>BurgerBuilder</NavigationItem>
        <NavigationItem link="/" >Checkout Page</NavigationItem>
    </ul>
);

export default navigationItemes;