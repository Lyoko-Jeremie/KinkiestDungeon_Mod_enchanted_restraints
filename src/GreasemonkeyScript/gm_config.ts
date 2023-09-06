// from https://github.com/sizzlemctwizzle/GM_config
// translate js code to ts code, by Jeremie
// at https://github.com/sizzlemctwizzle/GM_config/commit/06f2015c04db3aaab9717298394ca4f025802873
// 06f2015c04db3aaab9717298394ca4f025802873

/*
I want to use typescript + webpack to write GM script, and pack the GM_config into project to keep script can always run offline,
 but the `.d.ts` defined and `js` impl seems like not work well with webpack.

so I translate the code to pure typescript in [there](https://gist.github.com/Lyoko-Jeremie/3e7d97a5c2eb14d1bc0bb53ae76a4446) ,
hope it can help someone like me.
*/

/*
Copyright 2009+, GM_config Contributors (https://github.com/sizzlemctwizzle/GM_config)

GM_config Collaborators/Contributors:
    Mike Medley <medleymind@gmail.com>
    Joe Simmons
    Izzy Soft
    Marti Martz
    Adam Thompson-Sharpe

GM_config is distributed under the terms of the GNU Lesser General Public License.

    GM_config is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// ==UserScript==
// @exclude       *
// @author        Mike Medley <medleymind@gmail.com> (https://github.com/sizzlemctwizzle/GM_config)
// @icon          https://raw.githubusercontent.com/sizzlemctwizzle/GM_config/master/gm_config_icon_large.png

// ==UserLibrary==
// @name          GM_config
// @description   A lightweight, reusable, cross-browser graphical settings framework for inclusion in user scripts.
// @copyright     2009+, Mike Medley (https://github.com/sizzlemctwizzle)
// @license       LGPL-3.0-or-later; https://raw.githubusercontent.com/sizzlemctwizzle/GM_config/master/LICENSE

// @homepageURL   https://openuserjs.org/libs/sizzle/GM_config
// @homepageURL   https://github.com/sizzlemctwizzle/GM_config
// @supportURL    https://github.com/sizzlemctwizzle/GM_config/issues

// ==/UserScript==

// ==/UserLibrary==


export type FieldValue = string | number | boolean;
/** Valid types for Field `type` property */
export type FieldTypes =
    | 'text'
    | 'textarea'
    | 'button'
    | 'radio'
    | 'select'
    | 'checkbox'
    | 'unsigned int'
    | 'unsinged integer'
    | 'int'
    | 'integer'
    | 'float'
    | 'number'
    | 'hidden';

/** Init options where no custom types are defined */
export interface InitOptionsNoCustom {
    /** Used for this instance of GM_config */
    id: string;
    /** Label the opened config window */
    title?: string | HTMLElement;
    fields: Record<string, Field>;
    /** Optional styling to apply to the menu */
    css?: string;
    /** Element to use for the config panel */
    frame?: HTMLIFrameElement;

    /** Handlers for different events */
    events?: {
        init?: GM_configStruct['onInit'];
        open?: GM_configStruct['onOpen'];
        save?: GM_configStruct['onSave'];
        close?: GM_configStruct['onClose'];
        reset?: GM_configStruct['onReset'];
    };
}

/** Init options where custom types are defined */
export interface InitOptionsCustom<CustomTypes extends string> extends Omit<InitOptionsNoCustom, 'fields'> {
    fields: Record<string, Field<CustomTypes>>;
    /** Custom fields */
    types: { [type in CustomTypes]: CustomType };
}

/** Init options where the types key is only required if custom types are used */
export type InitOptions<CustomTypes extends string> = InitOptionsNoCustom | InitOptionsCustom<CustomTypes>;

export interface Field<CustomTypes extends string = never> {
    [key: string]: any;

    /** Display label for the field */
    label?: string | HTMLElement;
    /** Type of input */
    type: FieldTypes | CustomTypes;
    /** Text to show on hover */
    title?: string;
    /** Default value for field */
    default?: FieldValue;
    save?: boolean;
}

