import type { ClassroomData } from "../types/classrooms";

export function search(items: ClassroomData[], query: string, searchParam: string[]) {
    return items.filter((item) => {
        return searchParam.some((newItem) => {
            const value = item[newItem as keyof ClassroomData];
                return (
                    value
                        .toString()
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
                );
        });
    });
}
