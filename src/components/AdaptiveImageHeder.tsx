import React from 'react';

type Props = {
    sources:Sources[]
    defaultSrc: string
    alt:string
}

type Sources = {
    srcSet:string
    media:string
}

export const AdaptiveImage = (props: Props) => {
    const {sources, defaultSrc, alt} = props
    return (
        <picture>
            {sources.map((source, index) => (
                <source key={index} srcSet={source.srcSet} media={source.media}/>
            ))}
            <img src={defaultSrc} alt={alt} style={{width: '100%', height: 'auto'}}/>
        </picture>
    );
};