export interface CustomType {
    default?: FieldValue | null;
    toNode?: GM_configField['toNode'];
    toValue?: GM_configField['toValue'];
    reset?: GM_configField['reset'];
}

/* GM_configStruct and related */

// /** Initialize a GM_configStruct */
// export function GM_configInit<CustomTypes extends string>(
//     config: GM_configStruct<CustomTypes>,
//     // tslint:disable-next-line:no-unnecessary-generics
//     options: InitOptions<CustomTypes>,
// ): void;
//
// export function GM_configDefaultValue(type: FieldTypes): FieldValue;


/** Create multiple GM_config instances */
export class GM_configStruct<CustomTypes extends string = never> {
    constructor(options: InitOptions<CustomTypes>) {
        this.init(options)
    }

    /** Initialize GM_config */
    // tslint:disable-next-line:no-unnecessary-generics
    init<CustomTypes extends string>(options: InitOptions<CustomTypes>): void {
        // Initialize instance variables
        if (typeof this.fields == "undefined") {
            this.fields = {};
            this.onInit = this.onInit || function () {
            };
            this.onOpen = this.onOpen || function () {
            };
            this.onSave = this.onSave || function () {
            };
            this.onClose = this.onClose || function () {
            };
            this.onReset = this.onReset || function () {
            };
            this.isOpen = false;
            this.title = 'User Script Settings';
            this.css = {
                basic: ([
                    "#GM_config * { font-family: arial,tahoma,myriad pro,sans-serif; }",
                    "#GM_config { background: #FFF; }",
                    "#GM_config input[type='radio'] { margin-right: 8px; }",
                    "#GM_config .indent40 { margin-left: 40%; }",
                    "#GM_config .field_label { font-size: 12px; font-weight: bold; margin-right: 6px; }",
                    "#GM_config .radio_label { font-size: 12px; }",
                    "#GM_config .block { display: block; }",
                    "#GM_config .saveclose_buttons { margin: 16px 10px 10px; padding: 2px 12px; }",
                    "#GM_config .reset, #GM_config .reset a," +
                    " #GM_config_buttons_holder { color: #000; text-align: right; }",
                    "#GM_config .config_header { font-size: 20pt; margin: 0; }",
                    "#GM_config .config_desc, #GM_config .section_desc, #GM_config .reset { font-size: 9pt; }",
                    "#GM_config .center { text-align: center; }",
                    "#GM_config .section_header_holder { margin-top: 8px; }",
                    "#GM_config .config_var { margin: 0 0 4px; }",
                    "#GM_config .section_header { background: #414141; border: 1px solid #000; color: #FFF;",
                    " font-size: 13pt; margin: 0; }",
                    "#GM_config .section_desc { background: #EFEFEF; border: 1px solid #CCC; color: #575757;" +
                    " font-size: 9pt; margin: 0 0 6px; }"
                ].join('\n') + '\n'),
                basicPrefix: "GM_config",
                stylish: ""
            };
        }
        this.frameStyle = [
            'bottom: auto; border: 1px solid #000; display: none; height: 75%;',
            'left: 0; margin: 0; max-height: 95%; max-width: 95%; opacity: 0;',
            'overflow: auto; padding: 0; position: fixed; right: auto; top: 0;',
            'width: 75%; z-index: 9999;'
        ].join(' ');

        var settings: InitOptions<CustomTypes>;
        if (arguments.length == 1 &&
            typeof arguments[0].id == "string" &&
            typeof arguments[0].appendChild != "function") {
            settings = arguments[0];
        } else {
            // Provide backwards-compatibility with argument style intialization
            settings = {} as InitOptions<CustomTypes>;

            // loop through GM_config.init() arguments
            for (let i = 0, l = arguments.length, arg; i < l; ++i) {
                arg = arguments[i];

                // An element to use as the config window
                if (typeof arg.appendChild == "function") {
                    settings.frame = arg;
                    continue;
                }

                switch (typeof arg) {
                    case 'object':
                        for (let j in arg) { // could be a callback functions or settings object
                            if (typeof arg[j] != "function") { // we are in the settings object
                                settings.fields = arg; // store settings object
                                break; // leave the loop
                            } // otherwise it must be a callback function
                            if (!settings.events) settings.events = {};
                            (settings.events as any)[j] = arg[j];
                        }
                        break;
                    case 'function': // passing a bare function is set to open callback
                        settings.events = {onOpen: arg} as any;
                        break;
                    case 'string': // could be custom CSS or the title string
                        if (/\w+\s*\{\s*\w+\s*:\s*\w+[\s|\S]*\}/.test(arg))
                            settings.css = arg;
                        else
                            settings.title = arg;
                        break;
                }
            }
        }

        /* Initialize everything using the new settings object */
        // Set the id
        if (settings.id) this.id = settings.id;
        else if (typeof this.id == "undefined") this.id = 'GM_config';

        // Set the title
        if (settings.title) this.title = settings.title;

        // Set the custom css
        if (settings.css) this.css.stylish = settings.css;

        // Set the frame
        if (settings.frame) this.frame = settings.frame;

        // Set the style attribute of the frame
        if (typeof (settings as any).frameStyle === 'string') this.frameStyle = (settings as any).frameStyle;

        // Set the event callbacks
        if (settings.events) {
            let events = settings.events;
            for (let e in events) {
                (this as any)["on" + e.charAt(0).toUpperCase() + e.slice(1)] = (events as any)[e];
            }
        }

        // If the id has changed we must modify the default style
        if (this.id != this.css.basicPrefix) {
            this.css.basic = this.css.basic.replace(
                new RegExp('#' + this.css.basicPrefix, 'gm'), '#' + this.id);
            this.css.basicPrefix = this.id;
        }

        // Create the fields
        this.isInit = false;
        if (settings.fields) {
            this.read(undefined, (stored: any) => { // read the stored settings
                let fields = settings.fields,
                    customTypes = (settings as any).types || {},
                    configId = this.id;

                for (let id in fields) {
                    let field = fields[id],
                        fieldExists = false;

                    if (this.fields[id]) {
                        fieldExists = true;
                    }

                    // for each field definition create a field object
                    if (field) {
                        if (this.isOpen && fieldExists) {
                            this.fields[id].remove();
                        }

                        this.fields[id] = new GM_configField(field as any, stored[id], id,
                            customTypes[field.type], configId);

                        // Add field to open frame
                        if (this.isOpen) {
                            this.fields[id].wrapper = this.fields[id].toNode();
                            this.frameSection!.appendChild(this.fields[id].wrapper!);
                        }
                    } else if (!field && fieldExists) {
                        // Remove field from open frame
                        if (this.isOpen) {
                            this.fields[id].remove();
                        }

                        delete this.fields[id];
                    }
                }

                this.isInit = true;
                this.onInit && this.onInit.call(this);
            });
        } else {
            this.isInit = true;
            this.onInit && this.onInit.call(this);
        }


        if (!this.isGM4) {
            let promisify = <R>(old: (...args: any[]) => R) => {
                return (...args: any[]) => {
                    return new Promise((resolve, reject) => {
                        try {
                            resolve(old.apply(this, args));
                        } catch (e) {
                            reject(e);
                        }
                    });
                };
            };

            let getValue = this.isGM ? GM_getValue
                : <TValue>(name: string, defaultValue?: TValue) => {
                    let s = localStorage.getItem(name);
                    return s !== null ? s : defaultValue;
                };
            let setValue = this.isGM ? GM_setValue
                : (name: string, value: any) => localStorage.setItem(name, value);
            let log = typeof GM_log !== 'undefined' ? GM_log : console.log;

            (GM as any).getValue = promisify(getValue);
            (GM as any).setValue = promisify(setValue);
            (GM as any).log = promisify(log);
        }
    }

