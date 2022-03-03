const alert = (function(){

    const Alert = () => {
        
        const alertType = {
            success: 'alert-success',
            warning: 'alert-warning',
        }

        let alertBox = document.getElementById('alert-box');
        if(!alertBox) {
            const parent = document.createElement('div');
            parent.id = "alert-box";
            parent.classList.add('alert', 'hide', alertType.warning);
            
            const exclamation = document.createElement('span');
            exclamation.classList.add('fas', 'fa-exclamation-circle');
    
            const msg = document.createElement('span');
            msg.classList.add('msg');
            msg.innerHTML = 'Warning: This is a warning alert!';
            
    
            const closeSpan = document.createElement('span');
            closeSpan.classList.add('fas', 'fa-times');
    
            const closeBtn = document.createElement('div');
            closeBtn.classList.add('close-btn');
            closeBtn.appendChild(closeSpan);
            closeBtn.addEventListener('click', () => {
                parent.classList.add('hide');
            });
    
            parent.append(exclamation, msg, closeBtn);

            
            document.body.appendChild(parent);
            alertBox = parent;
        } else {
            const closeButton = alertBox.querySelector('.close-btn');
            closeButton.addEventListener('click', () => {
                alertBox.classList.add('hide');
            });
        }

        const msgSpan = alertBox.querySelector('.msg');

        const show = () => {
            alertBox.classList.remove('hide');
            alertBox.classList.add('show');
        }
    
        const hide = () => {
            alertBox.classList.remove('show');
            alertBox.classList.add('hide');
        }
        
        const removeClass = (className) => {
            if(alertBox.classList.contains(className)) {
                alertBox.classList.remove(className);
            }
        }

        const addClass = (className) => {
            if(!alertBox.classList.contains(className)) {
                alertBox.classList.add(className);
            }
        }

        const success = (msg) => {
            removeClass(alertType.warning);
            addClass(alertType.success);   
            setMessage(msg);
        }

        const warning = (msg) => {
            removeClass(alertType.success);
            addClass(alertType.warning);
            setMessage(msg);
        }

        const toggle = () => {
            alertBox.classList.contains('show') ? hide() : show();
        }

        const setMessage = (msg) => {
        
            hide();
            
            if(msgSpan) {
                msgSpan.innerHTML = msg;

                show();
            //     const timeout = setTimeout(() => {
            //         hide();
            //         clearTimeout(timeout);
            //     }, (1000 * 5));
            // }
            }
        }
        
        const onClose = (callback) => {
            const closeButton = alertBox.querySelector('.close-btn');
            closeButton.addEventListener('click', () => {
                hide();
                callback();
            });
        }

        return {
            show,
            hide,
            onClose,
            success,
            warning,
            toggle
        }
    }

    return Alert();
})();
    