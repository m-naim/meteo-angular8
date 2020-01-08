
import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'card'
})

export class CardPipe implements PipeTransform {
    dictonary: any = {
        '01d': 'orange',
        '01n': 'purple',
        '02d': 'orange',
        '02n': 'purple',
        '03d': 'green',
        '03n': 'green',
        '04d': 'green',
        '04n': 'green',
        '09d': 'blue',
        '09n': 'blue',
        '10d': 'blue',
        '10n': 'blue',
        '11d': 'blue',
        '11n': 'blue',
        '13d': 'grey',
        '13n': 'grey',
        '50d': 'grey',
        '50n': 'grey',
    };


    transform(value: string, reverse: boolean): string {
        return "card " + this.dictonary[value];
    }
}  
