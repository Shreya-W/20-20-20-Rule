
browser.alarms.create('', { periodInMinutes: 20 });

browser.alarms.onAlarm.addListener((alarm) => {
        browser.notifications.create('eye', {
            type: 'basic',
            iconUrl: browser.extension.getURL('eye.jpg'),
            title: '20-20-20 Rule',
            message: 'Take a 20 seconds break. Look at an object that is about 20 feet away.'
        });
    });
