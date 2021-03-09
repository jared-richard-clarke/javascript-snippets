// === Modeled after a design pattern by Douglas Crockford ===

function secure_object() {
    // This function returns an object with two public methods. 
    // Its weakmap is kept private and in memory through closure.
    const weakmap = new WeakMap();
    return {
        // lock() inputs any value that can be stored as a property
        // and outputs a key. This key is an immutable, empty object.
        // All objects hold a unique slot in memory.
        lock( object ) {
            const key = Object.freeze( Object.create( null ) );
            weakmap.set( key, object );
            return key;
        },
        // unlock() inputs key to output stored value.
        unlock( key ) {
            return weakmap.get( key );
        }
    };
}

// Instantiate a secure object.
const treasure_chest = secure_object();
// These are my treasures. Don't touch!
const secret_stash = {
    rubies: 7,
    emeralds: 11,
    waffles: "never enough"
};
// Lock value in secure object. Return unique key.
const secret_key = treasure_chest.lock( secret_stash );
// Object can only be accessed by key.
const pilfered_stash = treasure_chest.unlock( secret_key );
