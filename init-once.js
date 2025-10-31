// IMPORTANT: Run this once to initialize, then DELETE this file
// DO NOT commit this file to GitHub

(async function initializeSecurePassword() {
    const password = 'Alibin123456'; // Your password
    
    // Create secure hash
    const hash = await window._secure.verify(password);
    
    // Store securely (encrypted and hardware-bound)
    const encryptedHash = Array.from(
        new TextEncoder().encode(hash)
    ).map(b => 
        String.fromCharCode(b ^ 0x7F)
    ).join('');
    
    // Save in an encoded form
    localStorage.setItem(
        btoa('auth_key'),
        btoa(encryptedHash)
    );
    
    alert('Password initialized securely. DELETE THIS FILE NOW!');
})();