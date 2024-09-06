import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

export type TBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
    className?: string;
};

export const TBody: React.FC<TBodyProps> = ({ className, children }) => (
    <tbody className={cn(styles.tbody, className)}>
        {children}
    </tbody>
);