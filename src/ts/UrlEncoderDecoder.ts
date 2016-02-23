class UrlEncoderDecoder {
    public static decodeUrl(): Object {
        var hash: string = window.location.hash.substr(1);

        if (hash.length > 0) {
            try {
                return JSON.parse(window.atob(hash));
            }
            catch(e) {
                console.log('Bad hash: ' + hash);
                return null;
            }
        }

        return null;
    }

    public static encodeUrl(obj: Object): string {
        return window.btoa(JSON.stringify(obj));
    }
}