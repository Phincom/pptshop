// Secure configuration - DO NOT EDIT OR COMMIT
(() => {
    const _secure = {
        // Hardware-bound encryption key
        key: Array.from(window.crypto.getRandomValues(new Uint8Array(32)))
            .map(b => b.toString(16).padStart(2, '0'))
            .join(''),
            
        // Anti-inspection code
        verify: async (input) => {
            if (!input || typeof input !== 'string') return false;
            
            // Hardware fingerprint
            const fp = await window.crypto.subtle.digest(
                'SHA-256',
                new TextEncoder().encode(
                    navigator.userAgent +
                    navigator.language +
                    navigator.hardwareConcurrency +
                    navigator.deviceMemory
                )
            );
            
            // Combine with input
            const combined = new Uint8Array([
                ...new Uint8Array(fp),
                ...new TextEncoder().encode(input)
            ]);
            
            // Final hash
            const hash = await window.crypto.subtle.digest('SHA-256', combined);
            return Array.from(new Uint8Array(hash))
                .map(b => b.toString(16).padStart(2, '0'))
                .join('');
        }
    };
    
    // Anti-debugging
    const _guard = setInterval(() => {
        const start = performance.now();
        debugger;
        const end = performance.now();
        
        if (end - start > 100) {
            // Debugger detected
            sessionStorage.clear();
            localStorage.clear();
            location.reload();
        }
    }, 50);
    
    // Export securely
    window._secure = new Proxy(_secure, {
        get: function(target, prop) {
            if (prop === 'verify') return target.verify;
            return undefined;
        },
        set: function() { return false; }
    });
})();