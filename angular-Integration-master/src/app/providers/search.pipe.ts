import { Pipe, PipeTransform } from '@angular/core';
import { Hospital } from '../models/hospital';
import { utf8Encode } from '@angular/compiler/src/util';
@Pipe({
    name: 'filter'
})
export class SearchPipe implements PipeTransform {
    transform(items: Hospital[], search: string): Hospital[] {
        if (!items) return [];
        if (!search) return items;
        search = search.toLowerCase();
        return items.filter(it => {
            return it.email.toLowerCase().includes(search)||it.name.toLowerCase().includes(search)
            ||it.phone.toString().includes(search)||it.fax.toString().includes(search)
            ||it.hospId.toString().includes(search);
        });
    }
}
