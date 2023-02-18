export function normalize(first: string, second: number): string;

export function normalize(first: number, second: string): string;

export function normalize(first: string|number, second: string|number): string {
    if (typeof first === "number"){
        return second + " " + first.toString();
    }
    return first.toString() + " " + second.toString();
}