export interface CatListResponse {
    images: Array<{
        url: string;
        id: string;
    }>;
}