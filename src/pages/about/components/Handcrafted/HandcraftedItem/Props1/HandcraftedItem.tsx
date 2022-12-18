import React from 'react';
import './HandcraftedItem.scss'
import { Link } from 'react-router-dom';

interface IElement {
    link: string;
    title: string;
    text: string;
}
export default function HandcraftedItem (props: IElement) {
    const { link, title, text } = props;

    return (
        <div className="Props1">
            <div className="image">
                <Link to={'/shop'}>
                    <img src={`${link}`}/>
                </Link>
            </div>
            <div className="text">
                <span>{title}</span>
                <p>{text}</p>
            </div>
        </div>
    );
}