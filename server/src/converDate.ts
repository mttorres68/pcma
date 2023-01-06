import moment from 'moment'
moment.locale('pt-br');

export function convertDate(dateTime:any){
    const dataCon = moment(dateTime)

    return dataCon.format('LLLL')
}