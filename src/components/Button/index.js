import React from 'react';
import './button.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Button({scroll, anchor, to, download, sm, primary, secondary, text}) {
    if (scroll) {
        return (
            <AnchorLink href="#contact" className="button-scroll">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#cc0e74" viewBox="0 0 491.996 491.996"><path d="M484.132 124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86-7.208 0-13.964 2.792-19.036 7.86l-183.84 183.848L62.056 108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968 2.788-19.036 7.856l-16.12 16.128c-10.496 10.488-10.496 27.572 0 38.06l219.136 219.924c5.064 5.064 11.812 8.632 19.084 8.632h.084c7.212 0 13.96-3.572 19.024-8.632l218.932-219.328c5.072-5.064 7.856-12.016 7.864-19.224 0-7.212-2.792-14.068-7.864-19.128z"/></svg>
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