    /** Display the config panel */
    open(): void {
        // don't open before init is finished
        if (!this.isInit) {
            setTimeout(() => this.open(), 0);
            return;
        }
        // Die if the menu is already open on this page
        // You can have multiple instances but you can't open the same instance twice
        let match = document.getElementById(this.id);
        if (match && (match.tagName == "IFRAME" || match.childNodes.length > 0)) return;

        // Sometimes "this" gets overwritten so create an alias

        // Function to build the mighty config window :)
        const buildConfigWin = (body: HTMLElement, head: HTMLElement) => {
            let create = GM_configStruct.create,
                fields = this.fields,
                configId = this.id,
                bodyWrapper = create('div', {id: configId + '_wrapper'});

            // Append the style which is our default style plus the user style
            head.appendChild(
                create('style', {
                    type: 'text/css',
                    textContent: this.css.basic + this.css.stylish
                }));

            // Add header and title
            bodyWrapper.appendChild(create('div', {
                id: configId + '_header',
                className: 'config_header block center'
            }, this.title));

            // Append elements
            let section = bodyWrapper,
                secNum = 0; // Section count

            // loop through fields
            for (let id in fields) {
                let field = fields[id],
                    settings = field.settings;

                if (settings.section) { // the start of a new section
                    section = bodyWrapper.appendChild(create('div', {
                        className: 'section_header_holder',
                        id: configId + '_section_' + secNum
                    }));

                    if (!Array.isArray(settings.section))
                        settings.section = [settings.section];

                    if (settings.section[0])
                        section.appendChild(create('div', {
                            className: 'section_header center',
                            id: configId + '_section_header_' + secNum
                        }, settings.section[0]));

                    if (settings.section[1])
                        section.appendChild(create('p', {
                            className: 'section_desc center',
                            id: configId + '_section_desc_' + secNum
                        }, settings.section[1]));
                    ++secNum;
                }

                if (secNum === 0) {
                    section = bodyWrapper.appendChild(create('div', {
                        className: 'section_header_holder',
                        id: configId + '_section_' + (secNum++)
                    }));
                }

                // Create field elements and append to current section
                section.appendChild((field.wrapper = field.toNode()));
            }

            this.frameSection = section;

            // Add save and close buttons
            bodyWrapper.appendChild(create('div',
                {id: configId + '_buttons_holder'},

                create('button', {
                    id: configId + '_saveBtn',
                    textContent: 'Save',
                    title: 'Save settings',
                    className: 'saveclose_buttons',
                    onclick: () => {
                        this.save();
                    }
                }),

                create('button', {
                    id: configId + '_closeBtn',
                    textContent: 'Close',
                    title: 'Close window',
                    className: 'saveclose_buttons',
                    onclick: () => {
                        this.close();
                    }
                }),

                create('div',
                    {className: 'reset_holder block'},

                    // Reset link
                    create('a', {
                        id: configId + '_resetLink',
                        textContent: 'Reset to defaults',
                        href: '#',
                        title: 'Reset fields to default values',
                        className: 'reset',
                        onclick: (e: Event) => {
                            e.preventDefault();
                            this.reset();
                        }
                    })
                )));

            body.appendChild(bodyWrapper); // Paint everything to window at once
            this.center(); // Show and center iframe
            window.addEventListener('resize', this.center, false); // Center frame on resize

            // Call the open() callback function
            this.onOpen && this.onOpen(this.frame!.contentDocument || this.frame!.ownerDocument,
                this.frame!.contentWindow || window,
                this.frame!);

            // Close frame on window close
            window.addEventListener('beforeunload', () => {
                this.close();
            }, false);

            // Now that everything is loaded, make it visible
            this.frame!.style.display = "block";
            this.isOpen = true;
        }

        // Either use the element passed to init() or create an iframe
        if (this.frame) {
            this.frame.id = this.id; // Allows for prefixing styles with the config id
            if (this.frameStyle) this.frame.setAttribute('style', this.frameStyle);
            buildConfigWin(this.frame, this.frame.ownerDocument.getElementsByTagName('head')[0]);
        } else {
            // Create frame
            this.frame = GM_configStruct.create('iframe', {id: this.id}) as HTMLIFrameElement;
            if (this.frameStyle) this.frame.setAttribute('style', this.frameStyle);
            document.body.appendChild(this.frame);

            // In WebKit src can't be set until it is added to the page
            this.frame.src = '';
            // we wait for the iframe to load before we can modify it
            let that = this;
            this.frame.addEventListener('load', (e) => {
                let frame = this.frame;
                if (!frame!.contentDocument) {
                    that.log("GM_config failed to initialize default settings dialog node!");
                } else {
                    let body = frame!.contentDocument.getElementsByTagName('body')[0];
                    body.id = this.id; // Allows for prefixing styles with the config id
                    buildConfigWin(body, frame!.contentDocument.getElementsByTagName('head')[0]);
                }
            }, false);
        }
    }

