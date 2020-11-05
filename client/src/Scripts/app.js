//IIFE - Immediately invoked function Expression
(() => {
    function Start()
    {
        console.log('App Started...');
    }
    
    window.addEventListener('load', Start);

})();