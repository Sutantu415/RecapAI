
import OpenAI from "openai";
import { GPT_MODEL } from "../common/constants";
const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

async function messageGPT(systemConfig, userConfig) {
    // todo: implement validateConfigs
    // if (validateConfigs(systemConfig, userConfig)) {
    //     alert("Invalid configuration");
    //     return;
    // }

    try {
        const completion = await openai.chat.completions.create({
            model: GPT_MODEL,
            messages: [
                systemConfig,
                userConfig,
            ]
        });
        return completion.choices[0].message;
    } catch (error) {
        alert("An error occurred while processing the chat GPT request.");
        console.error(error);
    }
}

export {
    messageGPT,
}