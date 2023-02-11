export const getCookie = (cookieName) => {
    var name = cookieName + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

export const setCookie = (cookieName, cookieBody) => {
    var bodyJson = JSON.stringify(cookieBody);
    var d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    var expires = 'expires='+ d.toUTCString();
    document.cookie = cookieName + '=' + bodyJson + ';' + expires + ';path=/';
}

export const deleteCookie = (name) => {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }