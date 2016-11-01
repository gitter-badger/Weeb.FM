import { Component, Input } from '@angular/core';
import { TableManager } from '../../services';

@Component({
  selector: 'wilt-table',
  templateUrl: './wilt-table.component.html'
})
export class WiltTableComponent {
  @Input() name: string;
  @Input() header: string;
  @Input() options: {};
  @Input() columns: Array<any>;
  @Input() data: Array<any>;

  constructor(private Tables: TableManager) {}

  public ngOnInit() {
    this.Tables.initTable(name, options, [], data);
  }

  private getOptions() {
    return this.Tables.getOptions(this.name);
  }

  private setOptions(options: {}) {
    this.Tables.setOptions(this.name, options);
  }

  private getColumns() {
    return this.Tables.getColumns(this.name);
  }

  private setColumns(columns: {}) {
    this.Tables.setColumns(this.name, columns);
  }

  private getData() {
    return this.Tables.getData(this.name);
  }

  private setData(data: []) {
    this.Tables.setData(this.name, data);
  }

}
