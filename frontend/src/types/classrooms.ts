export type ClassroomData = {
    id: string;
    name: string;
    floor: number;
    building: '850' | '851'; // 850, 851
    zone: string; // zona norte, poniente, sur, oriente, química, física, geo
    capacity: number;
    likes: number;
    dislikes: number;
    inside_image: string;
    outside_image: string;
    reviews: string[];
};