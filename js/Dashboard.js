

const modalScriptSource = './js/modal.js';
const hasModalScript = !!document.querySelector(`script[src="${modalScriptSource}"]`);

if(!hasModalScript) {
    const modalScript = document.createElement('script');
    modalScript.src = modalScriptSource;
    document.body.append(modalScript);
}