    /** Close the config panel */
    close(): void {
        // If frame is an iframe then remove it
        if (this.frame && this.frame.contentDocument) {
            GM_configStruct.remove(this.frame);
            this.frame = undefined;
        } else if (this.frame) { // else wipe its content
            this.frame.innerHTML = "";
            this.frame.style.display = "none";
        }

        // Null out all the fields so we don't leak memory
        let fields = this.fields;
        for (let id in fields) {
            let field = fields[id];
            field.wrapper = null;
            field.node = null;
        }

        this.onClose && this.onClose(); //  Call the close() callback function
        this.isOpen = false;
    }

    /** Directly set the value of a field */
    set(fieldId: string, value: FieldValue): void {
        this.fields[fieldId].value = value;

        if (this.fields[fieldId].node) {
            this.fields[fieldId].reload();
        }
    }

    /**
     * Get a config value
     * @param getLive If true, runs `field.toValue()` instead of just getting `field.value`
     */
    get(fieldId: string, getLive?: boolean): FieldValue {
        /* Migration warning */
        if (!this.isInit) {
            this.log('GM_config: get called before init, see https://github.com/sizzlemctwizzle/GM_config/issues/113');
        }

        let field = this.fields[fieldId],
            fieldVal = null;

        if (getLive && field.node) {
            fieldVal = field.toValue();
        }

        return fieldVal != null ? fieldVal : field.value;
    }

