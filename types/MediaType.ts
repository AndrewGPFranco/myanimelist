export enum MediaType {
    MANGA,
    ANIME
}

function getMediaType(media: MediaType): string {
    switch (media) {
        case MediaType.ANIME:
            return "Anime";
        case MediaType.MANGA:
            return "Manga";
        default:
            return "Mídia desconhecida";
    }
}