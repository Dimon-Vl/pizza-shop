import './modal.scss'

export default function Modal({ isOpen, onClose, children, className}) {
    if (!isOpen) return null

    return (
        <div className={`modal ${className ? ` ${className}__modal` : ''}`}>
            <div className={`modal__overlay ${className ? ` ${className}__modal--overlay` : ''}`} onClick={onClose}></div>
            <div className={`modal__content ${className ? ` ${className}__modal--content` : ''}`}>
                <button className={`modal__close ${className ? ` ${className}__modal--close` : ''}`} onClick={onClose}>×</button>
                {children}
            </div>
        </div>

    )
}


