// @flow strict

export type CommandType = {|
    name: string, 
    url: string, 
    searchurl?: string,
|};

export type CommandDataTableType = {|
    name: string, 
    url: string, 
    command: string
|};

export type ColumnDataTableType = {| 
    data: string, 
    title: string 
|};

export const COMMANDS: {[string] : CommandType} = {
    fb: {
        name: "Facebook",
        url: "https://facebook.com/",
        searchurl: "https://www.facebook.com/search/top/?q="
    },
    m:{
        name: "Messenger",
        url: "https://www.messenger.com/"
    },
    email: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/"
    },
    drive: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/0/search?q="
    },
    gdrive: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/0/search?q="
    },
    gdocs: {
        name: "Google Docs",
        url: "https://docs.google.com/document/u/0",
        searchurl: "https://docs.google.com/document/u/0?q="
    },
    gdoc: {
        name: "Google Docs",
        url: "https://docs.google.com/document/u/0",
        searchurl: "https://docs.google.com/document/u/0?q="
    },
    youtube: {
        name: "YouTube",
        url: "https://youtube.com/",
        searchurl: "https://www.youtube.com/results?search_query="
    },
    github: {
        name: "GitHub",
        url: "https://github.com/",
        searchurl: "https://www.github.com/search?q="
    },
    reddit: {
        name: "Reddit",
        url: "https://reddit.com/",
        searchurl: "https://www.reddit.com/search?q="
    },
    linkedin: {
        name: "Linkedin",
        url: "https://linkedin.com/",
    },
    ig: {
        name: "Instagram",
        url: "https://instagram.com/",
        searchurl: "https://instagram.com/"
    },
    g: {
        name: "Startpage",
        url: "https://startpage.com/",
        searchurl: "https://www.startpage.com/sp/search?query="
    },
    cal: {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/r"
    },
    wiki: {
        name: "Wikipedia",
        url: "https://en.wikipedia.org",
        searchurl: "https://en.wikipedia.org/wiki/"
    },
    '5e': {
        name: "5e Tools",
        url: "https://5e.tools/",
        searchurl: "https://5e.tools/"
    },
    wut: {
        name: "wut",
        url: "https://www.perplexity.ai/",
        searchurl: "https://www.perplexity.ai/search/new?q="
    },
    self: {
        name: "djtran.dev",
        url: "https://djtran.dev/",
    },
    me: {
        name: "djtran.dev",
        url: "https://djtran.dev/",
    },
    DEFAULT: {
        name: "Default - Startpage",
        url: "https://startpage.com/",
        searchurl: "https://www.startpage.com/sp/search?query="
    }
};