    reset() {
        let fields = this.fields;

        // Reset all the fields
        for (let id in fields) {
            fields[id].reset();
        }

        this.onReset && this.onReset(); // Call the reset() callback function
    }

    /** Save the current values */
    save(): void {
        this.write(undefined, undefined, (vals) => this.onSave && this.onSave(vals));
    }

    read(store?: string, cb?: (r: any) => any): any {
        (async () => {
            let val = await this.getValue(store || this.id, '{}');
            try {
                let rval = this.parser(val as string);
                cb && cb(rval);
            } catch (e) {
                this.log("GM_config failed to read saved settings!");
                cb && cb({});
            }
        })();
    }

    write(store?: string, obj?: any, cb?: (forgotten: any) => any): any {
        let forgotten: any = {};
        let values: any = {};
        if (!obj) {
            let fields = this.fields;

            for (let id in fields) {
                let field = fields[id];
                let value = field.toValue();

                if (field.save) {
                    if (value != null) {
                        values[id] = value;
                        field.value = value;
                    } else
                        values[id] = field.value;
                } else
                    forgotten[id] = value != null ? value : field.value;
            }
        }

        (async () => {
            try {
                let val = this.stringify(obj || values);
                await this.setValue(store || this.id, val);
            } catch (e) {
                this.log("GM_config failed to save settings!");
            }
            cb && cb(forgotten);
        })();
    }

    /**
     *
     * @param args If only one arg is passed, argument is passed to `document.createTextNode`.
     * With any other amount, args[0] is passed to `document.createElement` and the second arg
     * has something to do with event listeners?
     *
     * @todo Improve types based on
     * <https://github.com/sizzlemctwizzle/GM_config/blob/43fd0fe4/gm_config.js#L444-L455>
     */
    static create(text: string): Text;
    static create(tagName: string, eventListeners: { [key: string]: any }): HTMLElement;
    static create(tagName: string, eventListeners: { [key: string]: any }, ...innerHTML: (string | HTMLElement)[]): HTMLElement;
    static create(...args: any[]): any {
        let A: HTMLElement | Text;
        let B: { [key: string]: string };
        switch (args.length) {
            case 1:
                A = document.createTextNode(args[0]);
                break;
            default:
                A = document.createElement(args[0] as string);
                B = args[1];
                for (let b in B) {
                    if (b.indexOf("on") == 0)
                        A.addEventListener(b.substring(2), (B as any)[b], false);
                    else if (",style,accesskey,id,name,src,href,which,for".indexOf("," +
                        b.toLowerCase()) != -1)
                        A.setAttribute(b, (B as any)[b]);
                    else
                        (B as any)[b] = (B as any)[b];
                }
                if (typeof args[2] == "string")
                    A.innerHTML = args[2];
                else
                    for (let i = 2, len = args.length; i < len; ++i)
                        A.appendChild(args[i]);
        }
        return A;
    }

