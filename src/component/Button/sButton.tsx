import React from 'react';
import styles from './index.module.scss'
import cn from 'classnames';

type ButtonSize = "small" | "middle" | "large";
type ButtonType = "default" | "primary";
type DivInterface = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type DivHandler = keyof Pick<DivInterface, (
    "onClick" | "onMouseMove" | "onMouseOver" | "onMouseOut"
)>;
type ButtonAbility = boolean;
type ButtonProps<T extends ButtonAbility> = Partial<{
    disabled:   T;
    danger:     boolean;
    type:       ButtonType;
    size:       ButtonSize;
    style:      React.CSSProperties;
    children:   any;
}> & (
    T extends false ? (
        Pick<DivInterface, DivHandler> & Required<Pick<DivInterface, "onClick">>
    ) : {}
);
// const CF = <T extends string>(value: T) => value;

export const SButton = (<S extends ButtonAbility>(
    {type='default',  size='middle', danger, disabled, ...ButtonProps }: ButtonProps<S>
) => {
    return(
        <div className={cn( styles.Button,
                            styles[size],
                            {
                                [styles[type]]:!disabled,
                                [styles.disabled]:disabled,
                            },    
                            {
                                [styles.danger]:danger,
                                
                            }
                            )} {...ButtonProps}>
        </div>
    )
});