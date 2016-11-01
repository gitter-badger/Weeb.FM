import { Injectable } from '@angular/core';

@Injectable()
export class TableManager {

  private tables: {} = {};

  constructor() {}

  public registerTable(name: string) {
    this.tables[name] = {
      'name': name,
      'options': {},
      'columns': [],
      'data': [],
    };
  }

  public setOptions(table: string, options: {}) {
    this.tables[table].options = options;
  }

  public getOptions(table: string) {
    return this.tables[table].options;
  }

  public setColumns(table: string, columns: Array<any>) {
    this.tables[table].columns = columns;
  }

  public getColumns(table: string) {
    return this.tables[table].columns;
  }

  public setData(table: string, data: Array<any>) {
    this.tables[table].data = data;
  }

  public getData(table: string) {
    return this.tables[table].data;
  }

  public initTable(name: string, options: {},
                   columns: Array<any>, data: Array<any>)
  {
    this.registerTable(name);
    this.setOptions(name, options);
    this.setColumns(name, columns);
    this.setData(name, data);
  }

}
