import React from 'react';
import './props1.scss'
import { Link } from 'react-router-dom';

interface IElement {
    link: string;
    title: string;
    text: string;
}
export default function Props1 (props: IElement) {
    const { link, title, text } = props;

    return (
        <div className="Props1">
            <div className="image">
                <a href="https://nomus.familab.net/shop/"><img src={`${link}`}/></a>
            </div>
            <div className="text">
                <span>{title}</span>
                <p>{text}</p>
            </div>
        </div>
    );
}