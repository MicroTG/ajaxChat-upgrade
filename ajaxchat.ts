// Typings for AjaxChat
export interface User {
    name: string;
    id: number;
    role: number;
    channel: number;
}

export interface ChatConfigLegacy {
    loginChannelID?: number;
    loginChannelName?: string;
    timerRate: number;
    ajaxURL: string;
    baseURL: string;
    regExpMediaUrl: string;
    startChatOnLoad: boolean;
    domIDs: DomIDs;
    settings: Settings;
    nonPersistentSettings: any[];
    bbCodeTags: string[];
    colorCodes: string[];
    emoticonCodes: string[];
    emoticonFiles: string[];
    soundFiles: {
        [key: string]: string
    };
    sessionName: string;
    cookieExpiration: number;
    cookiePath: string;
    cookieDomain?: string;
    cookieSecure?: string;
    chatBotName: string;
    chatBotID: number;
    allowUserMessageDelete: boolean;
    inactiveTimeout: number;
    privateChannelDiff: number;
    privateMessageDiff: number;
    showChannelMessages: boolean;
    messageTextMax: number;
    socketServerEnabled: boolean;
    socketServerHost: string;
    socketServerPort: number;
    socketServerChatID: number;
    debug: boolean;
    DOMbuffering: boolean;
    DOMbuffer: string;
    retryTimerDelay: number;
}

export interface Settings {
    [key: string]: any,
    bbCode: boolean,
    bbCodeImages: boolean,
    bbCodeColors: boolean,
    hyperLinks: boolean,
    lineBreaks: boolean,
    emoticons: boolean,
    autoFocus: boolean,
    autoScroll: boolean,
    maxMessages: number,
    wordWrap: boolean,
    maxWordLength: number,
    dateFormat: string,
    persistFontColor: boolean,
    fontColor?: any,
    audio: boolean,
    audioVolume: number,
    soundReceive: string,
    soundSend: string,
    soundEnter: string,
    soundLeave: string,
    soundChatBot: string,
    soundError: string,
    soundPrivate: string,
    blink: boolean,
    blinkInterval: number,
    blinkIntervalNumber: number
}


export interface DomIDs {
    chatList: string;
    onlineList: string;
    inputField: string;
    messageLengthCounter: string;
    channelSelection: string;
    styleSelection: string;
    emoticonsContainer: string;
    colorCodesContainer: string;
    flashInterfaceContainer: string;
    statusIcon: string;
}

export interface ChatConfig {
    urls: {
        ajax: string;
        base: string;
        regMediaURL: string;
    };
    socketServer: {
        enabled: boolean;
        host: string;
        port: number;
        chatID: number;
    };
    start: {
        channelID?: number;
        channelName?: string;
        onLoad: boolean;
    };
    componentSelectors: DomIDs;
    inactiveTimeout: number;
    timerRate: number;
    uxSettings: {
        bbCode: {
            enabled: boolean;
            images: boolean;
            colors: boolean;
            colorNames: string[];
            tags: string[];
        };
        sounds: {
            [key: string]: string;
            receive: string;
            send: string;
            enter: string;
            leave: string;
            bot: string;
            error: string;
            private: string;
        };
        notifications: {
            audio: {
                enabled: boolean;
                volume: number;
            };
            blink: {
                enabled: boolean;
                interval: number;
                number: number;
            }
        };
        emoticons: {
            enabled: boolean;
            codes: string[];
            files: string[];
        };
        autoFocus: boolean;
        autoScroll: boolean;
        linebreaks: boolean;
        dateFormat: string;
        fontColor?: string;
        persistFontColor: boolean;
        textMaxLength: number;
        messages: {
            allowDeletion: boolean;
            channelMessages: boolean;
            maximum: number;
            maxLength: number;
            wrap: boolean;
        }
    };
    cookies: {
        expiration: number;
        domain: string;
        path: string;
        secure: boolean;
    };
    diffs: {
        channel: number;
        message: number;
    }
}

