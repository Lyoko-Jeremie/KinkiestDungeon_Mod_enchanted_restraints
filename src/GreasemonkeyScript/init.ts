import {GM_config} from './gm_config';
import {EnchantedRestraintsPatch} from '../initMod';

(async () => {
    let gmc = new GM_config(
        {
            'id': 'MyConfig', // The id used for this instance of GM_config
            'title': 'Script Settings', // Panel Title
            'fields': // Fields object
                {
                    'Name': // This is the id of the field
                        {
                            'label': 'Name', // Appears next to field
                            'type': 'text', // Makes this setting a text field
                            'default': 'Sizzle McTwizzle' // Default value if user doesn't change it
                        },
                    'install_EnchantedRestraintsPatch': {
                        label: 'install EnchantedRestraintsPatch',
                        type: 'button',
                        click() {
                            EnchantedRestraintsPatch();
                        },
                    },
                },
        });
    window.addEventListener('keydown', (event) => {
        console.log('keydown', event);
        if (event.shiftKey && (event.key === 'Q' || event.key === 'q')) {
            if (gmc.isOpen) {
                gmc.close();
            } else {
                gmc.open();
            }
        }
    });
})().catch(E => {
    console.error(E);
});
