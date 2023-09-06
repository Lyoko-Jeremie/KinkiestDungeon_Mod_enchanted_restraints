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
                        }
                }
        });
    gmc.open();
})().catch(E => {
    console.error(E);
});
