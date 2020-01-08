
import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'icon'
})

export class IconPipe implements PipeTransform {
    dictonary: any = {
        '01d': 'B',
        '01n': 'C',
        '02d': 'H',
        '02n': 'I',
        '03d': 'N',
        '03n': 'N',
        '04d': 'Y',
        '04n': 'Y',
        '09d': 'R',
        '09n': 'R',
        '10d': 'Q',
        '10n': 'Q',
        '11d': 'O',
        '11n': 'O',
        '13d': 'W',
        '13n': 'W',
        '50d': 'M',
        '50n': 'M',
    };

    transform(value: string, reverse: boolean): number {
        return this.dictonary[value];
    }
}  
