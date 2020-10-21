import React from 'react';
import './button.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Button({scroll, anchor, to, download, sm, primary, secondary, text}) {
    if (scroll) {
        return (
            <AnchorLink href="#contact" className="button-scroll">
                <div className="circle" />
            </AnchorLink>
        )
     }
     if (anchor) {
        return (
            <AnchorLink href={anchor} className={ `button ${sm ? 'small' : ''} ${primary ? 'primary' : 'secondary'}` }>
                { text }
            </AnchorLink>
        )
     }
     if (to) {
        return (
            <a href={to} className={ `button ${sm ? 'small' : ''} ${primary ? 'primary' : 'secondary'}` }>
                { text }
            </a>
        )
     }
     if (download) {
        return (
            <a href={download} download className={ `button download ${sm ? 'small' : ''} ${primary ? 'primary' : 'secondary'}` }>
                { text }
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cc0e74" width="36px" height="26px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/></svg>
            </a>
        )
     }
     return (
        <div className={ `button ${sm ? 'small' : ''} ${primary ? 'primary' : 'secondary'}` }>
            { text }
        </div>
     )
}

export default Button;