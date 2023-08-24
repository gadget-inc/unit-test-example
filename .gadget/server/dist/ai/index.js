"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAIResponseStream = void 0;
const stream_1 = require("stream");
class OpenAIResponseStream extends stream_1.Readable {
    constructor(openAIIterable, options = {}) {
        super(options);
        this.openAIIterable = openAIIterable;
        this.reading = false;
        this.result = "";
    }
    async _read() {
        if (this.reading)
            return;
        this.reading = true;
        try {
            for await (const part of this.openAIIterable) {
                const content = part.choices?.[0]?.delta?.content ?? part.choices?.[0]?.text;
                if (content) {
                    this.result += content;
                    this.push(content);
                }
            }
            this.push(null);
            this.reading = false;
        }
        catch (err) {
            this.emit("error", err);
        }
    }
}
/**
 * Converts the result of calling openai with `stream: true` into a readable stream that
 * Fasitfy can respond with.
 *
 *
 * @param {AsyncIterable<any>} stream - An AsyncIterable containing OpenAI response parts.
 * @param {OpenAIResponseStreamOptions} options - Options for the OpenAI response stream.
 * @returns {Readable} A Readable stream with the transformed content from the input stream.
 *
 *
 * @example
 * // Using the openAIResponseStream function to convert an AsyncIterable into a Readable stream
 * const stream = await connections.openai.chat.completions.create({
 *   model: "gpt-3.5-turbo",
 *   messages: [{ role: "user", content: "Hello!" }],
 *   stream: true,
 * });
 * await reply.send(openAIResponseStream(stream, {
 *  onComplete: (content) => { console.log(content) }
 * }));
 *
 * @see {@link https://github.com/openai/openai-node} - OpenAI Node.js client library.
 * @see {@link https://docs.gadget.dev/guides/http-routes/route-configuration#sending-responses} - Sending responses in Gadget.
 */
function openAIResponseStream(openAIIterable, options = {}) {
    const stream = new OpenAIResponseStream(openAIIterable);
    stream.on("end", () => {
        if (options.onComplete)
            options.onComplete(stream.result);
    });
    return stream;
}
exports.openAIResponseStream = openAIResponseStream;
//# sourceMappingURL=index.js.map