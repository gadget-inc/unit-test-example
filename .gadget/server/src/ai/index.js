"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "openAIResponseStream", {
    enumerable: true,
    get: ()=>openAIResponseStream
});
function _stream() {
    const data = require("stream");
    _stream = function() {
        return data;
    };
    return data;
}
class OpenAIResponseStream extends _stream().Readable {
    openAIIterable;
    reading;
    result;
    constructor(openAIIterable, options = {}){
        super(options);
        this.openAIIterable = openAIIterable;
        this.reading = false;
        this.result = "";
    }
    async _read() {
        if (this.reading) return;
        this.reading = true;
        try {
            for await (const part of this.openAIIterable){
                const content = part.choices?.[0]?.delta?.content ?? part.choices?.[0]?.text;
                if (content) {
                    this.result += content;
                    this.push(content);
                }
            }
            this.push(null);
            this.reading = false;
        } catch (err) {
            this.emit("error", err);
        }
    }
}
function openAIResponseStream(openAIIterable, options = {}) {
    const stream = new OpenAIResponseStream(openAIIterable);
    stream.on("end", ()=>{
        if (options.onComplete) options.onComplete(stream.result);
    });
    return stream;
}
