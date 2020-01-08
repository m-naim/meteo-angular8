
import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'celsius'
})

export class CelsiusPipe implements PipeTransform {
    transform(value: number, reverse: boolean): number {
        return Math.round(value - 273.15);
    }
}  
