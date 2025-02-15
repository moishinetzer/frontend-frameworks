import {Plugins, HtmlPluginState} from '../types.js'
import {CloudinaryVideo, CloudinaryImage} from "@cloudinary/url-gen";

/**
 * Iterate through plugins and break in cases where the response is canceled. The
 * response is canceled if component is updated or unmounted
 * @param element {HTMLImageElement|HTMLVideoElement} Html Image or Video element
 * @param pluginCloudinaryAsset {CloudinaryImage|CloudinaryVideo} The Cloudinary asset generated by base
 * @param plugins {plugins} array of plugins passed in by the user
 * @param pluginState {htmlPluginState} Holds cleanup callbacks and event subscriptions
 */
export async function render(element: HTMLImageElement | HTMLVideoElement, pluginCloudinaryAsset: CloudinaryImage | CloudinaryVideo, plugins: Plugins, pluginState: HtmlPluginState) {
    if(plugins === undefined) return;
    for(let i = 0; i < plugins.length; i++){
        const response = await plugins[i](element, pluginCloudinaryAsset, pluginState);
        if(response === 'canceled'){
            break;
        }
    }
}
