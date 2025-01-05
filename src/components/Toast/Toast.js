import React from 'react';
import { ToastContext } from '../ToastProvider';

import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};


function Toast({ children, variant, id }) {
	const Icon = ICONS_BY_VARIANT[variant];
	const { toastList, setToastList } = React.useContext(ToastContext);

	const dismissToast = (id) => {
		const newToastList = toastList.filter((toast) => toast.id !== id);
		setToastList(newToastList);
	};


	return (
		<div className={ `${ styles.toast } ${ styles[variant] }` }>
			<div className={ styles.iconContainer }>
				<Icon size={ 24 } aria-hidden="true"/>
			</div>
			<p className={ styles.content }>
				<VisuallyHidden>
					{ variant }
				</VisuallyHidden>
				{ children }
			</p>
			<button
				className={ styles.closeButton }
				type="button"
				onClick={ () => dismissToast(id) }
				aria-label="Dismiss message"
				aria-live="off">
				<X size={ 24 } />
			</button>
		</div>
	);
}

export default Toast;
