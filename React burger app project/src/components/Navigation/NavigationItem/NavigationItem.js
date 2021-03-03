import React from 'react'
import classes from '../NavigationItem/NavigationItem.css'


const NavigationItem=(props)=>(
    <div >
        <li className={classes.NavigationItem}>
        <a  href={props.link} className={props.active ? classes.active: null}>
        {props.children}</a>
        </li>
    </div>
)

export default NavigationItem;