    center(): void {
        let node = this.frame;
        if (!node) return;
        let style = node.style,
            beforeOpacity = style.opacity;
        if (style.display == 'none') style.opacity = '0';
        style.display = '';
        style.top = Math.floor((window.innerHeight / 2) - (node.offsetHeight / 2)) + 'px';
        style.left = Math.floor((window.innerWidth / 2) - (node.offsetWidth / 2)) + 'px';
        style.opacity = '1';
    }

    static remove(el?: HTMLElement | null): void {
        if (el && el.parentNode) el.parentNode.removeChild(el);
    }

    /* Computed */

    /** Whether GreaseMonkey functions are present */
    isGM4 = typeof GM.getValue !== 'undefined' &&
        typeof GM.setValue !== 'undefined';
    isGM = this.isGM4 || (typeof GM_getValue !== 'undefined' &&
        typeof GM_getValue('a', 'b') !== 'undefined');

    /**
     * Either calls `localStorage.setItem` or `GM_setValue`.
     * Shouldn't be directly called
     */
    setValue!: (name: string, value: FieldValue) => Promise<void> | void;

    /**
     * Get a value. Shouldn't be directly called
     *
     * @param name The name of the value
     * @param def The default to return if the value is not defined.
     * Only for localStorage fallback
     */
    getValue!: (name: string, def: FieldValue) => Promise<FieldValue>;

    /** Converts a JSON object to a string */
    stringify: (obj: any) => string = JSON.stringify

    /**
     * Converts a string to a JSON object
     * @returns `undefined` if the string was an invalid object,
     * otherwise returns the parsed object
     */
    parser: (jsonString: string) => any = JSON.parse;

    /** Log a string with multiple fallbacks */
    log: (...message: any[]) => Promise<void> | void = GM.log || console.log;

    /* Created from GM_configInit */
    id!: string;
    title!: string | HTMLElement;
    css!: {
        basic: string;
        basicPrefix: string;
        stylish: string;
    };
    fields!: Record<string, GM_configField>;
    frame?: HTMLIFrameElement;
    onInit?: (this: GM_configStruct) => void;
    onOpen?: (this: GM_configStruct, document: Document, window: Window, frame: HTMLElement) => void;
    onSave?: (this: GM_configStruct, values: any) => void;
    onClose?: (this: GM_configStruct) => void;
    onReset?: (this: GM_configStruct) => void;
    isOpen: boolean = false;

    private isInit = false;
    private frameStyle!: string;
    private name: string = 'GM_config';
    private frameSection?: HTMLElement;
}

export let GM_config = GM_configStruct;

export class GM_configField {
    constructor(
        settings: Field,
        stored: FieldValue | undefined,
        id: string,
        customType: CustomType | undefined,
        configId: string,
    ) {
        // Store the field's settings
        this.settings = settings;
        this.id = id;
        this.configId = configId;
        this.node = null;
        this.wrapper = null;
        this.save = typeof settings.save == "undefined" ? true : settings.save;

        // Buttons are static and don't have a stored value
        if (settings.type == "button") this.save = false;

        // if a default value wasn't passed through init() then
        //   if the type is custom use its default value
        //   else use default value for type
        // else use the default value passed through init()
        this['default'] = typeof settings['default'] == "undefined" ?
            customType ?
                customType['default']
                : this.defaultValue(settings.type, settings.options)
            : settings['default'];

        // Store the field's value
        this.value = typeof stored == "undefined" ? this['default'] : stored;

        // Setup methods for a custom type
        if (customType) {
            this.toNode = customType.toNode || this.toNode;
            this.toValue = customType.toValue || this.toValue;
            this.reset = customType.reset || this.reset;
        }
    }

