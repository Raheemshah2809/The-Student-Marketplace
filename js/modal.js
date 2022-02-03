let modal = document.querySelector('.modal-window#open-modal');
const modalStyleSheetPath = './css/modal.css';
const hasModalStyling = !!document.head.querySelector(`link[href="${modalStyleSheetPath}"]`);

if (!modal) {
    const _modal = document.createElement('div');
    _modal.id = "open-modal";
    _modal.classList.add('modal-window', 'hidden');
    _modal.innerHTML = `<div class="modal-overlay"></div>
        <div class="modal-content">
            <a href="#" title="Close" class="modal-close">Close</a>
            <h1>Created By:</h1>
            <div>Raheem</div>
            <br>
            <div>Updates To The Site Will be Placed Here</div>
            <div>ChangeLog: 0.2.6<br>
            Added Chat Icon<br>
            Chat Functionality Coming 0.2.7 <br>
            Fixed Bugs <br>
            Added Online Indicators <br>
            QOL To Post Page <br>
            QOL To Upload Page <br>
            Fixed Sign Up Page <br>
            Fixed Sidebar Missing Logo and Online Indicators <br>
            </div>
            <br>
            </div>
        </div>`;


    document.body.prepend(_modal);
    modal = _modal;
}

if (!hasModalStyling) {
    const modalStyleSheet = document.createElement('link');
    modalStyleSheet.rel = "stylesheet";
    modalStyleSheet.href = modalStyleSheetPath;
    modalStyleSheet.onload = appendModal();
    document.head.append(modalStyleSheet);
} else {
    modalStyleSheet.onload = appendModal();
}

function appendModal() {
    if (modal) {
        const modalCloseButton = modal.querySelector('.modal-close');

        if (modalCloseButton) {
            modalCloseButton.addEventListener('click', () => {
                modal.classList.add('hidden');
            })
        }

        const modalOverlay = modal.querySelector('.modal-overlay');

        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => {
                modal.classList.add('hidden');
                // window.location.replace(`${window.location.origin}${window.location.pathname}#close-modal`);
            });
        }

        window.addEventListener('popstate', function (event) {
            // The URL changed...
            const hashes = window.location.hash;
            if (hashes) {
                let _hash = hashes.split('#');
                _hash.shift();
                _hash.forEach(hash => {
                    if (hash === "open-modal") {
                        modal.classList.remove('hidden');
                    }
                })
            }
        });


    }
}