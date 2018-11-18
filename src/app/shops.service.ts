export class ShopsService {
  size:number;
  eventNumber:number;
  shops = [
    { text: 'Продуктовый №1', coords: [53.9224118, 27.5686268], adress: 'Минск, ул.Богдановича 64', timeWork: '9.00 - 23.00', id: '1',
      goods: [
        {name: 'мясо', description: ' Cкелетная поперечно-полосатая мускулатура животного с прилегающими ' +
            'к ней жировой и соединительной тканями', prace: ' 9,0 руб.'},
        {name: 'яйцо', description: ' Яйцо состоит из яичного белка и желтка. Желток содержит белки, а также жиры и холестерин.',
          prace: ' 2,0 руб.'},
        {name: 'хлеб', description: ' пищевой продукт, получаемый путём выпечки, паровой обработки или жарки теста, состоящего,' +
            ' как минимум, из муки и воды.',
          prace: ' 1,0 руб.'},
      ]
    },
    { text: 'Marko', coords: [53.92826437, 27.64394709], adress: 'Минск, ул. Франциска Скорины 2', timeWork: '10.00 - 23.00', id: '2',
      goods: [
        {name: 'сапоги женские', description: ' размеры 37', prace: ' 50 руб.'},
        {name: 'сапоги мужские', description: ' размер 50', prace: ' 70 руб.'},
        {name: 'тапочки', description: ' размеры ', prace: ' 5 руб.'},
      ]
    },
    { text: 'Корона "техно"', coords: [53.9059574, 27.4353259], adress: 'Лобанка 2', timeWork: '11.00 - 24.00', id: '3',
      goods: [
        {name: 'Смартфон', description: ' Apple', prace: ' ---'},
        {name: 'Флэшка', description: ' 1 тб.', prace:  ' 200руб.'},
        {name: 'ноутбук', description: ' Красный', prace: ' 1000 руб.'},
      ]
    },
  ];
 public setSize(size) {
  this.size = size;
  console.log(this.size);
  }


}