    [key: string]: any;

    settings: Field;
    id: string;
    configId: string;
    node: HTMLElement | null;
    wrapper: HTMLElement | null;
    save: boolean;
    /** The stored value */
    value: FieldValue;
    default: FieldValue;

    create: (typeof GM_configStruct)['create'] = GM_config.create;

    toNode: (this: GM_configField, configId?: string) => HTMLElement = () => {
        let field = this.settings,
            value = this.value,
            options = field.options,
            type = field.type,
            id = this.id,
            configId = this.configId,
            labelPos = field.labelPos,
            create = this.create;

        function addLabel(pos: string, labelEl: HTMLElement, parentNode: HTMLElement, beforeEl?: HTMLElement) {
            if (!beforeEl) beforeEl = parentNode.firstChild! as HTMLElement;
            switch (pos) {
                case 'right':
                case 'below':
                    if (pos == 'below')
                        parentNode.appendChild(create('br', {}));
                    parentNode.appendChild(labelEl);
                    break;
                default:
                    if (pos == 'above')
                        parentNode.insertBefore(create('br', {}), beforeEl);
                    parentNode.insertBefore(labelEl, beforeEl);
            }
        }

        let retNode = create('div', {
                className: 'config_var',
                id: configId + '_' + id + '_var',
                title: field.title || ''
            }),
            firstProp;

        // Retrieve the first prop
        for (let i in field) {
            firstProp = i;
            break;
        }

        let label = field.label && type != "button" ?
            create('label', {
                id: configId + '_' + id + '_field_label',
                for: configId + '_field_' + id,
                className: 'field_label'
            }, field.label) : null;

        let wrap = null;
        switch (type) {
            case 'textarea':
                retNode.appendChild((this.node = create('textarea', {
                    innerHTML: value,
                    id: configId + '_field_' + id,
                    className: 'block',
                    cols: (field.cols ? field.cols : 20),
                    rows: (field.rows ? field.rows : 2)
                })));
                break;
            case 'radio':
                wrap = create('div', {
                    id: configId + '_field_' + id
                });
                this.node = wrap;

                for (let i = 0, len = options.length; i < len; ++i) {
                    let radLabel = create('label', {
                        className: 'radio_label'
                    }, options[i]);

                    let rad = wrap.appendChild(create('input', {
                        value: options[i],
                        type: 'radio',
                        name: id,
                        checked: options[i] == value
                    }));

                    let radLabelPos = labelPos &&
                    (labelPos == 'left' || labelPos == 'right') ?
                        labelPos : firstProp == 'options' ? 'left' : 'right';

                    addLabel(radLabelPos, radLabel, wrap, rad);
                }

                retNode.appendChild(wrap);
                break;
            case 'select':
                wrap = create('select', {
                    id: configId + '_field_' + id
                });
                this.node = wrap;

                for (let i = 0, len = options.length; i < len; ++i) {
                    let option = options[i];
                    wrap.appendChild(create('option', {
                        value: option,
                        selected: option == value
                    }, option));
                }

                retNode.appendChild(wrap);
                break;
            default: // fields using input elements
                let props = {
                    id: configId + '_field_' + id,
                    type: type,
                    value: type == 'button' ? field.label : value
                };

                switch (type) {
                    case 'checkbox':
                        (props as HTMLInputElement).checked = value as boolean;
                        break;
                    case 'button':
                        (props as HTMLInputElement).size = field.size ? field.size : 25;
                        if (field.script) field.click = field.script;
                        if (field.click) (props as HTMLInputElement).onclick = field.click;
                        break;
                    case 'hidden':
                        break;
                    default:
                        // type = text, int, or float
                        props.type = 'text';
                        (props as HTMLInputElement).size = field.size ? field.size : 25;
                }

                retNode.appendChild((this.node = create('input', props)));
        }

        if (label) {
            // If the label is passed first, insert it before the field
            // else insert it after
            if (!labelPos)
                labelPos = firstProp == "label" || type == "radio" ?
                    "left" : "right";

            addLabel(labelPos, label, retNode);
        }

        return retNode;
    };

