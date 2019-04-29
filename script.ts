import { ChatConfig, ChatConfigLegacy, DomIDs, Settings, User } from "./ajaxchat";

export class AjaxChat {
    users: User[] = [];
    lastID: number = 0;
    localID: number = 0;
    lang: string;
    config: ChatConfig;
    origConfig: Settings;
    styleSheet: string = "prosilver";
    paths: {
        emoticons: string,
        sounds: string,
        flash: string
    };
    sounds: {[key: string]: HTMLAudioElement};

    constructor(
        config: ChatConfigLegacy,
        lang: string,
        initSettings: boolean,
        initStyle: boolean,
        initialize: boolean,
        initializeFunction: () => void,
        finalizeFunction: () => void
    ) {
        this.lang = lang;
        this.config = this.mapConfig(config);
        // @ts-ignore
        this.origConfig = ajaxChat.settings;
        this.paths = {
            emoticons: this.config.urls.base+'img/emoticons',
            sounds: this.config.urls.base+'sounds/',
            flash: this.config.urls.base+'flash/'
        };
        if (initSettings) this.initSettings();
        if (initStyle) this.initStyle();
        this.initialize = initializeFunction;
        this.finalize = finalizeFunction;
        this.sounds = {};
    }

    private mapConfig(config: ChatConfigLegacy) {
        const outConfig: ChatConfig = {
            timerRate: config.timerRate,
            inactiveTimeout: config.inactiveTimeout,
            start: {
                channelID: config.loginChannelID,
                channelName: config.loginChannelName,
                onLoad: config.startChatOnLoad
            },
            urls: {
                ajax: config.ajaxURL,
                base: config.baseURL,
                regMediaURL: config.regExpMediaUrl
            },
            socketServer: {
                enabled: config.socketServerEnabled,
                host: config.socketServerHost,
                port: config.socketServerPort,
                chatID: config.socketServerChatID
            },
            componentSelectors: config.domIDs,
            uxSettings: {
                bbCode: {
                    enabled: config.settings.bbCode,
                    images: config.settings.bbCodeImages,
                    colors: config.settings.bbCodeColors,
                    colorNames: config.colorCodes,
                    tags: config.bbCodeTags
                },
                sounds: {
                    receive: config.settings.soundReceive,
                    send: config.settings.soundSend,
                    enter: config.settings.soundEnter,
                    leave: config.settings.soundLeave,
                    bot: config.settings.soundChatBot,
                    error: config.settings.soundError,
                    private: config.settings.soundPrivate
                },
                notifications: {
                    audio: {
                        enabled: config.settings.audio,
                        volume: config.settings.audioVolume
                    },
                    blink: {
                        enabled: config.settings.blink,
                        interval: config.settings.blinkInterval,
                        number: config.settings.blinkIntervalNumber
                    }
                },
                emoticons: {
                    enabled: config.settings.emoticons,
                    codes: config.emoticonCodes,
                    files: config.emoticonFiles
                },
                autoFocus: config.settings.autoFocus,
                autoScroll: config.settings.autoScroll,
                messages: {
                    allowDeletion: config.allowUserMessageDelete,
                    channelMessages: config.showChannelMessages,
                    maximum: config.settings.maxMessages,
                    maxLength: config.settings.maxWordLength,
                    wrap: config.settings.wordWrap
                },
                textMaxLength: config.messageTextMax,
                linebreaks: config.settings.lineBreaks,
                dateFormat: config.settings.dateFormat,
                fontColor: config.settings.fontColor,
                persistFontColor: config.settings.persistFontColor,
            },
            cookies: {
                expiration: config.cookieExpiration,
                domain: config.cookieDomain || "",
                path: config.cookiePath,
                secure: !!config.cookieSecure
            },
            diffs: {
                channel: config.privateChannelDiff,
                message: config.privateMessageDiff
            }
        }
        return outConfig;
    }

    initialize() {
    }

    finalize() {

    }

    initStyle() {

    }

    initSettings() {
        if (localStorage["chatSettings"]) {
            Object.assign(this.config.uxSettings, JSON.parse(localStorage["chatSettings"]));
        }
    }

    saveSettings() {
        localStorage["chatSettings"] = JSON.stringify(this.config);
    }

    loadSounds() {
        for (let key in this.config.uxSettings.sounds) {
            this.sounds[key] = new Audio(this.config.uxSettings.sounds[key]);
        }
    }

    /* Page Event Handlers */
    
    onUnload(): void {

    }

    
}

export class ChatConnection {
    
}