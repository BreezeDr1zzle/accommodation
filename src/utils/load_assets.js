export const getAssetUrl = image => {
    return new URL(`../assets/img/${image}`,import.meta.url).href
}
