//
user_pref("view_source.editor.external", true);
user_pref("view_source.editor.path", "~/.local/bin/edit");

user_pref("full-screen-api.ignore-widgets", true);

user_pref("browser.tabs.closeWindowWithLastTab", false);

// Never ask to save logins and passwords for websites
user_pref("signon.rememberSignons", false);

// Always use private browsing mode
user_pref("browser.privatebrowsing.autostart", true);

// Never play an alert sound
user_pref("accessibility.typeaheadfind.enablesound", false);

// Ctrl+Tab cycles through tabs in recently used order
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

// disable alt key toggling the menu bar [RESTART]
user_pref("ui.key.menuAccessKey", 0);

// open bookmarks in a new tab [FF57+]
user_pref("browser.tabs.loadBookmarksInTabs", true);

// Pocket Account [FF46+]
user_pref("extensions.pocket.enabled", false);

// Firefox Accounts & Sync [FF60+] [RESTART]
user_pref("identity.fxaccounts.enabled", false);

// enable location bar using search
user_pref("keyword.enabled", true);