    /** Get value from field */
    toValue: (this: GM_configField) => FieldValue | null = () => {
        let node = this.node,
            field = this.settings,
            type = field.type,
            unsigned = false,
            rval = null;

        if (!node) return rval;

        if (type.indexOf('unsigned ') == 0) {
            type = type.substring(9) as any;
            unsigned = true;
        }

        switch (type) {
            case 'checkbox':
                rval = (node as HTMLInputElement).checked;
                break;
            case 'select':
                rval = ((node as HTMLSelectElement)[(node as HTMLSelectElement).selectedIndex] as any).value;
                break;
            case 'radio':
                let radios = node.getElementsByTagName('input');
                for (let i = 0, len = radios.length; i < len; ++i) {
                    if (radios[i].checked)
                        rval = radios[i].value;
                }
                break;
            case 'button':
                break;
            case 'int':
            case 'integer':
            case 'float':
            case 'number':
                let num = Number((node as HTMLInputElement).value);
                let warn = 'Field labeled "' + field.label + '" expects a' +
                    (unsigned ? ' positive ' : 'n ') + 'integer value';

                if (isNaN(num) || (type.substr(0, 3) == 'int' &&
                        Math.ceil(num) != Math.floor(num)) ||
                    (unsigned && num < 0)) {
                    alert(warn + '.');
                    return null;
                }

                if (!this._checkNumberRange(num, warn))
                    return null;
                rval = num;
                break;
            default:
                rval = (node as any).value;
                break;
        }

        return rval; // value read successfully
    };

    reset: (this: GM_configField) => void = () => {
        let node = this.node,
            field = this.settings,
            type = field.type;

        if (!node) return;

        switch (type) {
            case 'checkbox':
                (node as HTMLInputElement).checked = this['default'] as boolean;
                break;
            case 'select':
                for (let i = 0, len = (node as HTMLSelectElement).options.length; i < len; ++i) {
                    if ((node as HTMLSelectElement).options[i].textContent == this['default'])
                        (node as HTMLSelectElement).selectedIndex = i;
                }
                break;
            case 'radio':
                let radios = node.getElementsByTagName('input');
                for (let i = 0, len = radios.length; i < len; ++i) {
                    if (radios[i].value == this['default'])
                        radios[i].checked = true;
                }
                break;
            case 'button' :
                break;
            default:
                (node as any).value = this['default'];
                break;
        }
    };

    remove: (el?: HTMLElement) => void = () => {
        GM_config.remove(this.wrapper);
        this.wrapper = null;
        this.node = null;
    };

    reload: () => void = () => {
        let wrapper = this.wrapper;
        if (wrapper) {
            let fieldParent = wrapper.parentNode!;
            let newWrapper = this.toNode();
            fieldParent.insertBefore(newWrapper, wrapper);
            GM_config.remove(this.wrapper);
            this.wrapper = newWrapper;
        }
    };

    _checkNumberRange: (num: number, warn: string) => true | null = (num, warn) => {
        let field = this.settings;
        if (typeof field.min == "number" && num < field.min) {
            alert(warn + ' greater than or equal to ' + field.min + '.');
            return null;
        }

        if (typeof field.max == "number" && num > field.max) {
            alert(warn + ' less than or equal to ' + field.max + '.');
            return null;
        }
        return true;
    };


    defaultValue = (type: FieldTypes, options: any) => {
        let value;

        if (type.indexOf('unsigned ') == 0)
            type = type.substring(9) as FieldTypes;

        switch (type) {
            case 'radio':
            case 'select':
                value = options[0];
                break;
            case 'checkbox':
                value = false;
                break;
            case 'int':
            case 'integer':
            case 'float':
            case 'number':
                value = 0;
                break;
            default:
                value = '';
        }

        return value;
    };

}


