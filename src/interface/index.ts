export interface IMovie {
    id: number;
    medium_cover_image?: string;
    title: string;
    description_intro?: string;
    imgSrc: string | undefined;
    // 이 외에 필요한 속성들을 추가할 수 있음
}