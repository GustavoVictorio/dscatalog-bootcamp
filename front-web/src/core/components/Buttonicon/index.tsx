import React from 'react';
import './styles.scss';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <div className="d-inline-flex">
        <button className="btn-primary btn-icon">
            <h5>{text}</h5>
        </button>
        <div className="btn-icon-content">
            <ArrowIcon />
        </div>
    </div>
);

export default ButtonIcon;