"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AjaxChat {
    constructor(config, lang, initSettings, initStyle, initialize, initializeFunction, finalizeFunctio) {
        this.users = [];
        this.lastID = 0;
        this.localID = 0;
        this.lang = lang;
        this.config = this.mapConfig(config);
        this.paths = {
            emoticons: this.config.urls.base + 'img/emoticons',
            sounds: this.config.urls.base + 'sounds/',
            flash: this.config.urls.base + 'flash/'
        };
    }
    mapConfig(config) {
        const outConfig = {
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
        };
        return outConfig;
    }
    initialize() {
    }
}
exports.AjaxChat = AjaxChat;
//# sourceMappingURL=script.js.map